import Head from 'next/head'
import { FC, useState } from 'react'
import nyan from '../public/nyan-sign.gif'
import YTVideo from '../components/YTVideo'
import Footer from '../components/Footer'
import goodhub from '../public/goodhub-green.svg'
import { FiMenu} from 'react-icons/fi';

const Header: FC = ({ children }) => (
  <div className="flex w-full items-left absolute mx-auto max-w-4xl p-1 top-0">
    <FiMenu className="m-2 inline w-6 h-6 text-white md:w-8 md:h-8" />
  </div>
  // <a
  //   href="mailto:info@goodhub.org.uk?subject=GoodHub%20Early%20adopter%20program"
  //   className="flex w-full items-center justify-center bg-[#b729a5] p-1 text-center text-sm md:p-4 md:text-lg text-white"
  // >
  //   <p>
  //     GoodHub is in beta testing:{' '}
  //     <i className="whitespace-nowrap">Click here if you want to be an early adopter.</i>
  //   </p>
  // </a>
  // old#de5830
)

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>GoodHub | Digital tools for community organisations</title>
        <meta name="description" content="GoodHub is a charity that provides free, easy-to-use digital tools for community organisations"/>
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
        <div  id="heroImage"
          className="flex h-72 w-full items-center justify-center bg-[length:200%] bg-center sm:h-96 sm:bg-cover"
          style={{ backgroundImage: `url("${nyan.src}")` }}
        >
          <img
            alt="Logo for GoodHub" className="relative -top-2 w-[40%] sm:-top-3 sm:w-1/5" 
            src={goodhub.src}
          />
        </div>

        <div className="prose-lg mx-auto max-w-4xl px-3 pt-6 leading-6 md:px-6">
          <h2 className="text-2xl md:text-3xl italic text-center font-bold">
            GoodHub is a new charity that provides free, <span className="whitespace-nowrap">easy-to-use</span> digital tools
            for community organisations
          </h2>
          <p className="text-neutral-700 text-base md:text-xl">
            Digital tools can transform an organisation's efficiency, communication and effectiveness.
            But let's be real - they can also infuriate, confuse and waste vast amounts of time! 
          </p>
          <p className="text-neutral-700 text-base md:text-xl">
            Built by I.T professionals, GoodHub's aim is to give all the benefits of digital tools
            with none of the drawbacks. From branding to HR, funding to volunteer management, GoodHub plans
            to have everything a smaller charity or voluntary organisation needs, so that they can concentrate 
            on improving the lives of local people.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="group m-0 p-0 border-2 rounded-md overflow-hidden hover:border-black bg-slate-600">
              <a href="contributing">
                <img alt="Image showing a homeless man, overlaid with a title of give help, written in a font which denotes code" className="m-0" src="gh_contributors_small.jpg" />
                <p className="md:text-xl m-2 p-2 font-bold italic text-slate-200 group-hover:text-white ">More information on contributing</p>
              </a>
            </div>
            <div className="group m-0 p-0 border-2 rounded-md overflow-hidden hover:border-black bg-slate-600">
              <a href="organisations">
                <img alt="Image showing a frustrated emoji with an arrow to a phone and a smiling emoji" className="m-0" src="gh_orgs_small.jpg" />
                <p className="md:text-xl m-2 p-2 font-bold italic text-slate-200 group-hover:text-white">More information for community organisations</p>
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
