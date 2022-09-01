import React from "react";
import "./splash.css";
import background from "../../assets/images/bg-splash.png";
import lottie from "lottie-web";
import animationData from "../../assets/animations/home-animation.json";

const Splash = (props: any) => {
  const lottieRef = React.useRef<HTMLDivElement>(null);

  function onComplete() {
    let elem = document.getElementById("splash");
    let page = document.getElementById("Page");

    elem?.classList.add("animated");
    elem?.classList.add("fadeOut");
    page?.classList.add("animated");
    page?.classList.add("fadeIn");
    setTimeout(() => {
      page?.classList.add("free");
      elem?.classList.add("short");
    }, 50);
  }

  React.useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieRef.current!,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData,
    });

    anim.setSpeed(0.6);

    anim.addEventListener("complete", () => onComplete());

    return () => {
      anim.destroy();
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
