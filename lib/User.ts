export default class User {
  id: string;
  username: string;
  password: string;
  email: string;
  // Other user-related properties as needed

  constructor(
    id: string,
    username: string,
    password: string,
    email: string /* Other properties */
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    // Initialize other properties
  }

  // Add any methods related to the user's profile here
}
