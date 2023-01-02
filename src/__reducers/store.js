import { configureStore } from "@reduxjs/toolkit";
import commentsManagement from "./comments/comments.reducer";
import modalManagement from "./modal/modal.reducer";

export const store = configureStore({
    reducer: {
        comments: commentsManagement,
        modal: modalManagement
    }
});