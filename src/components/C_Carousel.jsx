import React, { useState, useEffect } from 'react'
export default function C_Carousel() {

    const [crosalImges, setCrosalImges] = useState([
        {
            id: 1,
            img1URL: "https://firebasestorage.googleapis.com/v0/b/web-mini-proj.appspot.com/o/banner_1.jpg?alt=media&token=34101767-5062-4658-8f0b-a87562a2dd19",
            img2URL: "https://firebasestorage.googleapis.com/v0/b/web-mini-proj.appspot.com/o/banner_2.png?alt=media&token=798c0dd7-98da-4530-90da-397c8c6fb2b5",
            img3URL: "https://firebasestorage.googleapis.com/v0/b/web-mini-proj.appspot.com/o/banner_3.jpg?alt=media&token=24c15a19-965e-4788-98c6-1fa7520b792a"
        },
    ]);
    const [img1URL] = useState(crosalImges[0].img1URL);
    const [img2URL] = useState(crosalImges[0].img2URL);
    const [img3URL] = useState(crosalImges[0].img3URL);
    useEffect(() => {
        // crosalImges[0].img1URL;
    })
    return (
        <div>
            <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                    />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1URL} className="d-block w-100" alt=".img1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="text-light" style={{ fontSize: "45px", fontWeight: "bolder" }}>NEW WINTER COLLECTION</h5>
                            <h5 className="text-light">FROM HIGH TO LOW, CLASSIC TO MODERN WE HAVE YOU COVERED.</h5>
                            <button className="btn btn-dark rounded mb-2">Shop Now!</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img2URL} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="text-light" style={{ fontSize: "45px", fontWeight: "bolder" }}>SHOP OUR NEW COLLECTION</h5>
                            <h5 className="text-light">FROM HIGH TO LOW, CLASSIC TO MODERN WE HAVE YOU COVERED.</h5>
                            <button className="btn btn-dark rounded mb-2">Shop Now!</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img3URL} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="text-light" style={{ fontSize: "45px", fontWeight: "bolder" }}>TOP SELLING CLOTHES</h5>
                            <h5 className="text-light">BUY OUR MOST SELLING CLOTHES</h5>
                            <button className="btn btn-dark rounded mb-2">Shop Now!</button>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}
