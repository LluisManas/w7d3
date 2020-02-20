import React from "react";

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
        {props.contacts
          .filter(contact => {
            return contact.name.toLowerCase().includes(props.search);
          })
          .map((contact, i) => {
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

export default ContactsList;
