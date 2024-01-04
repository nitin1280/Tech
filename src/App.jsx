import React, { useState } from 'react';
import "./App.css"

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [organizationName, setOrganizationName] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleOrganizationChange = (e) => {
    setOrganizationName(e.target.value);
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission here
    console.log('Organization Name:', organizationName);
    console.log('Selected Option:', selectedOption);
    closeModal();
  
  
    // Validation checks
    if (organizationName.trim() === '') {
      alert('Please enter Organization Name');
      return;
    }
  
    if (selectedOption === 'option1') {
      // Additional validation for option1 fields
      // You can add similar checks for other fields as needed
      const absoluteMaxBytes = document.getElementById('absoluteMaxBytes').value.trim();
      const preferredMaxBytes = document.getElementById('preferredMaxBytes').value.trim();
  
      if (absoluteMaxBytes === '' || isNaN(absoluteMaxBytes)) {
        alert('Please enter a valid Absolute Max Bytes');
        return;
      }
  
      if (preferredMaxBytes === '' || isNaN(preferredMaxBytes)) {
        alert('Please enter a valid Preferred Max Bytes');
        return;
      }
    }
  
    // Add your logic to handle the form submission here
    console.log('Organization Name:', organizationName);
    console.log('Selected Option:', selectedOption);
    closeModal();
    
  
  

    // Validation checks
    if (organizationName.trim() === '') {
      alert('Please enter Organization Name');
      return;
    }

    // Additional validation and checks based on selectedOption if needed

    try {
      // Simulating a call to a dummy API
      const response = await fetch('https://dummyapi.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          organizationName,
          selectedOption,
          // Add other form data as needed
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit the form data');
      }

      // Handle success response here (if needed)
      console.log('Form data submitted successfully');

      // Close the modal after submitting
      closeModal();
    } catch (error) {
      console.error('Error submitting form data:', error.message);
      // Handle error (e.g., show an error message to the user)
    }
  }
  return (
    <div>
      <h1>No Ordering Services Here.</h1>
      <p>Services list will be listed here.</p>
      <button onClick={openModal} className='btn1'>+ Add Ordering Service</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <form onSubmit={handleSubmit}>
              
              <div className='div1'>
              
                <label htmlFor="organizationName">Organization Name*</label> <br/>
                <input
                  type="text"
                  id="organizationName"
                  
                  onChange={handleOrganizationChange}
                  placeholder='Organization Name 1'
                />
                <label htmlFor="orderingNodes"> Channel Name (Optional)*</label>
                <input
                  type="text"
                  id="orderingNodes"
                  
                  onChange={handleOrganizationChange}
                  placeholder='Organization Name 1'
                />
              </div>
              <div className='div2'>
                <label htmlFor="channelName">No. of Ordering Nodes*</label>
                <input
                  type="text"
                  id="channelName"
                  
                  onChange={handleOrganizationChange}
                  placeholder='Nodes'
                />
                <label htmlFor="domain">Domain*</label>
                <input
                  type="text"
                  id="domain"
                  
                  onChange={handleOrganizationChange}
                  placeholder='Organization Name 1'
                />
              </div>

              <div className='dropdown'>
                
                <select id="dropdown" onChange={handleDropdownChange}>
                <option value="option1">Advanced Configurations</option>
                  <option value="option1">Configurations</option>
                  <option value="option2">Previous</option>
                </select>
              </div>

              {selectedOption === "option1" && (
                <div className='additionalForm'>
                  <div className="flex-container">
    <div className="flex-item">
      <label htmlFor="absoluteMaxBytes">Absolute Max Bytes*</label>
      <input
        type="text"
        id="absoluteMaxBytes"
        placeholder='E.g. 1038723'
        // Add state and onChange handler as needed
      />
    </div>

    <div className="flex-item">
      <label htmlFor="preferredMaxBytes">Preferred Max Bytes*</label>
      <input
        type="text"
        id="preferredMaxBytes"
        placeholder='E.g. 524288'
        // Add state and onChange handler as needed
      />
    </div>
  </div>
                  <label htmlFor="additionalField2">Max Message Count*</label>
                  <input
                    type="text"
                    id="additionalField2"
                    placeholder='E.g.10' className='inp1'
                    // Add state and onChange handler as needed
                  />
                </div>
              )}

              {selectedOption === "option2" && (
                <div className='additionalForm'>
                  {/* Additional form fields for Option 2 */}
  
                </div>
              )}

<div className='button-container'>
                <button type="button" onClick={closeModal} className="cancel-btn">
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
