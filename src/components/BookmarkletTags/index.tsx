import {HTMLAttributes} from "react";
import styles from "./styles.module.css"
import Link from "@docusaurus/Link";

type BookmarkletTagProps = HTMLAttributes<HTMLDivElement> & {
    names: string[]
}
const BookmarkletTags = ({ names, className, ...otherProps}: Omit<BookmarkletTagProps, "children">) => (
    <div className={styles.bookmarkletTagsWrapper}>
        Bookmarklets:
        <ul>
            {
                names.map(name => (
                    <li key={name} className={styles.bookmarkletTag}><Link to="/docs/resources/bookmarklets">{ name }</Link></li>
                ))
            }
        </ul>
    </div>
);

export default BookmarkletTags