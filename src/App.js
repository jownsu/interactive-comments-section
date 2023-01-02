import { useDispatch, useSelector } from "react-redux";
import { addComment } from "./__reducers/comments/comments.reducer";
import DeleteCommentModal from "./components/modals/delete_comment_modal/delete_comment_modal";
import DeleteReplyModal from "./components/modals/delete_reply_modal/delete_reply_modal";
import CreateForm from "./components/forms/create_form";
import CommentList from "./components/comments/comment_list";



const App = () => {
    const dispatch = useDispatch();
    const { comments } = useSelector(state => state.comments);
    const { showDeleteComment, showDeleteReply } = useSelector(state => state.modal);

    const submitHandler = (newComment) => {
        dispatch(addComment(newComment));
    }

    return (
        <>
            <div className="container">
                <CommentList comments={comments} />
                <CreateForm onSubmit={submitHandler} />
            </div>
            { showDeleteComment && <DeleteCommentModal /> }
            { showDeleteReply && <DeleteReplyModal /> }
        </>
    );
}

export default App;
