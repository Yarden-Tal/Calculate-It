import styled from "styled-components";

const StyledAlert = styled.div`
  @keyframes fade {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
  background-color: #cc4140;
  color: #fff;
  text-align: center;
  font-weight: 500;
  position: absolute;
  left: 55px;
  padding: 3px 20px;
  z-index: 1;
  opacity: 1;
  animation: fade 4s;
`;

export default StyledAlert;
