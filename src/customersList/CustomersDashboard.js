import React, { useState } from 'react';

import { useNavigate } from 'react-router';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
function CustomersDashboard() {
  let navigate = useNavigate();
  const [customers, setCustomers] = useState();
  const [rowData] = useState([
    { firstName: 'David', lastName: 'Warner', email: 'dwabc@redif.com ' },
    { firstName: 'Kane', lastName: 'Williamson', email: 'kwxyz@redif.com' },
    { firstName: 'Pooran', lastName: 'Nichlos', email: 'pnrta@redif.com' },
  ]);

  const [columnDefs] = useState([
    { field: 'firstName' },
    { field: 'lastName' },
    { field: 'email' },
  ]);
  const handleCustomer = () => {
    // alert('welcome');
    navigate('userinput');
  };
  return (
    <div>
      <h3>CustomersDashboard</h3>
      <button onClick={handleCustomer}>Add Customer</button>

      <div className='ag-theme-alpine' style={{ height: 400, width: 600 }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
      </div>
    </div>
  );
}

export default CustomersDashboard;
