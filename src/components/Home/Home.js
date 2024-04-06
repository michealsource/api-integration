import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Home = () => {
  const [users, setUsers] = useState([]);
  // State to store loading status
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8000/users');
      setLoading(false);
      setUsers(response?.data);
    } catch (error) {
      setError(error.message);
      console.log(error, 'error...');
      setLoading(false);
    }

    // try {
    //   // Make a GET request to your API endpoint
    //   const response = await axios.get('http://localhost:8000/users');
    //   // Update state with the fetched data
    //   setUsers(response.data);
    //   // Set loading to false
    //   setLoading(false);
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    //   // Set loading to false in case of an error
    //   setLoading(false);
    // }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Function to handle edit action
  const handleEdit = (id) => {
    console.log(`Edit action for ID: ${id}`);
  };

  // Function to handle delete action
  const handleDelete = (id) => {
    console.log(`Delete action for ID: ${id}`);
  };

  // Function to handle view action
  const handleView = (id) => {
    console.log(`View action for ID: ${id}`);
  };

  return (
    <div>
      <h1>{error}</h1>
      <h1 style={{ textAlign: 'center' }}>List of Users</h1>
      <Link
        to="/add"
        style={{
          backgroundColor: 'orange',
          cursor: 'pointer',
          color: '#fff',
          padding: '10px',
          fontSize: '17px',
          outline: 'none',
          border: 'none',
          borderRadius: '8px',
        }}
      >
        Add User
      </Link>
      <div className="table-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="custom-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Number</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((row, index) => (
                <tr key={row.id}>
                  <td>{index + 1}</td>
                  <td>{row.name}</td>
                  <td>{row.number}</td>
                  <td>{row.email}</td>
                  <td style={{ display: 'flex', gap: 10 }}>
                    <button onClick={() => handleEdit(row.id)}>Edit</button>
                    <button onClick={() => handleDelete(row.id)}>Delete</button>
                    <button onClick={() => handleView(row.id)}>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Home;
