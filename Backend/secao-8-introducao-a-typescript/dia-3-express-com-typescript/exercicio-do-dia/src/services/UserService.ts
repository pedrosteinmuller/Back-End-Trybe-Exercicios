import jwt from 'jsonwebtoken';
import { UserInfos, IUser } from '../interfaces';
import UserModel from '../models/UserModel';
import { secret, config } from '../middlewares/jwtConfig';
import IToken from '../interfaces/IToken';
import connection from '../models/connection';

export default class UserService {
  public model: UserModel;
  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<IUser[]>{
    const data = await this.model.getAll();
    return data;
  }
  public async getById(id: number) {
    const data = await this.model.getById(id);
    if (data === null) {
      return { status: 404, error: { message: 'User not found'}}
    }
    return { status: 200, data }
  }
  public async create(user: IUser){
    const verifyUser = await this.model.getByEmail(user.email);
    if (verifyUser) {
      return { status: 400, error: { message: 'User already exists'}}
    }
    const payload = await this.model.create(user);
    const token = jwt.sign({ payload }, secret, config);
    const data = { token, ...payload };
    return { status: 201, data }
  }
  public async update(id: number, user: IUser, token: string) {
    const { payload } = jwt.verify(token, secret) as IToken;
    if (payload.id !== id) {
      return { status: 403, error: { message: 'You are not allowed to take this action' } };
    }
    const userExists = await this.model.getById(id);
    if (!userExists) {
      return { status: 404, error: { message: 'User already exists' } };
    }
  
    const data = await this.model.update(id, user);
  
    if (data === null) {
      return { status: 404, error: { message: 'User already exists' } };
    }
    return { status: 200, data };
  }
  public async remove(id: number, token: string) {
    const { payload } = jwt.verify(token, secret) as IToken;
    if (payload.id !== id) {
      return { status: 403, error: { message: 'You are not allowed to take this action' } };
    }
    const data = await this.model.remove(id);
  
    if (data === null) {
      return { status: 404, error: { message: 'User not found' } };
    }
    return { status: 200, data };
  }
  public async login(userCredentials: UserInfos) {
    const data = await this.model.getByEmail(userCredentials.email);
  
    if (data === null || data.password !== userCredentials.password) {
      return { status: 403, error: { message: 'Invalid email or password' } };
    }
    return { status: 200, data: { token: 'fake token' } };
  }
}