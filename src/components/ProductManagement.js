import React from 'react'
import ProductTableItem from './ProductTableItem';
import '../styles/style.scss';
import CreateProduct from './CreateProduct';

function ProductManagement() {
    return (
        <div className="product__management">
            <CreateProduct/>
            <div className="product__table">
                <ProductTableItem/>
                <ProductTableItem/>
                <ProductTableItem/>
            </div>            
        </div>
    )
}

export default ProductManagement
