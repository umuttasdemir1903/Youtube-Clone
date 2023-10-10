import React, { useContext } from 'react'
import Sidebar from '../Components/Sidebar'
import YouTubePlayer from 'react-player/youtube'
import { YoutubeContext } from '../Context/YoutubeContext'
import Loading from '../Components/Loading'
import Card from '../Components/Card'
import SkeletonLoading from '../Components/SkeletonLoading'

const Feed = () => {
  const {videos}=useContext(YoutubeContext)
  return (
    <div className='flex gap-5'>
      <Sidebar />
      <div className='videos'>
        {!videos ? <SkeletonLoading/> : videos.map((video)=> <Card key={video.videoId} video={video}/>)}

      </div>
    </div>
  )
}

export default Feed