import { Topbar } from "./components/top-bar";

function App() {
  return (
    
    // Center all div element
    <div className="min-h-screen flex justify-center p-5 items-center">
      <Topbar />
      <div className="space-y-5 text-center gap-5">
        <h1 className="lg:text-4xl text-2xl  font-bold">
          Animated Hamburger Menu 🐈
        </h1>
      </div>
    </div>
  );
}

export default App;
