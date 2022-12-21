import Head from 'next/head'
import { FC, useState } from 'react'
import Footer from '../components/Footer'
import YTVideo from '../components/YTVideo'
import goodhub from '../public/goodhub-green.svg'
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
      <div className=' flex w-full items-center z-10 justify-center'>
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


//Main content
export default function Organisations() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>GoodHub | Digital tools for community organisations</title>
        <meta name="description" content="GoodHub is a charity that provides free, easy-to-use digital tools for community organisations. We are built to help community organisations with their social media and websites for free. On this page you will find informations for community organisations to use GoodHub"/>
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
          className="flex h-48 md:h-96 w-full items-center justify-center bg-center bg-cover "
          style={{ backgroundImage: `url("organisations_hero_small.jpg")`}}
        >
        </div>
        <div className="prose-lg mx-auto max-w-4xl px-3 pt-6 leading-6 md:px-6">
          <h2 className="text-2xl md:text-3xl italic text-center font-bold">
            We are built to help community organisations with their social media and websites for free.
          </h2>
          <p className="text-neutral-700 text-base md:text-xl">
            If you have an online presence already, most of your outreach will likely come through social media. 
            Just making everything look as professional and attractive as you would like takes a lot of time, and can include using special 
            tools and people that you have to pay extra for. Add to that the amount of time 
            it takes to tailor content to each of these social platforms and it can take a very significant amount of resources.
          </p>
          <p className="text-neutral-700 text-base md:text-xl">
            Similarly, a website is a really useful addition to your outreach but the upkeep of up-to-date and relevant information, 
            making sure the website consistently looks great, and is fast and compliant to the latest standards can also tend to feel 
            like it is more trouble than it is worth.
          </p>
          <p className="text-neutral-700 text-base md:text-xl">
            In short these increasingly essential activities tend to take much needed, valuable, time and resources away from the work
            that actually is the core of your organisation. That is where GoodHub aims to help you.
          </p>


          <p className="text-base md:text-xl font-bold italic">Phase 1 - Helping you reach out</p>
          <div className="mt-4 h-28 min-h-[30vw] lg:min-h-[20vw] flex w-full bg-no-repeat bg-center bg-contain bg-[url('../public/ghsocialtools.jpg')]"></div>
          <p className="text-base md:text-xl text-neutral-700">
            Our first essential tools are to help with reaching
            out to funders, volunteers and members of the public via a radically
            simple social media and website helper.
          </p>
          <p className="text-base md:text-xl text-neutral-700">
            If you can add a comment on Facebook, you can create and run
            professional, attractive and engaging digital outreach with GoodHub. 
            The video below is a quick overview of how these tools work.
          </p>  
          <p className="text-base md:text-xl text-neutral-700">         
            If you are interested in easily 
            transforming the effectiveness of your outreach and want early access to GoodHub then please <a className="hover:text-indigo-600" href="mailto:info@goodhub.org.uk?subject=GoodHub%20Early%20adopter%20program">get in touch.</a>
          </p>
        </div>
        <YTVideo/>
        <Footer/>
      </main>
    </div>
  )
}
