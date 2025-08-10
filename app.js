import express from 'express';
import database from "./db/connect.js"
import fs from 'fs';

const servsr = express()
const PORT = process.env.PORT
servsr.use(express.static('public'))
servsr.use(express.urlencoded({ extended: true }));
servsr.use(express.json())
servsr.listen(PORT, () => { console.log(PORT, 'is listen'); })


servsr.post('/save',async (req, res) => {
    const complaint = req.body.complaint;
    const description = req.body.description;
    const myData={complaint:complaint,
        description:description
    }
    try {
       await save(myData)
    } catch (error) {
        console.log(error);
    }

})
async function save(myData) {
    const insert = await database.collection("Complaints").insertOne(myData);
    console.log('is insert');
}

async function admin(){
    const all_complaint = await database.collection("Complaints").find().toArray()
    return all_complaint
}

servsr.get("/admin", async (req, res) => {
    const resolt = await admin();
    res.json(resolt);  
});


