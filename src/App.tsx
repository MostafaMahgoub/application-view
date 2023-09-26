import Header from "./Header/Header";
import NavbarSider from "./SiderNavBar/SiderNavBar";

function App() {
  return (
    <div className="bg-custom-aliceblue">
      <div className="flex flex-row gap-9">
      <NavbarSider />
      <Header />
      </div>
    </div>
  );
}

export default App;
