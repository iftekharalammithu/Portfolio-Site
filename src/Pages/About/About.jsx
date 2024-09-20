import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const About = () => {
  return (
    <div className="bdr h-screen bg-slate-200">
      <div data-aos="fade-up">
        This element will fade up when it comes into view.
      </div>
    </div>
  );
};

export default About;
