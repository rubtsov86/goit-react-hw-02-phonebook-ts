import React from "react";

interface IProps {
  handleChange: (evt: React.FormEvent<HTMLInputElement>) => void;
}

export const Filter: React.FC<IProps> = ({ handleChange }) => {
  return (
    <div>
      <p>Find contact by name</p>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
      />
    </div>
  );
};
