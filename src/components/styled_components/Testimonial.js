import React from "react";
import * as testimonialStyles from "../../scss/testimonials.module.scss";
import { ImQuotesRight } from "react-icons/im";
const Testimonial = ({ comment }) => {
  return (
    <div className={testimonialStyles.testimonial_main_container}>
      <div className={testimonialStyles.testimonial_icon}>
        <ImQuotesRight />
      </div>
      <div className={testimonialStyles.testimonial_quote}>{comment}</div>
      <div className={testimonialStyles.testimonial_avatar}></div>
    </div>
  );
};

export default Testimonial;
