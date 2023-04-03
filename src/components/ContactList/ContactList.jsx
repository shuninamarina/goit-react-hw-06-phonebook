import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { deleteContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <table>
      <tbody>
        {filteredContacts.map(contact => {
          return (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.number}</td>
              <td>
                <button onClick={() => dispatch(deleteContacts(contact.id))}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
