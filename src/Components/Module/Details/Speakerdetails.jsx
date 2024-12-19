import React, { createContext, useState } from 'react'
import Sidenav from '../Sidenav'
import Topbar from './Topbar'
import {product3Datas} from '../../Data/Product3'
import { useParams } from 'react-router-dom'
import { Row,Col } from 'react-bootstrap'

export const useContext= createContext()
function Speakerdetails() {
    const [cart, setCart] = useState(0)
    let {id} = useParams()
    let productData = product3Datas.find((s)=>s.id==id)
  return (
    <div>
      <Row>
        <Col sm={2}>
        <Sidenav/>
        </Col>
        <Col sm={10}>
        <Topbar/>
        <div className='container d-flex justify-content-around align-items-center py-4 '>
                        <div className='data'>
                            <p>{cart}</p>
                            <p>{productData.id}</p>
                            <p>Brand:{productData.Brand}</p>
                            <p>Battery:{productData.battery}</p>
                            <p>Model:{productData.Model}</p>
                            <p>Weight:{productData.weight}</p>
                            <p>Price:{productData.Price}</p>
                            <button className='btn btn-outline-primary' onClick={() => setCart(cart + 1)}>add to cart</button>
                        </div>
                        <div className='product'>
                            <img src={productData.image} style={{ width: "300px" }} alt="" />
                        </div>

                    </div>
                            </Col>
        </Row>
        </div>
        )
    }

export default Speakerdetails
