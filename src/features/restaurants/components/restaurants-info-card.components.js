import * as React from "react";
import { Card } from "react-native-paper";
import {
  Star,
  Open,
  Row,
  StarRow,
  RestaurantCard,
  RestaurantCardCover,
  RestaurantIcon,
} from "./restaurant-info-card.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/component.spacer";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

export const RestaurantInfoCard = ({ restaurant }) => {
  const ratingArray = Array.from(new Array(Math.floor(restaurant.rating)));
  return (
    <RestaurantCard>
      <RestaurantCardCover source={{ url: restaurant.image }} /> 
      <Card.Content>
        <Text variant="label">{restaurant.name}</Text>
        <Row>
          <StarRow>
            {ratingArray.map((value) => (
              <Star xml={star}></Star>
            ))}
          </StarRow>

          {restaurant.isOpenNow ? (
            <Open xml={open}></Open>
          ) : (
            <Text style={{ color: "red" }}>CLOSED TEMPORARILY</Text>
          )}
        </Row>
        <Row>
          <Text variant="caption">{restaurant.address}</Text>
          <Spacer position="right" size="large">
            <RestaurantIcon source={{ url: restaurant.icon }}></RestaurantIcon>
          </Spacer>
        </Row>
      </Card.Content>
    </RestaurantCard>
  );
};
