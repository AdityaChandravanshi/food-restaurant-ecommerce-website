import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";

const Navbar = ({ cartItemCount, totalPrice }) => {
  // Convert totalPrice to a fixed number if it's not already a number
  const displayTotalPrice = Number.isNaN(Number(totalPrice)) ? 0 : Number(totalPrice);

  return (
    <nav>
      <div className="nav-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
        </svg>
        <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', float: 'right' }}>Food Restaurant</h3>
      </div>
      <h1>Welcome to Food Restaurant</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/cart">
          <FiShoppingCart /> ({cartItemCount}) - ${displayTotalPrice.toFixed(2)}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;






// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FiShoppingCart } from "react-icons/fi";


// const Navbar = ({ cartItemCount }) => {
//   return (
//     <nav>
//       <div className="nav-icon">
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/></svg><h3 style={{fontSize: '1.8rem', fontWeight: 'bold', float: 'right'}}>Food Restaurant</h3>
//       </div>
//       <h1>Welcome to Food Restaurant</h1>
//       <div className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/menu">Menu</Link>
//         <Link to="/cart"><FiShoppingCart /> ({cartItemCount})</Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
