import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout';

import {
  Button,
  FormControl,
  FormControlLabel,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';
import PageLayout from '../components/PageLayout/PageLayout';
import useStyles from '../services/styles';

export default function Payment() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState('');

 
  const submitHandler = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
        alert('Payment method is required');
      } else {
        router.push('/placeorder');
      }
  };
  const classes = useStyles();
  return (
    <PageLayout title="Payment Method">
      <form className={classes.form} onSubmit={submitHandler} style={{paddingBottom:60}}>
        <Typography component="h1" variant="h1" style={{fontSize:32}}>
          Payment Method
        </Typography>
        <List>
          <ListItem>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="Payment Method"
                name="paymentMethod"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <FormControlLabel
                  label="PayPal"
                  value="PayPal"
                  control={<Radio />}
                ></FormControlLabel>
                <FormControlLabel
                  label="Stripe"
                  value="Stripe"
                  control={<Radio />}
                ></FormControlLabel>
                <FormControlLabel
                  label="MobileMoney/Visa/MaterCard"
                  value="MobileMoney/Visa/MaterCard"
                  control={<Radio />}
                ></FormControlLabel>
              </RadioGroup>
            </FormControl>
          </ListItem>
          <ListItem>
          {/* <Button halfWidth type="submit" variant="contained" color="primary">
            MobileMoney/Visa/MaterCard
            </Button> */}
          </ListItem>
          {/* <FlutterWavePayment/> */}
          <ListItem>
            <Button fullWidth type="submit" variant="contained" style={{backgroundColor:"#831842", color:"#fff"}}>
              Continue
            </Button>
          </ListItem>
          <ListItem>
            <Button
              fullWidth
              type="button"
              variant="contained"
              onClick={() => router.push('/Shipping')}
            >
              Back
            </Button>
          </ListItem>
        </List>
      </form>
    </PageLayout>
  );
}
