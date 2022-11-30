import React from "react"


const Contact = (props) => {
    return (
        <div className="contact-wrap" ref={props.contactref}>
        <div className="i-class">
            
                    <i className="fa-solid fa-arrow-left-long" onClick={props.functionBack}></i>
                    <i className="fa-solid fa-xmark" onClick={props.functionCloseAll} ref={props.hideref}></i>
        </div>
            
            <h3>Contact Us</h3>
            
             <form action="">
                 
                 <input className="a" placeholder="Your name.."></input>
                 
                 <input className="b" placeholder="Your email.."></input>
                            
                             <textarea className="c col-span" placeholder="Type your message here.."></textarea>

                             
                <button>cancel</button>
                <button className="send-btn">send</button>
         
             </form>

           
            
        </div>
    )
}

export default Contact;