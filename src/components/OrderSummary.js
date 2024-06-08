import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSummary = ({ cartItems }) => {
  const navigate = useNavigate();
  
  // Calculate the total cost and ensure it's a number
  const totalCost = cartItems.reduce((total, item) => total + (parseFloat(item.price) || 0), 0);

  const handleCheckout = () => {
    // Handle checkout process
    navigate('/thank-you');
  };

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <span>{item.name} - ${parseFloat(item.price).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalCost.toFixed(2)}</h3>
      <button onClick={handleCheckout}>Save and Checkout</button>
      <button onClick={() => navigate('/menu')}>Cancel</button>
    </div>
  );
}

export default OrderSummary;





// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const OrderSummary = ({ cartItems }) => {
//   const navigate = useNavigate();
//   const totalCost = cartItems.reduce((total, item) => total + item.price, 0);

//   const handleCheckout = () => {
//     // Handle checkout process
//     navigate('/thank-you');
//   };

//   return (
//     <div className="order-summary">
//       <h2>Order Summary</h2>
//       <ul>
//         {cartItems.map(item => (
//           <li key={item.id}>
//             <span>{item.name} - ${item.price}</span>
//           </li>
//         ))}
//       </ul>
//       <h3>Total: ${totalCost}</h3>
//       <button onClick={handleCheckout}>Save and Checkout</button>
//       <button onClick={() => navigate('/menu')}>Cancel</button>
//     </div>
//   );
// }

// export default OrderSummary;
