
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useCart } from './Cartcontext';

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart(); 

  const handleIncreaseQuantity = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1); 
    }
  };

  const handleDecreaseQuantity = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1); 
    }
  };

  return (
    <div>
      <Row>
        <Col sm={12}>
          <h2>Your Cart</h2>
          {cartItems.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className='d-flex justify-content-between align-items-center py-3'>
                <div>
                  <img src={item.image} alt={item.brand} style={{ width: "100px" }} />
                  <p>{item.brand}</p>
                  <p>{item.Price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div>
                  <Button variant='secondary' onClick={() => handleDecreaseQuantity(item.id)}>-</Button>
                  <Button variant='primary' onClick={() => handleIncreaseQuantity(item.id)}>+</Button>
                  <Button variant='danger' onClick={() => removeFromCart(item.id)}>
                    Remove
                  </Button>
                </div>
              </div>
            ))
          )}
        </Col>
      </Row>
    </div>
  );
}

export default CartPage;
