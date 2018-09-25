import React from 'react';

const Form = (props) => {
	return (
      <form onSubmit={props.getPrice} >
        <input style={{ margin:"20px auto", display: "block" }} type="text" name="ticker"/>
        <button>Submit</button>
      </form>
	);
}

export default Form;