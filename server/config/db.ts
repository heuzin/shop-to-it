import mongoose, { ConnectOptions } from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            process.env.MONGO_URI as string,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            } as ConnectOptions,
        );

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${(error as Error).message}`);
        process.exit(1);
    }
};

export default connectDB;
