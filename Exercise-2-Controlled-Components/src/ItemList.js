import React from 'react'
import PropTypes from 'prop-types';

const ItemList = (props) => {
  return (
    <div>
      <p className="items">Items</p>
      <ol className="item-list">
        {props.items.map((item) => (
          <li>{item}</li>
        ))}
      </ol>
    </div>
  )
}

ItemList.PropTypes = {
  items: PropTypes.array.isRequired,
}

export default ItemList
