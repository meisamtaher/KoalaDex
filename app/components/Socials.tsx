import React from 'react'
import { FaDiscord, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { linkedin_url, twitter_url, discord_url } from '../constants/socials';


const Socials = () => {
  return (
    <div className="w-[117px] h-6 justify-start items-start gap-6 inline-flex">
        <div className="w-6 h-6 relative" ><FaDiscord href={discord_url} fill='white'/></div>
        <div className="w-6 h-6 relative" ><FaLinkedin href={linkedin_url} fill='white'/></div>
        <div className="w-6 h-6 relative" ><FaXTwitter xlinkHref={twitter_url} fill='white'/></div>
    </div>
  )
}

export default Socials