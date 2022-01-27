import dotenv from 'dotenv';
import users from './data/users';
import products from './data/products';
import User from './models/userModel';
import Product from './models/productModel';
import Order from './models/orderModel';
import connectDB from './config/db';
import { green, red } from 'colors';

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser };
        });

        await Product.insertMany(sampleProducts);

        console.log(green('Data Imported!').inverse);
        process.exit();
    } catch (error) {
        console.error(red(`${error}`).inverse);
        process.exit(1);
    }
};

const destroytData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log(red('Data Destroyed!').inverse);
        process.exit();
    } catch (error) {
        console.error(red(`${error}`).inverse);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroytData();
} else {
    importData();
}
