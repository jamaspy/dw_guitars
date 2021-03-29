import React from "react";
import * as testimonialStyles from "../../scss/testimonials.module.scss";
import { ImQuotesRight } from "react-icons/im";
const Testimonial = ({ comment, isLite, side }) => {
  const applyStyle = () => {
    if (isLite && side === "left") {
      return testimonialStyles.testimonial_main_container_light_left;
    }
    if (isLite && side === "right") {
      return testimonialStyles.testimonial_main_container_light_right;
    }
    if (!isLite && !side) {
      return testimonialStyles.testimonial_main_container_dark;
    }
  };
  return (
    <div className={applyStyle()}>
      <div
        className={
          isLite
            ? testimonialStyles.testimonial_icon_dark
            : testimonialStyles.testimonial_icon_light
        }
      >
        <ImQuotesRight />
      </div>
      <div className={testimonialStyles.testimonial_quote}>{comment}</div>
      <div className={testimonialStyles.testimonial_avatar}></div>
    </div>
  );
};

export default Testimonial;
