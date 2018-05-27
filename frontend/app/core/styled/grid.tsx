import styled from 'styled-components';

interface IBox {
  padding?: string;
  margin?: string;
}

export const Box = styled('div')<IBox>`
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

interface ICenterBoxProps {
  height?: string;
  width?: string;
}

export const CenterBox = styled('div')<ICenterBoxProps>`
  align-content: center;
  align-items: center;
  display: flex;
  height: ${(props) => props.height};
  justify-content: center;
  width: ${(props) => props.width};
`;

export const FlexBox = styled('div')`
  display: flex;
`;

interface IFlexItem {
  grow?: string;
  shrink?: string;
  basis?: string;
}

export const FlexItem = styled(Box)<IBox & IFlexItem>`
  flex-grow: ${(props) => (props.grow !== undefined ? props.grow : '0')};
  flex-shrink: ${(props) => (props.shrink !== undefined ? props.shrink : '1')};
  flex-basis: ${(props) => (props.basis !== undefined ? props.basis : 'auto')};
`;
