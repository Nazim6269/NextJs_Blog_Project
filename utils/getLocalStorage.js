export const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    console.log(value, "1");
    return value || "light";
  }
};
