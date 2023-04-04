import mongoose, { Mongoose } from 'mongoose';
const MONGO_URL = "mongodb+srv://tolulopeakinkunmi7:october19@next-auth.okqr2qu.mongodb.net/?retryWrites=true&w=majority"
const connectMongoose = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URL);

    if(connection.readyState == 1){
        return Promise.resolve(true)
    }
} catch (error) {
    return Promise.reject(error)
}
};

export default connectMongoose;

