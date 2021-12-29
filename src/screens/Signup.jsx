import React, { useState, useEffect } from 'react'

export default function Signup() {
    const [fname, setfName] = useState("");
    const [lname, setlName] = useState("");
    const [email, setEamil] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        console.log("fname: ", fname);
        console.log("lname: ", lname);
        console.log("email: ", email);
        console.log("password: ", password);
    }, [fname, lname, email, password])
    const handleClick = async (e) => {
        try {
            //e.preventDefault();
            const res = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname: fname,
                    lname: lname,
                    email: email,
                    password: password
                })
            })
            const res2 = await res.jason();
            console.log(res2)
        } catch (err) {
            console.log("errors is: ", err)
        }

    }
    return (
        <div>
            <div id="page-content">
                {/*Page Title*/}
                <div className="page section-header text-center">
                    <div className="page-title">
                        <div className="wrapper">
                            <h1 className="page-width">Create an Account</h1>
                        </div>
                    </div>
                </div>
                {/*End Page Title*/}
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 main-col offset-md-3">
                            <div className="mb-4">
                                <div
                                    // method="post"
                                    // action="#"
                                    // id="CustomerLoginForm"
                                    // acceptCharset="UTF-8"
                                    className="contact-form"
                                >
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="FirstName">First Name</label>
                                                <input
                                                    type="text"
                                                    name="customer[first_name]"
                                                    placeholder="Enter your first name"
                                                    id="FirstName"
                                                    autofocus
                                                    value={fname}
                                                    onChange={(a) =>
                                                        setfName(a.target.value)
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="LastName">Last Name</label>
                                                <input
                                                    type="text"
                                                    name="customer[last_name]"
                                                    placeholder="Enter your last name"
                                                    id="LastName"
                                                    value={lname}
                                                    onChange={(b) =>
                                                        setlName(b.target.value)
                                                    }
                                                />
                                            </div>
                                        </div>
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
                                                    value={email}
                                                    onChange={(a) =>
                                                        setEamil(a.target.value)
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="CustomerPassword">Password</label>
                                                <input
                                                    type="password"
                                                    name="customer[password]"
                                                    placeholder="Password"
                                                    id="CustomerPassword"
                                                    className
                                                    value={password}
                                                    onChange={(a) =>
                                                        setPassword(a.target.value)
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="text-center col-12 col-sm-12 col-md-12 col-lg-12">
                                            <button
                                                // type="submit"
                                                className="btn mb-3"
                                                defaultValue="Create"
                                                onClick={() => {
                                                    handleClick();
                                                }}
                                            >Submit</button>
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
