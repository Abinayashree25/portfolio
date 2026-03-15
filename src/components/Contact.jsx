import Power from './Contact.module.css'
import { useRef } from "react"
import emailjs from "@emailjs/browser"
import Abiii from "../assets/mesgs.png"

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            "service_g89ysw9",
            "template_c1b6ysr",
            form.current,
            "cCMhIJlgSAqiiJfwi"
        ).then(
            (result) => {
                alert("Message Sent Successfully!")
            },
            (error) => {
                alert("Failed to send message")
            }
        )

        e.target.reset()
    }

    return (
        <div className={Power.contactText} id="Contact">
            <h1>Contact Me</h1>
            <div className={Power.board}>
           <div className={Power.move} >
                        <img src={Abiii} alt="message" />
                    </div>
                
               <form ref={form} onSubmit={sendEmail} className={Power.bro}>
                 
                    
                    <div className={Power.contactContainer}>
                        <label>Name</label>
                        <input type="text" name="user_name" placeholder="Your Name" required />
                    </div>

                    <div className={Power.contactContainer}>
                        <label>Email</label>
                        <input type="email" name="user_email" placeholder="Your Email" required />
                    </div>

                    <div className={Power.contactContainer}>
                        <label>Message</label>
                        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                    </div>

                    <div className={Power.contactContainer}>
                        <button type="submit">Send Message</button>
                    </div>
                
            </form>
            </div>
        </div>

    )
}

export default Contact
