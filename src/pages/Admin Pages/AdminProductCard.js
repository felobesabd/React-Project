import React, {useState} from 'react'
import {Col, Card, Row, Modal, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {DeleteOneProductAction} from '../../Reducer/Actions/ProductActions'

const AdminProductCard = ({item}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()
    const funcDelete = async ()=> {
        await dispatch(DeleteOneProductAction(item._id))
        setShow(false)
        window.location.reload()
    }


    return (
    <Col xs="12" sm="6" md="5" lg="4" className="d-flex mb-3">

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure to delete the product?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={funcDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>

    <Card
        className="my-2"
        style={{
            width: "100%",
            minHeight: "350px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
            boxShadow: '0px 3px 0px 0px rgb(51 51 51 / 20%)'
        }}>
        <Row className="d-flex justify-content-center px-2">
            <Col className=" d-flex justify-content-between">
                <div className="d-inline item-delete-edit" onClick={handleShow}>Delete</div>
                <Link to={`/editProductDetails/${item._id}`} style={{ textDecoration: "none" }}>
                <div className="d-inline item-delete-edit">Edit</div>
                </Link>
            </Col>
        </Row>
        <Link to={`/ProductDetails/${item._id}`} style={{ textDecoration: "none" }}>
            <Card.Img style={{ height: "228px", width: "100%" }} src={item.imageCover} />
            <Card.Body>
                <Card.Title>
                    <div className="card-title">{item.title}</div>
                </Card.Title>
                <Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="card-rate">{item.ratingsQuantity}</div>
                        <div className="d-flex align-items-baseline">
                            <div className="card-price">{item.price}</div>
                            <div className="card-currency mx-1">EGP</div>
                        </div>
                    </div>
                </Card.Text>
            </Card.Body>
        </Link>
    </Card>
</Col>
  )
}

export default AdminProductCard;