import React from 'react';
import PropTypes from 'prop-types';
import './test1.css'

export const test1 = ({ flag, type, size, label, opt, ...props }) => {
  const mode = 
    type === "primary" ? 'btn--primary' : 
    type === "secondary" ? 'btn--secondary' : 
    type === "success" ? 'btn--success' : 
    type === "danger" ? 'btn--danger' :
    type === "warning"? 'btn--warning' :
    type === "info" ? 'btn--info' :
    type === "light" ? 'btn--light' :
    type === "dark" ? 'btn--dark' : '';
  return (
    !flag ? 
    <button
      type="button"
      className={['btn', mode, `btn--${size}`, `${opt}`].join(' ')}
      { ...props }
    >
      {label} {flag}
    </button>
    :
    <button type='button'>{label} {flag}</button>
  );
};

// const test1 = ({ type, size, label, opt, ...props }) => {
//   const mode = 
//     type === "primary" ? 'btn--primary' : 
//     type === "secondary" ? 'btn--secondary' : 
//     type === "success" ? 'btn--success' : 
//     type === "danger" ? 'btn--danger' :
//     type === "warning"? 'btn--warning' :
//     type === "info" ? 'btn--info' :
//     type === "light" ? 'btn--light' :
//     type === "dark" ? 'btn--dark' : '';
//   return (
//     <button
//       type="button"
//       className={['btn', mode, `btn--${size}`, `${opt}`].join(' ')}
//       { ...props }
//     >
//       {label}
//     </button>
//   );
// }

// export default test1;

test1.propTypes = {
  /**
   * label....
   */
  label: PropTypes.string,
};

test1.defaultProps = {
  flag: null,
  type: "link",
  size: "small",
  label: "Default Btn",
  opt: "",
  onClick: undefined,
};
