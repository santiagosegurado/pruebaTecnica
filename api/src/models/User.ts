import { prop, getModelForClass } from "@typegoose/typegoose";

class User {
  @prop({ required: true })
  name: string;

  @prop({ required: true, unique: true, trim: true })
  username: string;

  @prop({ required: true, trim: true, unique: true })
  email: string;

  @prop({ required: true, minlength: 7 })
  password: string;
}

const UserModel = getModelForClass(User);

export default UserModel;
