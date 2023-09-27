import Header from "./Header/Header";
import NavbarSider from "./SiderNavBar/SiderNavBar";
import Content from "./Content/Content"

function App() {
  return (
    <div className="bg-custom-aliceblue">
      <div className="flex flex-row gap-9">
      <NavbarSider />
      <div className="flex flex-col gap-9 w-full">
      <Header />
      <Content />
      </div>
      </div>
      
    </div>
  );
}

export default App;
