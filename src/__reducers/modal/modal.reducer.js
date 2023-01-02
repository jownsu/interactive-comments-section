import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showDeleteComment: false,
    showDeleteReply: false,
    deleteCommentId: 0,
    deleteReplyId: 0
};

const modalManagement = createSlice({
    name: "modal",
    initialState,
    reducers: {
        showDeleteCommentModal : (state, action) => {
            state.showDeleteComment = true;
            state.deleteCommentId = action.payload;
        },
        hideDeleteCommentModal : (state) => {
            state.showDeleteComment = false;
            state.deleteCommentId = 0;
        },
        showDeleteReplyModal : (state, action) => {
            state.showDeleteReply = true;
            state.deleteCommentId = action.payload.comment_id;
            state.deleteReplyId = action.payload.id;
        },
        hideDeleteReplyModal : (state) => {
            state.showDeleteReply = false;
            state.deleteCommentId = 0;
            state.deleteReplyId = 0;
        },
    }
})

export const { 
    showDeleteCommentModal, 
    hideDeleteCommentModal, 
    showDeleteReplyModal, 
    hideDeleteReplyModal 
} = modalManagement.actions;

export default modalManagement.reducer;