import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import PaginationReact from '../../component/HomeComp/PaginationReact';
import AdminAllProduct from './AdminAllProduct';
import AdminSlideBar from './AdminSlideBar';
import DeleteProductAdminHook from "../../hookAbbreviation/Admin/DeleteProductAdminHook";

const AdminPages = () => {

  const [item , pagenate, pageCount, getPage] = DeleteProductAdminHook()

  return (
    <Container style={{minHeight: '752px'}}>
    <Row>
    <Col xs='3' md='2'>
    <AdminSlideBar />
    </Col>
    <Col xs='9' md='10'>
    <AdminAllProduct item={item} />
      {
        pageCount > 1 ? (
            <PaginationReact pageCount={pageCount} onPress={getPage}/>
        ) :null
      }
    </Col>
    </Row>
    </Container>
  )
}

export default AdminPages;