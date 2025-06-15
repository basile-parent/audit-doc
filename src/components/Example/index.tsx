import {HTMLAttributes, JSXElementConstructor} from "react";
import styles from "./styles.module.css"

type Special = {
    special?: true
    comply?: never
}
type Comply = {
    comply?: true
    special?: never
}
type ResultText = Special | Comply

type ExampleProps = HTMLAttributes<HTMLImageElement> & {
    imgImport?: string
} & ResultText
const Example = ({className, imgImport, children, comply, special, ...otherProps}: ExampleProps) => {
    if (!imgImport) {
        return (
            <div className={`${styles.wrapper} ${className ?? ""}`} {...otherProps}>
                {
                    special ?
                        <span className={styles.special}>Cas particulier</span> :
                        comply ?
                            <p className={styles.compliance}><span aria-hidden>✓</span> Conforme</p> :
                            <p className={styles.nonCompliance}><span aria-hidden>X</span> Non conforme</p>
                }
                {children}
            </div>
        )
    }

    return (
        <figure className={`${styles.wrapper} ${styles.figure} ${className ?? ""}`} {...otherProps}>
            <img src={imgImport} alt="Image d'exemple"/>
            <figcaption>
                {
                    special ?
                        <span className={styles.special}>Cas particulier</span> :
                    comply ?
                        <p className={styles.compliance}><span aria-hidden>✓</span> Conforme</p> :
                        <p className={styles.nonCompliance}><span aria-hidden>X</span> Non conforme</p>
                }
                {children}
            </figcaption>
        </figure>
    );
};

export default Example