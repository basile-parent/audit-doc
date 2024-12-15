import {PropsWithChildren} from "react";
import styles from "./styles.module.css"

const Todo = ({children}: PropsWithChildren<never>) => {
    return (
        <div className={`theme-admonition theme-admonition-warning alert alert--warning ${styles.wrapper}`}>
            <div className={styles.title}>TODO</div>
            <div className={styles.content}>{children}</div>
        </div>
    )
};

export default Todo