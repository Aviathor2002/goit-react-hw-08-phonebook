const { Component } = require('react');

class Phonebook extends Component {
  state = { name: '' };

  handleNameChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmitAccept(this.state.name);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <section>
        <h1>Phonebook</h1>
        <form
          onSubmit={this.handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <label
            style={{ display: 'flex', flexDirection: 'column', marginTop: 5 }}
          >
            Name
            <input
              value={this.state.name}
              onChange={this.handleNameChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit" style={{ marginTop: 20 }}>
            Add contact
          </button>
        </form>
      </section>
    );
  }
}
export default Phonebook;
