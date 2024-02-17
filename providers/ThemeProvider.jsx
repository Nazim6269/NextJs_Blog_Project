"use client";

import { useThemeContext } from "@/hooks/useThemeContext";
import { useEffect, useState } from "react";

const ThemeProvider = ({ children }) => {
  const { theme } = useThemeContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProvider;
