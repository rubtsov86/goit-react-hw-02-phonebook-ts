export interface IData {
  id: string;
  name: string;
  number: string;
  friend: boolean;
  age: string;
}

interface IContacts {
  contacts: IData[];
  onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onAddFriend: (evt: React.FormEvent<HTMLInputElement>) => void;
  onAddAge: (evt: React.FormEvent<HTMLSelectElement>) => void;
}

export const Contacts: React.FC<IContacts> = ({
  contacts,
  onDelete,
  onAddFriend,
  onAddAge,
}) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ name, number, id, friend, age }) => (
          <li key={id}>
            <input
              type="checkbox"
              checked={friend}
              onChange={onAddFriend}
              id={id}
            />
            {name} {number}{" "}
            <label>
              Choose contact age
              <select
                name="age"
                onChange={onAddAge}
                id={"age" + id}
                value={age}
              >
                <option value="unknown">unknown</option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36+">36+</option>
              </select>
            </label>
            <button type="button" onClick={onDelete} id={id}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
