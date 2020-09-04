import { Request, Response } from "express";
import { IUser } from "../../models/user.model";
import UserDal from '../user/dal'

class Shift {

    async createMany(req: Request, res: Response) {
        const users: Array<IUser> = await UserDal.find();
    }
}