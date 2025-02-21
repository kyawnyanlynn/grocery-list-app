import { useTranslation } from "react-i18next";

export function Logo() {
  const { t } = useTranslation();
  return <h1>{t("header")}</h1>;
}
