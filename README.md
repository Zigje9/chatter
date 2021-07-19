
### 프로젝트 소개 

[chatter 사용해보기 👈](http://www.chatter.kro.kr)

#### 주제 :`socket.io`를 활용한 Public, Private 채팅 서비스

#### Contributors

|           박제구[@Zigje9](https://github.com/Zigje9)<br/>Front End          | 이재윤[@ag502](https://github.com/ag502)<br/>Front End  |
| :----------------------------------------------------------: | :---------------------------------------------: |


#### 개발 기간 : 약 2개월

---

### 프로젝트 기능


#### 회원가입 & 로그인
- 회원가입 : 로컬 회원가입
<br/>

![](https://i.imgur.com/4amre8m.gif)

<br/>
<br/>
<br/>


- 로그인
<br/>

![](https://i.imgur.com/unyri8M.gif)

#### 유저들의 실시간 접속 여부 확인
- User On 
<br/>

![](https://i.imgur.com/Y96GfTP.gif)

<br/>
<br/>
<br/>


- User Off
<br/>

![](https://i.imgur.com/D1J2Bqn.gif)

#### Public Room
- 채팅하기 : 새로운 채팅이 올라오면 자동으로 스크롤 최하단 변경후 확인
<br/>

![](https://i.imgur.com/aIDTsOj.gif)

<br/>
<br/>
<br/>


- 채팅 시간 확인 : 현재 접속중인 유저수와 채팅의 정확한 시간 파악
<br/>

![](https://i.imgur.com/pzOvab2.gif)


#### Private Room
- 새로운 방 생성 : 대화를 요청하면 1:1 private room 생성
<br/>

![](https://i.imgur.com/0lbyszu.gif)

<br/>
<br/>
<br/>

- 방 정보 확인 : 상대방의 아이디와 접속여부의 정보 확인
<br/>

![](https://i.imgur.com/ByCGdDI.gif)

<br/>
<br/>
<br/>

- 채팅하기 : Private room 에 접속해 특정 유저와 1:1 채팅
<br/>

![](https://i.imgur.com/cIHlYqg.gif)


#### Toast 메세지
- 알림 : 특정 유저로 온 메세지를 확인
<br/>

![](https://i.imgur.com/EjLGCou.gif)



---
### 기술 스택
> Common

| <img width= 50 src="https://i.imgur.com/M9gfdAg.png"> | <img width= 150 src="https://i.imgur.com/l8P6UOE.png"> | 
 | :---------------------------------------------------: | :----------------------------------------------------------: |
|                          JavaScript                          |                          socket io                          |


> Front-end

| <img width= 50 src="https://i.imgur.com/bWvsqCX.png"> | <img width= 50 src="https://i.imgur.com/Abj3Xfl.png"> | <img width= 50 src="https://i.imgur.com/eNN4Qvf.pngg"> | <img width= 100 src="https://i.imgur.com/LsjIZl9.png"> |
| :----------------------------------------------------------: | :---------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|                          React                          |                          Styled-components                          |                            Redux                             | Redux-Saga |


> Back-end

| <img width= 100 src="https://i.imgur.com/3pAD781.png"> | <img width= 100 src="https://i.imgur.com/d2v7MTw.png"> | 
 | :---------------------------------------------------: | :----------------------------------------------------------: |
|                          Express                          |                          MySQL                          |


> ETC

| <img width= 100 src="https://i.imgur.com/tdXKOr6.jpg"> | <img width= 70 src="https://i.imgur.com/ogeH40P.jpg"> | 
 | :---------------------------------------------------: | :----------------------------------------------------------: |
|                          AWS-EC2                          |                          PM2                          |


---
### 데이터 베이스 스키마
<img width="1193" alt="chatter-스키마" src="https://user-images.githubusercontent.com/46099115/126188165-b5051866-7eef-415e-9b04-171304cbe8d6.png">

