import { Request, Response } from 'express';
import customer from '../models/customer';

export const addCustomer = async (req:Request,res:Response)=>{
    const name = req.body.name;
    const website = req.body.website;
    const address = req.body.address;
    try{
        const data = await customer.create({ name:name,website:website,address:address});
        res.json(data);
    }
    catch(error){
        console.log(error);
    }
}

export const getCustomerData = async (req:Request,res:Response)=>{
    try{
        const data = await customer.findAll();
        // console.log(data);
        res.json(data);
    }catch(error){
        console.log(error);
    }
}