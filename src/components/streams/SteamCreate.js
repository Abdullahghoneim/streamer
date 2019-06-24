import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect  } from 'react-redux'
import  { createStream } from '../../actions'

class  StreamCreate  extends React.Component {
  renderError({ error, touched }){
    if(touched && error){
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }
  renderInput = ({input , label, meta}) => {
    const classErrror = `field ${meta.touched && meta.error ? 'error' : ''}`
    return (
      <div className={classErrror}>
        <label > {label} </label>
        <input autoComplete="off" {...input} />
        { this.renderError(meta)  }
      </div>
    );
  }
  onSubmit = formValue => {
    this.props.createStream(formValue)
  }
  render(){
    return (
     <div>
       <h1> Create StreamCreate </h1>
        <form  onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error" >
          <Field   name="title" label="Enter A Title" component={this.renderInput} />
          <Field  name="description" label="Enter Description" component={this.renderInput}/>
          <button  className="ui button primary "  >Submit</button>
        </form>
     </div>
   )
 }
};

const validate = formValues => {
  const errors = {};
  if(!formValues.title){
     errors.title =   'You Must Enter A Title' 
  }
  if(!formValues.description){
     errors.description = 'You Must Enter Description'
  }
  return errors;
}

const formWrapped = reduxForm({
  form: 'createStream',
  validate
})(StreamCreate) ;


export default connect(null, {createStream})(formWrapped)