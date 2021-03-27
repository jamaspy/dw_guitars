import React from "react";
import * as testimonialStyles from "../../scss/testimonials.module.scss";
import { ImQuotesRight } from "react-icons/im";
const Testimonials = () => {
  return (
    <main className={testimonialStyles.container}>
      <div className={testimonialStyles.testimonial_main_container}>
        <div className={testimonialStyles.testimonial_icon}>
          <ImQuotesRight />
        </div>
        <div className={testimonialStyles.testimonial_quote}>
          Truly Awesome Content. I highly recommend!
        </div>
        <div className={testimonialStyles.testimonial_avatar}></div>
      </div>
      <div className={testimonialStyles.testimonial_main_container}>
        <div className={testimonialStyles.testimonial_icon}>
          <ImQuotesRight />
        </div>
        <div className={testimonialStyles.testimonial_quote}>
          Truly Awesome Content. I highly recommend!
        </div>
        <div className={testimonialStyles.testimonial_avatar}></div>
      </div>
      <div className={testimonialStyles.testimonial_main_container}>
        <div className={testimonialStyles.testimonial_icon}>
          <ImQuotesRight />
        </div>
        <div className={testimonialStyles.testimonial_quote}>
          Truly Awesome Content. I highly recommend!
        </div>
        <div className={testimonialStyles.testimonial_avatar}></div>
      </div>
    </main>
  );
};

export default Testimonials;
