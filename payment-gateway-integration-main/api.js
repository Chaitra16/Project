export async function getRequest(url) {
    const response = await fetch(url, {
      method: 'GET',
    });
    return response.json();
  }
  
  export async function postRequest(url, body) {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
    });
    return response.json();
  }
  
  export async function postWithCustomHeader(url, body, headers) {
    const response = await fetch(url, {
      method: 'POST',
      body,
      headers,
    });
    return response.json();
  }
  
  export async function getRequestWithAuth(url, accessToken = null) {
    if (typeof window !== 'undefined') {
      accessToken = localStorage.getItem('accessToken');
    }
  
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `bearer ${accessToken}`,
      },
    });
    return response.json();
  }
  
  export async function postRequestWithAuth(url, body, accessToken = null) {
    const response = await fetch(url, {
      method: 'POST',
      body: body,
      headers: {
        Authorization: `bearer ${accessToken}`,
      },
    });
    return response.json();
  }
  
  


// const express=require('express');
// const app=express();
// app.use(express.json());

// const details=[
//     { accountKey:12},
// ];

// app.get('rest.apisandbox.zuora.com/v1/payment-runs',(req,res) =>{
//     res.send(details);
// });

// app.post('rest.apisandbox.zuora.com/v1/payment-runs',(req,res) =>{
//     const details={
//         accountkey:req.body.accountKey

//     };
//     res.send(details);
// });


// // https://rest.apisandbox.zuora.com/v1/payment-runs