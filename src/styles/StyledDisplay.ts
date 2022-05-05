import styled from "styled-components";

export const StyledIndicatorList = styled.div`
  color: #fcfcfc;
  font-size: 0.75em;
  line-height: 1;
  min-height: 1em;
  display: flex;
  justify-content: flex-end;
`;

export const StyledExpression = styled.div`
  font-size: 2em;
  text-align: right;
`;

export const StyledScreen = styled.div`
  color: #fcfcfc;
  font-size: 3.4em;
  min-height: 1.4em;
  font-weight: 600;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
`;

const StyledDisplay = styled.div`
  background-color: #22252d;
  padding: 0.5em 1em;
  border-radius: 20px;
`;

export default StyledDisplay;
