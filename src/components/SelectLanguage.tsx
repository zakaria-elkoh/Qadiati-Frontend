import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";
import i18n from "../i18";

const SelectLanguage: React.FC = () => {
  const { t } = useTranslation("global");
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng).then(() => {
      setCurrentLanguage(lng); // trigger re-render
      console.log("Language changed to:", lng);
    });
  };
  return (
    <Select onValueChange={changeLanguage} defaultValue={currentLanguage}>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder={t("language")} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ar">
          <div className="flex gap-4 items-center justify-between">
            <p>AR</p>
            <img
              height={20}
              width={20}
              src="/countries-icons/ar.svg"
              alt="Arabic flag"
            />
          </div>
        </SelectItem>
        <SelectItem value="en">
          <div className="flex gap-4 items-center justify-between">
            <p>EN</p>
            <img
              height={20}
              width={20}
              src="/countries-icons/uk.svg"
              alt="UK flag"
            />
          </div>
        </SelectItem>
        <SelectItem value="es">
          <div className="flex gap-4 items-center justify-between">
            <p>ES</p>
            <img
              height={20}
              width={20}
              src="/countries-icons/spain.svg"
              alt="Spanish flag"
            />
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectLanguage;
