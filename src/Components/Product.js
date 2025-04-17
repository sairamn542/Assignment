import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice'
import { getProduct } from '../store/productSlice'


function Product() {
    const dispatch = useDispatch()
    // const [fake, setFake] = useState([])
    const {data : products, status } = useSelector(state => state.product)
    useEffect(() => {
        // fetch('https://fakestoreapi.com/products')
        //     .then(res => res.json())
        //     .then(result => {
        //         setFake(result)
        //     })
        dispatch(getProduct())
    },[])

    if(status === 'loading...' ) {
        return <p>Loading...</p>
    }
    if(status === 'error') {
        return <p>Something went wrong</p>
    }
    function addToCart(product) {
        dispatch(add(product))
    }

    
    const cards = products.map((product) => (
        <div className='col-md-3'>
            <Card style={{ width: '18rem' }}>
            <div className="d-flex justify-content-center">
                    <Card.Img src={product.image} style={{ width: '100px', height: '100px' }} />
                </div>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        {product.price}
                    </Card.Text>
                    <Card.Footer className="d-flex justify-content-center"><Button variant="primary" onClick={()=>addToCart(product)}>Add To Cart</Button></Card.Footer>
                </Card.Body>
            </Card>
        </div>
    ))
    return (
        <>
            <h2>Product Dashboard</h2>
            <div className='row'>
                {cards}
            </div>
        </>
    )
}

export default Product