import './Order.scss';
import { useDispatch } from 'react-redux';
import { removeOrder } from '../../../redux/ordersSlice';
import api from '../../../api';


function Order(props) {
    const dispatch = useDispatch();   
    
    const handleRemoveClick = () => {
        const id = props.order.id;
        api.delete('/orders/' + id)
            .then((response) => {
                if (response.status === 200) {
                    dispatch(removeOrder(id));
                }
            });
    }
    return (
        
        <div>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Name: {props.order.name}</h3>
                    <h3 className="card-title">Address: {props.order.address}</h3>
                    <h3 className="card-title">Style: {props.order.style}</h3>
                    <h3 className="card-title">Crust: {props.order.crust}</h3>
                    <div className="card-text"><span style={{ fontWeight:'bold'}}>Id:</span>{props.order.id}</div>
                    <div className="card-text"><span style={{ fontWeight:'bold'}}>Extra Cheese:</span> {props.order.cheese}</div>
                   
                    
                    <button onClick={handleRemoveClick} id="statusButtons" className="btn btn-danger btn-sm">Remove Order</button>

                </div>
            </div>
        </div>
    )
}


export default Order;