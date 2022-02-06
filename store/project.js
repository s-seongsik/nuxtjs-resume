export const state = () => ({
  data: [
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
            startDate : '2022. 11',
            endDate : '2022. 12',
            contents : [
              {
                text:'순수 python과 sqlalchemy으로 maria-db와 연동하여 개발',
              },
              {
                text:'AWS Linux서버에 Crontab을 활용한 스케줄러 등록',
              },
              {
                text:'read-server에서 Raw 데이터를 일별로 집계하여 write-server로 insert해주는 작업'
              },
            ],
            Images: [
              {
                src: 'images/project/wizcore/laundrygo.png',
              },
            ],
          },
          {
            title : '위즈코어 WIMO 클라우드 서비스 REST-API 개발',
            company: '위즈코어',
            startDate : '2021. 10',
            endDate : '2021. 12',
            contents : [
              {
                text:'FastAPI를 활용한 REST-API 서버 구축',
              },
              {
                text:'위즈코어 WIMO 클라우드 서비스를 등록/조회/수정 로직을 처리하는 REST-API 개발',
              },
              {
                text:'서비스 등록 및 재등록 -> 비동기 처리로 내부 서비스 로직을 호출 -> 완료시 고객 이메일 발송 테스트완료',
              },
              {
                text:'Naver Cloud와 Docker container 기반 서버 구축'
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
            title : '위즈코어 정인산업 AI실증 사업 화면개발',
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
                text:'Echart.js/D3.js 라이브러리를 활용한 프론트엔드 화면개발',
              },
              {
                text:'Spring/Spring MVC/Mybatis 백엔드 기준정보 개발',
              },
              {
                text:'데이터 시각화에 필요한 데이터 수집 및 정제를 처리하는 MSSQL 프로시저 개발',
              },
              {
                text:'SPEC 관리 항목에 대하여 알람 기능 개발, 이를 통해 수시로 작업장에 가서 확인하던 작업을 PC에서 관리함으로서 불필요한 업무낭비를 개선',
              },
              {
                text:'사용자들은 데이터 상태를 실시간으로 관리할 수 있으며, 이상 발생시 신속한 대응이 가능함',
              },
              {
                text:'월간 수 억개의 데이터가 쌓여 DB 성능저하 및 실시간 모니터링 Interval이 지연되는 문제가 발생 => DB구조 및 쿼리를 개선하여 interval을 xx초->y초로 감소',
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
            title : '만도 Smart-Factory 시스템 구축(SI상주)',
            company: '위즈코어',
            startDate : '2020. 07',
            endDate : '2021. 01',
            contents : [
              {
                text:'Echart.js/Toast Ui Grid 라이브러리를 활용한 프론트엔드 화면개발',
              },
              {
                text:'총 15개 화면 개발 진행(화면 설계, 테이블 설계, 프로시저 개발, 화면 개발 수행)',
              },
              {
                text:'Raw 데이터를 일별로 집계하는 summary 프로시저 개발',
              },
              {
                text:'1년간 유지보수 진행(헬프데스크 운영)',
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
                text:'Linux GPU에 서버 구축',
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
