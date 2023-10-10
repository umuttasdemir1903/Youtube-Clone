import React, { useEffect, useState } from 'react'
import { getData } from '../Utilis/Helpers'
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import millify from 'millify';
import moment from 'moment/moment';
import StringArea from './StringArea';

const Comments = ({ id }) => {

  const [expand,setExpand]=useState(false)

  const [comments, setComments] = useState(null)

  useEffect(() => {

    getData(`/comments?id=${id}`)
      .then((res) => setComments(res.data.data))

  }, [])

  let short = comments?.slice(0,4);


  

  return (
    <div onClick={()=> setExpand(!expand)} className='flex flex-col gap-[27px] mt-2 p-3'>
      {!comments && 'LOADING'}
      { <h1 className='text-bold text-[25px] '>Comments</h1>
      }
      {expand 
      ? (comments?.map((comment, i) => (
        <div key={i} className='flex items-center gap-2'>
          <img className='h-12 w-12 rounded-full' src={comment?.authorThumbnail[0].url} />
          <div className='flex flex-col gap-2'>
            <div>
              <span>{comment.authorText} </span>
              <span>{comment.publishedTimeText}</span>
            </div>
            <p>{comment.textDisplay}</p>
            <div className='flex gap-5'>
            <div className="">
              <AiFillLike />
            </div>
            <div className="">
              <AiFillDislike />
            </div>
            <button className='btn bg-white text-black px-3 rounded'>Reply</button>
            </div>

          </div>
        </div>
      )))
      :(short?.map((item,i)=> (
        <div key={i} className='flex items-center gap-2'>
        <img className='h-12 w-12 rounded-full' src={item?.authorThumbnail[0].url} />
        <div className='flex flex-col gap-2'>
          <div>
            <span>{item.authorText} </span>
            <span>{item.publishedTimeText}</span>
          </div>
          <p>{item.textDisplay}</p>
          <div className='flex gap-5'>
          <div className="">
            <AiFillLike />
          </div>
          <div className="">
            <AiFillDislike />
          </div>
          <button className='btn bg-white text-black px-3 rounded'>Reply</button>
          </div>

        </div>
      </div>

      ) ))
      
      }
          <button onClick={()=> setExpand(!expand)} className="btn bg-white text-black rounded text-[20px]">MORE COMMENTS</button>
    </div>
  )
}

export default Comments