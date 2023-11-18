import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div>
      <ul>
        {filteredContacts.map(({ name, number, id }) => {
          return (
            <li key={id}>
              <Contact contactName={name} contactTel={number} id={id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
