import React, { useEffect, useState } from 'react'
import Card from '../component/Card'
import { Col, Container, Row } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import {productAction} from '../redux/reducers/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
const ProductAll = () => {
    
    const [query, setQuery] = useSearchParams()
    const productList=useSelector((state)=>state.product.productList)
    const dispatch =useDispatch()
    const getProducts =  () => {
        let searchQuery = query.get('q') || ""
        dispatch(productAction.getProduct(searchQuery))
    }
    useEffect(() => {
        getProducts()
        console.log('productList',productList)
    }, [query])
    return (
        <div>
            <Container>
                <Row>
                    {
                        productList.map((menu, i) => {
                            return <Col key={i} lg={3} sm={12}>
                                <Card key={i} item={menu} />
                            </Col>
                        })
                    }
                </Row>
            </Container>

        </div>
    )
}

export default ProductAll
