import React, { useRef } from "react";
import developer from "../Components/photo/developer.jpg";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Nav from "./Nav";
import DeveloperCV from "../Components/PDF/DeveloperCV.pdf";
import Recomendation from "../Components/PDF/Adpdf.pdf";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
    const handleDownloadCv = () => {
        const pdfUrl = DeveloperCV;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "MyResume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleDownload = () => {
        const pdfUrl = Recomendation;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "MyRecomendation.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // ✅ Image Animation
    const developerRef = useRef();
    useGSAP(() => {
        gsap.from(developerRef.current, {
            opacity: 0,
            duration: 1.5,
            scale: 0.8,
            delay: 0.3,
            ease: "power2.out",
        });
    }, []);

    // ✅ Text Animation
    const textRefs = useRef([]);

    const addToRefs = (el) => {
        if (el && !textRefs.current.includes(el)) {
            textRefs.current.push(el);
        }
    };

    useGSAP(() => {
        gsap.from(textRefs.current, {
            opacity: 0,
            y: -40,
            duration: 1.5,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#home",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });
    }, []);

    return (
        <div className="w-full h-full" id="home">
            <div className="firstContent w-full h-auto flex flex-col lg:flex-row items-center lg:items-start space-y-10 lg:space-y-0">
                {/* Text Area */}
                <div className="textArea w-full lg:w-1/2 flex flex-col px-10 lg:px-40 space-y-3 text-center lg:text-left">
                    <h3 ref={addToRefs} className="text-xl mt-20 lg:mt-60">
                        Hello,
                    </h3>
                    <h1 ref={addToRefs} className="text-4xl md:text-5xl lg:text-6xl font-bold">
                        I'm Mohammad Alif
                    </h1>
                    <h1 ref={addToRefs} className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                        A Passionate Front-End Developer
                    </h1>
                    <h4 ref={addToRefs} className="text-lg md:text-xl">
                        Building sleek, responsive, and interactive web experiences with React.js, Vite & Tailwind CSS.
                    </h4>
                    <h2 ref={addToRefs} className="text-lg md:text-xl font-medium">
                        Let’s create something amazing together!
                    </h2>
                    <div className="w-full flex flex-col md:flex-row items-center justify-center lg:justify-start gap-5 py-10">
                        <button
                            onClick={handleDownloadCv}
                            className="bg-[#6666CC] font-georgia text-lg md:text-xl text-white border-none p-3 md:p-5 h-auto md:h-[10vh] w-[80%] md:w-[30vh] hover:bg-[#FFAA4C] transition-all duration-300 ease-in-out"
                        >
                            Download Resume
                        </button>
                        <button
                            onClick={handleDownload}
                            className="bg-[#6666CC] font-georgia text-lg md:text-xl text-white border-none p-3 md:p-5 h-auto md:h-[10vh] w-[80%] md:w-[30vh] hover:bg-[#FFAA4C] transition-all duration-300 ease-in-out"
                        >
                            Download Recommendation
                        </button>
                    </div>
                </div>

                {/* Image Area */}
                <div className="imageArea p-5 flex justify-center items-center w-full lg:w-1/2">
                    <img ref={developerRef} className="max-w-full h-auto rounded-lg shadow-lg object-cover" src={developer} alt="developer picture" />
                </div>
            </div>

            {/* ✅ Navbar Added Here */}
            <Nav />

            {/* Other Sections */}
            <div className="aboutme" id="aboutme">
                <About />
            </div>
            <div className="services" id="services">
                <Services />
            </div>
            <div className="contact" id="contact">
                <Contact />
            </div>
        </div>
    );
}

export default Home;
