import Post, { IPost } from "./postSchema";
import User, { IUser } from "./userSchema";

const connectionString = "mongodb://localhost:27017/my_database";

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Create a new user
const newUser: IUser = new User({
  email: "test@example.com",
  firstName: "John",
  lastName: "Doe",
  dob: new Date("2000-01-01"),
});

newUser.save().then((savedUser) => {
  console.log("User saved:", savedUser);

  // Create a new post associated with the user
  const newPost: IPost = new Post({
    userId: savedUser._id, // Use the user's _id field as the userId for the post
    content: "This is a sample post",
  });

  newPost.save().then((savedPost) => {
    console.log("Post saved:", savedPost);
  });
});
