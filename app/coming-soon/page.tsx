'use client'
import React,{useState} from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { KoalaDex } from '../components/KoalaDex';
import Socials from '../components/Socials';
import Footer from '../components/Footer';

const  ComingSoon = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string|undefined>(undefined);
  const submit_email = async(event:React.FormEvent<HTMLFormElement>)=>{
    event?.preventDefault();
    
    setLoading(true);
    try {
      console.log(typeof(event.constructor.name));
      console.log("Here is your email: ",email);
      const data = {"email":email};
      const result = await axios.post("/api/emails",data);
      console.log(result);
      if(result.status == 201){
        router.push("/coming-soon/success");
      }
    } catch (error) {

    }
    setLoading(false);
  }
  return (
    <div className=" max-w-2xl  bg-slate-950 bg-opacity-50 rounded-2xl pt-10 pb-10 pr-4 pl-4 shadow-md shadow-white/10 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8" >
      <h1 className="text-2xl md:max-2xl:text-3xl font-bold leading-tight text-white">Coming Soon</h1>
      <div className='h-6'/>
      <div className="flex-col justify-start items-start gap-2 inline-flex">
        <p className="text-white text-lg md:max-2xl:text-2xl">Be the first to know.</p>
        <p className="text-white text-xs md:max-2xl:text-lg">Enter your email and be notified of our exciting launch date.</p>
      </div>
      <form onSubmit={submit_email} className='inline-flex h-20 w-full pt-3 pb-3'>
        <input
          type="email"
          id='email'
          name= 'email'
          content={email}
          onChange={e=> setEmail(e.target.value)}
          className="w-full p-2  border-l border-t border-b border-gray-500 rounded-tl-2xl rounded-bl-2xl  focus:outline-none"
          placeholder="Email address"
        />
        <button disabled={loading} className="w-[150px] bg-sky-500 border-r border-t border-b border-gray-500 text-white pr-1  pl-1 rounded-tr-2xl rounded-br-2xl h-full text-xl" >Send</button>
      </form>

      <p className="text-sky-500 text-xs font-normal" >Don't miss out on the opportunity to join the revolution of decentralized trading. Sign up now.</p>
      <div className='h-6 '/>
      <Footer/>
    </div>
  </div>
  )
}

export default ComingSoon;
