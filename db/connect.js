import mongoose from 'mongoose';

const connectDB = (URL) => {
  return mongoose.connect("mongodb+srv://<username>:<pass>@cluster0.04bmuta.mongodb.net/Jobs"  );
}

export default connectDB