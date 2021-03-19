import React from 'react'
import useTableSort from '../utils/tablesort';
import { convertCMToFeet } from '../utils';
import '../styles/components/characters.scss'

export default function Characters(props) {
  const { characters } = props;
  const { items, requestSort } = useTableSort(characters);

  const abbvGender = (gender) => {
    if (gender.toLowerCase() === 'female') return 'f'
    if (gender.toLowerCase() === 'male') return 'm'
    return 'ug'
  }

  const getHeight = () => {
    let height = 0;
    items.map((item) => {
      if (Number(item.height)) {
        height += Number(item.height);
      }
      return {height: height, ftin: convertCMToFeet(height)}
    })
    return { height: height, ftin: convertCMToFeet(height) }
  }


  return (
    <table className="characters-table">
      <thead className="header">
        <tr>
          <th>
            <button type="button" onClick={() => requestSort('name')}>
              Name
            </button>
          </th>
          <th>
            <button type="button" onClick={() => requestSort('gender')}>
              Gender
            </button>
          </th>
          <th>
            <button type="button" onClick={() => requestSort('height')}>
              Height
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <tr key={`xter__${i}`}>
            <td>{item.name}</td>
            <td>{abbvGender(item.gender)}</td>
            <td>{item.height}</td>
          </tr>
        ))}
        <tr className="larger">
          <td>{items.length} Characters </td>
          <td></td>
          <td>Height: {`${getHeight().height} cm (${getHeight().ftin})`}</td>
        </tr>
      </tbody>
    </table>
  )
}
