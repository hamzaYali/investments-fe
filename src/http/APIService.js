import axios from 'axios';

// Change the API_URL to the correct location of the backend API before deploying the app
const API_URL = 'http://127.0.0.1:8000/';
/* 
  API URL Options:
  - 'http://localhost:8000'
  - 'http://127.0.0.1:8000/'
  - 'hamzayali1.pythonanywhere.com'
*/

export class APIService {
  constructor() { }

  /**
   * Get a specific customer by primary key
   * @param {number} param_pk - Customer primary key
   * @returns {Promise} - Axios GET request promise
   */
  getCustomer(param_pk) {
    const url = `${API_URL}/api/customers/${param_pk}`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    
    return axios.get(url, { headers: headers });
  }

  /**
   * Get list of all customers
   * @returns {Promise} - Axios GET request promise
   */
  getCustomerList() {
    const url = `${API_URL}/api/customers/`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    
    return axios.get(url, { headers: headers });
  }

  /**
   * Add a new customer
   * @param {Object} customer - Customer data object
   * @returns {Promise} - Axios POST request promise
   */
  addNewCustomer(customer) {
    const url = `${API_URL}/api/customers/`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    
    return axios.post(url, customer, { headers: headers });
  }

  /**
   * Update an existing customer
   * @param {Object} customer - Customer data object with pk property
   * @returns {Promise} - Axios PUT request promise
   */
  updateCustomer(customer) {
    const url = `${API_URL}/api/customers/${customer.pk}`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    
    return axios.put(url, customer, { headers: headers });
  }

  /**
   * Delete a customer by primary key
   * @param {number} customer_Pk - Customer primary key
   * @returns {Promise} - Axios DELETE request promise
   */
  deleteCustomer(customer_Pk) {
    const url = `${API_URL}/api/customers/${customer_Pk}`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    
    return axios.delete(url, { headers: headers });
  }

  /**
   * Authenticate user login
   * @param {Object} credentials - User credentials
   * @returns {Promise} - Axios POST request promise
   */
  authenticateLogin(credentials) {
    const url = `${API_URL}/api/`;
    
    return axios.post(url, credentials);
  }

  /**
   * Register a new user
   * @param {Object} credentials - User registration data
   * @returns {Promise} - Axios POST request promise
   */
  registerUser(credentials) {
    const url = `${API_URL}/register/`;
    credentials.customusername = credentials.username;
    
    return axios.post(url, credentials);
  }
}