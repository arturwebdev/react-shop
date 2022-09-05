import React,{ useEffect } from 'react'
import {SelectPhotos,loadPhotos} from '../../store/features/Photos/PhotosSlice'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import Photo from '../Photo'
import { selectSearch, toggleSearchText } from '../../store/features/Search/SearchSlice'
function Photos() {
    const photos = useSelector(SelectPhotos)
    const search = useSelector(selectSearch)
    const dispatch = useDispatch()

  return (
    <>
      <input type="text" value={search} onChange={(e) => dispatch(toggleSearchText(e.target.value))}  /><br/>
      {photos.loading && <h1>Loading ...</h1>}
     {
            photos.data.filter(el => el.title.toLowerCase().includes(search.toLowerCase())).map(el=>(
                <Photo key={el.id} id={el.id} title={el.title} discription={el.discription} price={el.price} url={el.url}/>
            )    
            )
        }
    </>
  )
}

export default Photos