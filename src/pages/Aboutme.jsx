import { useState, useEffect } from "react";
import styles from "../styles/AboutMe.module.css";

function AboutMe() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
            observer.observe(aboutSection);
        }

        return () => {
            if (aboutSection) {
                observer.unobserve(aboutSection);
            }
        };
    }, []);

    return (
        <section id="about-section" className={styles.container}>
            <div className={styles.content}>
                <div className={`${styles.header} ${isVisible ? styles.animate : ''}`}>
                    <h2 className={styles.title}>About <span className={styles.highlight}>Me</span></h2>
                    <div className={styles.underline}></div>
                </div>

                <div className={styles.aboutContent}>
                    <div className={`${styles.textSection} ${isVisible ? styles.animate : ''}`}>
                        <div className={styles.mainInfo}>
                            <h3 className={styles.subtitle}>
                                Hello! I'm <span className={styles.highlight}>Ellyzes John</span>
                            </h3>
                            <p className={styles.description}>
                                A passionate <span className={styles.emphasis}>BSIT graduate</span> from the 
                                prestigious <span className={styles.emphasis}>Cebu Institute of Technology</span>. 
                                My journey in technology began with curiosity and has evolved into a deep love 
                                for creating innovative web solutions that make a difference.
                            </p>
                            <p className={styles.description}>
                                I specialize in modern web development, focusing on creating seamless user 
                                experiences with clean, efficient code. Every project I work on is an 
                                opportunity to push boundaries and learn something new.
                            </p>
                        </div>

                        <div className={styles.personalLife}>
                            <h4 className={styles.sectionTitle}>When I'm Not Coding</h4>
                            <div className={styles.hobbies}>
                                <div className={styles.hobby}>
                                    <div className={styles.hobbyIcon}>🎮</div>
                                    <div className={styles.hobbyText}>
                                        <h5>Gaming</h5>
                                        <p>Exploring virtual worlds and strategic challenges</p>
                                    </div>
                                </div>
                                <div className={styles.hobby}>
                                    <div className={styles.hobbyIcon}>👥</div>
                                    <div className={styles.hobbyText}>
                                        <h5>Hanging Out</h5>
                                        <p>Building connections and sharing experiences with friends</p>
                                    </div>
                                </div>
                                <div className={styles.hobby}>
                                    <div className={styles.hobbyIcon}>🌄</div>
                                    <div className={styles.hobbyText}>
                                        <h5>Adventures</h5>
                                        <p>Discovering new places and creating unforgettable memories</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.skillsSection} ${isVisible ? styles.animate : ''}`}>
                        <h4 className={styles.sectionTitle}>Skills & Technologies</h4>
                        <div className={styles.skillsGrid}>
                            <div className={styles.skillCategory}>
                                <h5 className={styles.categoryTitle}>Frontend</h5>
                                <div className={styles.skills}>
                                    <span className={styles.skill}>React</span>
                                    <span className={styles.skill}>JavaScript</span>
                                    <span className={styles.skill}>HTML5</span>
                                    <span className={styles.skill}>CSS3</span>
                                    <span className={styles.skill}>Bootstrap</span>
                                </div>
                            </div>
                            <div className={styles.skillCategory}>
                                <h5 className={styles.categoryTitle}>Backend</h5>
                                <div className={styles.skills}>
                                    <span className={styles.skill}>Node.js</span>
                                    <span className={styles.skill}>MySQL</span>
                                    <span className={styles.skill}>Spring-boot</span>
                                </div>
                            </div>
                            <div className={styles.skillCategory}>
                                <h5 className={styles.categoryTitle}>Tools</h5>
                                <div className={styles.skills}>
                                    <span className={styles.skill}>Git</span>
                                    <span className={styles.skill}>VS Code</span>
                                    <span className={styles.skill}>Figma</span>
                                    <span className={styles.skill}>Postman</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;