import React from 'react';

const ThankYou = () => (
  <div contentEditable="true" className="wrapper">
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
        src="https://cdn.jotfor.ms/img/Thankyou-iconV2.png?v=0.1"
      />
    </div>
    <div contentEditable="true" className="col-2">
      <div className="thankyou-wrapper">
        <p
          className="thank-you-icon"
          style={{ textAlign: 'center' }}
        >
          <img
            className="notActiveTyIcon"
            style={{ display: 'none' }}
            src="https://cdn.jotfor.ms/img/Thankyou-iconV2.png?v=0.1"
            alt=""
            width="153"
            height="156"
            data-mce-src="https://cdn.jotfor.ms/img/Thankyou-iconV2.png?v=0.1"
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
  </div>
);

export default ThankYou;
