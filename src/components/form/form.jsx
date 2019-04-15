import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types';

const ThemeContext = React.createContext('light');

XForm.propTypes = {
  model: PropTypes.object
};

function ThemedButton(props) {
  // ThemedButton 组件从 context 接收 theme
  return (
    <ThemeContext.Consumer>
      {theme => <Button {...props} theme={theme} />}
    </ThemeContext.Consumer>
  );
}

function XForm(props) {
  console.log(props.children);

  const [count, setCount] = useState(0);

  return (
    <div>
      {props.children}
    </div>
  );

}

export default XForm