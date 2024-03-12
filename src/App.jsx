import CreateAccountForm from "./components/CreateAccountForm";
import CreateAcoountSvg from "./components/svgs/CreateAcoountSvg";
import "./styles/animation.css";
import { useState } from "react";

function App() {
  const [activeCard, setActiveCard] = useState(false);

  const handleFlip = () => {
    setActiveCard(!activeCard);
    console.log(activeCard);
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-t from-zinc-100 to-blue-300 flex items-center justify-center">
      <main className={` flex w-[900px] h-4/6 rounded-lg overflow-hidden`}>
        <div
          className={`bg-white shadow-2xl  h-full w-full flex relative transition-all duration-500 [transform-style:preserv-3d] 
          ${activeCard ? "[transform:rotateY(180deg)]" : ""}`}
        >
          <CreateAccountForm flip={handleFlip} />
          <aside className="w-1/2">
            <CreateAcoountSvg />
          </aside>
        </div>
      </main>
    </div>
  );
}

export default App;
