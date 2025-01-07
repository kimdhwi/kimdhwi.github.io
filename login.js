// Node.js 예시 (express.js 사용)
const crypto = require('crypto');

// 랜덤한 state 값을 생성하는 함수
function generateState() {
  return crypto.randomBytes(20).toString('hex'); // 20바이트 랜덤 문자열 생성
}

// 로그인 URL 생성
const state = generateState();
const loginUrl = `https://nid.naver.com/oauth2.0/authorize?client_id=TICibqjysaSLJr8S4yhO&response_type=code&redirect_uri=http://localhost:8080/naver/callback&state=${state}`;
