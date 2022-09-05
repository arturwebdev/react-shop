import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incCount, selectCard, dicCount, deleteCardItem } from '../../store/features/Card/CardSlice'


const style = {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap'
}

function Card() {
  const card = useSelector(selectCard)
  const dispatch = useDispatch()

  return (
    <>
    <div>
        <h2>Card count: {card.count}</h2>
        <h2>Card price: {card.price}</h2>
    </div>
    <div style={style}>
        {
            card.data.map(el => (
                <div key={el.id}>
                    <h2>{el.title}</h2>
                    <img width={150} height={150} src={el.url} alt="" />
                    <h3>{el.price}</h3>
                    <h3><button onClick={() => dispatch(dicCount({ price: el.price, id: el.id, count: el.count }))}> - </button> &nbsp; {el.count} &nbsp; <button onClick={() => dispatch(incCount({price: el.price, id: el.id, count: el.count}))}> + </button></h3>
                    <button onClick={() => dispatch(deleteCardItem({id: el.id, price: el.price, count: el.count}))}>Delete</button>
                </div>
            ))
        }
    </div>
    </>
  )
}

export default Card