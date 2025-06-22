import {ReactElement, useEffect, useRef} from "react";

const FocusTrap = (): ReactElement => {
    const beforeFocusTrapRefElement = useRef<HTMLButtonElement>(null)
    const afterFocusTrapRefElement = useRef<HTMLButtonElement>(null)
    const beforeTabFocusTrapRefElement = useRef<HTMLButtonElement>(null)
    const afterTabFocusTrapRefElement = useRef<HTMLButtonElement>(null)
    const firstElementRef = useRef<HTMLButtonElement>(null)
    const lastElementRef = useRef<HTMLButtonElement>(null)

    const endOfFocusAfterTrapRef = useRef<HTMLAnchorElement>(null)
    const endOfFocusBeforeTrapRef = useRef<HTMLAnchorElement>(null)

    useEffect(() => {
        if (afterFocusTrapRefElement.current && endOfFocusAfterTrapRef.current && beforeFocusTrapRefElement.current &&
        firstElementRef.current && lastElementRef.current && afterTabFocusTrapRefElement.current && beforeTabFocusTrapRefElement.current) {
            const goToFirstElement = () => firstElementRef.current.focus()
            const goToLastElement = () => lastElementRef.current.focus()

            const endFocusBefore = (event: KeyboardEvent) => event.key.toLowerCase() === "m" && endOfFocusBeforeTrapRef.current.focus()
            const endFocusAfter = (event: KeyboardEvent) => event.key.toLowerCase() === "m" && endOfFocusAfterTrapRef.current.focus()

            beforeTabFocusTrapRefElement.current.addEventListener("focus", goToLastElement)
            beforeFocusTrapRefElement.current.addEventListener("focus", goToFirstElement)
            firstElementRef.current.addEventListener("keydown", endFocusBefore)
            afterTabFocusTrapRefElement.current.addEventListener("focus", goToFirstElement)
            afterFocusTrapRefElement.current.addEventListener("focus", goToLastElement)
            lastElementRef.current.addEventListener("keydown", endFocusAfter)

            return () => {
                beforeTabFocusTrapRefElement.current?.removeEventListener("focus", goToLastElement)
                beforeFocusTrapRefElement.current?.removeEventListener("focus", goToFirstElement)
                firstElementRef.current?.removeEventListener("keydown", endFocusBefore)
                afterTabFocusTrapRefElement.current?.removeEventListener("focus", goToFirstElement)
                afterFocusTrapRefElement.current?.removeEventListener("focus", goToLastElement)
                lastElementRef.current?.removeEventListener("keydown", endFocusAfter)
            }
        }
    }, [afterFocusTrapRefElement.current, endOfFocusAfterTrapRef.current, beforeFocusTrapRefElement.current,
        firstElementRef.current, lastElementRef.current, afterTabFocusTrapRefElement.current, beforeTabFocusTrapRefElement.current])

    return (
        <div style={{
            padding: "1rem 2rem",
            border: "3px var(--ifm-menu-color) double",
            display: "inline-flex",
            flexDirection: "column",
            gap: ".5rem",
        }}>
            <a href="#" ref={endOfFocusBeforeTrapRef}>Un premier lien</a>

            <button style={{position: "absolute", top: 0, left: 0, height: 0, width: 0}}
                    ref={beforeFocusTrapRefElement}>BEFORE Focus trap element
            </button>
            <button style={{position: "absolute", top: 0, left: 0, height: 0, width: 0}}
                    ref={beforeTabFocusTrapRefElement}>BEFORE TAB Focus trap element
            </button>
            <button className="button button--primary button--md" ref={firstElementRef}>Bouton 1</button>
            <button className="button button--primary button--md" ref={lastElementRef}>Bouton 2</button>
            <button style={{position: "absolute", top: 0, left: 0, height: 0, width: 0}}
                    ref={afterTabFocusTrapRefElement}>AFTER TAB Focus trap element
            </button>
            <button style={{position: "absolute", top: 0, left: 0, height: 0, width: 0}}
                    ref={afterFocusTrapRefElement}>AFTER Focus trap element
            </button>

            <a href="#" ref={endOfFocusAfterTrapRef}>Un second lien</a>
        </div>
    )
}

export default FocusTrap