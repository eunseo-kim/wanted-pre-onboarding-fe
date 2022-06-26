# 👩🏻소개
안녕하세요. 원티드 프리온보딩 프론트엔드 코스에 지원한 김은서입니다.
저는 현재 프론트엔드 개발자를 꿈꾸는 학생입니다. 이번 원티드 프리온보딩코스가 제가 프론트엔드 개발자로 성장하는데 있어서 정말 좋은 기회라는 생각이 들어 지원하게 되었습니다. 잘 부탁드립니다 :)

<br/>

# 🌱과제 해결 방법
<details><summary>과제 전체 구조</summary>
  
```
└─src
    ├─  App.js
    ├─  index.js
    │
    ├─components
    │  ├─common
    │  │      Logo.jsx
    │  │
    │  ├─feed
    │  │      Feed.jsx
    │  │
    │  ├─gnb
    │  │      LogoutButton.jsx
    │  │      SearchField.jsx
    │  │
    │  └─login
    │          CheckPasswordValidation.jsx
    │          InputForm.jsx
    │          LoginButton.jsx
    │          LoginToastMessage.jsx
    │          ValidationCheckBox.jsx
    │
    ├─containers
    │      FeedContainer.jsx
    │      GnbContainer.jsx
    │      LoginContainer.jsx
    │
    ├─fixtures
    │      admin.js
    │
    ├─image
    │      Logo.svg
    │
    ├─pages
    │      LoginPage.jsx
    │      MainPage.jsx
    │      PreAssignmentGuide.jsx
    │
    ├─services
    │      api.js
    │      storage.js
    │      validation.js
    │
    └─styles
            globalStyles.js
```
</details>

