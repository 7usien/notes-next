## steps

npm i primsa npx prisma init --datasource-provider sqlite

then go to sechema in primsa folder

---

### create Model

model Note { id Int @id @default(autoincrement()) title String text String data
DateTime image Bytes tags String }

### Build DB based on model

npx prisma migrate dev

## create Add page ?

you can use folder like :
1. notes folder
2. add folder
3. page.tsx > that we will put out add new notes code
notes > add > page.tsx

