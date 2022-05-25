import styled from "styled-components";

export const Container = styled.div<{
  size: number,
  x: number,
  y: number,
  sidePos: number
}>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  background-image: url('src/assets/char.png');
  background-position: 0px ${props => props.sidePos}px;
`;