// import React from 'react'
// import { Button } from 'react-bootstrap'
// import {FaCopyright} from 'react-icons/fa'
// import Navbar from './Navbar';
// import { FiAlertTriangle } from "react-icons/fi";
// import CustomTable1 from './CustomTable1';
// // import Table from './Table';
// import ReCAPTCHA from "react-google-recaptcha";



// const Home = () => {
//   function onChange(value) {
//     console.log("Captcha value:", value);
//   }
//   return (
//     <div>
//     <Navbar/>
//     <div style={{backgroundColor:"#eef2fe"
//   ,width:"100%",
//   // starts
//   // Media query for screens up to 992px
//   "@media (max-width: 992px)": {
//     width: "100%", // Adjust width for smaller screens
//   },

//   // Media query for screens up to 768px
//   "@media (max-width: 768px)": {
//     width: "100%",
//    // Adjust width for smaller screens
//   },

//   // Media query for screens up to 600px
//   "@media (max-width: 600px)": {
//     width: "100%", // Adjust width for even smaller screens
//   },

// // ends
//     }
    
// }>
//       <h4
//   style={{
//     color: "white",
//     backgroundColor: "#9b1fe9",
//     padding: "20px",
//     textAlign: "center",
//     // Media query for screens up to 992px
//     "@media (max-width: 992px)": {
//       padding: "15px",
//       fontSize: "18px",
//     },
//     // Media query for screens up to 768px
//     "@media (max-width: 768px)": {
//       padding: "15px",
//       fontSize: "18px",
//     },
//     // Media query for screens up to 600px
//     "@media (max-width: 600px)": {
//       padding: "10px",
//       fontSize: "16px",
//     },
//   }}
// >
//   Notice here
// </h4>
//       <div className="main" 
//       style={{backgroundColor:"#eef2fe",
//       padding:"70px"}}>
//       <div className='home__header'>
//       <h1
//   style={{
//     color: "#9b1fe9",
//     fontFamily: "Varela Round, sans-serif",
//     fontSize: "28px",
//     fontWeight: "600",
//     marginBottom: "15px",
//     // Media query for screens up to 992px
//     "@media (max-width: 992px)": {
//       fontSize: "24px",
//     },
//     // Media query for screens up to 768px
//     "@media (max-width: 768px)": {
//       fontSize: "20px",
//     },
//     // Media query for screens up to 600px
//     "@media (max-width: 600px)": {
//       fontSize: "18px",
//       marginBottom: "10px",
//     },
//   }}
// >
//   Request testnet LINK
// </h1>
//         {/* <p  className="home_p"
//         style={{color:"#6d7380",
//     fontSize: "16px",
//     lineHeight: "25px",
//     width: "680px",
    
//     // media query starts here

//     "@media (max-width:768px)":{
//       fontSize:"14px",
//       lineHeight:"20px",
//         },
//         "@media (max-width:600px)":{
//           fontSize:"12px",
//           lineHeight:"18px",
//           maxWidth :"100%"
//             },


//     // media query ends here
    
    
    
//     }}>Get testnet LINK for an account on one of the supported blockchain testnets so you can create and test your own oracle and Chainlinked smart contract </p> */}
//      <p
//   style={{
//     color: "#6d7380",
//     fontSize: "16px",
//     lineHeight: "25px",
//     maxWidth: "680px",
//     // Media query for screens up to 992px
//     "@media (max-width: 992px)": {
//       fontSize: "14px",
//       lineHeight: "20px",
//     },
//     // Media query for screens up to 768px
//     "@media (max-width: 768px)": {
//       fontSize: "14px",
//       lineHeight: "20px",
//     },
//     // Media query for screens up to 600px
//     "@media (max-width: 600px)": {
//       fontSize: "12px",
//       lineHeight: "18px",
//       maxWidth: "100%",
//     },
//   }}
// >
//   Get testnet LINK for an account on one of the supported blockchain
//   testnets so you can create and test your own oracle and Chainlinked smart
//   contract
// </p>
//     <br />
//     <br />
//         <div style={{backgroundColor:"white",padding:"80px"}} className='home__form'>
       
