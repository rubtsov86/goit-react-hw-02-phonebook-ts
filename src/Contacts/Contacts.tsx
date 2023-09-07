export interface IData {
  id: string;
  name: string;
  number: string;
}

interface IContacts {
  contacts: IData[];
}

export const Contacts: React.FC<IContacts> = ({ contacts }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li key={id}>
            {name} {number}
          </li>
        ))}
      </ul>
    </div>
  );
};
