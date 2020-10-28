import React,{useState, useEffect} from 'react';

function CreateProduct() {

    return (
        <form className="form__create__product">
            <div className="form__group">
                <label htmlFor="name">TÊN</label>
                <input type="text" name="name" id="name"/>
            </div>
            <div className="form__group">
                <label htmlFor="image">HÌNH ẢNH</label>
                <input type="file" name="image" id="image" />                    
            </div>
            <div className="form__group">
                <label htmlFor="price">GIÁ</label>
                <input type="text" name="price" id="price"/>                    
            </div>
            <div className="form__group">
                <label htmlFor="description">MÔ TẢ</label>
                <input type="text" name="description" id="description" />                   
            </div>
            <div className="form__group">
                <label htmlFor="type">LOẠI</label>
                <input type="text" name="type" id="type"/>                   
            </div>
            <div className="form__group">
                <label htmlFor="size">SIZE</label>
                <input type="text" name="size" id="size"/>                   
            </div>
            <button type="submit">THÊM SẢN PHẨM</button>
        </form>
    )
}

export default CreateProduct
