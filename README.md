# MonoCameleon — 숲속의 작은 소동

작은 동물들이 물건을 숨기고, 사람 술래가 흔적과 도구로 대응하는 비대칭 멀티플레이 게임의 **공식 홈페이지 콘셉트 시안**입니다.

메인 무대는 **숲속의 오래된 별장**입니다. 골목의 중고 가구점과 숲속 휴양지 관리동은 확장 후보입니다. 캐릭터·능력·출시일·지원 플랫폼은 개발 과정에서 달라질 수 있습니다.

## 로컬 실행

Node.js 22 이상에서 실행합니다. 외부 패키지 설치나 빌드가 필요하지 않습니다.

```powershell
npm start
```

브라우저에서 http://127.0.0.1:4317/ 을 엽니다. 같은 포트가 사용 중이면 다음처럼 다른 포트를 지정합니다.

```powershell
$env:PORT = '4318'
npm start
```

검사:

```powershell
npm run check
```

## 파일 구조

```text
dist/                         홈페이지 배포 파일
  index.html                  페이지 구조와 한국어 문구
  style.css                   반응형 스타일·모션
  app.js                      도감·공간·팀 선택 인터랙션
  assets/                     최적화된 WebP 및 SVG
artwork/                      고해상도 PNG 원본
art-prompts.md                신규 콘셉트 이미지 생성 프롬프트
preview.cjs                   로컬 HTTP 서버
check.cjs                     정적 파일·링크·구문 검사
.github/workflows/check.yml   업로드·PR 시 검사
.github/workflows/pages.yml   선택적으로 실행하는 Pages 배포
```

## GitHub에 올리기

이 프로젝트의 작업 폴더는 `C:\Users\kmk05\Desktop\works\프로젝트\MonoCameleon-forest-lodge`입니다.

- 원격 저장소: https://github.com/kmk050505mk/MonoCamelon-forest-lodge
- 로컬 브랜치: `main`
- `origin` 연결과 초기 커밋은 이미 준비되어 있습니다.
- 내부 `MonoCamelon-forest-lodge/`는 별도로 만들어진 빈 저장소입니다. 기존 연결 정보는 보존하지만 최상위 저장소의 업로드에서는 제외합니다.

GitHub Desktop에서는 **File → Add local repository**로 위 최상위 폴더를 선택합니다. Changes에서 수정 사항을 확인하고 커밋한 뒤 **Publish branch** 또는 **Push origin**을 선택합니다.

CLI에서는 위 폴더에서 다음 명령을 사용합니다.

```powershell
git status
git add README.md .gitignore
git commit -m "[Web] GitHub 업로드 경로와 연결 안내 정리"
git push -u origin main
```

인증이 필요하면 GitHub Desktop 또는 Git Credential Manager의 정상 로그인 절차를 완료합니다. 이번 재설정에서는 기존 커밋을 유지하고, 원격 연결과 업로드 제외 규칙만 정리했습니다. 실제 커밋·푸시·사이트 배포는 수행하지 않았습니다.

## GitHub Pages를 쓰고 싶다면

1. 저장소 **Settings → Pages → Source**에서 **GitHub Actions**를 선택합니다.
2. **Actions → GitHub Pages 수동 배포 → Run workflow**를 실행합니다.
3. 성공한 작업의 `github-pages` 환경에서 실제 주소를 확인합니다.

업로드만으로 배포하지 않도록 Pages 워크플로는 수동 실행입니다. 실제 웹에 게시되는 파일은 `dist/`뿐이며 고해상도 원본과 문서는 웹 페이지 배포물에 들어가지 않습니다. GitHub 저장소 자체에는 원본과 문서도 함께 올라갑니다.

저장소의 비공개 설정과 Pages 사이트의 접근 범위는 별개이므로, 비공개 검토가 필요하면 게시 전에 Pages 접근 설정을 확인합니다.

공식 설정 안내: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## 구현과 자료 출처

- 설치 없는 HTML/CSS/JavaScript와 브라우저 WAAPI를 사용합니다.
- 동물 4종 도감, 키보드 탐색, 방별 설명, 팀 선택, 스크롤 모션과 동작 줄이기를 지원합니다.
- Google Fonts의 Noto Sans KR은 선택적으로 로드하며, 연결 실패 시 시스템 한글 글꼴로 표시합니다.
- `artwork/forest-lodge.png`, `artwork/animals.png`는 내장 imagegen으로 생성한 콘셉트 아트입니다. 실제 플레이 화면이 아닙니다.
- 협탁·보관함·안락의자 이미지는 LOCAL-ART-004 이미지→3D 가구 제작에 사용한 원본입니다.
- `art-prompts.md`에 생성 프롬프트를 보존합니다.
- 게임 엔진 소스·UE 에셋·Sites 인증 및 호스팅 설정은 이 프로젝트에 포함하지 않습니다.

게임 홈페이지 소스와 이미지를 공개 오픈소스 라이선스로 제공한다는 의미는 아닙니다. 별도 라이선스는 지정하지 않았습니다.
