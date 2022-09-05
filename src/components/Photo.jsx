import React, { memo } from 'react'
import {useDispatch} from 'react-redux'
import { deleteItem } from '../store/features/Photos/PhotosSlice'
import { Link } from 'react-router-dom'
import { addToCard } from '../store/features/Card/CardSlice'



function Photo({id,title,discription,price,url}) {
    const dispatch = useDispatch()
  return (
    <>
                    <span>
                        <b>Title</b> 
                        <p>{title}</p>  
                    </span>
                    <span>
                        <b>discription</b>
                        <p>{discription}</p>
                    </span>
                    <span>
                        <b>id</b>
                        <p>{id}</p>
                    </span>
                    <span>
                        <b>price</b>
                        <p>{price}</p>
                    </span>
                    <span>
                        <button onClick={() => dispatch(addToCard({ id, title, discription, price, url }))}>Add to card</button>
                        <button onClick={() => dispatch(deleteItem(id))}>Del</button>
                        <Link to={`/update/${id}`}>Update</Link>
                    </span>
                    <br /><br />
                <img src={url} alt='' width={'150px'} height={'150px'}/>
                <br/>
                <hr />
                </>
  )
}

export default memo(Photo)