import React, { useState } from 'react';
import Input from '../Input/Input';
import AppButton from '../AppButton/AppButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const addNewUser = async (event) => {
    const payload = {
      name,
      number,
      email,
    };
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8000/users', payload);
      console.log('Response:', response.data);
      setLoading(false);
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>Add User</h1>
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <AppButton onClick={addNewUser} title="Save" />
      <br />
      <br />
      <AppButton onClick={addNewUser} title="Edit" />
      <br />
      <br />
      <AppButton onClick={addNewUser} title="Close" backgroundColor="red" />
    </div>
  );
};

export default AddUser;
