import React, { useState, useEffect } from 'react';
import './Menu.css';

function Menu({ addToCart }) {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((response) => {
      return response.json();
    }).then((myjson) => {
      console.log(myjson);
      setData(myjson);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='menu'>
      {
        data && data.length > 0 && data.map((val) => {
          return (
            <div className="menu-item" key={val.id}>
              <img src={`../assets/burger.jpeg${val.image}`} alt='' />
              <h1>{val.name}</h1>
              <p>{val.price}</p>
              <button onClick={() => addToCart(val)}>Add to Cart</button>
            </div>
          );
        })
      }
    </div>
  );
}

export default Menu;




// import React, { useState, useEffect } from 'react';
// import './Menu.css'; // Importing CSS file

// function Menu(){

//   const [data, setData] = useState([]);
//   const [cart, setCart] = useState([]); // State for storing cart items

//   const getData = ()=>{
//     fetch('data.json',{headers : {
//       'content-Type': 'application/json',
//       'Accept': 'application/json'
//     }}).then((response)=>{
//       return response.json()
//     }).then((myjson)=>{
//       console.log(myjson);
//       setData(myjson);
//     })
//   }

//   useEffect(()=>{
//     getData()
//   },[])

//   const addToCart = (item) => {
//     setCart([...cart, item]); // Adding item to cart
//   }

//   const removeFromCart = (index) => {
//     const newCart = [...cart];
//     newCart.splice(index, 1); // Removing item from cart
//     setCart(newCart);
//   }

//   return(
//     <div className='menu'>
//       {
//         data && data.length > 0 && data.map((val, index)=>{
//           return (
//             <div className="menu-item" key={val.id}>
//               <img src={`../assets/burger.jpeg${val.image}`} alt='' />
//               <h1>{val.name}</h1>
//               <p>{val.price}</p>
//               <button onClick={() => addToCart(val)}>Add to Cart</button>
//             </div>
//           )
//         })
//       }
//       <div className="cart">
//         <h2>Cart</h2>
//         <ul>
//           {cart.map((item, index) => (
//             <li key={index}>
//               <span>{item.name} - ${item.price}</span>
//               <button onClick={() => removeFromCart(index)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Menu;




// import React, { useState, useEffect } from 'react';

// function Menu(){

//   const [data, setData] = useState([]);

//   const getData = ()=>{
//   fetch('data.json',{headers : {
//     'content-Type': 'application/json',
//     'Accept': 'application/json'
//   }}).then((response)=>{
//     return response.json()
//   }).then((myjson)=>{
//     console.log(myjson);
//     setData(myjson);
//   })
// }

// useEffect(()=>{
//   getData()
// },[])
// return(
//   <div className='menu'>
//     {
//       data && data.length > 0 && data.map((val)=>{
//         return (
//           <>
//           <img src='/assets/burger.jpeg{val.image}' alt='' />
//           <h1 key={val.id}>{val.name}</h1>
//           <p>{val.price}</p>
//           </>
//         )
//       })
//     }
//   </div>
// );
// }

// const Menu = ({ addToCart }) => {
//   const [menuItems, setMenuItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch menu items from API
//     const fetchMenuItems = async () => {
//       try {
//         const response = await fetch('data.json'); // Replace with your API URL
//         console.log('data.json');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setMenuItems(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMenuItems();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }



  // return (
  //   <div className="menu">
  //     <h2>Menu</h2>
  //     <ul>
  //       {menuItems.map(item => (
  //         <li key={item.id}>
  //           <span>{item.name} - ${item.price}</span>
  //           <button onClick={() => addToCart(item)}>Add</button>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
// }

// export default Menu;