import React from 'react'
import "./WishList.css"
import imgg from "../images/p4.jpeg"
export default function WishList() {
    return (
        <div>
            <div className="pageWrapper">
                <div id="page-content">
                    {/*Page Title*/}
                    <div className="page section-header text-center">
                        <div className="page-title">
                            <div className="wrapper">
                                <h1 className="page-width">Wish List</h1>
                            </div>
                        </div>
                    </div>
                    {/*End Page Title*/}
                    <div className="container">
                        <div className="row" >
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 main-col">
                                <form action="#">
                                    <div className="wishlist-table table-content table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th className="product-name text-center alt-font text-inc">
                                                        Remove
                                                    </th>
                                                    <th className="product-price text-center alt-font text-inc">
                                                        Images
                                                    </th>
                                                    <th className="product-name alt-font text-inc">Product</th>
                                                    <th className="product-price text-center alt-font text-inc">
                                                        Unit Price
                                                    </th>
                                                    <th className="stock-status text-center alt-font text-inc">
                                                        Stock Status
                                                    </th>
                                                    <th className="product-subtotal text-center alt-font text-inc">
                                                        Add to Cart
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="product-remove text-center" valign="middle">
                                                        <a href="#">
                                                            <i className="icon icon anm anm-times-l" />
                                                        </a>
                                                    </td>
                                                    <td className="product-thumbnail text-center">
                                                        <a href="#">
                                                            <img
                                                                src={imgg}
                                                                alt="bhjbj"
                                                                className="img-inc"
                                                            />
                                                        </a>
                                                    </td>
                                                    <td className="product-name">
                                                        <h4 className="no-margin text-inc">
                                                            <a href="#">Woven Solid Midi Shirt Dress</a>
                                                        </h4>
                                                    </td>
                                                    <td className="product-price text-center text-inc">
                                                        <span className="amount">$150.00</span>
                                                    </td>
                                                    <td className="stock text-center text-inc">
                                                        <span className="in-stock">in stock</span>
                                                    </td>
                                                    <td className="product-subtotal text-center text-inc">
                                                        <button type="button" className="btn btn-small">
                                                            Add To Cart
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}
