import React, { FC } from 'react';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiYoutube, FiGithub } from 'react-icons/fi';



const Footer: FC = () => {
  return <footer className="flex items-center justify-center p-4 text-center">
        <div>
            <a  className="hover:text-indigo-600" href="https://register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/5189511" target="_blank">GoodHub is a UK Registered Charity No. 1197414</a> 
            <div className="block text-center">
            <a aria-label="GoodHub at Github" href="https://github.com/goodhub" target="_blank"><FiGithub className="m-2 w-6 h-6 text-black inline hover:text-indigo-600" /></a>
            <a aria-label="GoodHub at Facebook" href="https://www.facebook.com/good.hub" target="_blank"><FiFacebook className="m-2 w-6 h-6 text-black inline hover:text-indigo-600" /></a>
            <a aria-label="GoodHub at Twitter" href="https://twitter.com/goodhubuk" target="_blank"><FiTwitter className="m-2 w-6 h-6 text-black inline hover:text-indigo-600" /></a>
            <a aria-label="GoodHub at Instagram" href="https://www.instagram.com/goodhubuk/" target="_blank"><FiInstagram className="m-2 w-6 h-6 text-black inline hover:text-indigo-600" /></a>
            {/* <a href="#" target="_blank"><FiLinkedin className="inline m-2 w-6 h-6 text-black hover:text-indigo-600" /></a> */}
            <a aria-label="GoodHub at Youtube" href="https://www.youtube.com/channel/UCNBYz-Frps3bVgSDnbvG4Og" target="_blank"><FiYoutube className="m-2 inline w-6 h-6 text-black hover:text-indigo-600" /></a>
            </div>
        </div>
    </footer>
}

export default Footer