import mongoose, { ConnectOptions } from 'mongoose';
import { cyan, red } from 'colors';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            process.env.MONGO_URI as string,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            } as ConnectOptions,
        );

        console.log(cyan(`MongoDB Connected: ${conn.connection.host}`).underline);
    } catch (error) {
        console.error(red(`Error: ${(error as Error).message}`).underline.bold);
        process.exit(1);
    }
};

export default connectDB;
