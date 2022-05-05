// Style
import StyledDisplayTopBar from "../../styles/StyledDisplayTopBar";
// Components
import Clock from "./Clock";
import Svgs from "./Svgs";

const DisplayTopBar = (): JSX.Element => {
  return (
    <StyledDisplayTopBar>
      <Clock />
      <Svgs />
    </StyledDisplayTopBar>
  );
};

export default DisplayTopBar;
