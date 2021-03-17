import React from 'react'
import useTableSort from '../utils/tablesort';

export default function Characters(props) {
  const { characters } = props;
  const { items, requestSort } = useTableSort(characters);


  return (
    <table>
      <caption>Characters</caption>
      <thead>
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
            <td>{item.gender}</td>
            <td>{item.height}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
