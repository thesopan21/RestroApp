import { API_URL, GET_USER } from '../constants/apiEndpoints';

export const fetchUserData = async () => {
  try {
    const response = await fetch(`${API_URL}${GET_USER}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }
};
