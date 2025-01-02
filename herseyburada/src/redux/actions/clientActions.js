export const fetchRoles = () => async (dispatch) => {
    try {
      const response = await fetch('/api/roles'); // Rol verisi için API endpoint
      const data = await response.json();
      dispatch(setRoles(data));
    } catch (error) {
      console.error('Failed to fetch roles:', error);
    }
  };
  