import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import word from './word2.gif'

const Conect = () => {
     const form = useRef();

     const sendEmail = (e) => {
          e.preventDefault();
          emailjs.sendForm('service_g8b86ap', 'template_6bg6g9u', form.current, 'PX9bxfsHdd3VI7tuB')
               .then((result) => {
                    console.log(result.text);
                    alert('Send Your All Things')
               }, (error) => {
                    console.log(error.text);
               });
     };

     return (
          <div className='lg:px-24 lg:mx-12  lg:font-medium  lg:rounded-2xl  mb-24 bg-primary pb-20 py-12'>
               <h1 className='text-3xl md:text-4xl py-10 text-white lg:text-5xl uppercase text-center  font-bold'>Don't hesitate to contact...!</h1>
               <div className="hero justify-between ">
                    <div className="hero-content  flex-col lg:flex-row-reverse">
                         <img src={word} className="w-full md:w-4/6 lg:ml-16 lg:w-5/5 hover:shadow-2xl rounded-2xl  " alt='' />

                         <div className="card flex-shrink-0 mt-4 lg:w-3/6 md:w-4/6 w-full shadow-md hover:shadow-2xl bg-base-100">
                              <div className="card-body w-6/6 ">
                                   <form ref={form} onSubmit={sendEmail}>
                                        <label>Name</label>
                                        <input className='input mb-1 input-bordered w-full' type="text" name="name" placeholder='Your Name' />
                                        <label>Email</label>
                                        <input className='input mb-1  input-bordered w-full' type="email" name="email" placeholder='Your Email' />
                                        <label>Mobile No</label>
                                        <input className='input mb-1  input-bordered w-full' type="text" name="number" placeholder='Your Number' />
                                        <label>Message</label>
                                        <textarea className='input h-28 mb-3 input-bordered w-full' name="message" placeholder='Write Message' />
                                        <input className='btn btn-secondary w-full' type="submit" value="Send" />
                                   </form>


                              </div>
                         </div>












                    </div>
               </div>
          </div>
     );
};

export default Conect;