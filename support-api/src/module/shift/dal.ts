import { CreateQuery } from "mongoose";
import ShiftModel, { IShift } from "../../models/shift.model";
import  {ShiftArr} from '../../module/schedule/controller'


class Shift {
  findByDate(date: string) {
    return ShiftModel.find({ date }).then((item) => item);
  }

  find() {
    return ShiftModel.find().then((item) => item);
  }

  create({ date, morning, evening }: CreateQuery<IShift>) {
    return ShiftModel.create({
      date,
      morning,
      evening,
    })
      .then((data: IShift) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }

  findByUser(id: string) {
    return ShiftModel.find({ $or: [{ morning: id }, { evening: id }] }).then(
      (item) => item
    );
  }

  createMany(shifts: ShiftArr) {
      console.log(shifts, 'SHIFTS!!!!')
    return ShiftModel.insertMany(shifts).then((shifts: Array<IShift>) => shifts);
  }
}

export default new Shift();
