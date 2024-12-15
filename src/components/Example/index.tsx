import {HTMLAttributes, JSXElementConstructor} from "react";
import styles from "./styles.module.css"

type ExampleProps = HTMLAttributes<HTMLImageElement> & {
    imgImport: string
    comply?: boolean
    special?: boolean
}
const Example = ({className, imgImport, children, comply, special, ...otherProps}: ExampleProps) => {
    return (
        <figure className={`${styles.figure} ${className ?? ""}`} {...otherProps}>
            <img src={imgImport} alt="Image d'exemple"/>
            <figcaption>
                {
                    special ?
                        <span className={styles.special}>Cas particulier</span> :
                    comply ?
                        <span className={styles.compliance}><span aria-hidden>✓</span> Conforme</span> :
                        <span className={styles.nonCompliance}><span aria-hidden>X</span> Non conforme</span>
                }
                {children}
            </figcaption>
        </figure>
    );
};

export default Example