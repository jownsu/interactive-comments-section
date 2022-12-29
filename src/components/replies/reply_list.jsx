import { useDispatch } from "react-redux";
import { addReply } from "../../__reducers/comments/comments.reducer";
import CreateForm from "../forms/create_form";
import ReplyItem from "./reply_item";
import styles from "./reply_list.module.scss";

const ReplyList = ({replies, comment_id}) => {

    const dispatch = useDispatch();

    const submitHandler = (content) => {
        dispatch(addReply({comment_id, content}));
    }

    return (
        <div className={styles.reply_list}>
            <ul>
                { replies.map(reply => (
                    <ReplyItem 
                        key={reply.id}
                        reply={reply}
                    />
                ))}
            </ul>
            <CreateForm 
                btnText="Reply"
                placeholder="Add a reply..." 
                onSubmit={submitHandler}
            /> 
        </div>
 
    )
}

export default ReplyList