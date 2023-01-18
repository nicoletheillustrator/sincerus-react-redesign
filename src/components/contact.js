import React from "react"

//sincerus.vizslas@gmail.com
const Contact = (props) => {
    return (
        <form name="contact v1"  method="post" data-netlify="true" onSubmit="submit" className="contact-wrap" ref={props.contactref}>
            <div className="i-class">
                
                        <i className="fa-solid fa-arrow-left-long" onClick={props.functionBack}></i>
                        <i className="fa-solid fa-xmark" onClick={props.functionCloseAll} ref={props.hideref}></i>
            </div>
                
                <h3>Contact Us</h3>
                
                <form action="">
                    
                    <input className="a" placeholder="Your name.." name="name"></input>
                    
                    <input className="b" placeholder="Your email.." name="email"></input>
                                
                                <textarea className="c col-span" placeholder="Type your message here.."></textarea>

                                
                    <button>cancel</button>
                    <button className="send-btn" type="submit">send</button>
            
                </form>

            
                
        </form>
    )
}

export default Contact;