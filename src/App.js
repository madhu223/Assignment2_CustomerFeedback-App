import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CustomersDashboard from './customersList/CustomersDashboard';
import CustomerDetails from './customersList/customerDetails';
import FeedbackForm from './customersList/feedbackForm';

function App() {
  return (
    <div className='App'>
      <h3>Customer Feedback App</h3>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CustomersDashboard />} />
          <Route path='/userinput' element={<CustomerDetails />} />
          <Route path='/feedback' element={<FeedbackForm />} />

          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
      {/* <FeedbackForm /> */}

      {/* <CustomersDashboard />
      <CustomerDetails /> */}
    </div>
  );
}

export default App;
