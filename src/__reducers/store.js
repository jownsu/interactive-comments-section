import { configureStore } from "@reduxjs/toolkit";
import commentsManagement from "./comments/comments.reducer";

export const store = configureStore({
    reducer: {
        comments: commentsManagement
    }
});