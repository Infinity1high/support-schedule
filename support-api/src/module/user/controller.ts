import { Request, Response } from "express";
import { IUser } from "../../models/user.model";
import UserDal from "./dal";

class User {
  dal: any;
  constructor(dal: any) {
    this.dal = dal;
  }

  findOne(req: Request, res: Response) {
    return this.dal.findOne(req.body.id).then((item: IUser) => res.send(item));
  }

  find(req: Request, res: Response) {
    return this.dal.find().then((item: IUser) => res.send(item));
  }
}

export default new User(UserDal);
