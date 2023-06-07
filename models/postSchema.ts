import { Document, model, Schema, Types } from "mongoose";

export interface IPost extends Document {
  userId: Types.ObjectId;
  content: string;
  createdAt: Date;
}

const postSchema = new Schema<IPost>({
  userId: {
    type: Types.ObjectId,
    ref: "User", // This should match the name of the 'User' model in userSchema.ts
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

const Post = model<IPost>("Post", postSchema);

export default Post;
