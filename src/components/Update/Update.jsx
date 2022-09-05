import React, { useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { editItem } from '../../store/features/Photos/PhotosSlice'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    const formRef = useRef(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()
console.log(id);
    const submitHandler = useCallback((e) => {
        e.preventDefault()
        dispatch(editItem({
            title: formRef.current[0].value,
            discription: formRef.current[1].value,
            price: formRef.current[2].value,
            url: formRef.current[3].value,
            id: +id
        }))
        navigate('/')
    }, [])
    return (
        <div>
            <form onSubmit={submitHandler} ref={formRef}>
                <input type="text" placeholder='title' />
                <input type="text" placeholder='discrition' />
                <input type="text" placeholder='price' />
                <input type="text" placeholder='img' />
                <button>Update</button>
            </form>
        </div>
    )
}

export default Update