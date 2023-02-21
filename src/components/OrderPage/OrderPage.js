import Image from 'react-bootstrap/Image'
import React, { Component }  from 'react';
import './OrderPage.scss';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import Order from '../Orders/Order/Order';
import { useSelector, useDispatch } from 'react-redux';
import api from '../../api';
import { setOrders, clearOrder } from '../../redux/ordersSlice';




function OrderPage() {
    const [loading, setLoading] = useState(true);
    const orders = useSelector((state) => state.orders.list);
    const dispatch = useDispatch();
    useEffect(() => {


        api.get('/orders')
            .then((response) => {
                if (response.status === 200) {
                    dispatch(setOrders(response.data));
                    setLoading(false);
                }
            });
    }, []);

    return (
        <Container>
            <div className="card-body-order-page">
                <h2>Orders:</h2>
                {loading && (
                    <div className='loading'>Loading...</div>
                )}
                <div className="card-text">{orders.map(
                    (order, index) => (
                        <Order
                            key={index}
                            order={order}
                        />
                    )
                )}</div>            
            </div>

        </Container>

    )
}
export default OrderPage;