import { Github, Linkedin, Mail, PhoneCall } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from  "emailjs-com"
import toast from 'react-hot-toast'

const Contact = () => {

  const [form,setForm]=useState({
    name:"",
    email:"",
    message:""
  })

  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(!form.email || !form.message || !form.name ){
     return toast.error("Fill all fields :)")
    }

        emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form,
      import.meta.env.VITE_PUBLIC_KEY
    
    ).then(()=>{
      toast.success('Email Sent Successfully')
    }).catch((e)=>{
      toast.error("Service not available!!")
      console.log(e)
    })

      setForm({
         name:"",
    email:"",
    message:""
      })
      
  }

    return ( 
      <div
        className="relative flex justify-center min-h-screen  px-6 sm:px-10 py-40 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 pointer-events-none bg-linear-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950"></div>
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] pointer-events-none bg-linear-to-r from-cyan-400/30 to-blue-600/30 blur-3xl rounded-full opacity-30"></div>

        <div className="">

        <h1  className='text-5xl sm:text-6xl font-bold mb-10 text-center bg-linear-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text' >
          Let's Connect
        </h1>

        <p className='max-w-2xl text-center text-gray-300 text-md '>
          Have a project idea, collaboration, or just want to say hi? Feel free to drop a message — I’d love to connect with you 🚀


        </p>
    {/*  Email msg Deliver component */}
        <div className='py-10  grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-5xl'>

          <div
          className="w-full max-w-4xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl shadow-lg p-7 sm:p-10 border
          border-gray-200/40 dark:border-gray-700/40  "
          >  

            <div className='flex flex-col gap-2 py-3'>
              <label htmlFor  ='name' className="text-gray-700 dark:text-gray-200 font-medium">Name</label>
              <input type="text"
              placeholder='Your FullName'
              required
              id='name'
              name='name'
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent 
                focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300"
                onChange={handleChange}
                value={form.name}

              />
            </div>

            <div className='flex flex-col gap-2 py-3'>
              <label htmlFor  ='email' className="text-gray-700 dark:text-gray-200 font-medium">Email</label>
              <input type="email"
              placeholder='Your@gmail'
              required
              id='email'
              name='email'
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent 
                focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300"
              onChange={handleChange}
              value={form.email}
              />
            </div>

            <div className='flex flex-col gap-2 py-3'>
              <label htmlFor  ='message' className="text-gray-700 dark:text-gray-200 font-medium">Message</label>
            <textarea
            id="message"
            name='message'
            placeholder='Write your message here... '
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent 
                focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300 min-h-30"
                onChange={handleChange}
                value={form.message}
            >
              
            </textarea>
            </div>

            <div 
            className='text-center mt-10'>
              <button onClick={handleSubmit} className='w-full text-white hover:opacity-75 transition-all duration-200 px-8 py-4 rounded-lg text-md font-medium  bg-linear-to-r from-blue-600 to-cyan-400  '  >
        Send Message
        </button>
            </div>


          </div>


          <div
          className='w-full max-w-4xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl shadow-lg p-7 sm:p-10 border
          border-gray-200/40 dark:border-gray-700/40 '
          >

          <div className=' p-10 flex flex-col justify-center text-center items-center   '>
              <h1 className='text-xl  mb-5 font-semibold text-white '>
                Contact Info
              </h1>

              <p className='flex gap-2 mb-5 text-sm text-gray-300'>

                <Mail className='text-blue-600'></Mail>
                abhaykrsingh2904@gmail.com
              </p>

              <span className='flex gap-2 mb-5 text-sm text-gray-300' >
                <Github className=''></Github>
                <Link 
                className='text-gray-300 hover:text-cyan-600 transition-all duration-300'
                to='https://github.com/abhaydotcom'
                >github.com/abhaydotcom</Link>

              </span>

              <span className='flex mb-5 gap-2 text-sm text-gray-300' >
                <Linkedin></Linkedin>
                <Link 
                className='text-gray-300 hover:text-cyan-600 transition-all duration-300'
                to='https://linkedin.com/in/abhaydotcom'>
                linkedin.com/in/abhaydotcom
                </Link>
              </span>

              <div className='mb-2  flex gap-3 text-sm tracking-tighter text-gray-300'>
              <PhoneCall></PhoneCall>
              +990273032
              </div>

              <p className='text-gray-400 mt-10 max-w-sm text-sm '>
                I usually reply within a few hours — feel free to reach out anytime!
              </p>


          </div>

          </div> 


        </div>


        </div>
        
    </div>
    )
  }

export default Contact