import { Request, Response } from 'express';
import { IUser, UserInfos } from '../interfaces';
import UserService from '../services/UserService';

export default class UserController {
  constructor(private userService = new UserService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();
    res.status(200).json(users);
  }
  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, data, error } = await this.userService.getById(Number(id));

    return error
      ? res.status(status).json({ error })
      : res.status(status).json(data);
  }
  public create = async (req: Request, res: Response) => {
    const user = req.body as IUser;
    const { status, data, error } = await this.userService.create(user);

    return error
      ? res.status(status).json({ error })
      : res.status(status).json(data);
  }
  public update = async (req: Request, res: Response) => {
    const { authorization: token } = req.headers;

    if (!token) {
      return res.status(401).json({ error: { message: 'Token not found' } });
    }
    const { id } = req.params;
    const user = req.body as IUser;

    const { status, data, error } = await this.userService.update(Number(id), user, token as string,
    );
    return error
      ? res.status(status).json({ error })
      : res.status(status).json(data);
  }
  public remove = async (req: Request, res: Response) => {
    const { authorization: token } = req.headers;

    if (!token) {
      return res.status(401).json({ error: { message: 'Token not found' } });
    }
    const { id } = req.params;
    const { status, data, error } = await this.userService.remove(
      Number(id),
      token as string,
    );

    return error
      ? res.status(status).json({ error })
      : res.status(status).json(data);
  }
  public login = async (req: Request, res: Response) => {
    const userCredentials = req.body as UserInfos;
    const { status, data, error } = await this.userService.login(userCredentials);

    return error
      ? res.status(status).json({ error })
      : res.status(status).json(data);
  }
}