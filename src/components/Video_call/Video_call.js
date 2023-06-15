import * as React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { APP_ID, SERVER_SECRET } from './Constant';
import "../Navbar/navbar_style.css"
import { Link } from 'react-router-dom'
import { HambergerMenu } from "iconsax-react";
import { CloseCircle } from "iconsax-react";
import "./video_style.css"



function randomID(len) {
  let result = '';
  if (result) return result;
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(
  url = window.location.href
) {
  let urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}

export default function App() {
      const roomID = "etiquette_academy";
      let myMeeting = async (element) => {
     // generate Kit Token
      const appID = APP_ID;
      const serverSecret = SERVER_SECRET;
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(), "EtiquetteAcademy");


     // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, 
        },
      });


  };

  

  return (
      <>
      <div className="none"></div>
        <div
          className="myCallContainer"
          ref={myMeeting}
          style={{ width: '100vw', height: '100vh' }}
        ></div>
        <Link to="/">
          <CloseCircle  className='close_btn' color="red" size="60"/>

        </Link>

      </>

  );
}