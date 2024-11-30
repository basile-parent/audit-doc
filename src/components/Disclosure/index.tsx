import {PropsWithChildren} from "react";
import styles from "./styles.module.css"

type DisclosureProps = {
    title: string;
};

const Disclosure = ({title, children}: PropsWithChildren<DisclosureProps>) => (
    <details className={styles.disclosureContainer}>
        <summary>
            {title}
        </summary>
        {children}
    </details>
);

export default Disclosure