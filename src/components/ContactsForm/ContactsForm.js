import { Formik, Field, Form, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Enter your name!!!'),
  number: Yup.string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Enter your phone!!!'),
});

export const ContactsForm = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const onContactAdd = data => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert('The contact is already in list');
    } else {
      const newContact = {
        ...data,
        id: nanoid(),
      };
      dispatch(addContact(newContact));
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          onContactAdd(values);
          actions.resetForm();
        }}
      >
        <Form>
          <label>
            Name
            <Field name="name" placeholder="Enter your name" />
            <ErrorMessage name="name" />
          </label>

          <label>
            Phone
            <Field name="number" placeholder="Enter your phone number" />
            <ErrorMessage name="number" />
          </label>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};
