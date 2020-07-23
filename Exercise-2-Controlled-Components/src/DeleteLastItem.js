import React from 'react'
import PropTypes from 'prop-types'

const DeleteLastItem = (props) => {
  return (
    <button
      onClick={props.handleDeleteLastItem}
      disabled={props.noItemsFound}
    >
      Delete Last Item
    </button>
  )
}

DeleteLastItem.propTypes = {
  handleDeleteLastItem: PropTypes.func.isRequired,
  noItemsFound: PropTypes.func.isRequired,
}

export default DeleteLastItem
