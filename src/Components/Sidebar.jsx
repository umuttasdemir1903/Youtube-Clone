import React, { useContext} from 'react'
import { categories } from '../Utilis/constants'
import { YoutubeContext } from '../Context/YoutubeContext'

const Sidebar = () => {
const {selectedCategory, setSelectedCategory } = useContext(YoutubeContext)

    return (
        <nav className='flex flex-col p-1 md:p-4'>

            {categories.map((item, i) => (
                <div key={i} >
                    <div onClick={()=> setSelectedCategory(item)}
                   
                    className={ `${item.name === selectedCategory?.name && ' bg-[#363535] ' }rounded-md hover:bg-[#2d2d2d] text-md md:text-lg cursor-pointer flex gap-4 items-center px-1 md:px-2 py-3`}>

                        {item.icon}
                        <span>{item.name}</span>
                    </div>

                    {item.divider && <hr />}
                </div>
            ))}

        </nav>
    )
}

export default Sidebar