import React from 'react';
import CookieConsent from 'react-cookie-consent';
import "./Cookies.css";

function Cookies() {
  return (
    <div className='cookies-component'>
      <CookieConsent location='bottom'
      buttonText='Accept'
      declineButtonText='Decline'
      cookieName='myCookieConsent'
      style={{background:'black', color:'white'}}
      buttonStyle={{background: 'white', color: 'red'}}
      enableDeclineButton
      expires={30}
      onAccept={()=> {
        console.log("User Accepted Cookies")
      }}
      onDecline={()=> {
        console.log("User Declined Cookies")
      }} >
        This website uses cookies to ensure you get the best experience on our website
      </CookieConsent>

    </div>
  )
}

export default Cookies;
