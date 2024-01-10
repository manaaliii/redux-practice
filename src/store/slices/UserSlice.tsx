import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: [{firstName: 'John', lastName: 'Cena'}, 
                    {firstName: 'John', lastName: 'Root'},
                    {firstName: 'Siya', lastName: 'Solanki'},
                    {firstName: 'Sena', lastName: 'Shah'},
                    {firstName: 'Rina', lastName: 'Shah'},
                    {firstName: 'Rin', lastName: 'Nobara'} ],
    reducers: {
        addUser(state, action){
            state.push(action.payload);
        },
        removeUser(state, action){
            state.splice(action.payload,1);

        },
        updateUser(state, action){
            state[action.payload.index].firstName = action.payload.firstName;
            state[action.payload.index].lastName = action.payload.lastName;
        },

    }
});

export default userSlice.reducer;
export const {addUser, removeUser, updateUser} = userSlice.actions;