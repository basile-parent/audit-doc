import {HTMLAttributes, ReactNode, useState} from "react";
import styles from "./styles.module.css"

export const AriaPressedButton = ({children, ...otherProps}: HTMLAttributes<HTMLButtonElement>) => {
    const [pressed, setPressed] = useState(false)

    return (
        <button aria-pressed={pressed} onClick={() => setPressed(!pressed)}
                className={styles.ariaPressed} {...otherProps}>
            {children}
        </button>
    )
}

type ChangeLabelWhenPressedButtonProps = HTMLAttributes<HTMLButtonElement> & {
    childrenWhenPressed: ReactNode
}
export const ChangeLabelWhenPressedButton = ({children, childrenWhenPressed, ...otherProps}: ChangeLabelWhenPressedButtonProps) => {
    const [pressed, setPressed] = useState(false)

    return (
        <button onClick={() => setPressed(!pressed)}
                className={styles.ariaPressed} {...otherProps}>
            {pressed ? childrenWhenPressed : children}
        </button>
    )
}

export { default as FocusTrap } from "./FocusTrap"
export { default as InfiniteGroceryListLoading } from "./InfiniteGroceryListLoading"