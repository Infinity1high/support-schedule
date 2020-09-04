import ScheduleModel from "../../models/shedule.model";
import { IShift } from "../../models/shift.model";

class Schedule {
  create(shifts: Array<IShift>, dateStart: string) {
    return ScheduleModel.create({ shifts, dateStart });
  }
  find() {
    return ScheduleModel.find();
  }

  findUpcoming() {
    return ScheduleModel.find({
      dateStart: { $gte: new Date().toISOString() },
    });
  }
}

export default new Schedule();
