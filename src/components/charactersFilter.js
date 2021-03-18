import React from 'react'

export default function charactersFilter(props) {
  const { handleChange, state } = props;
  console.log('statehere', state)
  return (
    <div className="filter-items">
      <div className="item">
        <label htmlFor="female">All</label>
        <input type="radio" name="all" checked={state === 'all'} value="all" onChange={handleChange} />
      </div>
      <div className="item">
        <label htmlFor="female">Female</label>
        <input type="radio" name="female" checked={state === 'female'} value="female" onChange={handleChange} />
      </div>
      <div className="item">
        <label htmlFor="male">Male</label>
        <input type="radio" name="male" checked={state === 'male'} value="male" onChange={handleChange} />
      </div>
      <div className="item">
        <label htmlFor="unknown">Unknown</label>
        <input type="radio" name="unknown" checked={state === 'unknown'} value="unknown" onChange={handleChange} />
      </div>
    </div>
  )
}
