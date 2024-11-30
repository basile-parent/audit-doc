import React, {PropsWithChildren, ReactElement} from "react";
import LinkIcon from '@site/static/img/link.svg';
import styles from "./styles.module.css"

const IconedLink = ({ children }: PropsWithChildren<never>) => {
    if (React.Children.count(children) !== 1) {
        console.error(`[IconedLink] There must be only one anchor link child for this component. Found: ${React.Children.count(children)}`)
        return <>{ children }</>
    }

    return <>
        { React.cloneElement(
            React.Children.only(children),
            {},
            <>
                <LinkIcon className={styles.linkIcon} />
                { (React.Children.only(children) as ReactElement).props.children }
            </>)
        }
    </>
};

export default IconedLink