//          <p style={{backgroundColor:"#eef2fe",padding:"15px"}}>  <FiAlertTriangle style={{fontSize: "20px",
//     color: "rgb(155, 31, 233)"}}/>    Your wallet is connected to <span style={{fontWeight:"700"}}>Ethereum Kovan</span>,so you are requesting <span style={{fontWeight:"700"}}>Ethereum Kovan</span> Link/ETH </p>
//          {/* <h6 style={{color: "#9b1fe9",
//     fontSize: "13px",
//     fontWeight:"600"}}>Wallet Address</h6>
//         <input type="text" placeholder='Your Wallet Address...'style={{width:"50%",padding:"10px"}} /> */}


// <h6
//     style={{
//       color: "#9b1fe9",
//       fontSize: "13px",
//       fontWeight: "600",
//       marginBottom: "8px",
//     }}
//   >
//     Wallet Address
//   </h6>
//   <input
//     type="text"
//     placeholder="Your Wallet Address..."
//     style={{
//       width: "20%",
//       padding: "2px",
//       // borderRadius:"5px",
//       fontSize: "14px", // Default font size

//       // Media query for screens up to 992px
//       "@media (max-width: 992px)": {
//         fontSize: "12px", // Adjust font size for smaller screens
//         padding: "6px", // Adjust padding for smaller screens
//       },

//       // Media query for screens up to 768px
//       "@media (max-width: 768px)": {
//         fontSize: "12px", // Adjust font size for smaller screens
//         padding: "6px", // Adjust padding for smaller screens
//       },

//       // Media query for screens up to 600px
//       "@media (max-width: 600px)": {
//         fontSize: "10px", // Adjust font size for smaller screens
//         padding: "4px", // Adjust padding for smaller screens
//       },
//     }}
//   />


//         <br /><br />

//         <div>
//         <h6 style={{color: "#9b1fe9",
//     fontSize: "13px",
//     fontWeight:"600",
//     marginBottom: "8px",

//     // Media query for screens up to 992px
//     "@media (max-width: 992px)": {
//       fontSize: "12px", // Adjust font size for smaller screens
//     },

//     // Media query for screens up to 768px
//     "@media (max-width: 768px)": {
//       fontSize: "11px", // Adjust font size for smaller screens
//     },

//     // Media query for screens up to 600px
//     "@media (max-width: 600px)": {
//       fontSize: "10px", // Adjust font size for smaller screens
//     }}}>Request Type</h6>
//         {/* <input type="text" placeholder='20 Test Link'  />
//         <input type="text" style={{marginLeft:"20px"}} placeholder='0.5 ETH'/> */}
//         <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "row",
//                   gap: "1rem",
//                   flexWrap: "wrap",
//                 }}
//               >
//                 <input
//                   type="text"
//                   placeholder="20 Test Link"
//                   style={{
//                     marginBottom: "10px",
//                     padding: "8px", // Add padding for inputs
//                     fontSize: "14px", // Default font size

//                     // Media query for screens up to 992px
//                     "@media (maxWidth: 992px)": {
//                       fontSize: "12px", // Adjust font size for smaller screens
//                       padding: "6px", // Adjust padding for smaller screens
//                     },

//                     // Media query for screens up to 768px
//                     "@media (maxWidth: 768px)": {
//                       fontSize: "12px", // Adjust font size for smaller screens
//                       padding: "6px", // Adjust padding for smaller screens
//                     },

//                     // Media query for screens up to 600px
//                     "@media (maxWidth: 600px)": {
//                       fontSize: "10px", // Adjust font size for smaller screens
//                       padding: "4px", // Adjust padding for smaller screens
//                     },
//                   }}
//                 />
//                 <input
//                   type="text"
//                   placeholder="0.5 ETH"
//                   style={{
//                     marginBottom: "10px",
//                     padding: "8px", // Add padding for inputs
//                     fontSize: "14px", // Default font size

//                     // Media query for screens up to 992px
//                     "@media (maxWidth: 992px)": {
//                       fontSize: "12px", // Adjust font size for smaller screens
//                       padding: "6px", // Adjust padding for smaller screens
//                     },

//                     // Media query for screens up to 768px
//                     "@media (maxWidth: 768px)": {
//                       fontSize: "12px", // Adjust font size for smaller screens
//                       padding: "6px", // Adjust padding for smaller screens
//                     },

