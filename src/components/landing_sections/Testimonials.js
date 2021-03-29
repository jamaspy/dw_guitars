import React from "react";
import * as testimonialStyles from "../../scss/testimonials.module.scss";
import Testimonial from "../../components/styled_components/Testimonial";
import { testimonials } from "../../data/testimonials";
const Testimonials = () => {
  return (
    <main className={testimonialStyles.container}>
      {testimonials.map((test, index) => (
        <Testimonial comment={test.comment} />
      ))}
    </main>
  );
};

export default Testimonials;
