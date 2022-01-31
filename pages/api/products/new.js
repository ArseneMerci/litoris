import dbConnect from "../../../utils/mongo"
import Products from "../../../model/product"

export default async function handler(req, res) {
  // const { method, cookies } = req;
  const { method } = req;
//   const token = cookies.token
  dbConnect()
    // if(!token || token !== process.env.token){
    //   return res.status(401).json("Not authenticated!")
    // }
    if (method === "POST") {
    try {
      const product = await Products.create(req.body).then(()=>console.log("product created successfully!")).catch((err)=>{
        console.log(err)
      });
      
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
