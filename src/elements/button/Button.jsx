// Core
import React from 'react';
import PropTypes from 'prop-types';
// Libraries
import cx from 'classnames';

export const Button = ({outline, handleClick, className, children }) => {
  return (
    <button
      className={cx('button', className, { 'button--outline': outline })}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  outline: PropTypes.bool,
  className: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.any.isRequired,
};
