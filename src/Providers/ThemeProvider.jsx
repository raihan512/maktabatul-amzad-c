import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [language, setLanguage] = useState(null);

  useEffect(() => {
    const storedLanguage = JSON.parse(localStorage.getItem("ma-language"));
    if (storedLanguage) {
      setLanguage(storedLanguage.language);
    } else {
      setLanguage(2);
    }
  }, [language]);

  const handleLanguage = (languageIndex) => {
    setLanguage(languageIndex);
    const savedLanguage = localStorage.getItem("ma-language");
    if (savedLanguage) {
      const getLanguage = JSON.parse(savedLanguage);
      getLanguage.language = languageIndex;
      localStorage.setItem("ma-language", JSON.stringify(getLanguage));
    } else {
      localStorage.setItem(
        "ma-language",
        JSON.stringify({ language: languageIndex })
      );
    }
  };

  const themeInfo = {
    language,
    setLanguage,
    handleLanguage,
  };
  return (
    <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
