import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types';

XFormItem.propTypes = {
  label: PropTypes.string
};


function XFormItem(props) {
  alert(111)
  console.log(props.parent);

  // console.log(props.children);


  const [count, setCount] = useState(0);

  return (
    <div>
      33333
 </div>
  );

}

export default XFormItem