import { Component } from 'react';
import { v4 as uuid } from 'uuid';

import {
  FormContainer,
  FormLabel,
  FormInput,
  SubmitButton,
} from './ContactsForm.styled';

const INITIAL_STATE = {
  name: '',
  phone: '',
};

class ContactsForm extends Component {
  state = INITIAL_STATE;

  handleChangeContactsForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleContactsFormSubmit = event => {
    event.preventDefault();

    const { name, phone } = this.state;
    const { onAdd } = this.props;

    const isValidatedContactsForm = this.validateContactsForm();
    if (!isValidatedContactsForm) return;
    onAdd({ id: uuid(), name, phone });
    this.resetContactsForm();
  };

  validateContactsForm = () => {
    const { name, phone } = this.state;
    const { onCheckUnicity } = this.props;
    if (!name || !phone) {
      alert('Some of required for input fields is empty!');
      return false;
    }

    return onCheckUnicity(name);
  };

  resetContactsForm = () => this.setState(INITIAL_STATE);

  render() {
    const { name, phone } = this.state;
    return (
      <FormContainer onSubmit={this.handleContactsFormSubmit}>
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
            name="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={this.handleChangeContactsForm}
          />
        </FormLabel>
        <SubmitButton type="submit">Add Contact</SubmitButton>
      </FormContainer>
    );
  }
}

export default ContactsForm;
