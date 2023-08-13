import { FlexHorizontal } from "@shared/ui/Grid";
import styles from "./Footer.module.scss";
import { ExternalLink } from "@shared/ui/ExternalLink";

export const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <FlexHorizontal>
          <ExternalLink href="https://github.com/olekon/justsmartcontracts">
            GitHub
          </ExternalLink>
          <p>|</p>
          <ExternalLink href="mailto:contact@justsmartcontracts.dev">
            Email
          </ExternalLink>
          <p>|</p>
          <p>Donations: 0x6d661B87C66D717F688d47796D7068B41D0a8730</p>
        </FlexHorizontal>
      </div>
    </div>
  );
};
