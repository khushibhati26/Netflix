import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constant';
import { changeLang } from '../utils/configSlice';


const Header = () => {
  const dispatch = useDispatch();
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)

  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);
 

const HandleLanguageChange=(e)=>{
  console.log(e.target.value);
  dispatch(changeLang(e.target.value));
}

  const HandleGptSearchClick=()=>{
    dispatch(toggleGptSearchView());
        };
    

  const handleSignOut=()=>{
   
    signOut(auth).then(() => {
    
    }).catch((error) => {
    
    });
    
  }

 

  useEffect(() => {
     const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User logged in:', user);
        const { uid, displayName, email,photoURL } = user;
        dispatch(addUser({ uid:uid, email:email, displayName:displayName,photoURL:photoURL }));
        navigate("/browse")
      } else {
        console.log('No user logged in');
        dispatch(removeUser());
        navigate("/")
      }
    });

   
    return () => unsubscribe();
   
  }, []);

  
  return (
    <div className=' justify-between fixed w-full  z-10 flex  align-middle h-16 bg-black ' >
     <div> <img className='w-40'  src="https://about.netflix.com/images/logo.png" alt="logo"></img> </div>
    
    {user && <div className='flex ml-2 p-3 h-16 '>
      {showGptSearch && (
      < select className=' m-2 px-3 h-8 bg-gray-900 text-white ' onChange={HandleLanguageChange}>{SUPPORTED_LANGUAGES.map(lang =>  <option  key={lang.code} value={lang.code}>{lang.name}</option> )}
       
      
      </select>)}
      <button onClick={HandleGptSearchClick} className='py-2 px-4 mx-2  bg-purple-800 rounded text-white '>{showGptSearch? ("Home Page"):("Gpt Search")}</button>
     <img  src={user.photoURL}></img>
     
      <button onClick={handleSignOut} className='text-white bg-red-700 rounded-md px-3 py-1 z-10  ml-2 ' >Sign Out</button>
     </div>}
    </div>
    
    
  )
}

export default Header
