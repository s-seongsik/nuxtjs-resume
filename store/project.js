export const state = () => ({
  data: [ 
          {
            title : '실적관리 서비스 개발',
            company: '위즈코어',
            startDate : '2022. 01',
            endDate : '2022. 03',
            contents : [
              {
                text:'사내 업무 실적을 관리하기 위한 프로그램',
              },
              {
                text:'Vue.js(2)기반으로 프론트엔드 개발',
              },
              {
                text:'Vuetify.js로 UX/UI 개발 및 Vuex를 활용한 상태관리',
              },
              {
                text:'axios 모듈을 활용한 HTTP 통신 개발',
              },
              {
                text:'webpack, babel, ESLint로 프론트엔드 개발환경 최적화',
              },
              {
                text:'node.js/Express로 백엔드 REST-API 서버 개발',
              },
              {
                text:'kakao cloud, docker를 서버 인프라로 사용',
              },
              {
                text:'maria-db를 데이터베이스로 사용',
              },
            ],
            Images: [
              {
                src: 'images/project/wizcore/vue.png',
              },
              {
                src: 'images/project/wizcore/express.png',
              },
            ],
          },
          {
            title : '위즈코어 DEMO ROOM REST-API 개발',
            company: '위즈코어',
            startDate : '2022. 01',
            endDate : '2022. 01',
            contents : [
              {
                text:'FastAPI를 활용한 REST-API 서버 구축',
              },
              {
                text:'클라이언트를 대상으로 서비스를 시연하는 DEMO ROOM을 런칭함.',
              },
              {
                text:'키오스크 선택에 따라 여러 대의 PC화면이 바뀌는 간단한 REST-API 서버 개발',
              },
              {
                text:'Naver Cloud와 Docker container기반 서버 구축'
              },
            ],
            Images: [
              {
                src: 'images/project/wizcore/demo.png',
              },
            ],
          },
          {
            title : '런드리고 데이터 집계 스케줄러 프로그램 개발',
            company: '위즈코어',
            startDate : '2021. 11',
            endDate : '2021. 12',
            contents : [
              {
                text:'Python3과 sqlalchemy으로 maria-db와 연동하여 개발',
              },
              {
                text:'AWS EC2에 Crontab을 활용한 스케줄러 등록',
              },
              {
                text:'Read-Server에서 Raw 데이터를 일 별로 집계하여 Write-Server로 insert해주는 잡스케줄러'
              },
            ],
            Images: [
              {
                src: 'images/project/wizcore/laundrygo.png',
              },
            ],
          },
          {
            title : 'WIMO 클라우드 서비스 REST-API 개발',
            company: '위즈코어',
            startDate : '2021. 10',
            endDate : '2021. 12',
            contents : [
              {
                text:'Wimo 서비스에 사용되는 REST-API 서버 개발',
              },
              {
                text:'기존 외부업체에서 작성된 API서버를 FastAPI로 이전하여 자체 관리로 전환',
              },
              {
                text:'Naver 클라우드, Docker 컨테이너 기반 배포',
              },
              {
                text:'Swagger UI로 API 명세서를 작성하여 팀 공유 및 관리'
              },
            ],
            Images: [
              {
                src: 'images/project/wizcore/wimo_01.png',
              },
              {
                src: 'images/project/wizcore/wimo_02.png',
              },
            ],
          },
          {
            title : 'AI실증 사업 화면개발',
            company: '위즈코어',
            startDate : '2021. 03',
            endDate : '2021. 04',
            contents : [
              {
                text:'Echart 라이브러리를 활용한 프론트엔드 화면개발',
              },
              {
                text:'실시간 데이터를 AI 알고리즘으로 예측한 결과값을 시각화',
              },
              {
                text:'NG시간대의 Raw데이터의 값을 비교할 수 있는 화면 개발',
              },
              {
                text:'실시간으로 NG값을 모니터링할 수 있는 화면 개발'
              },
            ],
            Images: [
              {
                src: 'images/project/wizcore/jeongin_01.png',
              },
              {
                src: 'images/project/wizcore/jeongin_02.png',
              },
            ],
          },
          {
            title : 'PS테크놀로지 환경안전모니터링 시스템 구축',
            company: '위즈코어',
            startDate : '2021. 01',
            endDate : '2021. 09',
            contents : [
              {
                text:'Nexpom 모니터링 솔루션 기반 시스템 구축 (1인)',
              },
              {
                text:'Echart.js/D3.js 라이브러리를 활용한 대시보드 개발',
              },
              {
                text:'프로덕트 디자이너와 함께 컴포넌트와 인터랙션을 구현',
              },
              {
                text:'차트 구현에 필요한 데이터 정제 및 집계를 처리하는 MSSQL 프로시저 개발',
              },
              {
                text:'데이터 SPEC관리 항목에 대한 알람 기능 개발',
              },
              {
                text:'사용자들은 데이터 상태를 실시간으로 관리할 수 있으며, 이상 발생시 신속한 대응이 가능함',
              },
            ],
            Images: [
              {
                src: 'images/project/wizcore/pstech_01.png',
              },
              {
                src: 'images/project/wizcore/pstech_02.png',
              },
              {
                src: 'images/project/wizcore/pstech_03.png',
              },
              {
                src: 'images/project/wizcore/pstech_04.png',
              },
              {
                src: 'project/wizcore/pstech_05.png',
              },
              {
                src: 'images/project/wizcore/pstech_06.png',
              },
              {
                src: 'images/project/wizcore/pstech_07.png',
              },
              {
                src: 'images/project/wizcore/pstech_08.png',
              },
              {
                src: 'images/project/wizcore/pstech_09.png',
              },
              {
                src: 'images/project/wizcore/pstech_09.png',
              },
              {
                src: 'images/project/wizcore/pstech_10.png',
              },
              {
                src: 'images/project/wizcore/pstech_11.png',
              },
              {
                src: 'images/project/wizcore/pstech_12.png',
              },
              {
                src: 'images/project/wizcore/pstech_13.png',
              },
              {
                src: 'images/project/wizcore/pstech_14.png',
              },
              {
                src: 'images/project/wizcore/pstech_15.png',
              },
              {
                src: 'images/project/wizcore/pstech_16.png',
              },
            ],
          },
          {
            title : '만도 Smart-Factory 시스템 구축',
            company: '위즈코어',
            startDate : '2020. 07',
            endDate : '2021. 01',
            contents : [
              {
                text:'프로덕트 디자이너와 함께 컴포넌트와 인터랙션을 구현',
              },
              {
                text:'Nexpom 모니터링 솔루션 팀의 일원으로 프론트엔드 개발 및 유지보수 참여',
              },
              {
                text:'Echart.js/Toast Ui Grid 라이브러리를 활용한 프론트엔드 화면개발',
              },
              {
                text:'화면 설계와 고객 설비 데이터를 집계 및 변환하여 유의미한 차트로 인사이트를 제공',
              },
              {
                text:'Raw 데이터를 일별로 집계하는 summary 프로시저 개발',
              },
              
            ],
            Images: [
              {
                src: 'images/project/wizcore/mando_01.png',
              },
              {
                src: 'images/project/wizcore/mando_02.png',
              },
              {
                src: 'images/project/wizcore/mando_03.png',
              },
              {
                src: 'images/project/wizcore/mando_04.png',
              },
              {
                src: 'images/project/wizcore/mando_05.png',
              },
              {
                src: 'images/project/wizcore/mando_06.png',
              },
              {
                src: 'images/project/wizcore/mando_07.png',
              },
            ],
          },
          {
            title : '덴소코리아 예지보전 프로젝트',
            company: '위즈코어',
            startDate : '2020. 05',
            endDate : '2021. 07',
            contents : [
              {
                text:'산학협력 고려대학교 산업경영공학과 연구실과 협업(AI 알고리즘 개발)',
              },
              {
                text:'모델 재학습, 모델 성과측정, 모델배포, 하이퍼파라미터 설정 및 모델 버전관리를 할 수 있는 API 개발',
              },
              {
                text:'Flask-RESTPlus를 활용한 API 개발',
              },
              {
                text:'GPU 서버와, docker 컨테이너로 서버 인프라 구축',
              },
            ],
            Images: [
              {
                src: 'images/project/wizcore/denso.png',
              },
            ],
          },
          {
            title : 'Willy will 일정 관리 애플리케이션',
            company: '토이 프로젝트(5인)',
            startDate : '2020. 02',
            endDate : '2021. 05',
            contents : [
              {
                text:'네이티브 앱(안드로이드)을 개발해보고 구글플레이에 배포까지 해보고싶어 시작한 프로젝트',
              },
              {
                text:'할일(To-do) 혹은 작업(Task) 정리를 도와주는 애플리케이션',
              },
              {
                text:'안드로이드 스튜디오, Java, Gradle, Sqlite로 개발을 진행 / Git, Github, GitHub Desktop 으로 협업 진행',
              },
              {
                text:'일정 추가 화면 개발을 담당함',
              },
              {
                text:'https://play.google.com/store/apps/details?id=com.willy.will',
                link:'https://play.google.com/store/apps/details?id=com.willy.will'
              },
              {
                text:'https://github.com/HelloWorld0707/willy_will',
                link:'https://github.com/HelloWorld0707/willy_will'
              },
            ],
            Images: [
              {
                src: 'images/project/wizcore/will_01.png',
              },
            ],
          },
      ]
})
