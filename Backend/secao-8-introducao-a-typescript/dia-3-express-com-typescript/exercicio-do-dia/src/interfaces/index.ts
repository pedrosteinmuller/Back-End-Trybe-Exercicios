export interface UserInfos {
  email: string;
  password: string;
};

export interface IUser extends UserInfos {
  name: string;
}

export interface User extends IUser {
  id: number;
}