import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

export const ContactsFilter = ({ onFilter }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        onChange={evt => dispatch(filterContacts(evt.target.value))}
      />
    </div>
  );
};
