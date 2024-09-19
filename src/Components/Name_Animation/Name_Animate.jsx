import { ParallaxSlider } from "../Slider";

const Name_Animate = () => {
  return (
    <div className="absolute bottom-0">
      <h1 className="text-[82px] mb-[40px] h-28 lg:mb-[150px] lg:text-[136px] md:text-[100px]">
        <ParallaxSlider repeat={4} baseVelocity={2}>
          <span className="pe-12 font-marker">
            Iftekhar Alam Mithu
            <span className="spacer"> ~</span>
          </span>
        </ParallaxSlider>
      </h1>
    </div>
  );
};

export default Name_Animate;
