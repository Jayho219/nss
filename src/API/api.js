const BASE_URL = 'http://localhost:5000';

export const checkAuth = async () => {
  try {
    const response = await fetch(`${BASE_URL}/checkAuth`, {
      method: 'GET',
      credentials: 'include', // Include cookies for authentication
    });

    if (response.ok) {
      const data = await response.json();
      return data.isAuthenticated; 
    }

    throw new Error('Authentication check failed');
  } catch (error) {
    console.error('Authentication check error:', error);
    return false; 
  }
};

// Other functions for login, logout, etc. can be defined here as well
