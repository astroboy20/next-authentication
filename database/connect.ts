import mongoose, { Mongoose } from 'mongoose';

const connectMongoose = async () => {
  if (!process.env.MONGO_URL) {
    console.error('MONGO_URL environment variable not set');
    return false;
  }

  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URL || "", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as import("mongodb").MongoClientOptions);

    if (connection.readyState === 1) {
      return Promise.resolve(true)
    }
  } catch (error) {
    return Promise.reject(error)
  }
};

export default connectMongoose;
