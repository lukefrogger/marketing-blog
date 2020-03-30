import React, { useState } from "react"

const ContactForm = () => {
    const [form, setForm] = useState({});
    const [submitted, setSubmitted] = useState(false);
    // const encode = (data) => {
    //     return Object.keys(data)
    //       .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    //       .join('&')
    // }
    const handleChange = e => {
        setForm({ 
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const formDOM = e.target;
        console.log(formDOM.getAttribute('name'));
        console.log(form);
        // fetch('/', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        //     body: encode({
        //     'form-name': formDOM.getAttribute('name'),
        //     ...form,
        //     }),
        // })
        //     .then(() => {
        //         setSubmitted(true);
        //     })
        //     .catch(error => alert(error));
    }


    if(!submitted) {
        return (
            <form 
                name="contact" 
                className="contactForm text-white"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
            >
                <div hidden>
                    <label>
                        Don’t fill this out or your a sucka:{' '}
                        <input name="bot-field" onChange={handleChange} />
                    </label>
                </div>
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <input 
                        type={'text'}
                        name={'name'}
                        onChange={handleChange}
                        required={true} />
                </div>
                <div className="field">
                    <label htmlFor="email">Email Address</label>
                    <input 
                        className="input"
                        type={'email'}
                        name={'email'}
                        onChange={handleChange}
                        required={true} />
                </div>
                <div className="field">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                        className="input"
                        type={'text'}
                        name={'phone'}
                        onChange={handleChange}
                        required={true} />
                </div>
                <div className="field">
                    <label htmlFor="project">Tell me about your project</label>
                    <textarea 
                        className="textarea"
                        name={'project'}
                        onChange={handleChange}
                        required={true}
                        rows="3" >
                    </textarea>
                </div>
                <div className="field text-right">
                    <button className="button outline-orange" type="submit">Submit</button>
                </div>
            </form>
        )
    }
    else {
        return (
            <h3>Noice</h3>
        )
    }
}

export default ContactForm;