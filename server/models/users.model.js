const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Username cannot be blank']
    },
    username: {
        type: String,
        required: [true, 'Email cannot be blank']
    },
    password: {
        type: String,
        required: [true, 'Password cannot be blank']
    },
    email: {
        type: String,
        required: [true, 'email cannot be blank']
    },
    imageUrl: {
        type: String
    }
})

// userSchema.statics.findAndValidate = async function (username, password) {
//     const foundUser = await this.findOne({ username });
//     const isValid = await bcrypt.compare(password, foundUser.password);
//     return isValid ? foundUser : false;
// }
userSchema.statics.findAndValidate = async function (username, password) {
    const foundUser = await this.findOne({ username });
    if (foundUser !== null) {
        const isValid = await bcrypt.compare(password, foundUser.password);
        return isValid ? foundUser : false;
    } else {
        return false;
    }
}
userSchema.statics.findUser = async function (username) {
    const foundUser = await this.findOne({ username });
    return foundUser ? true : false;
}

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
})

const User = mongoose.model('User', userSchema)

module.exports = User;