const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // 스페이스 없애준다
        unique: 1 // 똑같은 이메일 쓰지 못하게
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    // 관리자
    role: {
        type: Number, // 1이면 관리자, 0이면 일반
        default: 0
    },
    image: String,
    // 나중에 유효성 검사 가능
    token: {
        type: String
    },
    // 토큰이 사용되는 기간
    tokenExp: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }