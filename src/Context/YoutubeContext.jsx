import { createContext, useEffect, useState } from "react";
import { categories } from "../Utilis/constants";
import axios from "axios";
import { getData } from "../Utilis/Helpers";

export const YoutubeContext = createContext()

export const YoutubeProvider = ({ children }) =>  {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [videos,setVideos]=useState(null)

    useEffect(()=>{
        if(selectedCategory?.type==='home' || selectedCategory?.name==='Trend'){

            setVideos(null)
         getData(`/${selectedCategory.type}`).then((res)=>{
            
            const filtered = res.data.data.filter((i)=> i.type==='video')
            setVideos(filtered)
         })
        }
        if(selectedCategory.type==='category'){
            setVideos(null)
            getData(`/search?query=${selectedCategory.name}&type=video`)
            .then((res)=>{
                const filtered = res.data.data.filter((i)=> i.type==='video')
                setVideos(filtered)
            })
        }
    },[selectedCategory])

    return (
        <YoutubeContext.Provider value={{selectedCategory,videos, setSelectedCategory}}>
            {children}
        </YoutubeContext.Provider>
    )
}