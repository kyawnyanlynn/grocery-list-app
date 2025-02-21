import { useTranslation } from "react-i18next";

export function Clear({ onClearList }) {
  const { t } = useTranslation();

  return (
    <div className="clearBtn">
      <button onClick={onClearList}>{t("clearList")}</button>;
    </div>
  );
}
