import {HTMLAttributes, JSXElementConstructor} from "react";
import styles from "./styles.module.css"

type ExampleProps = HTMLAttributes<HTMLImageElement> & {
    imgImport: string
    comply?: boolean
}
const Example = ({className, imgImport, children, comply, ...otherProps}: ExampleProps) => {
    return (
        <figure className={`${styles.figure} ${className ?? ""}`} {...otherProps}>
            <img src={imgImport} alt="Image d'exemple"/>
            <figcaption>
                {
                    comply ? <span className={styles.compliance}><span aria-hidden>✓</span> Conforme</span> :
                        <span className={styles.nonCompliance}><span aria-hidden>X</span> Non conforme</span>
                }
                {children}
            </figcaption>
        </figure>
    );
};

export default Example