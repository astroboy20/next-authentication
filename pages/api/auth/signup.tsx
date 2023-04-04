import { NextApiRequest, NextApiResponse } from "next";
import connectMongoose from "@/database/connect";
import Users from "../../../model/schema"
import {hash} from "bcryptjs"

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    await connectMongoose().catch(error=>res.json({error:"Connection failed ..."}))

    //only post method 
    if(req.method==="POST"){
        if(!req.body)return res.status(404).json({error:"Don't have form data...!"})
        const {username,email,password} = req.body

        //check duplicate users
        const checkExisting = await Users.findOne({email})
        if(checkExisting){
            return res.status(422).json({message:"User Already Exist"})
        }

        //store data and hash the password
        Users.create({username,email,password:await hash(password,12)})
            .then((data:any)=>{
                res.status(201).json({status:true,user:data})
            })
            .catch((err:any)=>{
                res.status(404).json({err})
            })
    }else{
        res.status(500).json({message:"HTTP method not valid only POST accepted"})
    }
}
