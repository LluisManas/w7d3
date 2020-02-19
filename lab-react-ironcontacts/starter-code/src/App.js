import React, { Component } from "react";
import "./App.css";
import contactsJSON from "./contacts.json";

const ContactsList = props => {
  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </thead>
      <tbody>
        {props.contacts.map(contact => {
          return (
            <tr key={contact.id}>
              <td>
                <img
                  height="100px"
                  src={contact.pictureUrl}
                  alt={contact.name}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

class App extends Component {
  state = {
    contacts: contactsJSON.slice(0, 5)
  };

  addRandom = () => {
    let found;

    while (!found && this.state.contacts.length < contactsJSON.length) {
      // find a random contact that is not already in the state.contacts
      const random =
        contactsJSON[Math.floor(Math.random() * contactsJSON.length)];

      const alreadyExisting = this.state.contacts.find(contact => {
        return contact.id === random.id;
      });

      if (!alreadyExisting) {
        found = random;
      }
      // assign the random contact to `found`
    }

    if (found) {
      this.setState({
        contacts: [found, ...this.state.contacts]
      });
    }
  };

  // addRandom = () => {
  //   // find a random contact
  //   const random =
  //     contactsJSON[Math.floor(Math.random() * contactsJSON.length)];
  //   console.log(random);

  //   // append/prepend to the array of contacts in the state
  //   // const contactsCopy = [...this.state.contacts]
  //   // const contactsCopy = this.state.contacts.slice()

  //   // contactsCopy.push(random);

  //   this.setState({
  //     contacts: [random, ...this.state.contacts]
  //     // contacts: contactsCopy
  //   });
  // };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandom}>Add Random Contact</button>
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
