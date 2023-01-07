import { CURRENT_USER } from "../../assets/data/constants";

const addComment = (state, action) => {
    state.comments = [
        ...state.comments,
        {
            id: generateId(),
            content: action.payload,
            createdAt: "Just now",
            score: 0,
            user: CURRENT_USER,
            replies: []
        }
    ]
}

const deleteComment = (state, action) => {
    state.comments = state.comments.filter(comment => comment.id !== action.payload)
}

const updateComment = (state, action) => {
    const {id, newContent} = action.payload;
    const comment = state.comments.find(comment => comment.id === id);
    comment.content = newContent;
}


const addReply = (state, action) => {
    const comment = state.comments.find(comment => comment.id === action.payload.comment_id);
    comment.replies = [
        ...comment.replies, 
        {
            id: generateId(),
            comment_id: action.payload.comment_id,
            content: action.payload.content,
            score: 0,
            // "replyingTo": "maxblagun",
            user: CURRENT_USER
        }
    ];
}

const deleteReply = (state, action) => {
    const comment = state.comments.find(comment => comment.id === action.payload.comment_id);
    comment.replies = comment.replies.filter(reply => reply.id !== action.payload.id);
}

const updateReply = (state, action) => {
    const {id, comment_id, newContent} = action.payload;
    const comment = state.comments.find(comment => comment.id === comment_id);
    const reply = comment.replies.find(reply => reply.id === id);
    reply.content = newContent;
}

const incrementScore = (state, action) => {
    const comment = state.comments.find(comment => comment.id === action.payload.comment_id)

    if(action.payload.reply_id != null){
        const reply = comment.replies.find(reply => reply.id === action.payload.reply_id); 
        reply.score++;
    }
    else {
        comment.score++;
    }
}

const decrementScore = (state, action) => {
    const comment = state.comments.find(comment => comment.id === action.payload.comment_id)

    if(action.payload.reply_id != null){
        const reply = comment.replies.find(reply => reply.id === action.payload.reply_id); 
        reply.score--;
    }
    else {
        comment.score--;
    }
}

const generateId = () => {
    return Math.floor(Date.now() + Math.random());
}

const commentsAction = {
    addComment,
    deleteComment,
    updateComment,
    addReply,
    deleteReply,
    updateReply,
    incrementScore,
    decrementScore
}

export default commentsAction;