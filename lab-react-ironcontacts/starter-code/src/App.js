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
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.contacts.map((contact, i) => {
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
              <td>
                <button
                  onClick={() => {
                    props.deleteContact(i);
                  }}
                >
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

  sortByName = () => {
    const sorted = [...this.state.contacts].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    this.setState({
      contacts: sorted
    });
  };

  sortByPop = () => {
    const sorted = [...this.state.contacts].sort((a, b) => {
      return b.popularity - a.popularity;
    });

    this.setState({
      contacts: sorted
    });
  };

  deleteContact = index => {
    console.log("deleteContact", index);
    // filter the array of contacts to exclude the element at a given index
    const withoutContact = [...this.state.contacts];
    withoutContact.splice(index, 1);

    this.setState({
      contacts: withoutContact
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPop}>Sort by popularity</button>

        <ContactsList
          deleteContact={this.deleteContact}
          contacts={this.state.contacts}
        />
      </div>
    );
  }
}

export default App;
