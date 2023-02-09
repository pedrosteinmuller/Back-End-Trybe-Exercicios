import { Pool, ResultSetHeader } from 'mysql2/promise';
// import connection from "./connection";
 import { IUser, User } from '../interfaces/';

export default class UserModel {
    public connection: Pool;
    constructor(connection: Pool){
        this.connection = connection;
    }
    public async getAll(): Promise<IUser[]>{
        const [rows] = await this.connection.execute('SELECT * FROM TypeScriptExpress.Users');
        return rows as IUser[];
    }
    public async getById(id: number): Promise<User | null> {
        const [data] = await this.connection.execute('SELECT * FROM TypeScriptExpress.Users WHERE id = ?', [id]);
        const [user] = data as User[];
        return user || null
    }
    public async getByEmail(email: string): Promise<User | null> {
        const [data] = await this.connection.execute('SELECT * FROM TypeScriptExpress.Users WHERE email = ?', [email]);
        const [user] = data as User[];
        return user || null
    }
    public async create(user: IUser): Promise<User> {
        const { name, email, password } = user;
        const [data] = await this.connection.execute<ResultSetHeader>('INSERT INTO Users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
        const { insertId : id } = data;
        const newUser: User = { id, name, email, password };
        return newUser;
    }
    public async update(id: number, user: IUser): Promise<User> {
        const { name, email, password } = user;
        await this.connection.execute('UPDATE Users SET name = ?, email = ?, password = ?, WHERE id = ?', [name, email, password, id]);
        const editedUser: User = { id, name, email, password };
        return editedUser;
    }
    public async remove(id: number): Promise<User | null> {
        const deleteUser = await this.getById(id);
        if (!deleteUser) return null;
        await this.connection.execute('DELETE FROM Users WHERE id = ?', [id]);
        return deleteUser;
    }
}