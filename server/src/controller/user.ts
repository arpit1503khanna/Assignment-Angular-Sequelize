import { Request, Response } from 'express';
import Role from '../models/role';
import User from '../models/user';

export const getUserData = async (req:Request,res:Response)=>{
    try{
        const data = await User.findAll({include: ['role','customer']});
        res.json(data);
    }catch(error){
        console.log(error);
    }
}

export const deleteUser = async (req:Request,res:Response)=>{
    const {id} = req.params;
    try{
        const data = await User.destroy({
            where:{ id: id}
        });
        res.json(data);
    }catch(error){
        console.log(error);
    }
}

export const createUser = async (req:Request,res:Response)=>{
    const firstName = req.body.firstName;
    const middleName = req.body.middleName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const address = req.body.address;
    const role = req.body.rid;
    const cid = req.body.cid;
    try{
        const rid = await Role.findOne({
            where: { name: role }
          })
        const data = await User.create({ 
            first_name:firstName,
            middle_name:middleName,
            last_name:lastName,
            email:email,
            phone_number:phoneNumber,
            address:address,
            rid:rid?.toJSON().id,
            cid:cid
        });
        res.json(data);
    }
    catch(error){
        console.log(error);
    }
}

export const updateUser = async (req:Request,res:Response)=>{
    const {id} = req.params
    const firstName = req.body.firstName;
    const middleName = req.body.middleName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const address = req.body.address;
    try{
        const data = await User.update({
            first_name:firstName,
            middle_name:middleName,
            last_name:lastName,
            email:email,
            phone_number:phoneNumber,
            address:address
        },{
            where:{ id: id}
        })
        res.json(data);
    }
    catch(error){
        console.log(error);
    }
}