import React from "react";
import "./splash.css";
import background from "../../assets/images/bg-splash.png";
import lottie from "lottie-web";
import animationData from "../../assets/animations/home-animation.json";

const Splash = (props: any) => {
  const lottieRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    var animDuration = 1000;
    const anim = lottie.loadAnimation({
      container: lottieRef.current!,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData,
    });

    function animatebodymovin(duration: number) {
      const scrollPosition = window.scrollY;
      const scrollMax = window.innerHeight + 1;
      console.log(scrollMax - scrollPosition);
      const maxFrames = anim.totalFrames;
      let elem = document.getElementById("splash");
      let page = document.getElementById("Page");

      const frame =
        (maxFrames / (scrollMax - scrollPosition - 1)) *
        (scrollPosition / (duration / (scrollMax - scrollPosition)));

      anim.goToAndStop(frame, true);

      if (scrollMax - scrollPosition <= 1 && elem) {
        elem.classList.add("animated");
        elem.classList.add("fadeOut");
        elem?.classList.add("short");
        page?.classList.add("animated");
        page?.classList.add("fadeIn");
        setTimeout(() => {
          page?.classList.add("free");
        }, 500);

      }
    }
    const onScroll = () => {
      animatebodymovin(animDuration);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      anim.destroy();
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="splash-container" id="splash">
      <img src={background} alt="background" className="splash-background" />
      <div className="animation-container">
        <div className="animation" ref={lottieRef}></div>
      </div>
    </div>
  );
};

export default Splash;
