import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { config } from './config';

function Orders() {
    const [data, setData] = useState({})
    useEffect(() => {
        const fetchdata = async () => {
            const id = localStorage.getItem('id');
            const orderdata = await axios.get(`${config.api}/user/${id}`)
            setData(orderdata.data[0])
        }
        fetchdata()
    }, [])
    return (
        <div className='container pt-5'>
            <h2 className='text-center' style={{ color: "orange" }}>Your orders</h2>
            <table className="table">
                🌟Token number : {data.order.foodtoken}
                <br/>
                🌟Order details : {Object.entries(data.order.orderdata).filter(([key, value]) => value !== 0)}
            </table>
        </div>
    )
}

export default Orders