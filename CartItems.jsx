import React, { useEffect, useState } from 'react'
import '../assets/styles/cartItems.css'
import { rules } from 'eslint-plugin-react-refresh'

const CartItems = () => {
    let [cart, setCart] = useState([])
    let fetchCartItems= async () =>{
        let cartApi = await fetch('http://localhost:4000/cartitems')
        let arr = await cartApi.json()
        //console.log(arr)
        setCart(arr);
    }
    useEffect(() => {
            fetchCartItems()
    }, [])
  return (
    <>
        <div className="cartItems" >
            <h2>Cart Items</h2>

            <div>
                <table border={1} >
                    <thead>
                        <tr>
                            <th>SLNO</th>
                            <th>Book Title</th>
                            <th>Image</th>
                            <th>Authors</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((elem, index)=>{
                                let {title , thumbnailUrl, authors}=elem
                                return(
                                    <>
                                        <tr>
                                            <th>{index+1}.</th>
                                            <td>{title}</td>
                                            <td>
                                                <img src={thumbnailUrl} height={50} />
                                            </td>
                                            <td>{authors}</td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default CartItems