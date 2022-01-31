import dbConnect from "../../../utils/mongo"
import Products from "../../../model/product"

export default async function handler(req, res) {
  const { method, query:{slug} } = req;


  dbConnect();

  if (method === "GET") {
    try {
      const product = await Products.findOne({slug});
    //   console.log(product)
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

//   if (method === "PUT") {
//     if(!token || token !== process.env.token){
//       return res.status(401).json("Not authenticated!")
//     }
//     try {
//       const product = await Product.findByIdAndUpdate(id, req.body, {
//         new: true,
//       });
//       res.status(200).json(product);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }

//   if (method === "DELETE") {
//     if(!token || token !== process.env.token){
//       return res.status(401).json("Not authenticated!")
//     }
//     try {
//       await Product.findByIdAndDelete(id);
//       res.status(200).json("The product has been deleted!");
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }
// }
