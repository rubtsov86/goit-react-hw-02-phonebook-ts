export interface IData {
  id: string;
  name: string;
  number: string;
}

interface IContacts {
  contacts: IData[];
  onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Contacts: React.FC<IContacts> = ({ contacts, onDelete }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li key={id}>
            {name} {number}{" "}
            <button type="button" onClick={onDelete} id={id}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
