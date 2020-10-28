import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function OrderItem() {
    return (
        <div className="order__table__item">
            <div className="order__detail">
                <p id="id" name="id">ID12345</p>
                <p id="name" name="name">PIZZA CHOS</p>
                <p id="price" name="price">50000</p>
                <p id="quantity" name="quantity">5</p>
            </div>
            <div className="option">
                <DeleteIcon/>
                <EditIcon/> 
            </div>           
        </div>
    )
}

export default OrderItem
