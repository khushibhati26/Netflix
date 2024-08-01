import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around  p-8 bg-black '>
      
      <div className ="flex flex-col text-white underline">
<a className='m-4' href="#">FAQ</a>
<a  className='m-4' href="#">Investor Relationss</a>
<a className='m-4' href="#">Privacy</a>
<a className='m-4' href="#">Speed Test</a>
<p className=' font-semibold m-4 no-underline'>Netflix India 🙂</p>

      </div>
      <div className ="flex flex-col text-white underline" >
<a className='m-4' href="#">Help centre</a>
<a className='m-4' href="#">Jobs</a>
<a className='m-4'  href="#">Cookie Preferences</a>
<a className='m-4' href="#">Legal Notices</a>
      </div>
      <div className ="flex flex-col text-white underline">
<a className='m-4'  href="#">Accounts</a>
<a className='m-4' href="#">Ways to watch</a>
<a className='m-4' href="#">Corporate Information</a>

      </div>
      <div className ="flex flex-col text-white underline">
      <a className='m-4' href="#">Media Centre</a>
<a className='m-4' href="#">Terms of use</a>
<a className='m-4' href="#">Contact Us</a>

      </div>

    </div>
 
   
  )
}

export default Footer
