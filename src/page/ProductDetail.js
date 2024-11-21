import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const ProductDetail = () => {
  let { id } = useParams()
  let [size, setSize] = useState([])
  const [close, setClose] = useState()
  const getItem = async (id) => {
    let url = `https://my-json-server.typicode.com/Mongkeyrecoder/hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setSize(data.size)
    setClose(data)
    console.log(size)
  }
  useEffect(() => {
    getItem(id)

  }, [])
  return (
    <Container>
      <Row>
        <Col lg={6} className='productDetail-img'>
          <img src={close?.img} />
        </Col>
        <Col lg={6}>
          <h3>{close?.title} </h3>
          <p>{close?.price}</p>

          <DropdownButton id="dropdown-basic-button" title="사이즈를 선택해주세요">
            {
              size !=[]?size.map((siz)=>{
                return <Dropdown.Item href="#/action-1">{siz}</Dropdown.Item>
              }):null
            }
          </DropdownButton>

          <button className='btn1'>추가</button>




        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
