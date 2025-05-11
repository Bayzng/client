import React from 'react'
import './Offer.scss'

const Offer = () => {
  return (
    <div className='offer'>

      <div className="allcard">
        
        <div className='first'>
          <div class="route" id="buy"></div>
          <section class="giftcard">
            <section class="giftcard-cover">
              <h1>Customized Card</h1>
            </section>
            <div class="giftcard-content">
              <h2>Welcome Giftify:</h2>
              <address>
                <p>This solution empowers you to personalize any gift card you desire.</p>
              </address>
              <div class="subtext">Available to ship: 1 business day</div>
            </div>
            <footer class="giftcard-footer">
              <div class="giftcard-text">
                <h1>Gift Card</h1>
                <h2>$00.00</h2>
              </div>
              <div class="ribbon">
                <div class="giftwrap">
                  <a href="#buy" class="button">Review</a>
                </div>
                
              </div>
              <div class="giftcard-info">
                <div>
                  <a href="#" class="button secondary">Try Out</a>
                </div>
              </div>
            </footer>
          </section>


        </div>
        <div className='first'>
          <div class="route" id="buy"></div>
          <section class="giftcard">
            <section class="giftcard-cover">
            <h1>Activate Card</h1>
            </section>
            <div class="giftcard-content">
              <h2>Your order will be shipped to:</h2>
              <address>
                
              </address>
              <div class="subtext">Available to ship: 1 business day</div>
            </div>
            <footer class="giftcard-footer">
              <div class="giftcard-text">
                <h1>Gift Card</h1>
                <h2>$00.00</h2>
              </div>
              <div class="ribbon">
                <div class="giftwrap">
                  <a href="#buy" class="button">Review</a>
                </div>
                <div class="bow">
                  <i class="fa fa-bookmark"></i>
                  <i class="fa fa-bookmark"></i>
                </div>
              </div>
              <div class="giftcard-info">
                <div>
                  <input type="text" name="" id="" placeholder="Enter a gift message" />
                </div>
                <div>
                  <a href="#" class="button secondary">Checkout</a>
                </div>
              </div>
            </footer>
          </section>


        </div>
        <div className='first'>
          <div class="route" id="buy"></div>
          <section class="giftcard">
            <section class="giftcard-cover">
              <h1>Purchased Card</h1>
            </section>
            <div class="giftcard-content">
              <h2>Your order will be shipped to:</h2>
              <address>
                <h3>David Khourshid</h3>
                <a href="https://www.github.com/davidkpiano" target="_blank">www.github.com/davidkpiano</a>
                <a href="https://www.twitter.com/davidkpiano" target="_blank">www.twitter.com/davidkpiano</a>
              </address>
              <div class="subtext">Available to ship: 1 business day</div>
            </div>
            <footer class="giftcard-footer">
              <div class="giftcard-text">
                <h1>Gift Card</h1>
                <h2>$00.00</h2>
              </div>
              <div class="ribbon">
                <div class="giftwrap">
                  <a href="#buy" class="button">Review</a>
                </div>
                <div class="bow">
                  <i class="fa fa-bookmark"></i>
                  <i class="fa fa-bookmark"></i>
                </div>
              </div>
              <div class="giftcard-info">
                <div>
                  <input type="text" name="" id="" placeholder="Enter a gift message" />
                </div>
                <div>
                  <a href="#" class="button secondary">Checkout</a>
                </div>
              </div>
            </footer>
          </section>


        </div>
      </div>
    </div>
  )
}

export default Offer