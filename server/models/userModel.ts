import { Document, Schema, Model, model } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUserDocument extends Document {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
}

export interface IUser extends IUserDocument {
    matchPassword(enteredPassword: string): string;
}

export interface IUserModel extends Model<IUser> {}

const userSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
    },
);

userSchema.method('matchPassword', async function (this: IUser, enteredPassword: string): Promise<boolean> {
    return await bcrypt.compare(enteredPassword, this.password);
});

userSchema.pre('save', async function (this: IUser, next) {
    if (!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const User = model<IUser, IUserModel>('User', userSchema);

export default User;
