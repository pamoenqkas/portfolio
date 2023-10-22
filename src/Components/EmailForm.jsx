import React, { useState } from 'react'
import emailjs from "@emailjs/browser"

export const EmailForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_beg9ktf';
        const templateId = 'template_3i644bo';
        const publicKey = '_rnKkK5sWOEDNiGIZ';

        const templateParams = {
            from_name : name,
            from_email : email,
            to_name: 'Wahyu Sutanto Pamungkas',
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey).then((response) => {
            console.log('Email sent succesfully!', response);
            setName('');
            setEmail('');
            setMessage('');
        })
        .catch((error) => {
            console.error('error reading email', error);
        })
    }
    
  return (
    <form onSubmit={handleSubmit} className='emailForm'>
        <input
            type='text'
            placeholder='Your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <input
            type='email'
            placeholder='Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
            cols={30}
            rows={10}
            placeholder='Your Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        >   
        </textarea>
        <button type='submit'> Send Email </button>

    </form>
  )
}

export default EmailForm