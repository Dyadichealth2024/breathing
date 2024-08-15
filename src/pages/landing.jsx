// project-imports
import Hero from 'sections/landing/Header';
import Technologies from 'sections/landing/Technologies';
import Combo from 'sections/landing/Combo';
import Apps from 'sections/landing/Apps';
import Free from 'sections/landing/Free';
import Testimonial from 'sections/landing/Testimonial';
import Partner from 'sections/landing/Partner';
import ContactUs from 'sections/landing/ContactUs';

// ==============================|| SAMPLE PAGE ||============================== //

export default function Landing() {
  return (
    <>
      <Hero />
      <section id="combo">
        <Combo />
      </section>
      <section id="technologies">
        <Technologies />
      </section>
      <section id="apps">
        <Apps />
      </section>
      <Free />
      {/* <Testimonial />
      <Partner />
      <ContactUs /> */}
    </>
  );
}