//                     // Media query for screens up to 600px
//                     "@media (maxWidth: 600px)": {
//                       fontSize: "10px", // Adjust font size for smaller screens
//                       padding: "4px", // Adjust padding for smaller screens
//                     },
//                   }}
//                 />
//               </div>
//               </div>
//         <br/>
//         <br />

//         {/* responsive recaptcha starts here */}
//         <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   padding: "20px",
//                   width: "100%", // Adjust padding as needed

//                   // Media query for screens up to 992px
//                   "@media (max-width: 992px)": {
//                     // padding: "15px",
//                     maxWidth: "240px", // Adjust padding for smaller screens
//                   },

//                   // Media query for screens up to 768px
//                   "@media (max-width: 768px)": {
//                     padding: "10px", // Adjust padding for smaller screens
//                   },
//                   "@media (max-width: 600px)": {
//                       width: "100%", // Use full width for the smallest screens
//                     },
//                 }}
//               >
                
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <ReCAPTCHA
//                       sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
//                       onChange={onChange}
//                     />
//                   </div>
                
//               </div>
//         {/* responsive recaptcha ends here */}
//         {/* <div className='recaptcha'>       <ReCAPTCHA   sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
//     onChange={onChange}
//   />
//         </div> */}

//         {/* responsive button starts here */}
//         <Button
//                 style={{
//                   color: "white",
//                   backgroundColor: "#9b1fe9",

//                   // textAlign:"center",
//                   // width: "100%", // Set width to 100% for responsiveness

//                   // Media query for screens up to 992px
//                   "@media (max-width: 992px)": {
//                     width: "80%", // Adjust width for smaller screens
//                   },

//                   // Media query for screens up to 768px
//                   "@media (max-width: 768px)": {
//                     width: "70%",
//                    // Adjust width for smaller screens
//                   },

//                   // Media query for screens up to 600px
//                   "@media (max-width: 600px)": {
//                     width: "100%",
                    
//                      // Adjust width for even smaller screens
//                   },
//                 }}
//               >
//                 Send Request
//               </Button>

//         {/* responsive button ends here */}



//         {/* <Button style={{color:"white",backgroundColor:"#9b1fe9",width:"15%",marginTop:"20px"}}>Send Request</Button> */}
//         </div>
//       </div>
//       {/* <br /> */}
      


//       <CustomTable1 />


//       </div>
    
//     <footer style={{color: "#000",
//     fontSize: "13px",
//     padding: "25px 0",
//     textAlign: "center",
//     backgroundColor:"white"}}>
//     <p><FaCopyright/> copyright 2023 - All Right Reserved by Faucet</p>
//   </footer>
//   </div>

//    </div>
//   )
// }

// export default Home





import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

import Navbar from "./Navbar";
import Button from "react-bootstrap/Button";

import { FaCopyright } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";
import CustomTable1 from "./CustomTable1";

