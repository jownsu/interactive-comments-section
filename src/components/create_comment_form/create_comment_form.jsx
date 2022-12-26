import Avatar from "../avatar/avatar";
import { PrimaryButton } from "../buttons/button";
import Card from "../card/card";
import { useForm } from "react-hook-form";
import styles from "./create_comment_form.module.scss";

const CreateCommentForm = ({onSubmit = () => {}}) => {
    const { register, handleSubmit, watch, reset } = useForm();

    const submitHandler = (formData) => {
        onSubmit(formData.content);
        reset();
    }

    return (
        <Card className={styles.add_comment}>
            <Avatar 
                url="images/avatars/me.png"
                alt="Jhones"    
            />    
            <form action="" onSubmit={handleSubmit(submitHandler)}>
                <textarea 
                    {...register("content")}
                    tabIndex="1"
                    placeholder="Add a comment..."
                    autoFocus
                ></textarea>
                <PrimaryButton 
                    type="submit" 
                    text="Send" 
                    tabIndex="2"
                    disabled={!watch("content")}
                />
            </form>
        </Card>
    );
}

export default CreateCommentForm;