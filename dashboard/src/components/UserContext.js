import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/users/me`, {
        withCredentials: true
      });
      setUser(response.data.user);
    } catch (error) {
      console.error('Error fetching user:', error);
      // Redirect to login if unauthorized
      if (error.response?.status === 401) {
        window.location.href = '/login';
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/users/logout`, {}, {
        withCredentials: true
      });
      setUser(null);
      // Redirect to login page
      window.location.href = `${process.env.REACT_APP_FRONTEND_URL}/login`;
    } catch (error) {
      console.error('Logout error:', error);
      // Even if the server request fails, clear local state and redirect
      setUser(null);
      window.location.href = `${process.env.REACT_APP_FRONTEND_URL}/login`;
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading, logout }}>
      {children}
    </UserContext.Provider>
  );
}; 