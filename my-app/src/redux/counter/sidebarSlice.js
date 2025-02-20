import { createSlice } from '@reduxjs/toolkit'

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    sidebarIsOpen: false,
    
  },
  reducers: {
    opensidebar: state =>{
      state.sidebarIsOpen = true;
    },
    
    closesidebar : state =>{
      state.sidebarIsOpen = false;
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { opensidebar , closesidebar } = sidebarSlice.actions;
export const selectSidebarIsOpen =(state) => state.sidebar.sidebarIsOpen;

export default sidebarSlice.reducer