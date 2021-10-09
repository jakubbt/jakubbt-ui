import React from 'react'
import PropTypes from 'prop-types'
import style from './button/Button.module.scss';
import classes from 'react-style-classes'

const Button = ({
  buttonText,
  variant,
  className,
}) => {
  return (
    <div className={classes(style.button, style[variant], className)}>
      {buttonText}
    </div>
  )
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger'])
}

Button.defaultProps = {
  className: null,
  variant: 'primary',
}

export default Button
