import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setAuthentication } from '../../actions';

const LogIn = () => {
  const [user, setUser] = useState('');

  const handleChange = e => {
    setUser(e.target.value);
  };

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (user) {
      Cookies.set('user', e.target.querySelector('#username').value, { expires: 1 });
      dispatch(setAuthentication(true));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* eslint-disable-next-line */}
        <label htmlFor="username">
          Name:
        </label>
        <input id="username" type="text" value={user} onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LogIn;
