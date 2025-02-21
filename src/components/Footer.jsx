import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

export function Footer({ items }) {
  const itemNumber = items.length;
  const itemBought = items.filter((item) => item.bought).length;
  const percentage = Math.round((itemBought / itemNumber) * 100);
  const { t } = useTranslation();

  return (
    <footer className="footer">
      {itemNumber === 0 ? (
        <p>{t("noItem")}</p>
      ) : (
        <p>
          {t("stats-1")} {percentage}% {t("stats-2")}
          <FontAwesomeIcon icon={faCartShopping} />{" "}
        </p>
      )}
      <small>Copyright © Lynn. All Rights Reserved. </small>
    </footer>
  );
}
