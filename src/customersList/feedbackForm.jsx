import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function FeedbackForm() {
  let navigate = useNavigate();
  const initialFeedback = {
    productRating: '',
    deliveryRating: '',
    size: '',
    contactus: '',
    recommond: '',
    otherFeedabck: '',
  };
  const [feedback, setfeedback] = useState(initialFeedback);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setfeedback({ ...feedback, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(feedback.firstName);
    console.log(JSON.stringify(feedback, null, 2));

    // navigate('/');
  };
  const handleCancel = () => {
    navigate('/');
  };
  return (
    <div>
      <h3>Customer feedbackForm</h3>
      <h2>Tell us how do you think..!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label> How do you rate the quality of the product ? </label>
          <div>
            <input
              type='number'
              name='productRating'
              value={feedback.productRating}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label> How do you rate the speed of delivery ? </label>
          <div>
            <input
              type='number'
              name='deliveryRating'
              value={feedback.deliveryRating}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label> How do you find the sizing of the product ? </label>
          <div>
            <section>
              <input
                type='radio'
                name='size'
                value=' Too small'
                onChange={handleChange}
              />
              Too small <br />
              <input
                type='radio'
                name='size'
                value=' Just right'
                onChange={handleChange}
              />
              Just right <br />
              <input
                type='radio'
                name='size'
                value=' Too large'
                onChange={handleChange}
              />
              Too large
            </section>
          </div>
        </div>
        <div>
          <label> How do you like to contact us for different sizing ? </label>
          <div>
            <input
              type='radio'
              name='contactus'
              value='Yes'
              onChange={handleChange}
            />
            Yes
            <br />
            <input
              type='radio'
              name='contactus'
              value='No'
              onChange={handleChange}
            />
            No <br />
          </div>
        </div>
        <div>
          <label>Would you recommond our product to others?</label>
          <br />
          <div>
            <select name='recommond' onChange={handleChange}>
              <option value='Select'>Select</option>
              <option value='May be'>May be</option>
              <option value='May not be'>May not be</option>
            </select>
          </div>
        </div>
        <div>
          <label> How do you any other feedback for us ? </label>
          <div>
            <textarea
              type='text'
              name='otherFeedabck'
              value={feedback.otherFeedabck}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <button type='submit'>Submit Review</button>
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

export default FeedbackForm;
