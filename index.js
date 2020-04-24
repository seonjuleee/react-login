const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');

const config = require('./config/key');

const { User } = require('./models/User');

// bodyParser는 클라이언트에서 오는 정보를 서버에서 분석해서 가져올 수 있게 해주는 것
// application/x-www-from-urlencoded
// 이렇게 된 데이터를 분석해서 가져올 수 있게 해주는 것
app.use(bodyParser.urlencoded({extended: true}));

// application/json
// 타입으로 된 것을 분석해서 가져올 수 있도록 해주는 것
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

// 간단한 라우터 만든 것
app.get('/', (req, res) => res.send('Hello World!'))

app.post('/register', (req, res) => {

    // 회원가입할 때 필요한 정보들을 client에서 가져오면
    // 그것들을 DB에 넣어준다.

    // User 모델 가져오기
    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({ // 200은 성공했다는 뜻
            success: true // 성공하면 success true로
        })
    })
})



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))