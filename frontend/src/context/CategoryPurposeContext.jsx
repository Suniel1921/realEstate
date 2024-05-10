import React, { createContext, useContext, useState } from 'react';

// Create a context
const CategoryPurposeContext = createContext();

// Create context provider
export const CategoryPurposeProvider = ({ children }) => {
    const [selectedCategoryPurpose, setSelectedCategoryPurpose] = useState("");

    return (
        <CategoryPurposeContext.Provider value={{ selectedCategoryPurpose, setSelectedCategoryPurpose }}>
            {children}
        </CategoryPurposeContext.Provider>
    )
}

// Custom hook to use the context 
export const useCategoryPurpose = () => useContext(CategoryPurposeContext);
