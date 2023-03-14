var params = {
    tenantId:46463,
    id:"8ad095b883ea467b0183ebb9513a5d39", 
    // id: process.env.NEXT_PUBLIC_ZUORA_HOSTED_PAGE_ID,
    token:"UMlbyuNePN2gbufagFuEKazY7EtZ6tU9",
    signature:"D8w0kC9XdEA6ECBjH6aALkDnygJKNcxTeDUN+27DsDKlBCFik4NwovgQV0EjDVdMg2nKAEjb1Lt7nkzCrokmxTQ64BgW+ECaOpZBh9GMyVeS8UyeyR7AiixYQxMsv+wWU6K9ctpcNg3IxJgR7khDEQ67wvDe4o0KYllMIyuUGukASjnNlM5H1ooMhHvZvsFOWvfDK/afRiN0TVSnZkc8pxJFIR9v8EX7dyDObNszl0j8iPD8FohyijuZZ1u5G96ACB7SVQKqXe1Ftm8abgqUXajBVLcT2lkC/RTbUB9g8qaGIUEOj/G6xtO8caEXAZbLMCwquniUU294eFsStVyS8g==",
    style:"inline",
    key:"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAlOBATdUNHKTwWM0OZYl/vjHOugxOwjybsw+6u8Tddil/u1Z0drY3O2WV+Ff9KKzxLBm7Y51I1Ys3K+ztVttwcUh9qnic5IvW+/zFqDMwVwTODIbxtKXNBC1DwVdKjoq+VuG3BCC+89oIyK/L056cnA7DFGYHXekXM42jd2USCQeGa2oesjKZ/eQQgKSFomj9+NkfFMuA5RGMDcgSnN2ckFAdhU4Fij108x18GR5CXtvreOWkhv7Tsmt4mdVfm606nasdo7C6b256h6MGppJoMPRKh0+6T0aEkmDyjNRvnNA8CC4/O2PGj751UWqvujN37t7Ta8tKARpJrDAUUTALzwIDAQAB",
    submitEnabled:"true", 
    // url:`${process.env.NEXT_PUBLIC_ZUORA_PAYMENT_URL}/apps/PublicHostedPageLite.do`,
    // paymentGateway: process.env.NEXT_PUBLIC_ZUORA_PAYMENT_GATEWAY_NAME,
    // locale:"en_US", 
    // param_supportedTypes:"AmericanExpress,JCB,Visa,MasterCard,Discover,Dankort",
    url:"https://apisandbox.zuora.com/apps/PublicHostedPageLite.do", 
    paymentGateway:"Demo Test Gateway"//payment gateway name
 };
 
 // 
 // function callback(response) {
 //    var redirectUrl = "";
 //    if(response.success) {
 //       alert("Success"); 
 //    } 
 //    else {
 //       if(response.responseFrom == "Response_From_Submit_Page") {
 //          // Handle the error response when the Payment Page submission failed.
 //          alert("Failure");
 //       }
 //       else{
 //          alert("Request failed");
 //          // Handle the error response when the Payment Page request failed.
 //         }
 //    }
 //    // window.location.replace(redirectUrl);
 // }
 
 function callback(response) {
     if (response.success) {
       if (response.refId) {
         updateFormData({
           hpmCreditCardPaymentMethodId: response.refId,
         });
         alert("Success");
       }
     } else {
       alert(
         'errorcode=' +
           response.errorCode +
           ', errorMessage=' +
           response.errorMessage
       );
     }
   }
 
 
         
 function loadHostedPage() {
    Z.setEventHandler("onloadCallback", function() {
       // do something when HPM iframe is loaded.
       // console.log("HPM page is Loaded");
       setLoading(false);
    });
 //    console.log("Before");
    // Z.render(params,prepopulateFields,callback);
    Z.render(params,  prepopulateFields,callback);
 //   console.log("after");
 // alert("We are here");  
 }
 return (
  
   <React.Fragment>
     <Head>
       <title>UJET Packages / Payment Details | UJET</title>
       <meta name="description" content="" />
       <link rel="icon" href="/favicon.ico" />
       {/* import external javascript */}
       <script
         type="text/javascript"
         src="https://static.zuora.com/Resources/libs/hosted/1.3.1/zuora-min.js"
       ></script>
       <meta name="robots" content="noindex, nofollow" />
     </Head>

     <FooterMenu />
   </React.Fragment>
   
 );

