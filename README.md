# R 문제은행 퀴즈 (ADsP · 빅데이터분석기사)

100문제 문제은행에서 학생마다 무작위 20문제를 출제하고, 한 문제씩 정답 확인과 해설을 보여주는 웹사이트입니다.

## 파일 구성
| 파일 | 역할 |
|---|---|
| `index.html` | 학생용 퀴즈 (이름·학번 입력 → 20문제 → 결과) |
| `results.html` | 교수용 결과 확인 (실시간 점수표, CSV 다운로드, 오답률 TOP10) |
| `questions.js` | 문제은행 100문항 (CSV에서 변환) |

## GitHub Pages 배포
1. GitHub에서 새 저장소 생성 (예: `adsp-r-quiz`, Public)
2. 위 3개 파일을 업로드 (Add file → Upload files)
3. Settings → Pages → Branch: `main` / `(root)` → Save
4. 1~2분 뒤 주소 확인
   - 학생용: `https://<아이디>.github.io/adsp-r-quiz/`
   - 교수용: `https://<아이디>.github.io/adsp-r-quiz/results.html`

## Firebase Realtime Database 규칙
Firebase 콘솔 → Realtime Database → 규칙 탭에 아래를 붙여넣고 **게시**하세요.
(기존에 다른 앱이 같은 DB를 쓰고 있다면, 기존 규칙 안에 `adsp_r_quiz` 부분만 추가하세요.)

```json
{
  "rules": {
    "adsp_r_quiz": {
      ".read": true,
      "attempts": {
        "$id": { ".write": true }
      },
      "students": {
        "$sid": { "$id": { ".write": true } }
      }
    }
  }
}
```

## 저장되는 데이터
```
adsp_r_quiz/
  attempts/{응시ID}   이름, 학번, 점수, 문항별 답안, 시작/종료 시각, 소요시간
  students/{학번}/{응시ID}   학생별 응시 이력 요약
```

## 문제 수정
`questions.js`에서 문제·보기·정답(1~4)·해설을 고치면 됩니다. 출제 문항 수는 `index.html`의 `NUM_Q = 20`을 바꾸세요.
