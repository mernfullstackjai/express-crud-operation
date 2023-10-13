const express=require('express')
const router=express.Router()
const {getAllTrainees,getTrainee,postTrainees,putTrainees}=require("../controllers/traineesController")
router.get('/getAllTrainees',getAllTrainees)
router.get('/getTrainee',getTrainee)
router.post('/postTrainees',postTrainees)
router.put('/putTrainees',putTrainees)
module.exports=router
