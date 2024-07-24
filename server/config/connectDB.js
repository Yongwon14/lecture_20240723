const mongoose = require('mongoose')

async function connectDB() {
    // 몽구스라는 라이브러리를 통해 우리가 만든 몽고DB와 연결할거임
    await mongoose.connect(process.env.MONGODB_URI)
    // const connection = mongoose.connection
}

module.exports = connectDB