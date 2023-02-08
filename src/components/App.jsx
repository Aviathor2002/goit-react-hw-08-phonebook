import React, { Component } from 'react';
import Phonebook from './Phonebook/Phonebook';
import { nanoid } from 'nanoid';
class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = text => {
    console.log(text);

    const contact = {
      id: nanoid(),
      text,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          flexDirection: 'column',
        }}
      >
        <Phonebook onSubmitAccept={this.addContact} />
        <section>
          <h1>Contacts</h1>
          <ul>
            {this.state.contacts.map(({ id, text }) => {
              return <li key={id}>{text}</li>;
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
