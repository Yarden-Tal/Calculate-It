import styled from "styled-components";

const StyledKeyboard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  gap: 1rem;
  background-color: #292d36;
  padding: 1.5rem;
  border-radius: 5%;
`;

export default StyledKeyboard;
