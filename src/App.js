import { useDispatch, useSelector } from "react-redux";
import { addComment } from "./__reducers/comments/comments.reducer";
import CreateForm from "./components/forms/create_form";
import CommentList from "./components/comments/comment_list";



const App = () => {
    const dispatch = useDispatch();
    const { comments } = useSelector(state => state.comments);

    const submitHandler = (newComment) => {
        dispatch(addComment(newComment));
    }

    return (
        <div className="container">
            <CommentList comments={comments} />
            <CreateForm onSubmit={submitHandler} />
        </div>
    );
}

export default App;
