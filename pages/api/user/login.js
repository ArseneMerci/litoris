import dbConnect from "../../../utils/mongo"
import User from "../../../model/user"
import { check } from '../../../utils/bcrypt';
import { sign } from '../../../utils/jwt';

dbConnect()


export default async function login(req, res) {
  const { method } = req;
  
  if (method === "POST") {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).catch((err)=>console.log(err));
        if (!user) return res.status(404).send({message:'ACCOUNT_NOT_FOUND'})
        const match = await check(user.password, password);
        if (!match) return res.status(400).send({message:'AUTHENTICATION_ERROR'})
        user._doc.token = await sign({ email, fullname: user.fullname, role: 'user' });
        user.password = undefined;
        return res.status(200).send({message:'LOGGED IN SUCCESSFULLY', data:user })
      } catch (error) {
        return res.status(500).send({message:'SERVER_ERROR'})
      }
}
}
