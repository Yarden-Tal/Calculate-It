// Components
import Calculator from "./components/calculator/Calculator";
import TopMenu from "./components/top-menu/TopMenu";

const App = (): JSX.Element => {
  return (
    <div className="body-wrapper">
      <TopMenu />
      <Calculator />
    </div>
  );
};

export default App;
