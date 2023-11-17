import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const Contact = ({ contactName, contactTel, id }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>
        {contactName}: {contactTel}
      </p>
      <button
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </div>
  );
};
