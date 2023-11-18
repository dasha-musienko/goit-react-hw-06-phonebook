import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactsFilter } from './ContactsFilter/ContactsFilter';

export const App = () => {
  return (
    <div>
      <ContactsForm />
      <ContactsFilter />
      <ContactsList />
    </div>
  );
};
