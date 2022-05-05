import React from 'react';
import "./Newnav.css";

const Newnav = () => {
  return (
      <div className='new_nav'>
          <div className='nav_data'>
              <div className="left_data">
                  <p>All</p>
                  <p>Mobiles</p>
                  <p>BestSeller</p>
                  <p>Fashion</p>
                  <p>Customer</p>
                  <p>Electronics</p>
                  <p>Prime</p>
                  <p>Today's Deals</p>
                  <p>Amazon Pay</p>
              </div>
              <div className="right_data">
                  <img src="./nav.jpg" alt="navata" />
              </div>
          </div>
      </div>
  )
}

export default Newnav