import React from 'react'
// import React from 'react'

const Filter = ({value, onChangeFilter}) =>{
    return(
        <div className='filter-container'>
        <label htmlFor='filter'>Find contacts by name</label>
            <input
                type='text'
                id='filter'
                value={value}
                onChange={(e) => onChangeFilter(e.target.value)}
            />
        </div>
    )
}


export default Filter;