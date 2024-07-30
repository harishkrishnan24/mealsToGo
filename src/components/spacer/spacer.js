import styled from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  bottom: "marginBottom",
  right: "marginRight",
};

const getVariant = (position, size, theme) =>
  `${positionVariant[position]}: ${theme.space[sizeVariant[size]]}`;

const Spacer = styled.View`
  ${({ position, size, theme }) => getVariant(position, size, theme)}
`;

export default Spacer;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
