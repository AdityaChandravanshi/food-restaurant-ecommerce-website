import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/Cart';
import OrderSummary from './components/OrderSummary';
import ThankYou from './components/ThankYou';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Ensure totalPrice is always a number
  const totalPrice = cartItems.reduce((total, item) => total + (parseFloat(item.price) || 0), 0);

  return (
    <Router>
      <Navbar cartItemCount={cartItems.length} totalPrice={totalPrice} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="/order-summary" element={<OrderSummary cartItems={cartItems} />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;





// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Menu from './components/Menu';
// import Cart from './components/Cart';
// import OrderSummary from './components/OrderSummary';
// import ThankYou from './components/ThankYou';
// import './App.css';

// function App() {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   const removeFromCart = (id) => {
//     setCartItems(cartItems.filter(item => item.id !== id));
//   };

//   return (
//     <Router>
//       <Navbar cartItemCount={cartItems.length} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/menu" element={<Menu addToCart={addToCart} />} />
//         <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
//         <Route path="/order-summary" element={<OrderSummary cartItems={cartItems} />} />
//         <Route path="/thank-you" element={<ThankYou />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
