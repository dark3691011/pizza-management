import React, {useState, useEffect} from 'react';

function UpdateProduct() {
    const [product,setProduct] = useState({});

    useEffect(() => {
        fetchItem();
    },[]);

    const fetchItem = async => {
        setProduct({
            name: "PIZZA ABC",
            price: 50000,
            description: "Pizza chuẩn Mỹ, đậm vị quốc dân với thịt bò, bò viên, sốt vị phở, rau ngò gai, rau quế, hành tây, phô mai Mozzarella",
            type: "ABC"
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();

        updateProduct(product);
    }

    const updateProduct = product => {
        
    }


    return (
        <form className="form__update__product" onSubmit={handleSubmit}>
            <div className="form__group">
                <label htmlFor="name">TÊN</label>
                <input type="text" name="name" id="name" onChange={e => setProduct({...product,name: e.target.value})} value={product.name}/>
            </div>
            <div className="form__group">
                <label htmlFor="image">HÌNH ẢNH</label>
                <input type="file" name="image" id="image" accept="image/*" onChange={e => setProduct({...product,img: e.target.value})} value={product.img}/>                    
            </div>
            <div className="form__group">
                <label htmlFor="price">GIÁ</label>
                <input type="text" name="price" id="price" onChange={e => setProduct({...product,price: e.target.value})} value={product.price}/>                    
            </div>
            <div className="form__group">
                <label htmlFor="description">MÔ TẢ</label>
                <input type="text" name="description" id="description" onChange={e => setProduct({...product,description: e.target.value})} value={product.description}/>                   
            </div>
            <div className="form__group">
                <label htmlFor="type">LOẠI</label>
                <input type="text" name="type" id="type" onChange={e => setProduct({...product,type: e.target.files[0]})} value={product.type}/>                   
            </div>
            <div className="form__group">
                <label htmlFor="size">SIZE</label>
                <input type="text" name="size" id="size" onChange={e => setProduct({...product,size: e.target.value})} value={product.size}/>                   
            </div>
            <button type="submit">CẬP NHẬT SẢN PHẨM</button>
        </form>
    )
}

export default UpdateProduct
