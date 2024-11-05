// DynamicForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './DyanmicForm.css';

const DynamicForm = ({ config, onSubmit }) => {
  const initialValues = config.reduce((values, field) => {
    values[field.name] = field.initialValue || '';
    return values;
  }, {});

  const validationSchema = Yup.object(
    config.reduce((schema, field) => {
      if (field.validation && field.validation.length) {
        schema[field.name] = field.validation.reduce(
          (combined, validation) => combined.concat(validation.rule),
          Yup.mixed()
        );
      }
      return schema;
    }, {})
  );

  return (
    <div className="form-container">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form>
            {config.map((field) => (
              <div key={field.name} className={`form-field ${field.cssClass || ''}`}>
                <label>{field.label}</label>
                <Field as={field.type} name={field.name} {...field.props} />
                <ErrorMessage name={field.name} component="div" className="error" />
              </div>
            ))}
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DynamicForm;
