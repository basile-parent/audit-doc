import {HTMLAttributes, ReactNode} from "react";
import styles from "./styles.module.css"
import Link from "@docusaurus/Link";

type ToolProps = HTMLAttributes<HTMLDivElement> & {
    links: ReactNode[]
    label: string
}

const Tools = ({links, label, className, ...otherProps}: Omit<ToolProps, "children">) => (
    <div className={`${styles.bookmarkletTagsWrapper} ${className ?? ""}`} {...otherProps}>
        {label} :
        <ul>
            {
                links.map((link, index) => (
                    <li key={index} className={styles.bookmarkletTag}>{link}</li>
                ))
            }
        </ul>
    </div>
);

type BookmarkletTagProps = Omit<ToolProps, "children" | "links"> & {
    names: string[]
}
export const BookmarkletTags = ({names, className, ...otherProps}: BookmarkletTagProps) => (
    <Tools label="Bookmarklets"
           links={names.map(name => <Link to="/docs/resources/bookmarklets">{name}</Link>)}
           {...otherProps}/>
);


type ExtensionsTagsProps = Omit<ToolProps, "children" | "links"> & {
    names: string[]
}
export const ExtensionsTags = ({names, className, ...otherProps}: ExtensionsTagsProps) => (
    <Tools label="Extensions"
           links={names.map(name => <Link to="/docs/resources/extensions">{name}</Link>)}
           {...otherProps}/>
);

export default Tools