// userSchema.ts
import { Document, model, Schema } from 'mongoose';


export interface IUser extends Document {
  email: string;
  firstName: string;
  lastName: string;
  dob: Date;
}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
});

const User = model<IUser>('User', userSchema);

export default User;
