import {ReactElement, useEffect, useId, useState} from "react";
import styles from "./styles.module.css"

const InfiniteGroceryListLoading = (): ReactElement => {
    const listId = useId()
    const [groceryList, setGroceryList] = useState([
        "Du chocolat",
        "Des fraises",
        "De la farine",
        "Du lait",
    ])

    const onAddElementsToList = () => {
        setGroceryList((items) => [ ...items, "Un nouveau produit", "Et un autre"]);
    }

    useEffect(() => {
        (document.getElementById(listId)?.querySelector("li:nth-last-child(2)") as HTMLElement)?.focus();
    }, [groceryList])

    return (
        <div className={styles.infiniteList}>
            <ul id={listId}>
                {groceryList.map((item, index) => (
                    <li key={index} tabIndex={-1}>{item}</li>
                ))}
            </ul>
            <button className="button button--primary button--md" onClick={onAddElementsToList}>Voir plus</button>
        </div>
    )
}

export default InfiniteGroceryListLoading