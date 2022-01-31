import React, { useContext } from "react";
import {
  Button,
  Card,
  Grid,
  Link,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";
import NextLink from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import axios from "axios";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import useStyles from "../services/styles";
import { MdKeyboardBackspace } from "react-icons/md";

function CartScreen() {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart);
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
  };
  const removeItemHandler = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };
  const checkoutHandler = () => {
    router.push("/Shipping");
  };

  return (
    <Layout title="Shopping Cart" className="mb-8">
      <Typography component="h1" variant="h1" style={{ fontSize: 32, paddingTop:16 }}>
        Shopping Cart
      </Typography>
      {cart.length === 0 ? (
        <div>
          Cart is empty.{" "}
          <NextLink href="/" passHref>
            <Link>Go Shopping</Link>
          </NextLink>
        </div>
      ) : (
        <Grid container spacing={1}>
          <Grid product md={9} xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Color&Size</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>item(s)</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.products.map((product) => (
                    <TableRow key={product._id}>
                      <TableCell>
                        <NextLink href={`/product/${product.slug}`} passHref>
                          <Link>
                            <Image
                              src={product.frontImage}
                              alt={product.name}
                              width={50}
                              height={50}
                            ></Image>
                          </Link>
                        </NextLink>
                      </TableCell>
                      <TableCell>
                        <NextLink href={`/product/${product.slug}`} passHref>
                          <Link>
                            <Typography>{product.name}</Typography>
                            <div className="text-sm text-gray-500">
                              {product.category.toUpperCase()}
                            </div>
                          </Link>
                        </NextLink>
                      </TableCell>
                      <TableCell>
                        <Typography>{product.color.toUpperCase()}</Typography>
                        <div className="text-sm text-gray-500">
                          {product.size}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Typography>{product.color.toUpperCase()}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>{product.productQuantity}</Typography>
                      </TableCell>
                      <TableCell>{product.item}</TableCell>
                      <TableCell>{product.discPrice}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          className={classes.bgPrimary}
                          onClick={() => removeItemHandler(product)}
                        >
                          x
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Link href="./product" passHref>
                <div className="py-4 mr-8 text-2xl font-bold text-pink-900 flex justify-end cursor-pointer hover:underline hover:underline-pink-900">
                  <MdKeyboardBackspace className="mt-2 animate-bounce" />
                  Continue Shopping
                </div>
              </Link>
            </TableContainer>
          </Grid>
          <Grid md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Typography variant="h2" className={classes.h2}>
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                    items): ${" "}
                    {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Button
                    variant="contained"
                    className={classes.bgPrimary}
                    fullWidth
                    onClick={checkoutHandler}
                  >
                    Check Out
                  </Button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
}
export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });
