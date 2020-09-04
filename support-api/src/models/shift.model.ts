import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user.model';

export interface IShift extends Document {
  date: string;
  morning: IUser['_id'];
  evening: IUser['_id'];
}

const ShiftSchema: Schema = new Schema({
  date: { type: Date, required: true },
  morning: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  evening: { type: Schema.Types.ObjectId, required: true, ref: 'User' }
});

export default mongoose.model<IShift>('Shift', ShiftSchema);
