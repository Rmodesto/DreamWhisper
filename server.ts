//server.ts

import mongoose from 'mongoose';

const connectionString = 'mongodb://localhost:27017/my_database';

mongoose.connect(connectionString)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

