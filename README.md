# 💛 Todo Application
### https://amuse-todo.vercel.app/
</br>
<img width="500" alt="image" src="https://github.com/user-attachments/assets/1410893c-c0ad-4f0b-8f82-afe8ecbfd4eb" />


## 🐻‍❄️ 기능
1. 할일 CRUD
2. drag & drop으로 할일 우선순위 변경
3. 여러 유형으로 할일 정렬
4. 할일 검색
</br>

## 🔧 스택
* Front : ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* Back : ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
* ORM : ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
* DB: `Vercel Postgresql`
* Deploy: ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
</br>

## API 명세서

| Domain  | Method | URI | 기능 |
| ------------- | ------------- |  ------------- |  ------------- |
| /card  | GET  | /api/card  | 모든 할일 조회  |
|   | POST  | /api/card  | 할 일 추가  |
|   | PUT  | /api/card  | 할 일 전체 수정  |
|   | PUT  | /api/card/${id}  | 특정 할 일 수정  |
|   | DELETE  | /api/card/${id}  | 특정 할 일 삭제  |
| /column  | GET  | /api/column  | 모든 열 조회  |
|   | GET  | /api/column/{id}  | 특정 열 조회   |

</br>

## ❔ 구동 방법
### 1. 해당 프로젝트 위치로 이동
### 2. 두 서버 동시에 실행
- Frontend
```
cd frontend && npm i && PORT=5173 npm run dev
```
- Backend
```
cd backend && npm i && PORT=3001 npm run dev
```
### 3. http://localhost:5173/ 접속
</br>






