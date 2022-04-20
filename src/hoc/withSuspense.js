import React from "react";


export const withSuspense = (Component) => {
    return(props) => {
        return<React.Suspense fallback={'Загрузка'}>
            <Component {...props}/>
        </React.Suspense>
    }

}