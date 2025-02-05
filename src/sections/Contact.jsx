import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
const service= import.meta.env.VITE_SERVICE_URL;
const template= import.meta.env.VITE_TEMPLATE_URL;
const user= import.meta.env.VITE_PUBLIC_URL;
const Contact = () => {
  const formRef=useRef();
 const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name:"",
    email:"",
    message:"",
  });

  const handleChange=({target:{name,value}})=>{
      setForm({...form,[name]:value});
  }
  const handleSubmit=async (e)=>{
    //service_z4qt276
    e.preventDefault();
    setLoading(true);
try {
   await emailjs.send(service,template,{
        from_name:form.name,
        to_name:'Shubham',
        from_email:form.email,
        to_email:'shubham82p@gmail.com',
        message:form.message,
     },user);
     setLoading(false);
     setForm({name:"",email:"",message:""});
     alert('Message Sent Successfully');
    
} catch (error) {
   setLoading(false); 
    alert('Something went wrong, Please try again later');
}
    
  }

  return (
    <section className='c-space my-20 ' id={"contact"}>
        <div className='relative min-h-screen flex items-center justify-center flex-col'>
            <img src="/assets/terminal.png"  alt="terminal background"  className='absolute inset-0 min-h-screen'/> 
            <div className='contact-container'>
            <h3 className='head-text mt-12'>Let's Connect</h3>
            <p className='text-md text-white mt-3'>Whether your looking to build a new website improve your existing platform or bring a unique project to life im here to help.and write about any thing </p>
           
            <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7 '>
                <label htmlFor="name" className='space-y-3'>
                    <span className='field-label'>Full Name</span>
                    <input type="text" name='name' value={form.name} onChange={handleChange} required className='field-input'  placeholder='Shubham Patil'/>
                </label>
                <label htmlFor="email" className='space-y-3'>
                    <span className='field-label'>Email</span>
                    <input type="email" name='email' value={form.email} onChange={handleChange} required className='field-input'  placeholder='shubham@gmail.com'/>
                </label>
                <label htmlFor="meaage" className='space-y-3'>
                    <span className='field-label'>Your Message</span>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={5} className='field-input' placeholder='Hi , I wanna connect..'></textarea>
                </label>
                <button type='submit' className='field-btn' disabled={loading}>
                    {loading?'Sending...':'Send Message'}
                    <img src="/assets/arrow-up.png"  alt="arrow" className='field-btn_arrow'/>
                </button>
            </form>
            </div>
        </div>
        
    </section>
  )
}

export default Contact
