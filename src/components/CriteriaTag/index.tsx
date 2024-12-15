import styles from "./styles.module.css"

type CriteriaProps = {
    value: "A" | "AA" | "AAA"
}
const Criteria = ({ value }: CriteriaProps) => {
    return <span>Niveau: <span className={styles.criteriaTag}>{ value }</span></span>
};

export const CriteriaA = () => <Criteria value="A" />
export const CriteriaAA = () => <Criteria value="AA" />
export const CriteriaAAA = () => <Criteria value="AAA" />
