import { TRoutesInput } from "../types/routes";
import UserController from "../module/user/controller";
import ScheduleController from "../module/schedule/controller";
//import ShiftController from '../module/shift/controller';

export default ({ app }: TRoutesInput) => {
  app.get("/api/scheduleCreated", ScheduleController.create);

  app.get("/api/schedule", ScheduleController.find);
};
