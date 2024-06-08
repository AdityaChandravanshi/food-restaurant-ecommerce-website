import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart }) => {
  const navigate = useNavigate();
  
  // Calculate the total cost and ensure it's a number
  const totalCost = cartItems.reduce((total, item) => total + (parseFloat(item.price) || 0), 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <span>{item.name} - ${parseFloat(item.price).toFixed(2)}</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalCost.toFixed(2)}</h3>
      <button onClick={() => navigate('/order-summary')}>Proceed to Checkout</button>
    </div>
  );
}

export default Cart;




// import React from 'react';

// const Cart = ({ cartItems, removeFromCart }) => {
//   const totalCost = cartItems.reduce((total, item) => total + item.price, 0);

//   return (
//     <div className="cart">
//       <h2>Cart</h2>
//       <ul>
//         {cartItems.map(item => (
//           <li key={item.id}>
//             <span>{item.name} - ${item.price}</span>
//             <button onClick={() => removeFromCart(item.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <h3>Total: ${totalCost}</h3>
//     </div>
//   );
// }

// export default Cart;
