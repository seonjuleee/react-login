## Express
### 기본 라우팅
라우팅 : 특정 엔드포인트에 대한 클라이언트 요청에 애플리케이션이 응답하는 방법을 결정하는 것

1. 라우팅 정의에는 다음과 같은 구조가 필요하다.
app.METHOD(PATH, HANDLER)
    - app: express의 인스턴스
    - METHOD: HTTP의 요청 메소드
        - get, post, put, delete 등
    - PATH: 서버에서의 경로
        - 요청 메소드와의 조합을 통해, 요청이 이루어질 수 있는 엔드포인트 정의
        - 라우트 경로는 문자열, 문자열 패턴 또는 정규식
    - HANDLER: 라우트가 일치할 때 실행되는 함수
        - 미들웨어와 비슷하게 작동하는 여러 콜백 함수를 제공하여 요청 처리 가능(여기서는 next() 이용하여 라우트 콜백 우회 가능)
        - 함수나 함수 배열의 형태 또는 둘을 조합한 형태
예)
```
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
```
