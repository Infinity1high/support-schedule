import { Request, Response } from "express";
import moment from "moment";
import { ISchedule } from "../../models/shedule.model";
import UserDal from "../user/dal";
import ShiftDal from "../shift/dal";
import ScheduleDal from "./dal";

export type ShiftArr = Array<{
  morning: string;
  evening: string;
  date: string;
}>;

const daysToAdd: { [key: number]: number } = {
  5: 3,
  6: 2,
};

function createSchedule(
  people: string[],
  date: string,
  occurencies: { [key: string]: number } = {},
  shiftArr: ShiftArr = [],
  peopleToExclude: string[] = []
): ShiftArr {
  const peopleAvailableForShift = people.filter(
    (it) => !peopleToExclude.includes(it)
  );
  const randomIndex = Math.floor(
    Math.random() * peopleAvailableForShift.length
  );
  const randomPerson = peopleAvailableForShift[randomIndex];
  occurencies[randomPerson] = occurencies[randomPerson]
    ? occurencies[randomPerson] + 1
    : 1;

  const randomIndex2 = Math.floor(
    Math.random() * (peopleAvailableForShift.length - 1)
  );
  const randomPerson2 = peopleAvailableForShift.filter(
    (it) => it !== randomPerson
  )[randomIndex2];
  occurencies[randomPerson2] = occurencies[randomPerson2]
    ? occurencies[randomPerson2] + 1
    : 1;

  shiftArr = [
    ...shiftArr,
    { morning: randomPerson, evening: randomPerson2, date },
  ];

  const availablePeople = people.filter((item) => occurencies[item] !== 2);

  if (!availablePeople.length) {
    return shiftArr;
  }
  const days = daysToAdd[moment(date).weekday()] || 1;

  return createSchedule(
    availablePeople,
    moment(date).add(days, "day").format(),
    occurencies,
    shiftArr,
    [randomPerson, randomPerson2]
  );
}

function createPerfectSchedule(people: string[], date: string) {
  const scheduleFor10Days = createSchedule(people, date);
  return scheduleFor10Days.length === 10
    ? scheduleFor10Days
    : createPerfectSchedule(people, date);
}

interface ScheduleType {
  create: (req: Request, res: Response) => any;
}

class Schedule implements ScheduleType {
  dal: any;
  constructor(dal: any) {
    this.dal = dal;
  }

  create = async (req: Request, res: Response) => {
    const users: string[] = (await UserDal.find()).map((it) => it._id);
    const prevSchedule = await this.dal.find();
    const nextMonday = !prevSchedule.length
      ? moment().startOf("isoWeek").add(1, "week").format()
      : moment(prevSchedule[prevSchedule.length - 1].dateStart)
          .add(2, "week")
          .format();
    const createdShiftObj = createPerfectSchedule(users, nextMonday);
    const shifts = await ShiftDal.createMany(createdShiftObj);
    return this.dal
      .create(shifts, nextMonday)
      .then((item: ISchedule) => res.send(item));
  };

  find = async (req: Request, res: Response) => {
    return this.dal.find().then((item: Array<ISchedule>) => {
      console.log(req);
      res.setHeader("Access-Control-Allow-Origin", "*");
      return res.send(item);
    });
  };
}

export default new Schedule(ScheduleDal);
