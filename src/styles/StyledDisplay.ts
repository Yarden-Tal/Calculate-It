import styled from "styled-components";

export const StyledIndicatorList = styled.div`
  color: #fcfcfc;
  font-size: 0.75em;
  line-height: 1;
  text-align: right;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25em;
  min-height: 1em;
`;

export const StyledExpression = styled.span`
  margin-left: auto;
`;

export const StyledScreen = styled.div`
  color: #fcfcfc;
  font-size: 2.5em;
  min-height: 1.4em;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
`;

const StyledDisplay = styled.div`
  background-color: #22252d;
  padding: 1.5em 1em;
`;

export default StyledDisplay;
