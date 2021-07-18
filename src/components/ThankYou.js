import React from 'react';
import './thank-you.css'

const handleClick = () => {
  setTimeout(() => {
    window.location.href = 'https://parsons-stg.phenompro.com/global/en';
  }, 2000);
}

const ThankYou = () => (
  <div contentEditable="false" className="wrapper">
    <div className="col-1" contentEditable="false">
      <img
        className="tyBgImage"
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'block',
          width: '20%',
        }}
        alt=""
        src={`${process.env.PUBLIC_URL || ''}/img/thankyou.png`}
      />
    </div>
    <div contentEditable="false" className="col-2">
      <div className="thankyou-wrapper">
        <p
          className="thank-you-icon"
          style={{ textAlign: 'center' }}
        >
          <img
            className="notActiveTyIcon"
            style={{ display: 'none' }}
            src={`${process.env.PUBLIC_URL || ''}/img/thankyou.png`}
            alt=""
            width="153"
            height="156"
          />
        </p>
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <h1
            className="thankyou-main-text ty-text"
            style={{ textAlign: 'center' }}
          >
            Thank You!
          </h1>
          <p
            className="thankyou-sub-text ty-text"
            style={{ textAlign: 'center' }}
            data-mce-style="text-align: center;"
          >
            Your submission has been received.
          </p>
        </div>
      </div>
    </div>
    {/*<div className="col-3" 
      style={{
        textAlign: 'center',
        marginLeft: '300px'
      }}>
      <button type="button" className="btn-primary"
        onClick={() => handleClick()}
        style={{color: '#fff',
          backgroundColor: '#0094e3',
          borderColor: '#0094e3',
          width: '150px',
          height: '40px'}}>
          Go to Homepage
      </button>
    </div>*/}
  </div>
);

export default ThankYou;
