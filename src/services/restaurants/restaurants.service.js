import { mocks } from "./mock";
import camelize from "camelize"

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location]
        if (!mock){
            reject("Location not found")
        }
        resolve(mock)
    })
    
}

export const restaurantsTransform = ({results = []}) => {
    const mappedResults = results.map((restaurant) => {
        return {
            ...restaurant,
            isOpen: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosed: restaurant.business_status === "CLOSED_TEMPORARILY",
            image: "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"
        }
    })
    return camelize(mappedResults)
} 