import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getData } from '../Utilis/Helpers'
import ReactPlayer from 'react-player'
import Loading from '../Components/Loading'
import VideoInfo from '../Components/VideoInfo'
import Card from '../Components/Card'
import Comments from '../Components/Comments'
import SkeletonLoading from '../Components/SkeletonLoading'



const VideoDetail = () => {

  const [searchParam, setSearchParams] = useSearchParams()

  const [related, setRelated] = useState(null)
  const id = searchParam.get('v');

  useEffect(() => {


    getData(`/related?id=${id}`)
      .then((res) => setRelated(res.data.data))
  }, [])

  return (
    <div className='h-screen overflow-auto flex flex-col lg:flex-row lg:px-[100p] gap-5 p-4 '>

      <div className='w-full'>
        <ReactPlayer controls url={`https://www.youtube.com/watch?v=${id}`}
          width={'100%'}
          height={'60vh'} />
        <VideoInfo id={id} />
        <div>
          <Comments id={id} />
        </div>
      </div>
      <div className='flex flex-col gap-10 lg:max-w-[400px] sm:m-auto lg:h-[95vh] lg:overflow-auto'>
        {!related ? (<SkeletonLoading/>) : related.map((item) => {
          if (item.type !== 'video') return;
          return (
            <Card key={id} video={item} />
          )
        })}
      </div>



    </div>
  )
}

export default VideoDetail