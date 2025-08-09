import { useState, useEffect } from "react";
import styles from "../styles/Projects.module.css";
import citImage  from "../assets/cit.png";
import weathermate from "../assets/weathermate.png";
import colorpicker from "../assets/ColorPicker.png";
import TaskManager from "../assets/TaskManager.png"

function Projects() {
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

        const projectsSection = document.getElementById('projects-section');
        if (projectsSection) {
            observer.observe(projectsSection);
        }

        return () => {
            if (projectsSection) {
                observer.unobserve(projectsSection);
            }
        };
    }, []);

    // Project data - currently just one project
    const projects = [
        {
            id: 1,
            title: "WildTrack",
            description: "CIT-U Elementary Library Time Tracker. Simplifying library access and time tracking for students and educators.",
            image: citImage, // You'll need to replace this with your actual image path
            technologies: ["React", "Node.js", "MySQL", "Spring-boot"],
            status: "Completed",
            link: "https://wild-track.vercel.app/"
        },
        {
            id: 2,
            title: "WeatherMate",
            description: "It is a responsive React app that shows real-time weather data using the OpenWeather API",
            image: weathermate, // You'll need to replace this with your actual image path
            technologies: ["React", "CSS", "OpenWeather API"],
            status: "Completed",
            link: "https://weathermate-cucl.vercel.app/"
        },
         {
            id: 3,
            title: "Color Picker",
            description: "A React-based interactive color picker featuring dark/light theme toggle and animated \"EJ\" text bubbles that float across the background in random colors. Users can select colors using a color input, view the selected color in a large preview box, and switch between light and dark modes with a toggle button.",
            image: colorpicker, // You'll need to replace this with your actual image path
            technologies: ["React", "CSS"],
            status: "Completed",
            link: "https://ejcolor-picker.vercel.app/"
        },
        {
            id: 4,
            title: "Task Manager",
            description: "A simple React+Redux Task Manager app where users can ADD, EDIT, DELETE task and Mark as complete",
            image: TaskManager, // You'll need to replace this with your actual image path
            technologies: ["React", "Redux"],
            status: "Completed",
            link: "https://task-manager-iota-sepia.vercel.app/"
        }
    ];

    return (
        <section id="projects-section" className={styles.container}>
            <div className={styles.content}>
                <div className={`${styles.header} ${isVisible ? styles.animate : ''}`}>
                    <h2 className={styles.title}>My <span className={styles.highlight}>Projects</span></h2>
                    <div className={styles.underline}></div>
                    <p className={styles.subtitle}>Showcasing my work and technical expertise</p>
                </div>

                <div className={`${styles.projectsGrid} ${isVisible ? styles.animate : ''}`}>
                    {projects.map((project, index) => (
                        <div 
                            key={project.id} 
                            className={styles.projectCard}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className={styles.imageContainer}>
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className={styles.projectImage}
                                />
                                <div className={styles.overlay}>
                                    <div className={styles.overlayContent}>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer"><button className={styles.viewButton}>View</button></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={styles.cardContent}>
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <span className={styles.status}>{project.status}</span>
                                </div>
                                
                                <p className={styles.projectDescription}>
                                    {project.description}
                                </p>
                                
                                <div className={styles.technologies}>
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className={styles.tech}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {/* Placeholder cards to show the 3-per-row layout */}
                    <div className={styles.placeholderCard}>
                        <div className={styles.placeholderContent}>
                            <div className={styles.placeholderIcon}>🚀</div>
                            <h3 className={styles.placeholderTitle}>Coming Soon</h3>
                            <p className={styles.placeholderText}>More exciting projects in development</p>
                        </div>
                    </div>
                    
                    <div className={styles.placeholderCard}>
                        <div className={styles.placeholderContent}>
                            <div className={styles.placeholderIcon}>💡</div>
                            <h3 className={styles.placeholderTitle}>In Progress</h3>
                            <p className={styles.placeholderText}>Working on innovative solutions</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;