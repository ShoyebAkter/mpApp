

import { Form } from "./Form"
import { LineSection } from "./LineSection"
import './ContactUs.css'
import { useEffect } from "react"
export const Contact = () => {
  // useEffect(()=>{
  //   // Tracking Code
  //   (function() {
  //     function trackLinkClick(event) {
  //       var clickedLink = event.target.innerText; // Get the URL of the clicked link
  
  //       // var trackingData = {
  //       //   page: window.location.href,
  //       //   linkClicked: clickedLink,
  //       //   timestamp: new Date().toISOString(),
  //       //   // Add more data as needed
  //       // };
  //       console.log(clickedLink)
  //       // Send the data to your server or analytics service
  //       // Replace the URL with your server endpoint
  //       // var trackingEndpoint = 'https://emapp-backend.vercel.app/collect';
  
  //       // // Use XMLHttpRequest or fetch API to send data to the server
  //       // var xhr = new XMLHttpRequest();
  //       // xhr.open('POST', trackingEndpoint, true);
  //       // xhr.setRequestHeader('Content-Type', 'application/json');
  //       // xhr.send(JSON.stringify(trackingData));
  //     }
  
  //     // Add click event listeners to all links in the document
  //     var buttons = document.querySelectorAll('button');
  //     buttons.forEach(function(link) {
  //       link.addEventListener('click', trackLinkClick);
  //     });
  //   })();
  // },[])
  return (
    <div className="contactUsSec">
      
        <div className="flex-1"><LineSection /></div>
        <div className=" formSection "><Form /></div>
      
    </div>
  )
}
