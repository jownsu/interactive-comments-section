import Avatar from "../avatar/avatar";
import { PrimaryButton } from "../global/buttons/button";
import Card from "../global/card/card";
import { useForm } from "react-hook-form";
import styles from "./create_form.module.scss";
import { CURRENT_USER } from "../../assets/data/constants";

const CreateForm = (props) => {
    const {
        onSubmit = () => {}, 
        btnText = "Send",
        placeholder = "Add a comment..."
    } = props;
    const { register, handleSubmit, watch, reset } = useForm();

    const submitHandler = (formData) => {
        onSubmit(formData.content);
        reset();
    }

    return (
        <Card className={styles.add_comment}>
            <Avatar 
                url={CURRENT_USER.image}
                alt={CURRENT_USER.username}    
            />    
            <form action="" onSubmit={handleSubmit(submitHandler)}>
                <textarea 
                    {...register("content")}
                    tabIndex="1"
                    placeholder={placeholder}
                    autoFocus
                ></textarea>
                <PrimaryButton 
                    type="submit" 
                    text={btnText} 
                    tabIndex="2"
                    disabled={!watch("content")}
                />
            </form>
        </Card>
    );
}

export default CreateForm;