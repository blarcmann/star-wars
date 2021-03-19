import React from 'react'
import '../styles/components/characters.scss';

const filters = ['all', 'female', 'male', 'unknown']

export default function CharactersFilter(props) {
  const { handleChange, state } = props;
  const renderFilter = () => {
    return filters.map((filter) => (
      <div className="item" key={filter}>
        <label htmlFor="female">{filter}</label>
        <input type="radio" name={filter} checked={state === filter } value={filter} onChange={handleChange} />
      </div>
    ))
  }
  return (
    <div className="filterer">
      {renderFilter()}
    </div>
  )
}
