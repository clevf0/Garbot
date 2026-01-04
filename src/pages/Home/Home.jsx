import "./Home.css"

import { useEffect, useRef } from "react";

function Home(){
    const hintRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const fadeEnd = 200;
            const scrollY = window.scrollY;
            const opacity = Math.max(0, 1 - scrollY / fadeEnd);

            if (hintRef.current) {
                hintRef.current.style.opacity = opacity;

                if (opacity < 0.2) {
                    hintRef.current.style.animation = "none";
                }
            }
        };

        const continuousEvent = () =>{

        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return(
        <div>
        <section className="hero">
            <div className="hero-content">
                <h1>Garbot</h1>
                <p>Your AI-powered trash sorter</p>

                <div className="hero-buttons">
                    <button className="primary">About Garbot</button>
                    <button className="secondary">Dashboard</button>
                </div>
            </div>
            <div ref={hintRef} className="scroll-hint">
                ...
            </div>
        </section>

            <section className="about-wrapper">
                <div className="about-text">
                    <h2>What's Garbot?</h2>
                    <p>
                        <b>Garbot</b> is an <em>AI-powered</em> automated trash sorter that uses
                        computer vision and smart sensors to identify and separate waste in real time.
                        It reduces human error, improves recycling accuracy, and makes proper waste
                        disposal effortless.
                        <br /><br />
                        Designed for homes, schools, offices, and public spaces, Garbot increases
                        recycling efficiency while supporting long-term environmental sustainability.
                    </p>
                </div>

                <div className="youtube-embed">
                    <iframe
                        width="670" height="290"
                        src="https://www.youtube.com/embed/GSHijTGSRiY"
                        title="Smart Garbage Sorting Machine"
                        allowFullScreen
                    />
                </div>
            </section>

        </div>
    )
}

export default Home;