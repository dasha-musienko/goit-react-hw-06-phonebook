import { Contact } from 'components/Contact/Contact';

export const ContactsList = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ name, number, id }) => {
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
