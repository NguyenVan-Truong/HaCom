import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
    const settings = {
        // dots: true,
        // infinite: true,
        // speed: 500,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // autoplay: true, // Thêm thuộc tính autoplay
        // autoplaySpeed: 2000 // Thời gian giữa các slide (2 giây)

    };
    return (
        <div className="w-80">
            <Slider {...settings}>
                <div>
                    <h3><img src="../images/sanpham1.jpg" alt="" /></h3>
                </div>
                <div>
                    <h3><img src="../images/sanpham2.jpg" alt="" /></h3>
                </div>
                <div>
                    {/* <h3><img src="../images/sanpham3.jpg" alt="" /></h3>
                </div>
                <div>
                    <h3><img src="../images/sanpham4.jpg" alt="" /></h3>
                </div>
                <div>
                    <h3><img src="../images/sanpham8.jpg" alt="" /></h3>
                </div>
                <div>
                    <h3><img src="../images/sanpham7.jpg" alt="" /></h3> */}
                </div>
            </Slider>
        </div>
    );
}

export default SimpleSlider;
