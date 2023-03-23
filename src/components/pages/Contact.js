import React, { useState } from 'react';


// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from '../../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    alert(`Hello ${userName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setMessage('');
    setEmail('');
  };

  return (

    <div className="bg-dark-subtle text-emphasis-dark">
      <h2 className="p-4">Contact Me!</h2>
      <div className="col-md-5 p-4">
        <form>

          <div class="mb-3">
            <label for="Name" class="form-label">Name:</label>
            <input type="text" name="userName" class="form-control border" id="Name" value={userName} onChange={handleInputChange} placeholder="" />
          </div>
          <div class="mb-3">
            <label for="Email" class="form-label">Email address:</label>
            <input type="email" name="email" class="form-control border" id="Email" value={email} onChange={handleInputChange} placeholder="name@example.com" />
          </div>
          <div class="mb-3">
            <label for="Message" class="form-label">Message:</label>
            <textarea name="message" class="form-control border" id="Message" rows="5" value={message} onChange={handleInputChange}></textarea>
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button type="button" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
