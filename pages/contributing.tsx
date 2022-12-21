import Head from 'next/head'
import { FC, useState } from 'react'
import goodhub from '../public/goodhub-green.svg'
import YTVideo from '../components/YTVideo'
import Footer from '../components/Footer'
import { FiMenu, FiX, FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiYoutube, FiGithub} from 'react-icons/fi';
import { FaRegHandPaper, FaPeopleCarry } from 'react-icons/fa';
import { RiHomeSmile2Line } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';

const Header: FC = ({ children }) => {
  const [isMenuOpen, setMenuState] = useState(false);
  return <div className="bg-[#043368] flex w-full items-center justify-center">
    <div className='flex relative w-full mx-auto max-w-4xl flex items-center'>
      <div className="flex w-full items-left absolute p-0.5 md:p-3 top-0 left-0 z-20 mx-auto max-w-4xl">
        <button onClick={() => setMenuState(!isMenuOpen)}>
          { isMenuOpen ? 
            <FiX className="m-2 inline w-6 h-6 text-white md:w-8 md:h-8" /> :
            <FiMenu className="m-2 inline w-6 h-6 text-white md:w-8 md:h-8" />
          }
        </button>
      </div>
      { isMenuOpen ? <div className="bg-[#043368] flex w-full items-left absolute mx-auto max-w-xs md:max-w-sm p-0 z-0 bg-[#043368]left-0 pt-12 md:pt-15 top-0">
        <ul className="text-white md:text-xl md:p-3.5">
              <li><a href="/" ><RiHomeSmile2Line className="m-2 w-6 h-6 text-white inline hover:text-indigo-600" />Homepage</a></li>
              <li><a href="organisations" ><FaPeopleCarry className="m-2 w-6 h-6 text-white inline hover:text-indigo-600" />For community organisations</a></li>
              <li><a href="contributing" ><FaRegHandPaper className="m-2 w-6 h-6 text-white inline hover:text-indigo-600" />Contribute your skills</a></li>
              <li><a aria-label="GoodHub at Github" href="https://github.com/goodhub" target="_blank"><FiGithub className="m-2 w-6 h-6 text-white inline hover:text-indigo-600" />GoodHub at GitHub</a></li>
              <li><a aria-label="GoodHub at Facebook" href="https://www.facebook.com/good.hub" target="_blank"><FiFacebook className="m-2 w-6 h-6 text-white inline hover:text-indigo-600" />Facebook</a></li>
              <li><a aria-label="GoodHub at Twitter" href="https://twitter.com/goodhubuk" target="_blank"><FiTwitter className="m-2 w-6 h-6 text-white inline hover:text-indigo-600" />Twitter</a></li>
              <li><a aria-label="GoodHub at Instagram" href="https://www.instagram.com/goodhubuk/" target="_blank"><FiInstagram className="m-2 w-6 h-6 text-white inline hover:text-indigo-600" />Instagram</a></li>
              {/* <a href="#" target="_blank"><FiLinkedin className="inline m-2 w-6 h-6 text-black hover:text-indigo-600" /></a> */}
              <li><a aria-label="GoodHub at Youtube" href="https://www.youtube.com/channel/UCNBYz-Frps3bVgSDnbvG4Og" target="_blank"><FiYoutube className="m-2 inline w-6 h-6 text-white hover:text-indigo-600" />Youtube</a></li>
              <li><a aria-label="Our email" href="mailto:info@goodhub.org.uk" target="_blank"><HiOutlineMail className="m-2 w-6 h-6 text-white inline hover:text-indigo-600" />Email</a></li>
        </ul>
      </div> : null  }
      <div className=' flex w-full items-center justify-center z-10'>
        <a
          href="/" aria-label="Go to the Homepage"
          className=" bg-[#043368] p-1 text-center text-sm md:p-4 md:text-lg text-white"
        >
                <img
                  alt="Logo for GoodHub" className="filter invert h-5 md:h-7 m-2" 
                  src={goodhub.src}
                />
        </a>
      </div>
    </div>
  </div>
  // old#de5830
}

export default function Contributing() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>GoodHub | How to contribute</title>
        <meta name="description" content="GoodHub is a charity that provides free, easy-to-use digital tools for community organisations. Do you work in software and want to contribute more to those in need? On this page you will find information if you do want to be involved." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex w-full flex-1 flex-col">
        <div id="heroImage"
          className="flex h-48 md:h-96 w-full items-center justify-center bg-center bg-cover"
          style={{ backgroundImage: `url("contributors_hero_small.jpg")` }}
        >
        </div>

        <div className="prose-lg mx-auto max-w-4xl px-3 pt-6 leading-6 md:px-6">
          <h2 className="text-2xl md:text-3xl italic text-center font-bold">
            <span className="md:inline-block">Do you work in software and </span><span className="md:inline-block">want to contribute more to those in need?</span>
          </h2>
          <p className="text-neutral-700 text-base md:text-xl">
            If you want to use your sofware development skills to support those in need, then head on over to our <a className="hover:text-indigo-600" aria-label="GoodHub at Github" href="https://github.com/goodhub" target="_blank">GitHub repository</a> and look at our <a className="hover:text-indigo-600" href="https://github.com/goodhub/goodhub#readme" target="_blank">readme</a> on how to contribute, or <a className="hover:text-indigo-600" href="mailto:info@goodhub.org.uk?subject=Contributing%20to%20GoodHub">get in touch with us directly</a> 
          </p>
          <p className="text-base md:text-xl font-bold italic">But what if I want to support you, but can't face extra development work at the end of my day?</p>
          <p className="text-neutral-700 text-base md:text-xl">
            We have all been there! You do not have to contribute directly in development, but you can support us financially, 
            either with the efficient method of  <a  className="hover:text-indigo-600" href="https://charitiestrust.org/services/individuals/payrollgiving-individuals">payroll giving</a>, or one off amounts <a className="hover:text-indigo-600" href="mailto:info@goodhub.org.uk?subject=Arrange%20a%20one-off%20secure%20donation">directly and securely to us</a>, and even through <a className="hover:text-indigo-600" href="https://smile.amazon.co.uk/ch/1197414-0">Amazon Smile </a> 
             who contribute an amount to us every time you purchase something from their website. 
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="group m-0 p-0 border-2 rounded-md overflow-hidden hover:border-black bg-slate-600">
              <a href="https://charitiestrust.org/services/individuals/payrollgiving-individuals">
                <img className="m-0" alt="Image depicts payroll giving" src="payroll-giving.jpeg" />
                <p className="md:text-xl m-2 p-2 font-bold italic text-slate-200 group-hover:text-white ">Support us with Payroll Giving</p>
              </a>
            </div>
            <div className="group m-0 p-0 border-2 rounded-md overflow-hidden hover:border-black bg-slate-600">
              <a href="https://smile.amazon.co.uk/ch/1197414-0">
                <img className="m-0" alt="The Amazon Smile logo" src="amazon-smile.jpeg" />
                <p className="md:text-xl m-2 p-2 font-bold italic text-slate-200 group-hover:text-white">Support us with Amazon Smile</p>
              </a>
            </div>
          </div>
        </div>
        <YTVideo/>
        <Footer/>
      </main>
    </div>
  )
}