### Assignment 1 - Login
- [**Assignment 1 - Login 풀리퀘스트**](https://github.com/eunseo-kim/wanted-pre-onboarding-fe/pull/1)
- input의 `onChange` 함수 대신 `useRef`를 사용하여 렌더링 최적화를 구현했습니다.
- 로그인 시 localStorage에 로그인 정보를 저장했습니다.
- localStorage와 관련된 함수(saveItem/loadItem/removeItem)는 `src/services`에 `storage.js`으로 분리하여 구현했습니다.

### Assignment 2 - GNB
- [**Assignment 2 - GNB 풀리퀘스트**](https://github.com/eunseo-kim/wanted-pre-onboarding-fe/pull/2)
- 스크롤에 관계 없이 화면 상단에 고정하도록 GNB의 `position` 속성을 `fixed`로 구현했습니다.
- GNB의 가장 오른쪽에 로그아웃 버튼을 배치했습니다. 로그아웃 버튼 클릭 시, localStorage에 저장된 email/password를 삭제합니다.
- 모바일 사이즈(480px 이하)의 경우
  - 가운데 검색창의 `display` 속성을 `none`으로 설정하여 보이지 않도록 구현했습니다.
  - GNB 전체를 감싸는 부분의 `justify-content` 속성을 `space-between`으로 설정했습니다.

### Assignment 3 - Validation
- [**Assignment 3 - Validation 풀리퀘스트**](https://github.com/eunseo-kim/wanted-pre-onboarding-fe/pull/3)
- 이메일과 비밀번호의 유효성을 검사하는 부분을 `src/services`의 `validation.js`에 함수로 분리하여 구현했습니다.
- 자바스크립트 정규식 중 `test()`, `search()` 메소드를 사용하여 유효성 검사를 구현했습니다.
- Validation 상태를 CSS로 표현했습니다.
  1. Email Input Validation Check
      - input의 onChange 함수가 실행 될 때마다 email의 유효성을 검사했습니다.
      - `emailValidation`이라는 state를 추가했습니다. email validation check가 모두 통과된 경우, `emailValidation`을 true로 바꾸어주었습니다. `emailValidation`이 true로 바뀌면 email 입력창 오른쪽의 아이콘이 초록색으로 바뀝니다.
  2. Password Input Validation Check
      - email 유효성 검사와 마찬가지로 onChange 실행 시 유효성을 검사했습니다. 단 비밀번호 유효성 체크 함수의 경우, 3가지 조건(대문자/특수문자/8자리 이상) 중 통과되지 않은 조건들을 배열(`errorCodes`)로 담아 리턴합니다. 즉, `errorCodes`의 길이가 0이면 password validation check를 모두 통과한 것입니다.
  3. Email/Password가 등록되어 있는 (Admin)것과 일치하는지
      - Admin의 email/password 정보를 임시로 `fixtures/admin.js`에 저장해두었습니다.
      - 입력된 email/password 정보가 Admin과 다를 경우, 우측 상단에 2초동안 Toast Message가 보이도록 구현했습니다. `setTimeout`을 사용해 2초간 `toastMessageVisible`이라는 state의 값을 `true`로 설정하여 구현했습니다.
- 모든 Validation Check가 통과된 경우 로그인 버튼의 색상이 파란색으로 바뀌고, 버튼의 `cursor`의 속성이 `pointer`으로 바뀌도록 구현했습니다.


### Assignment 4 - Routing
> 과제를 풀면서 가장 고민을 많이 했던 부분인 것 같습니다. React v6부터 history.push('/')가 navigate('/')로 변경되었습니다. 따라서 **`history push 사용 X`** 이라는 조건을 **`navigate 사용 X`** 으로 이해해서 풀었습니다.
- [**Assignment 4 - Routing 풀리퀘스트**](https://github.com/eunseo-kim/wanted-pre-onboarding-fe/pull/4)
- 처음에는 로그인 시 `navigate("/")`로 Main Page로 이동시키고, 로그아웃 시 `navigate("/login")`으로 Login Page 이동하도록 구현했습니다.
- 그러나, **사용자가 직접 URL을 조작하는 경우**, 로그인이 되어있지 않은 상태인데 Main Page에 접근하는 등의 문제가 발생했습니다.
- 또한, 페이지 이동 시 매번 localStorage를 확인하자니, 페이지가 렌더링 되고 난 후 localStorage를 접근한다는 문제가 발생했습니다.
- 따라서, `App.jsx`에 `email`이라는 state를 생성했습니다. `email`의 초기값은 `localStorage에 저장된 email`로 초기화했습니다. 그리고 하위 컴포넌트들에게 `email`을 조작할 수 있는 `setEmail`을 props로 넘겼습니다. 그리고 로그인/로그아웃 시 `setEmail`을 조작하여 `App.jsx`에서 생성한 `email`의 상태를 변경했습니다.
- 그리고 `App.jsx`에서 라우팅 로직을 구현했습니다. `email`과 react-router-dom의 `Navigate`를 사용하여 구현했습니다. 
  - ① 로그인이 되어 있는데(`email`이 truthy) Login Page에 접속 → `<Navigate replace to="/"/>`으로 redirect
  - ② 로그인이 안 되어 있는데(`email`이 falsy) Main Page에 접속 → `<Navigate replace to="/login"/>`으로 redirect
- 따라서 로그인/로그아웃 시 `email`의 상태를 변경하면 자동으로 위의 ①/②가 실행되어 `navigate("/")` 없이도 페이지를 redirect 시킬 수 있습니다.

### Assignment 5 - Feeds
- [**Assignment 5 - Feeds 풀리퀘스트**](https://github.com/eunseo-kim/wanted-pre-onboarding-fe/pull/5)
- `public/data`의 `feed.js`에 피드 데이터를 mocking 했습니다.
- 각 Feed에 Enter Key/'게시' 버튼 클릭으로 댓글을 추가할 수 있도록 구현했습니다.
  - `commentList` state를 새로 생성하고, 요청 후 받은 feed data의 댓글(comments) 데이터로 값을 초기화했습니다.
  - 댓글을 추가하면 `commentList`에 새로운 댓글 데이터를 추가했습니다. Javascript의 펼침연산자(...)를 사용하여 구현했습니다. 
  - 따라서 `commentList`의 상태가 변경되었으므로 화면이 re-rendering 되어 추가된 댓글을 볼 수 있습니다. 단, 새로고침 시 작성한 댓글이 다 지워지는 문제점이 있습니다.
- 이미지가 로딩되기 전까지 Feed Component가 보이지 않도록 구현했습니다.
  - img의 `OnLoad` 함수를 사용했습니다. 
  - 이미지가 로딩된 후 onLoad 함수 안에서 `imageLoading` state를 false로 바꿉니다.
  - `imageLoading` state가 false로 바뀌면 feed의 display 속성이 `none → block`으로 변경되어 현재 Feed 컴포넌트가 화면에 보이도록 구현했습니다.
- 메인 페이지 전체에 반응형 CSS(모바일 480px 기준)를 적용했습니다.
- Feed의 이미지 크기는 width를 100%으로 맞추었고, height는 max-height(500px)를 넘어갈 경우 `overflow: 'hidden'`을 사용하여 이미지를 잘라내었습니다.
