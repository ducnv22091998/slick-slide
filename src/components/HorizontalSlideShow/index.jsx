import React, { useState } from "react";
import Slider from "react-slick";
import { HorizontalSlideShowWrapper } from "./styled";

const HorizontalSlideShow = (props) => {
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  const onChangeSlider1 = (data) => setSlider1(data);
  const onChangeSlider2 = (data) => setSlider2(data);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
  };

  return (
    <HorizontalSlideShowWrapper>
      <Slider
        asNavFor={slider1}
        ref={(slider) => onChangeSlider2(slider)}
        {...settings}
      >
        <div className="item-wrapper">
          <div className="item">
            <div className="item-inner">
              <div className="circle"></div>
            </div>
          </div>
        </div>
        <div className="item-wrapper">
          <div className="item">
            <div className="item-inner">
              <div className="circle"></div>
            </div>
          </div>
        </div>
        <div className="item-wrapper">
          <div className="item">
            <div className="item-inner">
              <div className="circle"></div>
            </div>
          </div>
        </div>
        <div className="item-wrapper">
          <div className="item">
            <div className="item-inner">
              <div className="circle"></div>
            </div>
          </div>
        </div>
        <div className="item-wrapper">
          <div className="item">
            <div className="item-inner">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </Slider>
      <Slider
        asNavFor={slider2}
        ref={(slider) => onChangeSlider1(slider)}
        fade
        speed={0}
      >
        <div>
          <div className="info">
            <div className="info-list">
              <div className="info-item">item 1</div>
              <div className="info-item">2</div>
              <div className="info-item">3</div>
              <div className="info-item">4</div>
              <div className="info-item">5</div>
            </div>
          </div>
        </div>
        <div>
          <div className="info">
            <div className="info-list">
              <div className="info-item">1</div>
              <div className="info-item">item 2</div>
              <div className="info-item">3</div>
              <div className="info-item">4</div>
              <div className="info-item">5</div>
            </div>
          </div>
        </div>
        <div>
          <div className="info">
            <div className="info-list">
              <div className="info-item">1</div>
              <div className="info-item">2</div>
              <div className="info-item">item 3</div>
              <div className="info-item">4</div>
              <div className="info-item">5</div>
            </div>
          </div>
        </div>
        <div>
          <div className="info">
            <div className="info-list">
              <div className="info-item">1</div>
              <div className="info-item">2</div>
              <div className="info-item">3</div>
              <div className="info-item">item 4</div>
              <div className="info-item">5</div>
            </div>
          </div>
        </div>
        <div>
          <div className="info">
            <div className="info-list">
              <div className="info-item">1</div>
              <div className="info-item">2</div>
              <div className="info-item">3</div>
              <div className="info-item">4</div>
              <div className="info-item">item 5</div>
            </div>
          </div>
        </div>
      </Slider>
    </HorizontalSlideShowWrapper>
  );
};

export default HorizontalSlideShow;
