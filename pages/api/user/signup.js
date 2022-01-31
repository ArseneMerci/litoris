import dbConnect from "../../../utils/mongo"
import User from "../../../model/user"
import { generate } from '../../../utils/bcrypt';

dbConnect()

export default async function signup(req, res) {
  const { method } = req;
  
  if (method === "POST") {
  try {
    const {
      fullname, password, confirmPassword, email
    } = req.body;
    const exist = await User.findOne({ email }).catch((err)=>console.log(err));
    if (exist) return res.status(409).send({message:'Account already exists'})
    if(password !== confirmPassword) return res.status(401).send({message:"password doesn't match"})
    const hashedPassword = await generate(password);
    const newAccount = await User.create({fullname,email,password:hashedPassword}).catch((err)=>{console.log(err)});
    newAccount.password = undefined;

    return res.status(201).send({message:'Signed up successfully!', data:newAccount})

  } catch (error) {
    return res.status(500).send({message:'SERVER_ERROR'})
  }
}
}
