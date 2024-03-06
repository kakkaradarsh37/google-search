import React, { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props) => {
    const [imageSearch, setImageSearch] = useState(false);

    return (
        <Context.Provider//all are wrapped in context.provider i.e. appContext
            value={{
                imageSearch,
                setImageSearch,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};
