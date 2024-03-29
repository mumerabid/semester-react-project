import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

import surl from "../express/ExpressURL"
const axios = require('axios').default;
export default function SignleProduct(props) {
    const { data } = props;
    // const id = match.params.id;
    // const [fetchedData, setFetchedData] = useState([]);
    // const fetchApi = () => {
    //     const aa = axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(response => {
    //             let new_dat = response.data;
    //             setFetchedData(new_dat.data);
    //             console.log(fetchedData);
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }
    // const printfData = () => {
    //     console.log(fetchedData.data);
    // }
    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="images p-3">
                                        <div className="text-center p-4">
                                            {" "}
                                            <img
                                                id="main-image"
                                                src="https://i.imgur.com/Dhebu4F.jpg"
                                                width={350}
                                            />{" "}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="product p-4">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <i className="fa fa-long-arrow-left" />{" "}
                                                <span className="ml-1">Back</span>{" "}
                                            </div>{" "}
                                            <i className="fa fa-shopping-cart text-muted" />
                                        </div>
                                        <div className="mt-4 mb-3">
                                            {" "}
                                            <span className="text-uppercase text-muted brand">Orianz</span>
                                            <h5 className="text-uppercase">Men's slim fit t-shirt</h5>
                                            <div className="price d-flex flex-row align-items-center">
                                                {" "}
                                                <span className="act-price">$20</span>
                                                <div className="ml-2">
                                                    {" "}
                                                    <small className="dis-price">$59</small>{" "}
                                                    <span>40% OFF</span>{" "}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="about">
                                            Shop from a wide range of t-shirt from orianz. Pefect for your
                                            everyday use, you could pair it with a stylish pair of jeans or
                                            trousers complete the look.
                                        </p>
                                        <div className="sizes mt-5">
                                            <h6 className="text-uppercase">Size</h6>{" "}
                                            <label className="radio">
                                                {" "}
                                                <input
                                                    type="radio"
                                                    name="size"
                                                    defaultValue="S"
                                                    defaultChecked
                                                />{" "}
                                                <span>S</span>{" "}
                                            </label>{" "}
                                            <label className="radio">
                                                {" "}
                                                <input type="radio" name="size" defaultValue="M" />{" "}
                                                <span>M</span>{" "}
                                            </label>{" "}
                                            <label className="radio">
                                                {" "}
                                                <input type="radio" name="size" defaultValue="L" />{" "}
                                                <span>L</span>{" "}
                                            </label>{" "}
                                            <label className="radio">
                                                {" "}
                                                <input type="radio" name="size" defaultValue="XL" />{" "}
                                                <span>XL</span>{" "}
                                            </label>{" "}
                                            <label className="radio">
                                                {" "}
                                                <input type="radio" name="size" defaultValue="XXL" />{" "}
                                                <span>XXL</span>{" "}
                                            </label>
                                        </div>
                                        <div className="cart mt-4 align-items-center">
                                            {" "}
                                            <button className="btn btn-danger text-uppercase mr-2 px-4">
                                                Add to cart
                                            </button>{" "}
                                            {/* <div>Here: {id}</div> */}
                                            <i className="fa fa-heart text-muted" />{" "}
                                            <i className="fa fa-share-alt text-muted" />{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
