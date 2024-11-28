import styles from './Button.module.css';
import { useNavigate } from "react-router-dom";

const Button = ({children, link}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (link) {
          navigate(link);
        } else {
          navigate(-1);
        }
      };

    return(
        <button onClick={handleClick} className={styles.button}>
            {children}
        </button>
    )
}

export default Button;