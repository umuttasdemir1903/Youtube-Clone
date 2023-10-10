import React, { useState } from 'react'
import millify from 'millify'
import { useNavigate } from 'react-router-dom'

const Card = ({ video, design }) => {

  const navigate = useNavigate();

  const [isHover, setIsHover] = useState(false)

  return (
    <div  className={`${design} cursor-pointer`}>
      <div
        onClick={() => navigate(`/watch?v=${video.videoId}`)}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="curser-pointer">
        <img className=' rounded-lg w-full object-contain '
          src={isHover && video.richThumbnail
            ? video.richThumbnail[0]?.url
            : video?.thumbnail[0]?.url} />
      </div>
      <div className='flex gap-4 mt-5'>
        <img 
        style={{display:design? 'none' : ''}}
        className='w-14 h-14 rounded-full' src={video.channelThumbnail[0]?.url} alt="" />
        <div>
          <h4 className='font-bold'>{video?.title}</h4>
          <p>{video?.channelTitle}</p>
          <div className='flex gap-3'>
            <p>{millify(video.viewCount)} views </p>
            <p>{video.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card