import React, { createContext, useState, useContext } from "react";

// Create a context
export const CategoryContext = createContext();

// Create a context provider
export const CategoryProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState("");

    return (
        <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};

// Custom hook to use the context
export const useCategory = () => useContext(CategoryContext);
