import React from "react";
import * as testimonialStyles from "../../scss/testimonials.module.scss";
import Testimonial from "../../components/styled_components/Testimonial";
import { testimonials } from "../../data/testimonials";
const Testimonials = () => {
  return (
    <main className={testimonialStyles.container}>
      {testimonials.map((test, index) => (
        <Testimonial
          key={index}
          comment={test.comment}
          isLite={test.isLite}
          side={test.side}
        />
      ))}
    </main>
  );
};

export default Testimonials;
