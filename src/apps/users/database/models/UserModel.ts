import { Schema, model } from 'mongoose';
import { User } from '../../domain/User';

const UserSchema = new Schema<User>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  bio: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = model('User', UserSchema);
export default UserModel;
