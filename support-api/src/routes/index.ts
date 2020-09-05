import { TRoutesInput } from "../types/routes";
import UserController from "../module/user/controller";
import ScheduleController from "../module/schedule/controller";
//import ShiftController from '../module/shift/controller';

export default ({ app }: TRoutesInput) => {
  app.post("/api/schedule", ScheduleController.create);

  app.get("/api/schedule", ScheduleController.find);
  app.get("/api/users", UserController.find)
};
