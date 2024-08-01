import React from 'react';

const VedioTitle = ({ title, overview }) => {
  return (
    <div className="  w-full h-full flex flex-col justify-center  pt-30 px-12 text-white bg-gradient-to-r from-black/50">
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className='bg-slate-300 text-slate-950 mr-5 text-lg px-8 py-2 rounded-md'>
        <i class="fa-solid fa-play"></i>  Play
        </button>
       <button className=' text-lg bg-gray-600 px-8 py-3 rounded-md'>
        <i class="fa-solid fa-circle-info"></i>  More Info
        </button>
       
      </div>
    </div>
  );
};

export default VedioTitle;
