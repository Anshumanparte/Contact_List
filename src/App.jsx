import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
    
  const [name, setname] = useState('')
  const [company, setcompany] = useState('')
  const [phone, setphone] = useState('')
  const [favorite, setfavorite] = useState(false);

  const [allusers, setAllusers] = useState([])
  const formhanddler = (e)=>{

    e.preventDefault();
    setcompany('')
    setname('')
    setphone('')
    setfavorite(false)
    if(name.trim() != '' && phone.trim() != ''){
      const newarr = [...allusers,{name,company,phone,favorite}]
    setAllusers(newarr);
    }
    
  }
  
  const deletehanddler = (i)=>{
    const list = [...allusers];
    list.splice(i,1);
    setAllusers(list);
  } 

  return (
    <div className=' flex h-screen '>
    
    <div className='flex flex-col w-1/2 p-10'>
      <h1 className='text-5xl font-semibold mb-10'>Add Contact</h1>
      <form onSubmit={(form)=>{
        formhanddler(form);
      }}>
        <h5 className='text-2xl font-semibold'>Name*</h5>
        <input className='border-2 border-gray-400 mb-5 w-96 text-2xl'
        value={name}
        onChange={(e)=>{
          setname(e.target.value)
        }}
        type="text"  />
        <h5 className='text-2xl font-semibold'>Company</h5>
        <input className='border-2 border-gray-400 mb-5 w-96 text-2xl'
        value={company}
        onChange={(e)=>{
          setcompany((e.target.value))
        }}
        type="text"  />
        <h5 className='text-2xl font-semibold'>Phone*</h5>
        <input className='border-2 border-gray-400 mb-5 w-96 text-2xl'
        value={phone}
        onChange={(e)=>{
          setphone(e.target.value)
        }}
        type="text"  />
        <div className='flex items-center gap-3 mb-5 '>
        <h5 className='text-2xl font-semibold '>Favorite</h5>
        <input 
        checked={favorite}
        onChange={()=>{setfavorite(!favorite)}}
        className='  scale-150 '
        type="checkbox" /> 
        </div>
        
        <button className='bg-blue-800 w-48 text-center justify-center hover:bg-blue-600 text-white px-7 py-3 flex rounded-2xl '>Add</button>
      </form>
    </div>
       


        <div className='p-10 bg-slate-400 w-1/2  '>
          <h1 className=' font-semibold text-5xl mb-10'>Contact list</h1>
          <div className=' '>
            {allusers.length >0? allusers.map((elem,idx)=>{
                return <>
                
                <div className=' w-96 bg-white rounded-3xl p-5 mb-5'>
                  <div className='flex justify-between'>
                    <h1 className='mb-2 font-semibold capitalize text-2xl'>{elem.name}</h1>
                    {elem.favorite?(
                    <h5 className='bg-yellow-600 px-2 py-1 rounded-2xl mb-5  hover:bg-yellow-500'>favorite</h5>
            ):("") }
                  </div>
                  
                  <h3 className='mb-2'>Company: {elem.company}</h3>
                  <h3 className='mb-3'>Phone: {elem.phone}</h3>
                  
                  
                  <button onClick={()=>{
                        deletehanddler(idx)
                  }} className='bg-red-600 px-2 py-1 rounded-2xl hover:bg-red-500'>Delete</button>
                </div>
                
                </>
                  
            }): (<h1 className='text-4xl font-semibold  text-gray-700'>Not Available !</h1>) }
          </div>
        </div>
    </div>


  )
}

export default App
