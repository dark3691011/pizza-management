import React from 'react'
import OrderItem from './OrderItem'

function OrderManagement() {
    return (
        <div className="order__management">           
            <div className="order__table">
                <OrderItem/>
                <OrderItem/>
                <OrderItem/>
            </div>  
        </div>
    )
}

export default OrderManagement
