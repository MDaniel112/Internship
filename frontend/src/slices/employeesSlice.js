import { createSlice } from '@reduxjs/toolkit'
import Axios from 'axios';

export const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: [],
  },
  reducers: {
    getEmployees: (state) => {
        Axios.get('http://localhost:5000')
            .then(response => {
                console.log(response);
                state.employees= response.data;
            })
            .catch(error => {
                console.log(error);
            })
    }
  }
})

// Action creators are generated for each case reducer function
export const { getEmployees } = employeesSlice.actions

export default employeesSlice.reducer