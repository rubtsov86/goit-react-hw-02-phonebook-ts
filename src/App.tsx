import React from "react";
import { Phonebook } from "./Phonebook/Phonebook";
import { Contacts, IData } from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";

export interface IState {
  contacts: IData[];
  filter: string;
}

class App extends React.Component<{}, IState> {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  onSubmit = (name: string, number: string) => {
    const newContact = { name, number, id: "qwe" };

    this.setState((prevState: IState): IState => {
      const newContacts = [...prevState.contacts, newContact];
      return { ...prevState, contacts: newContacts };
    });
  };

  handleChange = (evt: React.FormEvent<HTMLInputElement>): void => {
    this.setState((PrevState) => {
      return {
        ...PrevState,
        filter: (evt.target as HTMLInputElement).value.toLowerCase(),
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Phonebook onSubmit={this.onSubmit} />
        <Contacts
          contacts={this.state.contacts.filter((contact) =>
            contact.name.toLowerCase().includes(this.state.filter)
          )}
        />
        <Filter handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
