import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineSearch, AiFillBell, AiFillVideoCamera } from 'react-icons/ai'

const Header = () => {

    const navigate=useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const query = e.target[0].value;
        navigate(`/results?search_query=${query}`)
    }

    return (
        <header className=' flex justify-between items-center p-4 '>

            <Link to={'/'} className='flex items-center gap-[7px]'>
                <img className='w-[52px]' src="/youtube.png" />
                <h1 className=' text-[35px] hidden md:block '>Youtube</h1>
            </Link>

            <form
        onSubmit={handleSubmit}
        className="border flex border-gray-400  rounded-[20px] overflow-hidden"
      >
        <input
          className="bg-white border-2 text-black outline-none  px-5 py-1 items-center"
          type="text"
          placeholder="Search..."
        />
        <button className="bg-gray-300 text-black grid place-items-center border-l px-5 p-2 h-full text-xl items-center">
          <i>
            <AiOutlineSearch />
          </i>
        </button>
      </form>

            <div className='flex gap-3 text-[30px] cursor-pointer'>
                <AiFillBell />
                <AiFillVideoCamera />
            </div>

        </header>
    )
}

export default Header