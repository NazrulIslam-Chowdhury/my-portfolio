import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { MdContactMail } from 'react-icons/md'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_38hhx1a', 'template_m8j58tf', form.current, 'HXjlHLKHUos-E7lOa')
            .then((result) => {
                // console.log(result.text);
                toast.success('Message sent successfully')
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='container mx-auto px-4'>
            <div>
                <p className='font uppercase ml-4 mt-4 text-blue-300 font-semibold text-3xl'>Contact Me .</p>
                <hr style={{
                    border: '0.5px dashed gray',
                    margin: '15px 15px 0 15px'
                }} />
            </div>
            <div className='p-5 bg-sky-700 mt-10 flex justify-evenly items-center flex-col md:flex-row lg:flex-row '>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col">
                    <label className='font'>Name</label>
                    <input type="text" placeholder="name" className="input input-bordered input-accent w-full max-w-xs" name="user_name" />
                    <label className='mt-3 font'>Email</label>
                    <input type="text" placeholder="email" className="input input-bordered input-accent w-full max-w-xs" name="user_email" />
                    <label className='mt-3 font'>Message</label>
                    <textarea className="textarea textarea-accent max-w-xs" placeholder="message" name="message"></textarea>
                    <button className='btn btn-outline font max-w-xs mt-5'>Submit</button>
                </form>
                <MdContactMail className='h-56 w-52 text-green-400' />
            </div>
        </div>
    );
};

export default Contact;