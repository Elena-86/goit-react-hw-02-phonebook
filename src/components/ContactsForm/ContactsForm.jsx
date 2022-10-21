import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';

import {
  FormContainer,
  FormLabel,
  FormInput,
  SubmitButton,
} from './ContactsForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactsForm extends Component {
  state = INITIAL_STATE;

  handleChangeContactsForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleContactsFormSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const { onAdd } = this.props;

    const isValidatedContactsForm = this.validateContactsForm();
    if (!isValidatedContactsForm) return;
    onAdd({ id: nanoid(), name, number });
    this.resetContactsForm();
  };

  validateContactsForm = () => {
    const { name, number } = this.state;
    const { onCheckUnicity } = this.props;
    if (!name || !number) {
      alert('Some of required for input fields is empty!');
      return false;
    }

    return onCheckUnicity(name);
  };

  resetContactsForm = () => this.setState(INITIAL_STATE);

  render() {
    const { name, number } = this.state;
    return (
      <FormContainer
        autoComplete="off"
        onSubmit={this.handleContactsFormSubmit}
      >
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={this.handleChangeContactsForm}
          />
        </FormLabel>
        <FormLabel>
          Number
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter your phone number"
            value={number}
            onChange={this.handleChangeContactsForm}
          />
        </FormLabel>
        <SubmitButton type="submit">Add Contact</SubmitButton>
      </FormContainer>
    );
  }
}

ContactsForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onCheckUnicity: PropTypes.func.isRequired,
};

export default ContactsForm;
