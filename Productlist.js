import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { getSuggestedQuery } from '@testing-library/react';
import { Box, sizeWidth } from '@mui/system';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, display, fontSize } from "@mui/system";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Avatar from '@mui/material/Avatar';
import { Cartcontext } from './Context/Context';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Productlist() {
  const [user, setUser] = useState([]);
  const [img, setImg] = useState([]);
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState([]);
  const [count, setCount] = useState([]);
  
  
  useEffect(() => {
    const fetchData = async () => {
      const Response = await axios.get("http://localhost:3333/Product");
      console.log(Response);
      console.log(Response.data);
      setUser(Response.data);
    };

    fetchData();
  }, []);

  console.log('hellooooo')
  // const fetchData = async () => {
  //     const response = await axios.get("http://localhost:3333/data").then((response)=>)
  //     console.log(response);
  // }
  // fetch("http://localhost:3333/Product").then((result)=>{
  //   result.json().then((resp)=>{
  //     console.log(resp);
  //     setImg(Response.product);

  //   })
  // })

  // useEffect(() => {
  //   axios.get(`http://localhost:3333/data`).then((result) => {

  //       console.log(result);

  //   });
  // }, []);
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate)

 

  return (
    <>


      <div style={{ marginTop: '50px', fontStyle: 'bold' }}>
        Products
        <Grid container spacing={4} style={{ background: 'white' }}>
          {user.map((item) => {
            item.quantity = 1;
            return (<Grid item xs={6} md={4}>
              <Card>
                <CardContent style={{ background: 'white', borderColor: 'red' }}>
                  <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                    <Box style={{ display: 'flex', justifyContent: 'center', height: '150px', boxsizing: 'border-box' }} >
                      {/* <Avatar alt="Remy Sharp" src={item.Image} /> */}
                      <img style={{ height: '100px' }} src={item.Image}></img>
                    </Box>
                    <Box style={{ display: 'flex', justifyContent: 'center', background: 'white', color: 'black' }}>
                      {/* <h2 style={{fontSize:}}>  {item.id} </h2>  */}
                      <div className='direaction'>
                        <h3> {item.Product_name}{'\n'}</h3>
                        <h3>Rs.{item.price}{'\n'}</h3>
                        <h3>discount   :   {item.discount}%{'\n'}</h3>
                        


                        <button onClick={() => dispatch({ type: 'ADD', payload: item })} style={{ backgroundColor: '#ba68c8', fontWeight: 'bold', border: 'white', color: 'black' }}>Add to Card</button>

                      </div>
                      {/* {item.last_name}<br></br> */}
                      <Box style={{ display: 'flex', justifyContent: 'center' }}>

                      </Box>
                    </Box>
                  </Typography>

                </CardContent>
                {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}

              </Card>
            </Grid>
            );
      })}

        </Grid>
      </div>
    </>
  )
}
