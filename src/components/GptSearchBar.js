import React, { useRef } from 'react'
import lang from "../utils/Lang"
import { useSelector } from 'react-redux'
import openai1 from '../utils/openai'
const GptSearchBar = () => {
  const searchtext=useRef(null);

  const HandleGptSearchClick= async ()=>{

    const query= "Act as a Movie Recommendation system and suggest some movies for the query : "+ searchtext.current.value + " . only give me names of 5 movies,comma separated like the example result given ahead . Example Result : Gadar , Sholay, Don,Golmal,Koi Mil Gaya";
    const gptResults = await openai1.chat.completions.create({
  
      messages: [{ role: 'user', content: query }],
      model: 'gpt-3.5-turbo',
    });
    console.log(gptResults.openai);
  }
  
  const langkey = useSelector((store)=>store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center ' >
      <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
        <input ref={searchtext} type="text" className='p-4 m-4 col-span-9' placeholder={lang[langkey].gptSearchPlaceholder} />
        <button className=' m-4 py-2 px-4 bg-red-700 text-white rounded-lg col-span-3' onClick={HandleGptSearchClick}>{lang[langkey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
