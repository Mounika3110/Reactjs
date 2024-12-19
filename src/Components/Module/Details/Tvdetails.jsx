import React, { createContext, useState } from 'react'
import Sidenav from '../Sidenav'
import Topbar from './Topbar'
import {productDatas} from '../../Data/Product1'
import { useParams } from 'react-router-dom'
import { Row,Col } from 'react-bootstrap'

export const useContext= createContext()
function Tvdetails() {
    const [cart, setCart] = useState(0)
    let {id} = useParams()
    let productData = productDatas.find((e)=>e.id==id)
  return (
    <div>
      <Row>
        <Col sm={2}>
        <Sidenav/>
        </Col>
        <Col sm={10}>
        <Topbar/>
        <div className='container d-flex justify-content-around align-items-center py-4'>
                        <div className='data'>
                            <p>{cart}</p>
                            <p>{productData.id}</p>
                            <p>{productData.brand}</p>
                            <p>{productData.Display}</p>
                            <p>{productData.screensize}</p>
                            <p>{productData.Dimensions}</p>
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

export default Tvdetails
