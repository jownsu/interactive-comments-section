import styles from "./avatar.module.scss";

const Avatar = (props) => {
    const { 
        url="", 
        alt="avatar", 
        username="",
        you=false,
        className
    } = props;


    return (
        <div className={`${styles.avatar} ${className}`}>
            <img 
                src={url} 
                alt={alt} 
            />
            {username && <p className={styles.username}>{username}</p>}
            {you && <p className={styles.you}>you</p>}
        </div>
    )
}

export default Avatar