import React from 'react'

const Filter = (props) => {
  return (
    <div className={!props.visible ? "not visible filter-box": "filter-box"}>
        <ul className='filter-list'>
            {props.items && props.items.map((term, i) => 
             <div className='terms-box' key={i}>
                <i onClick={props.onClick} className='term' key={i}>{term}</i>
                <i onClick={props.onClick} className='fas fa-minus-square' key={i}></i>
             </div>
            )}
        </ul>
        <a href='!#' onClick={props.onClick} className='clear'>Clear</a>
    </div>
  )
}

export default Filter