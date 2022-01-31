import React, { useContext, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import NextLink from 'next/link';
import Image from 'next/image';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import {
  Grid,
  TableContainer,
  Table,
  Typography,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Link,
  CircularProgress,
  Button,
  Card,
  List,
  ListItem,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import useStyles from '../services/styles';
import PageLayout from '../components/PageLayout/PageLayout';
import Cookies from 'js-cookie';
import { Store } from '../utils/Store';

function PlaceOrder() {
  const classes = useStyles();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext(Store);
  const {
    cart: { shippingAddress },
  } = state;

  const config = {
    public_key: 'FLWPUBK-2fc6949958ce93a4f4d54239a2c5745e-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'RWF',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'k.plaz66@gmail.com',
      phonenumber: '+250783639943',
      name: 'Emmanuel Murenzi',
    },
    customizations: {
        title: 'Lito Ris Design',
        description: 'Payment for items in cart',
        logo: "https://live.staticflickr.com/65535/51829811166_886fa8ea91_m.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  return (
    <PageLayout title="Place Order" >
        <div className='bg-gray-400 my-2 mb-8 -my-2 p-8 mx-auto'>
      <Typography component="h1" variant="h1" className={classes.h1}>
        Place Order
      </Typography>

      <Grid container spacing={1}>
        <Grid item md={9} xs={12}>
          <Card className={classes.section}>
            <List>
              <ListItem>
                <Typography component="h2" variant="h2"  className={classes.h2}>
                  Shipping Address
                </Typography>
              </ListItem>
              <ListItem>
              {shippingAddress.fullName}, {shippingAddress.address},{' '}
                {shippingAddress.city}, {shippingAddress.postalCode},{' '}
                {shippingAddress.country}
              </ListItem>
            </List>
          </Card>
          <Card className={classes.section}>
            <List>
              <ListItem>
                <Typography component="h2" variant="h2"  className={classes.h2}>
                  Order Items
                </Typography>
              </ListItem>
              <ListItem>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Price</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {/* {cartItems.map((item) => ( */}
                        <TableRow >
                          <TableCell>
                            <NextLink href="#" passHref>
                              <Link>
                                <Image
                                  src="/images/1.jpeg"
                                  alt="{item.name}"
                                  width={50}
                                  height={50}
                                ></Image>
                              </Link>
                            </NextLink>
                          </TableCell>

                          <TableCell>
                            <NextLink href="#" passHref>
                              <Link>
                                <Typography>item.name</Typography>
                              </Link>
                            </NextLink>
                          </TableCell>
                          <TableCell align="right">
                            <Typography>item.quantity</Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography>$item.price</Typography>
                          </TableCell>
                        </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </ListItem>
            </List>
          </Card>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card className={classes.section}>
            <List>
              <ListItem>
                <Typography variant="h2"  className={classes.h2}>Order Summary</Typography>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Items:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="right">$itemsPrice</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Tax:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="right">$taxPrice</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Shipping:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="right">$shippingPrice</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>
                      <strong>Total:</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="right">
                      <strong>$totalPrice</strong>
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button
                  onClick={() => {
                    handleFlutterPayment({
                      callback: (response) => {
                         console.log(response);
                          closePaymentModal() // this will close the modal programmatically
                      },
                      onClose: () => {},
                    });
                  }}
                  variant="contained"
                //   color="primary"
                  className={classes.bgPrimary}
                  fullWidth
                >
                  Place Order
                </Button>
              </ListItem>
              {loading && (
                <ListItem>
                  <CircularProgress />
                </ListItem>
              )}
            </List>
          </Card>
        </Grid>
      </Grid>
      </div>
    </PageLayout>
  );
}

export default dynamic(() => Promise.resolve(PlaceOrder), { ssr: false });
