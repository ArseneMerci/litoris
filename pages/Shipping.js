import {
  List,
  ListItem,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import PageLayout from "../components/PageLayout/PageLayout";
import { Store } from "../utils/Store";

export default function Shipping() {
    const router = useRouter();
    const submitHandler = ({ fullName, address, city, postalCode, phoneNumber, country }) => {
      dispatch({
        type: 'SAVE_SHIPPING_ADDRESS',
        payload: { fullName, address, city, postalCode,phoneNumber, country, location },
      });
      Cookies.set('shippingAddress', {
        fullName,
        address,
        city,
        postalCode,
        phoneNumber,
        country,
        location,
      });
      router.push('/placeorder');
    };
    const {
        handleSubmit,
        control,
        formState: { errors },
        setValue,
        getValues,
      } = useForm();

      const { state, dispatch } = useContext(Store);
    const {
      cart: { shippingAddress },
    } = state;
    const { location } = shippingAddress;
    useEffect(() => {
      setValue('fullName', shippingAddress.fullName);
      setValue('address', shippingAddress.address);
      setValue('city', shippingAddress.city);
      setValue('postalCode', shippingAddress.postalCode);
      setValue('phoneNumber', shippingAddress.phoneNumber);
      setValue('country', shippingAddress.country);
    }, []);
  return (
    <PageLayout title="Shipping Address">
      <form onSubmit={handleSubmit(submitHandler)} style={{maxWidth:800, margin:'0 auto', marginTop:40, marginBottom:80}}>
        <Typography component="h1" variant="h1" style={{fontSize:32}}>
          Shipping Address
        </Typography>
        <List>
          <ListItem>
            <Controller
              name="fullName"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  error={Boolean(errors.fullName)}
                  helperText={
                    errors.fullName
                      ? errors.fullName.type === 'minLength'
                        ? 'Full Name length is more than 1'
                        : 'Full Name is required'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="address"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="address"
                  label="Address"
                  error={Boolean(errors.address)}
                  helperText={
                    errors.address
                      ? errors.address.type === 'minLength'
                        ? 'Address length is more than 1'
                        : 'Address is required'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="city"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="city"
                  label="City"
                  error={Boolean(errors.city)}
                  helperText={
                    errors.city
                      ? errors.city.type === 'minLength'
                        ? 'City length is more than 1'
                        : 'City is required'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="postalCode"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="postalCode"
                  label="Postal Code"
                  error={Boolean(errors.postalCode)}
                  helperText={
                    errors.postalCode
                      ? errors.postalCode.type === 'minLength'
                        ? 'Postal Code length is more than 1'
                        : 'Postal Code is required'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="phoneNumber"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  error={Boolean(errors.phoneNumber)}
                  helperText={
                    errors.phoneNumber
                      ? errors.phoneNumber.type === 'minLength'
                        ? 'Phone Number length is more than 1'
                        : 'Phone Number is required'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="country"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="country"
                  label="Country"
                  error={Boolean(errors.country)}
                  helperText={
                    errors.country
                      ? errors.country.type === 'minLength'
                        ? 'Country length is more than 1'
                        : 'Country is required'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Button
              variant="contained"
              type="button"
              // onClick={chooseLocationHandler}
            >
              Choose on map
            </Button>
            <Typography>
              {/* {location.lat && `${location.lat}, ${location.lat}`} */}
            </Typography>
          </ListItem>
          <ListItem>
            <Button variant="contained" type="submit" fullWidth style={{backgroundColor:"#831842", color:"#fff"}}>
              Continue
            </Button>
          </ListItem>
        </List>
      </form>
    </PageLayout>
  );
}
