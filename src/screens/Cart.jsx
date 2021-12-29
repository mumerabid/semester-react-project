import React, { useState, useEffect } from 'react'
import { Route } from "react-router-dom"
// import pImag from "../images/tShirt.jpeg"
export default function Cart() {
    const [cData, setcData] = useState([
        { id: "1", pName: "T Shirt 1", no_of_products: 1, pPrice: 1000, pImg: "https://firebasestorage.googleapis.com/v0/b/web-mini-proj.appspot.com/o/p1.jpeg?alt=media&token=045a6892-724b-4076-ac0d-92015ce33cc8" },
        { id: "2", pName: "T Shirt 2", no_of_products: 1, pPrice: 2000, pImg: "https://firebasestorage.googleapis.com/v0/b/web-mini-proj.appspot.com/o/p2.jpeg?alt=media&token=84039791-981e-4e54-9fd1-7279f9938eb2" },
        { id: "3", pName: "T Shirt 3", no_of_products: 2, pPrice: 3000, pImg: "https://firebasestorage.googleapis.com/v0/b/web-mini-proj.appspot.com/o/p5.jpeg?alt=media&token=ef9c92bd-8923-4923-88ea-cd209b1fd546" },
        { id: "4", pName: "T Shirt 4", no_of_products: 1, pPrice: 4000, pImg: "https://firebasestorage.googleapis.com/v0/b/web-mini-proj.appspot.com/o/p2.jpeg?alt=media&token=84039791-981e-4e54-9fd1-7279f9938eb2" },
        { id: "5", pName: "T Shirt 5", no_of_products: 3, pPrice: 5000, pImg: "https://firebasestorage.googleapis.com/v0/b/web-mini-proj.appspot.com/o/p5.jpeg?alt=media&token=ef9c92bd-8923-4923-88ea-cd209b1fd546" },
    ]);
    const [bill, setBill] = useState(0);
    const calculateTheBill = () => {
        let bill = 0;
        cData.forEach((pno) => (
            bill = bill + (pno.pPrice * pno.no_of_products)
        ))
        setBill(bill);
        // setrefres(refres + 1);
    }
    const remove_a_product = (pId) => {
        const newdata = cData.filter((pNo) => (
            pNo.id != pId
        ))
        setcData(newdata);
    }
    const incrementInAproduct = (pId) => {
        const newdata = cData.map((pNo) => (
            pNo.id == pId ? { id: pNo.id, pName: pNo.pName, no_of_products: pNo.no_of_products + 1, pPrice: pNo.pPrice, pImg: pNo.pImg } : pNo
        ))
        setcData(newdata);

    }
    const decrementInAproduct = (pId) => {
        const newdata = cData.map((pNo) => (
            pNo.id == pId ? { id: pNo.id, pName: pNo.pName, no_of_products: pNo.no_of_products - 1, pPrice: pNo.pPrice, pImg: pNo.pImg } : pNo
        ))
        const newdata2 = newdata.filter((pNo) => (
            pNo.no_of_products != 0
        ))
        setcData(newdata2);
    }
    useEffect(() => {
        // Update the document title using the browser API
        { calculateTheBill() }
    }, [cData]);
    return (
        <div>
            <div id="page-content">
                {/*Page Title*/}
                <div className="page section-header text-center">
                    <div className="page-title">
                        <div className="wrapper">
                            <h1 className="page-width">Your cart</h1>
                        </div>
                    </div>
                </div>
                {/*End Page Title*/}
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 main-col">
                            <div className="cart style2">
                                <table>
                                    <thead className="cart__row cart__header">
                                        <tr>
                                            <th colSpan={2} className="text-center">
                                                Product
                                            </th>
                                            <th className="text-center">Price</th>
                                            <th className="text-center">Quantity</th>
                                            <th className="text-right">Total</th>
                                            <th className="action">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cData.map((p) => (
                                            <tr className="cart__row border-bottom line1 cart-flex border-top">
                                                <td className="cart__image-wrapper cart-flex-item">
                                                    <img
                                                        className="cart__image"
                                                        src={p.pImg}
                                                        alt="Elastic Waist Dress - Navy / Small"
                                                    />
                                                </td>
                                                <td className="cart__meta small--text-left cart-flex-item">
                                                    <div className="list-view-item__title">
                                                        <p className="fw-bolder">{p.pName}</p>
                                                    </div>
                                                    <div className="cart__meta-text">
                                                        Color: Navy
                                                        <br />
                                                        Size: Small
                                                        <br />
                                                    </div>
                                                </td>
                                                <td className="cart__price-wrapper cart-flex-item">
                                                    <span className="money">{p.pPrice}</span>
                                                </td>
                                                <td className="cart__update-wrapper cart-flex-item text-right">
                                                    <div className="cart__qty text-center">
                                                        <div className="d-flex to-row">
                                                            <button
                                                                className="btn btn-dark rounded mr-2 p-2 "
                                                                style={{ height: "30px" }}
                                                                onClick={() => { decrementInAproduct(p.id) }}
                                                            >
                                                                <div ><i className="icon icon-minus" /></div>
                                                            </button>
                                                            <p style={{ fontSize: "18px" }}>{p.no_of_products}</p>
                                                            <button
                                                                className="btn btn-dark rounded ms-2 p-2"
                                                                style={{ height: "30px" }}
                                                                onClick={() => { incrementInAproduct(p.id) }}
                                                            >
                                                                <i className="icon icon-plus" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-right small--hide cart-price">
                                                    <div>
                                                        <span className="money">{p.pPrice * p.no_of_products}</span>
                                                    </div>
                                                </td>
                                                <td className="text-center small--hide">
                                                    <button
                                                        className="btn btn--secondary cart__remove"
                                                        title="Remove tem"
                                                        onClick={() => { remove_a_product(p.id); }}
                                                    >
                                                        <i className="icon icon anm anm-times-l" />
                                                    </button>
                                                </td>

                                                {/* <div style={{ width: "100%", height: "2px", backgroundColor: "black" }}></div> */}
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan={3} className="text-left">
                                                <Route render={({ history }) => (
                                                    <button
                                                        onClick={() => { history.push("/") }}
                                                        className="btn--link cart-continue"
                                                    >
                                                        <i className="icon icon-arrow-circle-left" /> Continue
                                                        shopping
                                                    </button>
                                                )}
                                                />



                                            </td>
                                            <td colSpan={3} className="text-right">
                                                <button
                                                    type="submit"
                                                    name="update"
                                                    className="btn--link cart-update"
                                                >
                                                    <i className="fa fa-refresh" /> Update
                                                </button>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                                <div className="currencymsg">
                                    We processes all orders in Pakistan. While the content of your cart is
                                    currently displayed in Pakistan, the checkout will use USD at the most
                                    current exchange rate.
                                </div>
                                <hr />

                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 cart__footer">
                            <div className="cart-note">
                                <div className="solid-border">
                                    <h5>
                                        <label
                                            htmlFor="CartSpecialInstructions"
                                            className="cart-note__label small--text-center"
                                        >
                                            Add a note to your order
                                        </label>
                                    </h5>
                                    <textarea
                                        name="note"
                                        id="CartSpecialInstructions"
                                        className="cart-note__input"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                            <div className="solid-border">
                                <div className="row">
                                    <span className="col-12 col-sm-6 cart__subtotal-title">
                                        <strong>Subtotal</strong>
                                    </span>
                                    <span className="col-12 col-sm-6 cart__subtotal-title cart__subtotal text-right">
                                        <span className="money">{bill}</span>
                                    </span>
                                </div>
                                <div className="cart__shipping">
                                    Shipping and taxes calculated at checkout
                                </div>
                                <p className="cart_tearm">
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="tearm"
                                            id="cartTearm"
                                            className="checkbox"
                                            defaultValue="tearm"
                                            required
                                        />
                                        I agree with the terms and conditions
                                    </label>
                                </p>
                                <input
                                    type="submit"
                                    name="checkout"
                                    id="cartCheckout"
                                    className="btn btn--small-wide checkout"
                                    defaultValue="Checkout"
                                    disabled="disabled"
                                />
                                {/* <div className="paymnet-img">
                                    <img src="assets/images/payment-img.jpg" alt="Payment" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
