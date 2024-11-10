const express = require('express');
//node.js의 프레임워크인 express모듈 불러오기
//require함수롤 특정 모듈을 가져올 수 있다

const path = require("path");
//파일 시스템의 경로를 다루기 위해 사용되는 path모듈 불러오기

const app = express();
//express 함수를 호출해서 express 애플리케이션 객체 생성하고 app 상수에 할당
//이 객체가 웹 애플리케이션을 구성하고 실행하는데 필요한 모든 기능을 제공한다

const PORT = 3000;
//포트 번호 할당

app.use(express.static(path.join(__dirname, "..")));
// use메서드를 사용해서 Express 애플리케이션에 미들웨어 추가하기
// use : 정적 파일을 제공하는 미들웨어
// static : 정적파일에 접근할 수 있도록 server.js파일의 상위 폴더 지정
// path모듈이 가진 join메서드를 사용해 경로 나타내기

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", 'index.html'));
});

app.listen(PORT, () => {
  console.log('START SERVER')
})