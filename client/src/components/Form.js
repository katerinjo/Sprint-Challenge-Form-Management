import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const raw = (touched, errors) => {
  return (
    <Form>
      <div>
        <Field type='text' name='name' placeholder='name' />
        {touched.name && errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <Field type='password' name='password' placeholder='password' />
        {touched.password && errors.password && <p>{errors.password}</p>}
      </div>
      <button type='submit'>submit</button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues(props) {
    return {
      name: props.name || '',
      password: props.password || '',
      subFun: props.subFun
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup
      .string()
      .min(1, "name can't be empty")
      .required(),
    password: Yup
      .string()
      .min(5, "password needs at least 5 characters")
      .required()
  }),

  handleSubmit(vals, { resetForm, setSubmitting }) {
    axios
      .post('http://localhost:5000/api/register', vals)
      .then(resetForm)
      .catch(err => {
        console.log(err);
        setSubmitting(false);
        vals.subFun();
      });
    alert('form submitted');
  }
})(raw);
