import React, { useCallback, useRef } from 'react'
import {useDispatch } from 'react-redux'
import { addItem } from '../../store/features/Photos/PhotosSlice'
import { useNavigate } from 'react-router-dom'

function Add() {
  const formRef = useRef(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submitHandler = useCallback((e) => {
    e.preventDefault()
    dispatch(addItem({
        title: formRef.current[0].value,
        discription: formRef.current[1].value,
        price: formRef.current[2].value,
        url: formRef.current[3].value,
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
            <button>Add</button>
        </form>
    </div>
  )
}

export default Add