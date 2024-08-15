import { createSlice } from '@reduxjs/toolkit';

const skillsSlice = createSlice({
    name: 'skills',
    initialState: {
        selectedSkill: null,
    },
    reducers: {
        selectSkill: (state, action) => {
            state.selectedSkill = state.selectedSkill === action.payload ? null : action.payload;
        }
    }
});

export const { selectSkill } = skillsSlice.actions;
export default skillsSlice.reducer;
