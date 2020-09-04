import { CreateQuery } from "mongoose";

import UserModel, { IUser } from "../../models/user.model";

class User {
  findOne(id: string): Promise<IUser> {
    return UserModel.findOne({ _id: id }).then((item) => item);
  }

  find() {
    return UserModel.find().then((item) => item);
  }
}

export default new User();
