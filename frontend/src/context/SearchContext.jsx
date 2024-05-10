// SearchContext.jsx
import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
            {children}
        </SearchContext.Provider>
    )
}

const useSearchGlobally = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error("useSearchGlobally must be used within a SearchProvider");
    }
    return context; // Return the context
}

export { SearchContext, SearchProvider, useSearchGlobally };
