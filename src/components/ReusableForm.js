import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <p><strong>****ReusableForm.js***</strong></p>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          types='text'
          name='names'
          placeholder='Pair Names **ReusableForm.js**' />
        <input
          type='text'
          name='location'
          placeholder='Location **ReusableForm.js**' />
        <textarea
          name='issue'
          placeholder='Describe your issue. **ReusableForm.js**' />
        <button type='submit'>{props.buttonText} **ReusableForm.js**</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  button: PropTypes.string
}

export default ReusableForm;