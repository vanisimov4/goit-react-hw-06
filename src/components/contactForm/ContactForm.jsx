import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const initialValues = {
  id: '',
  name: '',
  number: '',
};

const PhonebookSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .trim()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const ContactForm = ({ onAddContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const nextRecord = {
      ...values,
      id: nanoid(),
      name: values.name.trim(),
      number: values.number.trim(),
    };
    onAddContact(nextRecord);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={PhonebookSchema}
    >
      {props => {
        // console.log(props.errors);
        return (
          <Form className={css.form}>
            <div>
              <label htmlFor={nameFieldId}>Name</label>
              <Field type="text" name="name" id={nameFieldId} />
              <ErrorMessage
                name="name"
                component="span"
                className={css.error}
              ></ErrorMessage>
            </div>
            <div>
              <label htmlFor={numberFieldId}>Number</label>
              <Field type="text" name="number" id={numberFieldId} />
              <ErrorMessage
                name="number"
                component="span"
                className={css.error}
              ></ErrorMessage>
            </div>
            <button type="submit">Add contact</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
