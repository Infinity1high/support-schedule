import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
});

// Export the model and return your IUser interface
export default mongoose.model<IUser>('User', UserSchema);
