import React, { FC } from 'react';


const YTVideo: FC = () => {
  return <a id="video">
  <div className="prose-lg mx-auto max-w-4xl px-3 pt-12 leading-6 md:px-6">
    <div className="relative h-0 pb-[56.25%]">
      <iframe className="absolute w-full h-full top-0 left-0" src="https://www.youtube-nocookie.com/embed/lwD1NNR875A?cc_load_policy=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  </div>
</a>
}

export default YTVideo