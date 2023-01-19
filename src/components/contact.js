import React from "react"

//sincerus.vizslas@gmail.com
const Contact = (props) => {
    return (
        <div className="contact-wrap" ref={props.contactref}>
            <div className="i-class">
                
                        <i className="fa-solid fa-arrow-left-long" onClick={props.functionBack}></i>
                        <i className="fa-solid fa-xmark" onClick={props.functionCloseAll} ref={props.hideref}></i>
            </div>
                
                <h3>Contact Us</h3>
                
                <form name="contact+" action="/contact"  method="post" >
                    <input type="hidden" name="form-name" value="contact"></input>
                    <input type="text" name="name" className="a" placeholder="Your name.." required ></input>
                    
                    <input type="text" name="email" className="b" placeholder="Your email.." required ></input>
                                
                                <textarea required className="c col-span" placeholder="Type your message here.." type="text"></textarea>

                                
                    <button>cancel</button>
                    <button className="send-btn" type="">send</button>
            
                </form>

            
                
        </div>
    )
}

export default Contact;