import React, { useEffect, useState } from 'react'
import Card from '../component/Card'
import { Col, Container, Row } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'

const ProductAll = () => {
    const [productList, setProductLit] = useState([])
    const [query,setQuery]=useSearchParams()
    const getProducts = async () => {
        let searchQuery=query.get('q') || ""
        console.log('쿼리값은',searchQuery)
        let url = ` https://my-json-server.typicode.com/Mongkeyrecoder/hnm/products?q=${searchQuery}`
        let response = await fetch(url);
        let data = await response.json();
        console.log(data)
        setProductLit(data)
    }
    useEffect(() => {
        getProducts()
    }, [query])
    return (
        <div>
            <Container>
                <Row>
                   {
                    productList.map((menu,i)=>{
                        return  <Col lg={3} sm={12}>
                        <Card key={i} item={menu}/>
                    </Col>
                    })
                   }
                </Row>
            </Container>

        </div>
    )
}

export default ProductAll
