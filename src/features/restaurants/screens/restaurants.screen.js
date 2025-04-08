import { Searchbar } from "react-native-paper";
import React, { useContext } from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { FlatList, View } from "react-native";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurants-info-card.components";
import styled from "styled-components/native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
const SearchBarView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantInfoCardView = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[1]};
`;

const LoadingView = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const SearchBar = styled(Searchbar)`
  border-radius: ${(props) => props.theme.sizes[0]};
  shadow-color: "#000";
  shadow-offset: {
    width: 20px;
    height: 10px;
  }
  shadow-opacity: 0.3px;
  shadow-radius: ${(props) => props.theme.sizes[1]};
  elevation: 5px;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

let restaurant = [
  {
    name: "Osmows",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address: "553 radiant private",
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: false,
  },
  {
    name: "Osmows",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address: "553 radiant private",
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: false,
  },
  {
    name: "Osmows",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address: "553 radiant private",
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: false,
  },
  {
    name: "Osmows",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address: "553 radiant private",
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: false,
  },
  {
    name: "Osmows",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address: "553 radiant private",
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: false,
  },
];

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <SearchBarView>
        <SearchBar placeholder="Search" />
      </SearchBarView>
      <RestaurantInfoCardView>
        <LoadingView>
          {isLoading && (
            <ActivityIndicator
              size={"large"}
              animating={true}
              color={MD2Colors.black800}
            />
          )}
        </LoadingView>
        {!isLoading && (
          <RestaurantList
            data={restaurants}
            renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
            keyExtractor={(item) => item.name}
            
          />
        )}
      </RestaurantInfoCardView>
    </SafeArea>
  );
};
