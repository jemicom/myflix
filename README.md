# 제목 : readme 제작 명령어
## markdown language : 사용설명서 만들기 
### 소제목 

<img src="/mainconcept/plani.png">

```
사용되는 폰트 
색상 콘셉트 

1. 로고는 이미지로 제작 
2. 플랜아이에 대한 설명 
  타임라인은 3초마다 왼쪽에서 오른족으로 선색이 나타나
   "문장을'  타임라인에 따라 자동으로 상하로 스크롤 되며 
 "message" 오른쪽 왼쪽으로 애니메이션 되며 들어온다.
 ```

 # 기호이름 

 1. ` 백틱 : **1번 왼쪽**의 작은 따옴표
 1. ~ 틸드 
 1. ^ 캐럿 
 1. & 앰퍼센트
 1. | 파이프 
 1. \ = ￦ 백슬래시
 1. /  슬래시

 # 파일명, 폴더명 사용시 주의점 
 1. 영문으로 시작 
 2. 의미있는 파일명 
 3. 파일명, 폴더명은 반드시 띄어쓰기 사용하지 말것 
 , 서버 : 리눅스 환경 
 1. 대소문자 구분해서 사용할 것  

 # 이름만드는 규칙 : 문화
 1. 카멜표기법 : 단어와 단어사이 첫글자는 대문자 
 2. 스네이크 표기법 : 단어와 단어사이를 -로 표시 
 3. 파스칼 표기법 : 첫글자를 대문자로 사용 
 4. 

 # 이미지 파일 확장자 
 ## 웹에 업로드 할 수 있는 확장자
 - jpg : 투명표현이 불가능
 - png : 투명표현, 
 - gif : 투명표현, 애니메이션, 
 - webm : 새로운 이미지 포맷 


# 이모지 : 윈도우 기능 

 
# git : 리눅스 명령 환경 
git-scm.com 다운로드 
폴더이동 > 마우스 오른쪽 버튼 > git-bash here

# git upload
```
echo "# afterClass" >> README.md
// 문서를 만든다.
$ git init
// git 폴더 초기화 
$ git add README.md  // git 업로드할 파일 선택 
$ git add .   // 현재폴더의 모든 파일 업로드

$ git commit -m "first commit"
// 버전관리에 들어갈 설명 쓰기 
$ git branch -M main
// master => main
git config  --global  user.email "여러분이메일주소"
git config  --global  user.name "여러분이름"

git remote add origin https://github.com/ahsor/afterClass.git
// 업로드할 폴더와 로컬폴더를 연결
// staging : 업로드할 준비 

git push -u origin main
// 진짜 업로드
```

# 두번째 접속 후 업로드 
```
git remote add origin https://github.com/ahsor/afterClass.git
git branch -M main
git push -u origin main



```


# git config 설정하는 방법
만약 위에서 user.name 그리고 user.email을 바꾸려면 어떻게 하는지 알아봅니다. 각각 아래와 같습니다. --global를 사용하여 전역으로 설정
git config --global user.name "홍길동"
git config --global user.email "email"


# git config 삭제하기
git config --unset user.name
git config --unset user.email

만약 삭제해도 계속 남아있다면? global로 설정한 경우 반드시 global 옵션을 추가해야 해당 값이 삭제
git config --unset --global user.name
git config --unset --global user.email

이제 삭제가 되었는지 리스트에서 확인
git config --list

# 마지막 커밋 메시지 수정  
PS C:\web\day98_0628> git commit --amend -m "바꿀 메시지"
PS C:\web\day98_0628> git commit --amend ;
리눅스 편집창으로 진입 " 바꿀 메시지를 쓰기" 
리눅스 평집창에서 나오기 ESC > :wq!

# commit log 확인
git log

# 깃 강제 갱신 
PS C:\web\day98_0628> git push -f

[깃 커밋 제거]
PS C:\web\day98_0628> git reset HEAD^~n
n 대신 지울 개수 지정
[이전 커밋 수정 ] 
PS C:\web\day98_0628> git rebase -i HEAD~3 

# git history 지우기
history  -c
rm .bash_history
vim .bash_history
 
# git cache  삭제
git rm -r --cached .
git add .
git commit -m "cache clear"


# 사용자가 여러명인 컴에서 git 사용하기
# git 자격증명 관리 
- 제어판 > 사용자 계정 > 자격 증명 관리자 이동하기
- 자격 증명 관리에서 Windows 자격 증명 선택
- 일반 자격 증명에서 git에 해당하는 증명 정보를 수정하거나 삭제하기

# git remote origin 삭제
git remote remove origin

# git 토큰 관리 
Signed in as 아이디
> Settings 
> Developer settings 
> Personal access tokens 
> repo 제목 클릭  > Regenerate token


# netlify 직접 배포 
1. npm run build : build 폴더 생성 확인 
2. team > Sites > 하단에 Drag and drop your site output folder here 에 build 폴더만 배포

# git -> netlify 연동 배포 
1. git 업로드 
2. Add new site > Import an existing project > 연동 배포할 곳 선택 
3. 빌드시 발생하는 오류를 깃으로 해결하면 자동 연동되며 배포됨 
* 필요 없는 패키지를 제거한 후 빌드 : 배포후 지워도 상관 없음 
npm uninstall @testing-library/jest-dom @testing-library/react @testing-library/user-event web-vitals
index.js의 web-vitals 설정도 모두 지운다. 

# build 된 페이지 github-pages로 배포 
1. npm uninstall @testing-library/jest-dom @testing-library/react @testing-library/user-event web-vitals
index.js
2. npm i gh-pages -D 
3. package.json 수정 
{
  "name": "context-blog",
  "homepage": "https://jemicom.github.io/context-blog",  /// 추가 
  "version": "0.1.0",
  "private": true,
  
  "scripts": {
    "predeploy":"npm run build",   /// 추가
    "deploy":"gh-pages -d build",   /// 추가
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}

4. git 리포지토리 만들기 : context-blog
5. git push 
6. npm run deploy
7. https://jemicom.github.io/context-blog 로 접속












