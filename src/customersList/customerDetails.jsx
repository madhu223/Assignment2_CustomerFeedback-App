import React, { useState } from 'react';
import { useNavigate } from 'react-router';
function CustomerDetails() {
  let navigate = useNavigate();
  const initialValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    dob: '',
    gender: '',
    city: '',
    state: '',
    country: '',
  };
  const [formdata, setformData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formdata, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata.firstName);
    console.log(JSON.stringify(formdata, null, 2));
    alert('Would you like to give us feedbak');

    navigate('/feedback');
  };
  const handleCancel = () => {
    navigate('/');
  };
  return (
    <div className='container'>
      <h4> customerDetails </h4>
      <form onSubmit={handleSubmit}>
        <div id='form-filed' className='form-control'>
          <label htmlFor='firstName'>FirstName</label>
          <input
            type='text'
            name='firstName'
            placeholder='enter firstname'
            id='input-field  '
            required
            value={formdata.firstName}
            onChange={handleChange}
          />
        </div>
        <div id='form-filed' className='form-control'>
          <label htmlFor='lastName'>LastName</label>
          <input
            type='text'
            name='lastName'
            placeholder='enter lastName'
            className='input-field'
            required
            value={formdata.lastName}
            onChange={handleChange}
          />
        </div>

        <div id='form-filed' className='form-control'>
          <label htmlFor='email'>Email Id</label>
          <input
            type='email'
            name='email'
            placeholder='enter email'
            className='input-field'
            required
            value={formdata.email}
            onChange={handleChange}
          />
        </div>
        <div id='form-filed' className='form-control'>
          <label htmlFor='number'>Ph.No</label>
          <input
            type='number'
            name='phoneNumber'
            placeholder='enter phone number'
            className='input-field'
            required
            value={formdata.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div id='form-filed' className='form-control'>
          <label htmlFor='dob'>DOB</label>
          <input
            type='date'
            name='dob'
            placeholder='enter dob'
            required
            value={formdata.dob}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='gender'>Gender</label>
          <input
            type='radio'
            name='gender'
            required
            // value={formdata.gender}
            value='male'
            onChange={handleChange}
          />
          Male
          <input
            type='radio'
            name='gender'
            required
            // value={formdata.gender}
            value='female'
            onChange={handleChange}
          />
          Female
        </div>
        <div id='form-filed' className='form-control'>
          <label htmlFor='city'>City/Town </label>
          <input
            type='text'
            name='city'
            placeholder='enter city/town'
            className='input-field'
            required
            value={formdata.city}
            onChange={handleChange}
          />
        </div>
        <div id='form-filed' className='form-control'>
          <label htmlFor='state'>State </label>
          <input
            type='text'
            name='state'
            placeholder='enter state'
            className='input-field'
            required
            value={formdata.state}
            onChange={handleChange}
          />
        </div>
        <div id='form-filed' className='form-control'>
          <label htmlFor='country'>Country </label>
          <input
            type='text'
            name='country'
            placeholder='enter country'
            className='input-field'
            required
            value={formdata.country}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type='submit'>Submit</button>
          <button
            type='button'
            onClick={handleCancel}
            style={{ marginLeft: '10px' }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CustomerDetails;
