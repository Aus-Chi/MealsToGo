import React, { useState, createContext, useEffect, useMemo } from "react";
import { restaurantsRequest, restaurantsTransform } from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const retrieveRestaurants = () => {
        setIsLoading(true);
        setTimeout(() => {
            restaurantsRequest().then(restaurantsTransform).then((results) => {
                setRestaurants(results);
                setIsLoading(false);
            }).catch(error => {
                setError(error)
                setIsLoading(false);
            })
        }, 1500)
    }

    useEffect(() => {
        retrieveRestaurants();
    }, [])

    return (
        <RestaurantsContext.Provider value={{restaurants, isLoading, error}}>
            {children}
        </RestaurantsContext.Provider>
    )
}