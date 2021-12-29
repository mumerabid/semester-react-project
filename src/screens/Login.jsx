import React from 'react'
import { Link } from "react-router-dom"
export default function Login() {
    return (
        <div>
            <div id="page-content">
                {/*Page Title*/}
                <div className="page section-header text-center">
                    <div className="page-title">
                        <div className="wrapper">
                            <h1 className="page-width">Login</h1>
                        </div>
                    </div>
                </div>
                {/*End Page Title*/}
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 main-col offset-md-3">
                            <div className="mb-4">
                                <form
                                    method="post"
                                    action="#"
                                    id="CustomerLoginForm"
                                    acceptCharset="UTF-8"
                                    className="contact-form"
                                >
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="CustomerEmail">Email</label>
                                                <input
                                                    type="email"
                                                    name="customer[email]"
                                                    placeholder="youremail@gmail.com"
                                                    id="CustomerEmail"
                                                    className
                                                    autoCorrect="off"
                                                    autoCapitalize="off"
                                                    autofocus
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="CustomerPassword">Password</label>
                                                <input
                                                    type="Enter password"
                                                    name="customer[password]"
                                                    placeholder="Password"
                                                    id="CustomerPassword"
                                                    className
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="text-center col-12 col-sm-12 col-md-12 col-lg-12">
                                            <button
                                                type="submit"
                                                className="btn mb-3"
                                                defaultValue="Sign In"
                                            >Submit</button>
                                            <p className="mb-4">
                                                <div className="d-flex justify-content-center">
                                                    <Link to="/"> Forgot your password?</Link>
                                                    <div className="ml-2"></div>
                                                    |
                                                    <div className="mr-2"></div>
                                                    <Link to="/signup">Create account</Link>
                                                </div>
                                            </p>
                                        </div>
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
