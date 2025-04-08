import React from "react";
import styled from "styled-components/native";

const positionVariant = {
    left: "margin-left",
    right: "margin-right",
    top: "margin-top",
    bottom: "margin-bottom"
}

const sizeVariant = {
    small: 0,
    medium: 1,
    large: 2,
    xlarge: 3
}

const getVariant = (position, size, theme) => {
    return `${positionVariant[position]}: ${theme.space[sizeVariant[size]]}`
}

export const Spacer = styled.View`
    ${({ position, size, theme }) => getVariant(position, size, theme)}
`;
