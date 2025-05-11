import React, { useState } from 'react';
import design from "../../../../assets/gift.png"
import designtwo from "../../../../assets/gift2.png"
import './Content.css';

const Content = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [inputValues, setInputValues] = useState({
    from: '',
    to: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleCardFlip = () => {
    setIsFlipped(true);
  };

  const handleClose = () => {
    setIsFlipped(false);
  };

  const handleSend = () => {
    setIsSent(true);
    setIsVisible(false);

    setInputValues({
      from: '',
      to: '',
      message: '',
    });

    setTimeout(() => {
      setIsSent(false);
      setIsVisible(true);
      setIsFlipped(false);
    }, 2400);
  };

  return (
    <div className="contentcontainer">
      <div className='design'>
        <img src={design} alt="" />
      </div>
      <div className='designtwo'>
        <img src={designtwo} alt="" />
      </div>
      <div className="wrap">
      
      <div className="gift-card-box">
        {isSent && (
          <div className="confirmation visible">
            <svg
              className="all-good"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 130.2 130.2"
            >
              <circle
                className="path circle"
                fill="none"
                stroke="#777"
                strokeWidth="6"
                strokeMiterlimit="10"
                cx="65.1"
                cy="65.1"
                r="62.1"
              />
              <polyline
                className="path check"
                fill="none"
                stroke="#777"
                strokeWidth="6"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="100.2,40.2 51.5,88.8 29.8,67.5"
              />
            </svg>
            <p className="success">So Easy, Get Started</p>
          </div>
        )}

        <div className={`card ${isFlipped ? 'flip' : ''} ${isVisible ? 'visible' : 'hidden'}`}>
          <div className="front">
            <div className="card-front-text">
              <h1>Giftify</h1>
            </div>
          </div>

          <div className="back">
            <form className="form" autoComplete="off" noValidate>
              <fieldset>
                <label htmlFor="card-number">From:</label>
                <input
                  type="text"
                  className="input-card-info"
                  name="from"
                  required
                  maxLength="30"
                  value={inputValues.from}
                  onChange={handleInputChange}
                  autoFocus
                />
              </fieldset>
              <fieldset>
                <label htmlFor="card-holder">To:</label>
                <input
                  type="text"
                  className="input-card-info"
                  required
                  name="to"
                  maxLength="30"
                  value={inputValues.to}
                  onChange={handleInputChange}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="card-holder">Message:</label>
                <input
                  type="text"
                  required
                  className="input-card-info input-card-info--lg"
                  name="message"
                  maxLength="80"
                  value={inputValues.message}
                  onChange={handleInputChange}
                />
              </fieldset>
            </form>
          </div>
        </div>

        <div className="button-cnt btn">
          {!isFlipped && (
            <button
              id="btn-card-flip"
              className="primary-cta"
              onClick={handleCardFlip}
            >
              Demo Customise
            </button>
          )}
          {isFlipped && (
            <>
              <button
                id="close"
                className="secondary-cta secondary-cta--done"
                onClick={handleClose}
              >
                Close
              </button>
              <button
                id="btn-card-send"
                className="secondary-cta secondary-cta--send"
                onClick={handleSend}
              >
                Send
              </button>
            </>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Content;
