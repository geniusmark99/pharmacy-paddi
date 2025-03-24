import React, { createContext, useState, useEffect, ReactNode } from 'react';


interface SearchProps {
    activeWord: number;
}

// const GeneralContext = createContext<GradientContextType | undefined>(undefined);


export const SearchContext: React.FC<SearchProps> = ({ }) => {
    return (
        <div>SearchContext</div>
    )
}

export default SearchContext;