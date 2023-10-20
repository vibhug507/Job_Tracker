import mongoose from 'mongoose';

const connectDB = (URL) => {
  return mongoose.connect("mongodb+srv://vibhugarg507:kalevinu@cluster0.04bmuta.mongodb.net/Jobs"  );
}

export default connectDB