import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "User must provide a username"],
        // unique: true
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('User', UserSchema);

export default User