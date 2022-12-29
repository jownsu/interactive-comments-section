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

const generateId = () => {
    return Math.floor(Date.now() + Math.random());
}

const commentsAction = {
    addComment,
    incrementScore,
    decrementScore,
    addReply
}

export default commentsAction;