const Home = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div>
      <Navbar />

      {/* <div className="d-grid gap-2">
        <Button
          style={{
            backgroundColor: "#9b1fe9",
            border: "none",

            padding: "25px",
          }}
        >
          Notice Here
        </Button> */}

      <div style={{ backgroundColor: "#eef2fe" }}>
        <h4
          style={{
            color: "white",
            backgroundColor: "#9b1fe9",
            padding: "20px",
            textAlign: "center",
            // Media query for screens up to 992px
            "@media (maxWidth: 992px)": {
              padding: "15px",
              fontSize: "18px",
            },
            // Media query for screens up to 768px
            "@media (maxWidth: 768px)": {
              padding: "15px",
              fontSize: "18px",
            },
            // Media query for screens up to 600px
            "@media (maxWidth: 600px)": {
              padding: "10px",
              fontSize: "16px",
            
            },
          }}
        >
          Notice here
        </h4>

        <div
          className="main"
          style={{ backgroundColor: "#eef2fe", padding: "50px" }}
        >
          <div className="home__header">
            <h1
              style={{
                color: "#9b1fe9",
                fontFamily: "Varela Round, sans-serif",
                fontSize: "28px",
                fontWeight: "600",
                marginBottom: "15px",
                // Media query for screens up to 992px
                "@media (maxWidth: 992px)": {
                  fontSize: "24px",
                },
                // Media query for screens up to 768px
                "@media (maxWidth: 768px)": {
                  fontSize: "20px",
                },
                // Media query for screens up to 600px
                "@media (maxWidth: 600px)": {
                  fontSize: "18px",
                  marginBottom: "10px",
                },
              }}
            >
              Request testnet LINK
            </h1>

            <p
              style={{
                color: "#6d7380",
                fontSize: "16px",
                lineHeight: "25px",
                maxWidth: "680px",
                // Media query for screens up to 992px
                "@media (maxWidth: 992px)": {
                  fontSize: "14px",
                  lineHeight: "20px",
                },
                // Media query for screens up to 768px
                "@media (maxWidth: 768px)": {
                  fontSize: "14px",
                  lineHeight: "20px",
                },
                // Media query for screens up to 600px
                "@media (maxWidth: 600px)": {
                  fontSize: "12px",
                  lineHeight: "18px",
                  maxWidth: "100%",
                },
              }}
            >
              Get testnet LINK for an account on one of the supported blockchain
              testnets so you can create and test your own oracle and
              Chainlinked smart contract
            </p>

            <br />
            <br />
            <div
              style={{ backgroundColor: "white", padding: "50px" }}
              className="home__form"
            >
              <p
                style={{
                  backgroundColor: "#eef2fe",
                  padding: "10px",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  fontSize: "14px", // Default font size
                  lineHeight: "20px", // Default line height

                  // Media query for screens up to 992px
                  "@media (maxWidth: 992px)": {
                    fontSize: "12px", // Adjust font size for smaller screens
                    padding: "8px", // Adjust padding for smaller screens
                  },

                  // Media query for screens up to 768px
                  "@media (maxWidth: 768px)": {
                    fontSize: "12px", // Adjust font size for smaller screens
                    padding: "8px", // Adjust padding for smaller screens
                  },

                  // Media query for screens up to 600px
                  "@media (maxWidth: 600px)": {
                    fontSize: "10px", // Adjust font size for smaller screens
                    padding: "6px",
                    
                     // Adjust padding for smaller screens
                  },
                }}
              >
                <FiAlertTriangle
                  style={{
                    fontSize: "18px",
                    color: "rgb(155, 31, 233)",
                    marginRight: "8px",
                  }}
                />
                Your wallet is connected to 
                <span style={{ fontWeight: "700" }}> Ethereum Kovan</span>so
                you are requesting{" "}
                <span style={{ fontWeight: "700" }}> Ethereum Kovan</span>{" "}
                Link/ETH{" "}
              </p>

              <h6
                style={{
                  color: "#9b1fe9",
                  fontSize: "13px",
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                Wallet Address
              </h6>
              <input
                type="text"
                placeholder="Your Wallet Address..."
                style={{
                  // width: "50%",
                  padding: "8px",
                  fontSize: "14px", // Default font size

                  // Media query for screens up to 992px
                  "@media (maxWidth: 992px)": {
                    fontSize: "12px", // Adjust font size for smaller screens
                    padding: "6px", // Adjust padding for smaller screens
                  },

                  // Media query for screens up to 768px
                  "@media (maxWidth: 768px)": {
                    fontSize: "12px", // Adjust font size for smaller screens
                    padding: "6px", // Adjust padding for smaller screens
                  },

                  // Media query for screens up to 600px
                  "@media (maxWidth: 600px)": {
                    fontSize: "10px", // Adjust font size for smaller screens
                    padding: "4px", // Adjust padding for smaller screens
                  },
                }}
              />
              <br />
              <br />
              <h6
                style={{
                  color: "#9b1fe9",
                  fontSize: "13px",
                  fontWeight: "600",
                  marginBottom: "8px",

                  // Media query for screens up to 992px
                  "@media (maxWidth: 992px)": {
                    fontSize: "12px", // Adjust font size for smaller screens
                  },

                  // Media query for screens up to 768px
                  "@media (maxWidth: 768px)": {
                    fontSize: "11px", // Adjust font size for smaller screens
                  },

                  // Media query for screens up to 600px
                  "@media (maxWidth: 600px)": {
                    fontSize: "10px", // Adjust font size for smaller screens
                  },
                }}
              >
                Request Type
              </h6>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <input
                  type="text"
                  placeholder="20 Test Link"
                  style={{
                    marginBottom: "10px",
                    padding: "8px", // Add padding for inputs
                    fontSize: "14px", // Default font size

                    // Media query for screens up to 992px
                    "@media (maxWidth: 992px)": {
                      fontSize: "12px", // Adjust font size for smaller screens
                      padding: "6px", // Adjust padding for smaller screens
                    },

                    // Media query for screens up to 768px
                    "@media (maxWidth: 768px)": {
                      fontSize: "12px", // Adjust font size for smaller screens
                      padding: "6px", // Adjust padding for smaller screens
                    },

                    // Media query for screens up to 600px
                    "@media (maxWidth: 600px)": {
                      fontSize: "10px", // Adjust font size for smaller screens
                      padding: "4px", // Adjust padding for smaller screens
                    },
                  }}
                />
                <input
                  type="text"
                  placeholder="0.5 ETH"
                  style={{
                    marginBottom: "10px",
                    padding: "8px", // Add padding for inputs
                    fontSize: "14px", // Default font size

                    // Media query for screens up to 992px
                    "@media (maxWidth: 992px)": {
                      fontSize: "12px", // Adjust font size for smaller screens
                      padding: "6px", // Adjust padding for smaller screens
                    },

                    // Media query for screens up to 768px
                    "@media (maxWidth: 768px)": {
                      fontSize: "12px", // Adjust font size for smaller screens
                      padding: "6px", // Adjust padding for smaller screens
                    },

                    // Media query for screens up to 600px
                    "@media (maxWidth: 600px)": {
                      fontSize: "10px", // Adjust font size for smaller screens
                      padding: "4px", // Adjust padding for smaller screens
                    },
                  }}
                />
              </div>

              <br />
              <br />
              {/* <div
              // style={{
              //   display: "flex",
              //   justifyContent: "center",
              //   padding: "20px", // Adjust padding as needed

              //   // Media query for screens up to 992px
              //   "@media (maxWidth: 992px)": {
              //     padding: "15px", // Adjust padding for smaller screens
              //   },

              //   // Media query for screens up to 768px
              //   "@media (maxWidth: 768px)": {
              //     padding: "10px", // Adjust padding for smaller screens
              //   },
              // }}
              >
                <div
                  style={{
                    maxWidth: "300px", // Set maximum width as needed

                    // Media query for screens up to 992px
                    "@media (maxWidth: 992px)": {
                      maxWidth: "140px", // Adjust maximum width for smaller screens
                    },

                    // Media query for screens up to 600px
                    "@media (maxWidth: 600px)": {
                      maxWidth: "100%", // Use full width for the smallest screens
                    },
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <ReCAPTCHA
                      sitekey="6LcK5aYnAAAAAKolEh09vKq2DBQtbcc-MT7zVF6I"
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div> */}

<div className='recaptcha'>       <ReCAPTCHA   sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
    onChange={onChange}
  />
  {/* 6LdP8aYnAAAAAFnnDPsdBLgP1lNw5i7GnGpMjXsh */}
       
        </div>

              <Button
                style={{
                  color: "white",
                  backgroundColor: "#9b1fe9",
                  //  width: "100%",// Set width to 100% for responsiveness

                  // Media query for screens up to 768px
                  "@media (maxWidth: 768px)": {
                    width: "50%", // Adjust width for smaller screens
                  },

                  // Media query for screens up to 600px
                  "@media (maxWidth: 600px)": {
                    width: "100%", // Adjust width for even smaller screens
                  },
                }}
              >
                Send Request
              </Button>
            </div>
          </div>

          {/* <div className="home__table" style={{backgroundColor:"white",padding:"10px"}}>
        <h5 >Request History</h5>
           */}

          <CustomTable1 />
        </div>

        <footer
          style={{
            textAlign: "center",
            background: "white",
            padding: "25px 0",
            fontSize: "13px",
          }}
        >
          <p>
            <FaCopyright /> copyright 2023 - All Right Reserved by Faucet
          </p>
        </footer>
      </div>
    </div>
  );
};
export default Home;
