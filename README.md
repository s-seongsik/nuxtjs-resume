# Nuxtjs-resume 버전

## 리팩토링
* 디바이스 환경에 맞는 반응형 레이아웃 재구성

<br>

## 빌드 및 셋업

```bash
# install dependencies
$ npm install

# package.json > script > dev에서 port 변경하면 됨. (default: 3000)
$ npm run dev

# 프로덕트 App 배포
$ npm run build

# 정적 웹 빌드
$ npm run generate

# build된 App으로 서버 실행
$ npm run start

# 깃허브 호스팅 배포 
# gh-pages 브랜치가 있어야함.
$ npm run deploy
```

<br>

## Git Repository Name 셋팅

* ./nuxt.config.js
* target에 "static"으로 되어있는지 확인.
* router > base에 github repository name을 넣어준다. 기본적으로 루트 도메인 기준으로 build되기 때문에 안넣게 되면 404 error를 발생
* baseUrl도 변경해준다.

```js
export default {
  target: 'static',
  router: {
    base: '/resume/' // github repository name
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://domain/resume/'
  },
  
  // (생략...)
}
```

<br>

## 프로젝트 구조 설명

* store에서 각 컴포넌트별로 payload만 수정하여 넣으면 쉽게 내용 변경이 가능하다.

```
.
├── assets                 
│   └── css
│       └── variables.scss // 글로벌 css
├── components                 
│   ├── Certifiacate.vue // 자격증 컴포넌트
│   ├── Education.vue // 교육 컴포넌트      
│   ├── Experience.vue // 경험 컴포넌트  
│   ├── Opensource.vue // 오픈소스 컴포넌트       
│   ├── Profile.vue // 프로필 컴포넌트 
│   └── Skill.vue // 스킬 컴포넌트 

...

└── store
    ├── certifiacate.js // 자격증 payload 
    ├── education.js // 교육 payload      
    ├── experience.js // 경험 payload  
    ├── index.js // 경험 payload 
    ├── opensource.js // 오픈소스 payload       
    ├── profile.js // 프로필 payload 
    └── skill.js // 스킬 payload 
```