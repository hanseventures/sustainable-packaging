import _ from 'lodash'
import React from 'react'

const MultiSelect = props => {
  const selectedObject = _.find(props.selectedObjects, props.id)

  const findSelectedObjectById = id =>
    _.find(selectedObject[props.id], { id: id })

  const handleSelect = selectedID => {
    const selection = _.filter(props.objects, { id: selectedID })
    const newSelected = props.selectedObjects.slice()

    if (!!selectedObject && selectedObject[props.id].includes(selection[0])) {
      const originalIndex = selectedObject[props.id].indexOf(selection[0]);
      selectedObject[props.id].splice(originalIndex, 1)
    } else {
      if (selectedObject !== undefined) {
        selectedObject[props.id].push(selection[0])
      } else {
        newSelected.push({ [props.id]: selection })
      }
    }

    props.handleSelection(newSelected)
  }

  return (
    <ul className='list-none d-flex box trimmed-4 text-xs-center my-5'>
      {props.objects.map(node => (
        <li
          id={`${props.gaName}-${node.text.toLowerCase().replace(/\s/g, '')}`}
          key={node.id}
          onClick={() => handleSelect(node.id)}
          className={
            selectedObject === undefined
              ? 'p-3'
              : findSelectedObjectById(node.id)
              ? 'p-3 active'
              : 'p-3'
          }
        >
          <img src={node.imagePath} className='mb-2' />
          <span>{node.text}</span>
        </li>
      ))}
    </ul>
  )
}

export default MultiSelect
