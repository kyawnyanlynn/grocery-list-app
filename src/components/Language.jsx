import { useTranslation } from "react-i18next";

export function Language() {
  const { i18n } = useTranslation();
  return (
    <div className="languages">
      <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="bur">မြန်မာဘာသာ</option>
        <option value="jp">日本語</option>
      </select>
    </div>
  );
}
