import React from 'react';
import PropTypes from 'prop-types';
import './task.css';

export default function Task({ title, state }) {
  return (
    <div className={`task ${state}`}>
      <label className="title">{title}</label>
    </div>
  );
}


Task.propTypes = {
  /**
   * title
   */
  title: PropTypes.string,
  /**
   * state
   */
  state: PropTypes.string,
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};