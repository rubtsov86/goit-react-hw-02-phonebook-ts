import React from "react";

interface IProps {
  onSubmit: (name: string, number: string) => void;
}

export class Phonebook extends React.Component<IProps> {
  state = {
    name: "",
    number: "",
  };

  handleChange = (evt: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      [(evt.target as HTMLInputElement).name]: (evt.target as HTMLInputElement)
        .value,
    });
  };

  onSubmitHandler = (e: React.SyntheticEvent) => {
    console.log(this.props.onSubmit);
    e.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
        />

        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
        />
        <button type="submit" onClick={this.onSubmitHandler}>
          Add contact
        </button>
      </div>
    );
  }
}
