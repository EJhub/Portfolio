import { Routes, Route, Link, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import img from "../assets/pic-web.jpg";
import styles from "../styles/Home.module.css";
import SideBar from "../components/SideBar";

function Home() {
    // Function to scroll to projects section
    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Function to scroll to about section (for contact button)
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <>
            <NavBar />
            <div className={styles.container}>
                <SideBar/>
                <div className={styles.content}>
                    <div className={styles.imageContainer}>
                        <img src={img} alt="Profile Picture" className={styles.profileImage} />
                    </div>
                    <div className={styles.textContent}>
                        <h1 className={styles.mainHeading}>
                            Hi, It's <span className={styles.highlight}>Ellyzes John</span>
                        </h1>
                        <h3 className={styles.subHeading}>
                            I am a <span className={styles.highlight}>Web Developer</span>
                        </h3>
                        <p className={styles.description}>
                            Passionate about creating innovative web solutions and bringing ideas to life through code. 
                            I specialize in modern web technologies and love crafting user experiences that make a difference.
                        </p>
                        <div className={styles.buttonContainer}>
                            <button 
                                className={styles.primaryButton}
                                onClick={scrollToProjects}
                            >
                                View My Work
                            </button>
                            <button 
                                className={styles.secondaryButton}
                                onClick={scrollToContact}
                            >
                                Contact Me
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;