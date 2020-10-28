import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function ProductTableItem() {
    return (
        <div className="product__table__item">
            <div className="product__detail">
                <p id="id" name="id">ID12345</p>
                <p id="name" name="name">PIZZA CHOS</p>
                <img src="https://dominos.vn/Data/Sites/1/Product/830/pizza-pho.png" alt=""/>
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

export default ProductTableItem
