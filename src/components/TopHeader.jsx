import React from 'react'
import { Link } from 'react-router-dom'
export default function TopHeader() {
    return (
        <div style={{ padding: "0px", margin: "0px" }} >
            <div className="top-header">
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-10 col-sm-8 col-md-5 col-lg-4 d-flex">
                            <div className="mr-3">
                                <div class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown">English</a>
                                    <div class="dropdown-menu bg-dark">
                                        <a href="#" class="dropdown-item">French</a>
                                        <a href="#" class="dropdown-item">Urdu</a>
                                        <a href="#" class="dropdown-item">German</a>
                                    </div>
                                </div>
                            </div>
                            <p className="phone-no">
                                <i className="anm anm-phone-s mr-1" /> +92 334 111 6692
                            </p>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4 d-none d-lg-none d-md-block d-lg-block">
                            <div className="text-center">
                                <Link to="/">
                                    <p className="top-header_middle-text"> ShopIX</p>
                                </Link>
                            </div>
                        </div>
                        <div className="col-2 col-sm-4 col-md-3 col-lg-4 text-right">
                            <span className="user-menu d-block d-lg-none">
                                <i className="anm anm-user-al" aria-hidden="true" />
                            </span>
                            <ul className="customer-links list-inline">
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/signup">Signup</Link>
                                </li>
                                <li>
                                    <Link to="/wishlist">Wishlist</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
