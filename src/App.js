import Header from "./components/Header";
import Main from "./components/MainComponents/Main";
import ReserveTable from "./components/ReserveTableComponents/ReserveTable";
import Footer from "./components/Footer";
import { Route,Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
