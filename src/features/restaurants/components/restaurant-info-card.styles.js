import styled from "styled-components/native";
import { Image } from "react-native";
import { SvgXml } from "react-native-svg";
import { Card } from "react-native-paper";

export const Star = styled(SvgXml)`
  width: ${(props) => props.theme.sizes[3]};
  height: ${(props) => props.theme.sizes[3]};
`;

export const Open = styled(SvgXml)`
  width: ${(props) => props.theme.sizes[4]};
  height: ${(props) => props.theme.sizes[4]};
`;

export const Row = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[0]};
  padding-bottom: ${(props) => props.theme.space[0]};
  justify-content: space-between;
  align-items: center;
`;

export const StarRow = styled.View`
  flex-direction: row;

`;

export const RestaurantCard = styled(Card)`
  border-radius: ${(props) => props.theme.sizes[0]};
  background-color: white;
  margin-bottom: 24px;
`;
export const RestaurantCardCover = styled(Card.Cover)`
  border-radius: ${(props) => props.theme.sizes[0]};
  background-color: transparent;
`;

export const RestaurantIcon = styled(Image)`
  width: ${(props) => props.theme.sizes[3]};
  height: ${(props) => props.theme.sizes[3]};
 
`;