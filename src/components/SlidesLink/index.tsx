import {useColorMode} from '@docusaurus/theme-common';
import LightIcon from "./slide_light.svg"
import DarkIcon from "./slide_dark.svg"
import styles from "./styles.module.css"
import Link from "@docusaurus/Link";

type SlidesLinkProps = {
    page: number
}

const SlidesLink = ({page}: SlidesLinkProps) => {
    const {isDarkTheme} = useColorMode();

    const Icon = isDarkTheme ? DarkIcon : LightIcon;

    return (
        <Link href={`/slides/index.html#D${page}`}
              autoAddBaseUrl
              className={styles.link}
              title="Lien vers les slides"
              aria-label="Lien vers les slides"
              target="_blank"
              rel="noreferrer"
        >
            <Icon height="30" width="30"/>
        </Link>
    )
}

export default SlidesLink