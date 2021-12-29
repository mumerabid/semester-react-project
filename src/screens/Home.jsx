import React, { useState } from 'react'
import { Route, withRouter } from "react-router-dom"
import C_Carousel from '../components/C_Carousel'
// import pImg from "../images/tShirt.jpeg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BNavBar from "../components/BNavBar"
export default function Home(props) {
    const [pData] = useState([
        {
            id: "1", pName: "product 1", pPrice: 1000, discount: 0, pImg: "https://firebasestorage.googleapis.com/v0/b/web-mini-proj.appspot.com/o/p5.jpeg?alt=media&token=ef9c92bd-8923-4923-88ea-cd209b1fd546"
        },
        { id: "2", pName: "product 2", pPrice: 2000, discount: 0, pImg: "https://firebasestorage.googleapis.com/v0/b/web-mini-proj.appspot.com/o/p1.jpeg?alt=media&token=045a6892-724b-4076-ac0d-92015ce33cc8" },
        { id: "3", pName: "product 3", pPrice: 3000, discount: 0, pImg: "https://firebasestorage.googleapis.com/v0/b/web-mini-proj.appspot.com/o/p5.jpeg?alt=media&token=ef9c92bd-8923-4923-88ea-cd209b1fd546" },
        { id: "4", pName: "product 4", pPrice: 4000, discount: 0, pImg: "https://firebasestorage.googleapis.com/v0/b/web-mini-proj.appspot.com/o/p2.jpeg?alt=media&token=84039791-981e-4e54-9fd1-7279f9938eb2" },
        { id: "5", pName: "product 5", pPrice: 5000, discount: 0, pImg: "https://firebasestorage.googleapis.com/v0/b/web-mini-proj.appspot.com/o/p1.jpeg?alt=media&token=045a6892-724b-4076-ac0d-92015ce33cc8" },
        { id: "6", pName: "product 6", pPrice: 6000, discount: 0, pImg: "https://firebasestorage.googleapis.com/v0/b/web-mini-proj.appspot.com/o/p5.jpeg?alt=media&token=ef9c92bd-8923-4923-88ea-cd209b1fd546" },
        { id: "7", pName: "product 7", pPrice: 7000, discount: 0, pImg: "https://firebasestorage.googleapis.com/v0/b/web-mini-proj.appspot.com/o/p2.jpeg?alt=media&token=84039791-981e-4e54-9fd1-7279f9938eb2" },
        { id: "8", pName: "product 8", pPrice: 8000, discount: 0, pImg: "https://firebasestorage.googleapis.com/v0/b/web-mini-proj.appspot.com/o/p5.jpeg?alt=media&token=ef9c92bd-8923-4923-88ea-cd209b1fd546" },
        { id: "9", pName: "product 9", pPrice: 9000, discount: 0, pImg: "https://firebasestorage.googleapis.com/v0/b/web-mini-proj.appspot.com/o/p4.jpeg?alt=media&token=3163b370-9ede-43f8-8a43-e7b6c836c981" },

    ]);
    const [pTData] = useState([

        { id: "1", typeName: "COSMETIC", pImg: "https://firebasestorage.googleapis.com/v0/b/web-mini-proj.appspot.com/o/cosmetic.jpg?alt=media&token=dbf5ff77-4c0a-42bb-9881-32016c1fff34" },
        { id: "2", typeName: "BAG", pImg: "https://firebasestorage.googleapis.com/v0/b/web-mini-proj.appspot.com/o/bag.jpg?alt=media&token=f770804f-5954-437a-b855-173ddb84d37e" },
        { id: "3", typeName: "ACCESSORIES", pImg: "https://firebasestorage.googleapis.com/v0/b/web-mini-proj.appspot.com/o/accessories.jpg?alt=media&token=d007120d-4477-4d4c-abe2-45c1083931cf" },
        { id: "4", typeName: "SHOES", pImg: "https://firebasestorage.googleapis.com/v0/b/web-mini-proj.appspot.com/o/shoes.jpg?alt=media&token=19faf405-894c-4112-8449-ce09b469ca26" },
        { id: "5", typeName: "JEWELLERY", pImg: "https://firebasestorage.googleapis.com/v0/b/web-mini-proj.appspot.com/o/jewellry.jpg?alt=media&token=4dd175c1-6d37-4ebb-8e1d-1e50effeab8f" },
        {
            id: "6", typeName: "FASHION", pImg: "https://firebasestorage.googleapis.com/v0/b/web-mini-proj.appspot.com/o/cosmetic.jpg?alt=media&token=dbf5ff77-4c0a-42bb-9881-32016c1fff34"
        },
        { id: "7", typeName: "COSMETIC", pImg: "https://firebasestorage.googleapis.com/v0/b/web-mini-proj.appspot.com/o/cosmetic.jpg?alt=media&token=dbf5ff77-4c0a-42bb-9881-32016c1fff34" },
        { id: "8", typeName: "BAG", pImg: "https://firebasestorage.googleapis.com/v0/b/web-mini-proj.appspot.com/o/bag.jpg?alt=media&token=f770804f-5954-437a-b855-173ddb84d37e" },
        { id: "9", typeName: "ACCESSORIES", pImg: "https://firebasestorage.googleapis.com/v0/b/web-mini-proj.appspot.com/o/accessories.jpg?alt=media&token=d007120d-4477-4d4c-abe2-45c1083931cf" },
        { id: "10", typeName: "SHOES", pImg: "https://firebasestorage.googleapis.com/v0/b/web-mini-proj.appspot.com/o/shoes.jpg?alt=media&token=19faf405-894c-4112-8449-ce09b469ca26" },
        { id: "11", typeName: "JEWELLERY", pImg: "https://firebasestorage.googleapis.com/v0/b/web-mini-proj.appspot.com/o/jewellry.jpg?alt=media&token=4dd175c1-6d37-4ebb-8e1d-1e50effeab8f" },
    ]);
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        },
    };
    const responsive1 = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        },
    };
    return (
        <div>
            {/* bootstrap carousel */}
            <C_Carousel></C_Carousel>
            {/* react multi carousal */}
            <div className="col-12">
                <Carousel
                    responsive={responsive}>
                    {pData.map((p) => (
                        <div className="border mt-5 mb-5 me-3">
                            <div
                                className="col-12 item pt-3"
                                style={{ width: "100%", display: "inline-block" }}
                            >
                                <div className="product-image" style={{ maxWidth: "600px" }}>
                                    <a href="/" tabIndex={0}>
                                        <img
                                            className="primary blur-up ls-is-cached lazyloaded"
                                            src={p.pImg}
                                            alt="image"
                                            title="product"
                                            style={{ width: "100%", maxWidth: "600px" }}
                                        />
                                    </a>
                                    <form
                                        className="variants add"
                                        action="#"
                                        onclick="window.location.href='cart.html'"
                                        method="post"
                                    >
                                    </form>
                                    <div className="d-flex justify-content-center mt-2 mb-1">
                                        <Route render={({ history }) => (
                                            <button
                                                type='button'
                                                className="btn btn-dark"
                                                onClick={() => { history.push(`/sp/${p.id}/${p.pName}`) }}
                                            >
                                                Show Details
                                            </button>
                                        )} />
                                    </div>
                                    <div className="button-set">
                                        <a
                                            href="javascript:void(0)"
                                            title="Quick View"
                                            className="quick-view-popup quick-view"
                                            data-toggle="modal"
                                            data-target="#content_quickview"
                                            tabIndex={0}
                                        >
                                            <i className="icon anm anm-search-plus-r" />
                                        </a>
                                        <div className="wishlist-btn">
                                            <a
                                                className="wishlist add-to-wishlist"
                                                href="wishlist.html"
                                                tabIndex={0}
                                            >
                                                <i className="icon anm anm-heart-l" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-details text-center">
                                    <div className="product-name">
                                        <a href="short-description.html" tabIndex={0}>
                                            {p.pName}
                                        </a>
                                    </div>
                                    <div className="product-price">
                                        <span className="price">{p.pPrice}</span>
                                    </div>
                                    <div className="product-review">
                                        <i className="font-13 fa fa-star" />
                                        <i className="font-13 fa fa-star" />
                                        <i className="font-13 fa fa-star" />
                                        <i className="font-13 fa fa-star" />
                                        <i className="font-13 fa fa-star-o" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel >;
            </div>
            <div class="section-header text-center">
                <h4 class="h2" style={{ fontWeight: "bolder" }}>Products</h4>
            </div>
            {/* Product type Selection */}
            <div className="col-12">
                <div>
                    <Carousel responsive={responsive1}>
                        {pTData.map((pt) => (
                            <div
                                aria-hidden="false"
                                style={{ width: "246px" }}
                                className="pe-1"
                            >
                                <div>
                                    <div
                                        className="collection-grid-item"
                                        style={{ width: "100%", display: "inline-block" }}
                                    >
                                        <a
                                            href="collection-page.html"
                                            className="collection-grid-item__link"
                                        >
                                            <div >
                                                <div>
                                                    <img
                                                        data-src="assets/images/collection/fashion.jpg"
                                                        src={pt.pImg}
                                                        alt="Fashion"
                                                        className="blur-up ls-is-cached lazyloaded"
                                                    ></img>
                                                </div>
                                                <div className="collection-grid-item__title-wrapper d-flex justify-content-center pb-5">
                                                    <h3 className="collection-grid-item__title btn btn-dark no-border" style={{ width: "100%" }}>
                                                        {pt.typeName}
                                                    </h3>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
            {/* FEATURED Products */}
            <div class="section-header text-center">
                <h4 class="h2" style={{ fontWeight: "bolder" }}>Featured collection</h4>
                <p>Our most popular products based on sales</p>
            </div>
            {/* ////// */}
            <div className="col-12 row">
                {pData.map((pp) => (
                    <div className="col-6 col-sm-6 col-md-4 col-lg-3 item grid-view-item style2 pb-3">
                        <div className="grid-view_image">
                            <a href="product-accordion.html" className="grid-view-item__link">
                                <img
                                    className="grid-view-item__image primary blur-up lazyloaded"
                                    src={pp.pImg}
                                    alt="image"
                                    title="product"
                                />
                                <img
                                    className="grid-view-item__image hover blur-up ls-is-cached lazyloaded"
                                    src={pp.pImg}
                                    alt="image"
                                    title="product"
                                />
                                <div className="product-labels rectangular">
                                    <span className="lbl on-sale">-16%</span>
                                    <span className="lbl pr-label1">new</span>
                                </div>
                            </a>
                            <div className="product-details hoverDetails text-center mobile">
                                <div className="product-name">
                                    <a href="product-accordion.html">Edna Dress</a>
                                </div>
                                <div className="product-price">
                                    <span className="old-price">$500.00</span>
                                    <span className="price">$600.00</span>
                                </div>
                                <div className="button-set">
                                    <div className="wishlist-btn d-flex justify-content-center">
                                        <button className="btn btn-dark me-2">Show Product</button>
                                        <a className="wishlist add-to-wishlist" href="wishlist.html">
                                            <i className="icon anm anm-heart-l" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}
