const express =require('express')
const app =express()
const PORT =3500

const trainees =require("./routes/traineeRoute")
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const auth=require("./middleware/auth")
app.use("/api/v1/AllTrainees",auth,trainees)
app.listen(PORT,console.log(`Server started running at http://localhost:${PORT}`))