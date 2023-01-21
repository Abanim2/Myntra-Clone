import React from "react";
import './Details.css';
import { Link } from "react-router-dom";

export default function Details() {
    return(
        <>
        <section className="leftside">
        <div className="ldiv">
        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg" alt="" className="detailimg"/>
        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7488102/2019/8/22/efbde05f-7f74-458c-b092-bbc9c2600ce71566454086768-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-2.jpg" className="detailimg"/>
        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7488102/2019/8/22/936afc2c-4596-4c38-8f90-770d21935f281566454086747-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-3.jpg" alt="" className="detailimg"/>
        <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7488102/2019/8/22/9292c168-14fc-45b0-94d7-442414f8d4f81566454086728-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-4.jpg" alt="" className="detailimg" />
        </div>
        </section>
        <section className="rightside">
            <div className="rdiv">
            <div className="bold">Dennis Lingo</div>
            <br />
            <div>Men Slim Fit Casual Shirt</div>
            <div>Rs. 554</div>
            <div className="rate">Rs. 1849</div>
            <div className="orange">70%</div>
            <div>Size Chart</div>
            <div className="s">
                <div className="circle">
                <div className="cir">S</div>
            </div>
            <div className="circle">
                <div className="cir">M</div>
            </div>
            <div className="circle">
                <div className="cir">L</div>
            </div>
            <div className="circle">
                <div className="cir">XL</div>
            </div></div>
            </div>
            <br /><br />
            <br /><br /><br /><br />
            <button className="b">Add to Cart</button>
        </section>
        </>
    )
}