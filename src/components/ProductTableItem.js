import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../config';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function ProductTableItem() {
    const navStyle = {
        textDecoration: "none",
        color: "#ffffff"
    }

    const [product, setProduct] = useState({});

    useEffect(() =>{
        setProduct({
            id: "ID12345",
            name: "PIZZA CHOS",
            img: "https://dominos.vn/Data/Sites/1/Product/830/pizza-pho.png",
            price: "50000",
            quantity: "5"
        })
    },[])

    const deleteProduct = product =>{
        let submit = window.confirm(`Xác nhận xóa ${product.id}`);
        if(submit){
            axios.delete(`${global.config.server}/product/${product.id}`)
            .then(res => {
                console.log(`đã xóa ${product.id}`);
            })
        }
    }

    return (
        <div className="product__table__item">
            <div className="product__detail">
                <p id="id" name="id">{product.id}</p>
                <p id="name" name="name">{product.name}</p>
                <img src={product.img} alt={product.name}/>
                <p id="price" name="price">{product.price}</p>
                <p id="quantity" name="quantity">{product.quantity}</p>
            </div>
            <div className="option">
                <div onClick={() => deleteProduct(product)}> <DeleteIcon/> </div>
                <Link to="/update-product" style={navStyle}> <div > <EditIcon/> </div> </Link>
            </div>
        </div>
    )
}

export default ProductTableItem
