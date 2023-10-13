// postSchema.ts
import { Document, model, Schema, Types } from 'mongoose';
import { IUser } from './userSchema'; 

export interface IPost extends Document {
  user: IUser['_id'];
  content: string;
  createdAt: Date;
}

const postSchema = new Schema<IPost>({
  user: {
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = model<IPost>('Post', postSchema);

export default Post;
