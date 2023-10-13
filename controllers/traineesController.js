const fs=require('fs')
const traineeFile="./trainees.json"
const getAllTrainees=(req,res)=>{
    
    // fs.appendFileSync("sample.txt","i am jai")
    
    // fs.appendFile("sample1.txt","i am jai",(err)=>{
    //     if(err) res.status(500).json({"message":err})
    //     res.status(200).json("i am jai")
    // })
    try {
        fs.readFile(traineeFile,"utf8",(err,data)=>{
        if (err) res.status(500).json({"message":err})
        res.status(200).json(JSON.parse(data)) 
    })
        
    } catch (error) {
        res.status(500).json({"message":err.message})
    }

    

    // let data=fs.readFileSync("sample.txt","utf8")
    // res.status(200).json(data)

    // fs.writeFileSync("sample.txt","i am jai")

    // fs.writeFile("sample1.txt","i am jai",(err)=>{
    //     if(err) res.send(err)
    //     res.send("i am jai")
    // })

    
    // fs.unlinkSync("sample.txt",(err)=>{
    //     if(err) res.send(err)
    //     res.send("deleted file")
    // })


    // fs.unlink("sample.txt")
  

    // res.send("all the Trainers")

}
const getTrainee=(req,res)=>{
    res.send("added successfully")
  
    
}
const postTrainees=(req,res)=>{
    fs.readFile(traineeFile,"utf8",(err,data)=>{
        let existingTrainees=JSON.parse(data);
    let newTrainee=req.body
    let flag=false
    for(let i=0;i<existingTrainees.length;i++)
    {
        if(existingTrainees[i].id===newTrainee.id){
            flag=true
            break
        }
    }
    // let matchedTrainees = existingTainees.filter(v=>v.id==newTrainee.id)
    // if(matchedTrainees.length>0)
    // res.send("trainee already exist")
   (flag)?res.status(403).json("trainee already exist"): existingTrainees.push(newTrainee)
   fs.writeFile(traineeFile,JSON.stringify(existingTrainees),(err)=>{
    if(err)res.status(500).JSON({err})
    res.status(200).json("trainee added successfully")
   })
        
    })
//    const name1=req.body.name
//     res.send(`${name1} posted Successfully`)

}
const putTrainees=(req,res)=>{
    try {
        fs.readFile(traineeFile,"utf8",(err,data)=>{
            let existingTrainees=JSON.parse(data);
            let updatedTrainee=req.body
            console.log(existingTrainees)
            for(let i=0;i<existingTrainees.length;i++)
            {

                if (existingTrainees[i].id===updatedTrainee.id) {
                    existingTrainees[i]={...existingTrainees[i],...updatedTrainee}
                }
            
            }
            // let finalTrainees=[];
            // for(let i=0;existingTrainees.length;i++)
            // {
            //     if (existingTrainees.id===updatedTrainee.id) {
            //         finalTrainees[i]=updatedTrainee;
            //     }
            //     else{
            //         finalTrainees.push(existingTrainees[i])
            //     }
            // }
            fs.writeFile(traineeFile,JSON.stringify(existingTrainees),(err)=>{
                if(err)res.status(500).JSON({err})
                res.status(200).json("trainee added successfully")
            })

            
        })
    } catch (error) {
        res.status(500).json({"message":error.message})
    }
    
}
module.exports={getAllTrainees,getTrainee,postTrainees,putTrainees}