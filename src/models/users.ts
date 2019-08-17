// imported mongoose from the connection folder
import mongoose from '../connection/mongo';



export interface IUser extends mongoose.Document {
  firstName?: string;
  lastName?: string;
  email: string;
  password?: string;
}

const userSchema: mongoose.Schema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    maxlength: [25, 'User first name must have less or equal to 25 characters'],
    required: [true, 'User should have a firstnmae']
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: [25, 'User last name must have less or equal to 25 characters'],
    required: [true, 'User should have a lastname']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'User should have email'],
  },
  password: {
    type: String,
    required: [true, 'User should have a password']
  },
  register_date: {
    type: Date,
default: Date.now
  }
});

export default mongoose.model<IUser>('Users', userSchema);
