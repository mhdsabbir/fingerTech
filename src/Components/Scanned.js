import React, { useRef, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import "../UserCollection/UserCollection.css";

const Scanned = () => {
    let barcode = '';
  let interval;

    document.addEventListener('keydown', function(evt){
        if (interval)
          clearInterval(interval);
        if(evt.code == 'Enter'){
          if (barcode)
          handleBarcode(barcode);
          barcode = '';
          return;
        }
        if(evt.code != 'Shift')
        barcode += evt.key;
        interval = setInterval(() => barcode = '', 20);
        
    });
    function handleBarcode(scanned_barcode){
        document.querySelector('#last-barcode').innerHTML = scanned_barcode;
        
        
    }

    return (
        <>
        <p>scan here only</p>
        <div id="#last-barcode">

        </div>
        </>
    );
};

export default Scanned;