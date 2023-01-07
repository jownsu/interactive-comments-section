import { PrimaryButton, GreyButton } from "../../global/buttons/button";
import { useForm } from "react-hook-form";
import styles from "./update_form.module.scss";

const UpdateForm = (props) => {
    const {
        onSubmit = () => {}, 
        onCancel = () => {},
        value
    } = props;
    const { register, handleSubmit, watch, reset } = useForm();

    const submitHandler = (formData) => {
        onSubmit(formData.content);
        reset();
    }

    return (
        <form action="#" onSubmit={handleSubmit(submitHandler)} className={styles.update_form}>
            <textarea 
                {...register("content")}
                tabIndex="1"
                defaultValue={value}
                autoFocus
            ></textarea>
            <div>
                <GreyButton 
                    text={"Cancel"} 
                    tabIndex="3"
                    onClick={onCancel}
                />
                <PrimaryButton 
                    type="submit" 
                    text={"Update"} 
                    tabIndex="2"
                    disabled={!watch("content")}
                />
            </div>
        </form>
    );
}

export default UpdateForm;