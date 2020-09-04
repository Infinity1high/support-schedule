import mongoose, { Schema, Document } from 'mongoose';
import { IShift } from './shift.model';

export interface ISchedule extends Document {
    dateStart: string;
    shifts: IShift[];
}

const ScheduleSchema: Schema = new Schema({
    dateStart: { type: Date, required: true },
    shifts: [{ type: Schema.Types.ObjectId, ref: 'Shift' }],
});

export default mongoose.model<ISchedule>('Schedule', ScheduleSchema);
