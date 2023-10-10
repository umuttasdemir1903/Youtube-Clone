import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getData } from '../Utilis/Helpers'
import Sidebar from '../Components/Sidebar'
import Card from '../Components/Card'
import SkeletonLoading from '../Components/SkeletonLoading'

const SearchResults = () => {

    const [results, setResults] = useState(null)

    const [params, setParams] = useSearchParams()

    const query = params.get('search_query')

    //console.log(query)

    useEffect(() => {

        getData(`/search?query=${query}`)
            .then((res) => {
                const filtered = res.data.data.filter((i) => i.type === 'video')
                setResults(filtered)
            })
    }, [query])

    //console.log(results)

    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex flex-col items-center w-full gap-5 p-5 overflow-auto h-screen '>
                {!results ? (<SkeletonLoading/>) : (
                    results.map((item, i) => <Card design={'max-w-[700px] grid grid-cols-2 gap-5 curser-pointer'}  key={i} video={item} />
                    )
                )}
            </div>

        </div>
    )
}

export default SearchResults