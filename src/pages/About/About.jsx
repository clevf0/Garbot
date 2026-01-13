import "./About.css";

export default function About(){
    return(
        <div className="about">
            <div className={"about-text"} id="about">
            <h1>About Garbot</h1>
            <p>Garbot is an AI-powered automated trash sorting system designed to make waste management smarter, faster,
                and more reliable. By combining computer vision, smart sensors, and machine learning, Garbot can
                identify and separate waste in real time—reducing human error and improving recycling efficiency.</p>
            </div>

            <div className={"about-text"} id="about-why">
                <h2>Why Garbot Exists</h2>
                <p>Waste sorting is one of the biggest challenges in recycling. Contamination, inconsistent sorting, and
                    manual labor reduce the effectiveness of recycling systems worldwide. Garbot was created to solve this
                    problem by bringing intelligence directly to the point of disposal.</p>
            </div>

            <div className={"about-text"} id="about-how">
                <h2>How It Works</h2>
                <p>Garbot uses advanced image recognition and sensor data to analyze trash as it’s thrown away. Within
                    seconds, the system classifies the waste—such as plastic, metal, paper, or organic materials—and
                    directs it to the correct compartment automatically. <br/><br/>

                    No guesswork. No extra steps. Just smarter disposal.</p>
            </div>

            <div className={"about-text"} id="about-mission">
                <h2>Our Mission</h2>
                <p>Our mission is simple:<br/>
                    To reduce waste contamination and make recycling effortless for everyone.<br/><br/>

                    By automating sorting and using data-driven insights, Garbot helps communities, schools, offices, and public
                    spaces move toward a more sustainable future.</p>
            </div>

            <div className={"about-text"} id={"about-future"}>
                <h2>Built for the Future</h2>
                <p>Garbot isn’t just a trash bin—it’s a platform. With continuous learning and updatable AI models, the
                    system improves over time, adapting to new materials and waste patterns. Every piece of data collected
                    helps make waste management more efficient and environmentally responsible.</p>

            </div>

        </div>
    )
}