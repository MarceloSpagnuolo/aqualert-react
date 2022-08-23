import React from "react";
import "./home.css";
import background from "../../assets/images/bg-home.png";
import lottie from "lottie-web";
import animationData from "../../assets/animations/home-animation.json";

const Home = () => {
    const lottieRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        var animDuration = 1000;
        const anim = lottie.loadAnimation({
          container: lottieRef.current!,
          renderer: "svg",
          loop: false,
          autoplay: false,
          animationData
        });
        
        function animatebodymovin(duration: number) {
            const scrollPosition = window.scrollY;
            const scrollMax = window.innerHeight + 18;
            console.log(scrollMax - scrollPosition);
            const maxFrames = anim.totalFrames;
            let elem = document.getElementById("hello");
    
          const frame = (maxFrames / ( scrollMax - scrollPosition - 1 )) * (scrollPosition / (duration / ( scrollMax - scrollPosition  )));
    
          anim.goToAndStop(frame, true);

          if (scrollMax - scrollPosition === 1 && elem) {
            console.log("entre acá")
            elem.className += " show";
          } else {
            elem?.classList.remove('show');
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
        <div className="home-container">
            <img src={ background } alt="background" className="background" />
            <div style={{ position: "fixed" }} ref={lottieRef}></div>;
            <div className="hola" id="hello">
                <h1>Hola mundo</h1>
            </div>
        </div>
    )
}

export default Home;