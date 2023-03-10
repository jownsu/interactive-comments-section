import { createSlice } from "@reduxjs/toolkit";
import commentsAction from "./comments.action";

const dummy_comments = [
    {
        "id": 1,
        "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        "createdAt": "1 month ago",
        "score": 12,
        "user": {
          "image": "images/avatars/image-amyrobson.png",
          "username": "amyrobson"
        },
        "replies": []
    },
    {
    "id": 2,
    "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    "createdAt": "2 weeks ago",
    "score": 5,
    "user": {
        "image": "images/avatars/image-maxblagun.png",
        "username": "maxblagun"
    },
    "replies": [
        {
        "comment_id": 2,
        "id": 3,
        "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
        "createdAt": "1 week ago",
        "score": 4,
        "replyingTo": "maxblagun",
        "user": {
            "username": "ramsesmiron",
            "image": "images/avatars/image-ramsesmiron.png"
        }
        },
        {
        "comment_id": 2,
        "id": 4,
        "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
        "createdAt": "2 days ago",
        "score": 2,
        "replyingTo": "ramsesmiron",
        "user": {
            "username": "juliusomo",
            "image": "images/avatars/image-juliusomo.png"
        }
        }
    ]
    }
];

const initialState = {
    comments: dummy_comments
}

const commentsManagement = createSlice({
    name: "comments",
    initialState,
    reducers: {
        addComment     : commentsAction.addComment,
        deleteComment  : commentsAction.deleteComment,
        updateComment  : commentsAction.updateComment, 
        addReply       : commentsAction.addReply,
        deleteReply    : commentsAction.deleteReply,
        updateReply    : commentsAction.updateReply,
        incrementScore : commentsAction.incrementScore,
        decrementScore : commentsAction.decrementScore
    }
});

export const { 
    addComment,
    updateComment,
    deleteComment,
    addReply,
    deleteReply,
    updateReply,
    incrementScore,
    decrementScore
} = commentsManagement.actions;

export default commentsManagement.reducer;