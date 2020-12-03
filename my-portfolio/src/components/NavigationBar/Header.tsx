import React from "react";

export const Header = () => {
  return (
    <div className='container'>
      {" "}
      {/*--This is the container DIV for the navbar-->*/}
      <div className='nav-wrapper'>
        <div className='left-side'>
          <div className='nav-link-wrapper active-nav-link'>
            <a href='/'>Home</a>
          </div>
          <div className='nav-link-wrapper'>
            <a href='about'>About</a>
          </div>
        </div>

        <div className='right-side'>
          <div className='brand'>
            <div>ANDRES PARRA</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
