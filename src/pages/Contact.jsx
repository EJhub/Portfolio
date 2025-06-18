import { useState, useEffect } from "react";
import emailjs from 'emailjs-com';
import styles from "../styles/Contact.module.css";

function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            observer.observe(contactSection);
        }

        return () => {
            if (contactSection) {
                observer.unobserve(contactSection);
            }
        };
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            // EmailJS configuration
            const serviceID = 'service_ji178jk'; // Replace with your EmailJS service ID
            const templateID = 'template_x478qp7'; // Replace with your EmailJS template ID
            const userID = 'c_uP54oEzUSal4hqt'; // Replace with your EmailJS user ID

            // Template parameters that will be sent to EmailJS
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                to_email: 'ellyzesjohn@gmail.com',
                subject: formData.subject || 'Contact from Portfolio Website',
                message: formData.message,
                reply_to: formData.email
            };

            // Send email using EmailJS
            const response = await emailjs.send(
                serviceID,
                templateID,
                templateParams,
                userID
            );

            console.log('Email sent successfully:', response);
            setSubmitStatus('success');
            
            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

            // Clear success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus('');
            }, 5000);

        } catch (error) {
            console.error('Email sending failed:', error);
            setSubmitStatus('error');
            
            // Clear error message after 5 seconds
            setTimeout(() => {
                setSubmitStatus('');
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: '📧',
            title: 'Email',
            value: 'ellyzesjohn@gmail.com',
            link: 'mailto:ellyzesjohn@gmail.com'
        },
        {
            icon: '🐙',
            title: 'GitHub',
            value: 'View my repositories',
            link: 'https://github.com/EJhub'
        },
        {
            icon: '📍',
            title: 'Location',
            value: 'Cebu, Philippines',
            link: null
        }
    ];

    return (
        <section id="contact-section" className={styles.container}>
            <div className={styles.content}>
                <div className={`${styles.header} ${isVisible ? styles.animate : ''}`}>
                    <h2 className={styles.title}>Contact <span className={styles.highlight}>Me</span></h2>
                    <div className={styles.underline}></div>
                    <p className={styles.subtitle}>Let's work together and create something amazing</p>
                </div>

                <div className={styles.contactContent}>
                    <div className={`${styles.contactInfo} ${isVisible ? styles.animate : ''}`}>
                        <div className={styles.infoHeader}>
                            <h3 className={styles.infoTitle}>Get In Touch</h3>
                            <p className={styles.infoDescription}>
                                I'm always open to discussing new opportunities, creative projects, 
                                or just having a chat about technology and web development.
                            </p>
                        </div>

                        <div className={styles.infoGrid}>
                            {contactInfo.map((info, index) => (
                                <div 
                                    key={index} 
                                    className={styles.infoItem}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className={styles.infoIcon}>{info.icon}</div>
                                    <div className={styles.infoContent}>
                                        <h4 className={styles.infoItemTitle}>{info.title}</h4>
                                        {info.link ? (
                                            <a 
                                                href={info.link} 
                                                className={styles.infoLink}
                                                target={info.link.startsWith('http') ? '_blank' : '_self'}
                                                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <span className={styles.infoValue}>{info.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`${styles.contactForm} ${isVisible ? styles.animate : ''}`}>
                        <div className={styles.formHeader}>
                            <h3 className={styles.formTitle}>Send Message</h3>
                            <p className={styles.formDescription}>
                                Fill out the form below and I'll get back to you as soon as possible.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formRow}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="name" className={styles.label}>Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={styles.input}
                                        placeholder="Your full name"
                                        required
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="email" className={styles.label}>Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={styles.input}
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="subject" className={styles.label}>Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className={styles.input}
                                    placeholder="What's this about?"
                                    required
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="message" className={styles.label}>Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className={styles.textarea}
                                    placeholder="Tell me about your project or just say hello..."
                                    rows="6"
                                    required
                                />
                            </div>

                            <button 
                                type="submit" 
                                className={styles.submitButton}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className={styles.spinner}></span>
                                        Sending Message...
                                    </>
                                ) : (
                                    <>
                                        <span className={styles.buttonIcon}>📧</span>
                                        Send Message
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <div className={styles.successMessage}>
                                    <span className={styles.successIcon}>✅</span>
                                    Message sent successfully! I'll get back to you soon.
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className={styles.errorMessage}>
                                    <span className={styles.errorIcon}>❌</span>
                                    Failed to send message. Please try again or contact me directly.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;