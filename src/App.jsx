import CreateAccountForm from "./components/CreateAccountForm";
import Login from "./components/Login";
import CreateAcoountSvg from "./components/svgs/CreateAcoountSvg";
import LoginSvg from "./components/svgs/LoginSvg";
import { useState } from "react";

function App() {
  const [activeCard, setActiveCard] = useState(false);

  const handleFlip = () => {
    setActiveCard(!activeCard);
  };

  return (
    <div className="antialiased h-screen w-screen bg-gradient-to-t from-zinc-100 to-blue-300 flex items-center justify-center ">
      <div
        className={`flex w-[900px] h-4/6 rounded-lg overflow-hidden [perspective:1000px]`}
      >
        <main
          className={` relative w-full h-full [transformStyle:preserve-3d] duration-700 ease-in-out 
          ${activeCard ? "[transform:rotateY(180deg)]" : ""}`}
        >
          <div
            className={`bg-white shadow-2xl h-full w-full flex absolute [backface-visibilit:hidden] `}
          >
            <CreateAccountForm flip={handleFlip} />
            <aside className="w-1/2">
              <CreateAcoountSvg />
            </aside>
          </div>
          <div
            className={`bg-white shadow-2xl h-full w-full flex [backface-visibilit:hidden]  
            ${activeCard ? "[transform:rotateY(180deg)]" : ""}`}
          >
            <aside className="w-1/2">
              <LoginSvg />
            </aside>
            <Login flip={handleFlip} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
