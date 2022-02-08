import Head from 'next/head'
import { FC } from 'react'
import nyan from '../public/nyan-sign.gif'
import goodhub from '../public/goodhub-green.svg'

const Header: FC = ({ children }) => (
  <a
    href="mailto:info@goodhub.org.uk?subject=GoodHub%20Early%20adopter%20program"
    className="flex w-full items-center justify-center bg-[#de5830] p-4 text-center text-lg text-white"
  >
    <p>
      GoodHub is in beta testing:{' '}
      <i>Click here if you want to be an early adopter.</i>
    </p>
  </a>
)

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>GoodHub | Mission Statement</title>
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
        <div
          className="flex h-72 w-full items-center justify-center bg-[length:200%] bg-center sm:h-96 sm:bg-cover"
          style={{ backgroundImage: `url("${nyan.src}")` }}
        >
          <img
            className="relative -top-2 w-[40%] sm:-top-3 sm:w-1/5" 
            src={goodhub.src}
          />
        </div>

        <div className="prose-lg mx-auto max-w-4xl pt-6 leading-6 px-6">
          <h2 className="text-center font-bold">
            GoodHub is a brand new charity that provides free, easy-to-use digital tools
            for community organisations
          </h2>
          <p className="text-neutral-700 text-xl">
            Digital tools can transform an organisation efficiency, communication and effectiveness.
            But let's be real - they can also infuriate, confuse and waste vast amounts of time! 
          </p>
          <p className="text-neutral-700 text-xl">
            Built by I.T professionals, GoodHub's aim is to give all the benefits of digital tools
            with none of the drawbacks. From branding to HR, funding to volunteer management, GoodHub plans
            to have everything a small charity or voluntary organisation needs, so that they can concentrate 
            on improving the lives of local people.
          </p>
        </div>
        <div></div>
        <div className="prose-lg mx-auto max-w-4xl pt-6 leading-6 px-6">
          <p className="text-xl font-bold">Phase 1 - Helping you reach out</p>
          <p className="text-neutral-700">
            We are starting by providing essential tools to help with reaching
            out to funders, volunteers and members of the public via a radically
            simple social media and website helper.
          </p>
          <p className="text-neutral-700">
            If you can add a comment on Facebook, you can create and run
            professional, attractive and engaging digital outreach with GoodHub. If you are interested in easily 
            transforming the effectiveness of your outreach and want early access to GoodHub then please <a href="mailto:info@goodhub.org.uk?subject=GoodHub%20Early%20adopter%20program">get in touch.</a>
          </p>
        </div>

        <div className="mt-12 flex w-full">
          <div className="flex-1 bg-[#ebc0c2]"></div>
          <div className="mx-auto grid sm:grid-cols-3 grid-cols-1 max-w-5xl cursor-pointer">
            <a className="flex flex-col justify-center px-6 py-12 bg-[#ebc0c2]" href="https://dev.goodhub.org.uk">
              <h4 className="text-2xl leading-6">
                Have a look at how simple it is to use GoodHub here.
              </h4>
              <span>Learn more</span>
            </a>
            <a className="flex flex-col justify-center px-6 py-12 bg-[#d6e9c6]" href="mailto:info@goodhub.org.uk?subject=Getting%20involved%20in%20GoodHub">
              <h4 className="text-2xl leading-6">
                If you would like to be involved in the charity then click here.
              </h4>
              <span>Learn more</span>
            </a>
            <a className="flex flex-col justify-center px-6 py-12 bg-[#b9b9e7]" href="mailto:info@goodhub.org.uk?subject=GoodHub%20Early%20adopter%20program">
              <h4 className="text-2xl leading-6">
                If you would like to be an early adopter of the platform click
                here.
              </h4>
              <span>Learn more</span>
            </a>
          </div>
          <div className="flex-1 bg-[#b9b9e7]"></div>
        </div>

        <footer className="mb-8 flex items-center justify-center p-4 text-center">
          <p>GoodHub is a UK Registered Charity No. 1197414</p>
        </footer>
      </main>
    </div>
  )
}
