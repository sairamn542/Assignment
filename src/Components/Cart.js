import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

function Cart() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.cart)
  function RemoveCart(id) {
    dispatch(remove(id))
  }
  return (
    <div>
      <div className='row'>
        {
          products.map(product => (
            <div className='col-md-12'>
              <Card key={product.id} style={{ width: '18rem' }}>
                <div className="d-flex justify-content-center">
                  <Card.Img src={product.image} style={{ width: '100px', height: '100px' }} />
                </div>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    {product.price}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-center"><Button variant="danger" onClick={()=>RemoveCart(product.id)}>Remov item</Button></Card.Footer>
              </Card>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart