import dbConnect from "../../../utils/mongo"
import Products from "../../../model/product"

export default async function handler(req, res) {
//   const { method, cookies } = req;

//   const token = cookies.token

 dbConnect();

    try {
      const products = await Products.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }

}
