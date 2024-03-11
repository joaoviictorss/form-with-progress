import CreateContForm from "./components/CreateAccountForm";
import CreateAcoountSvg from "./components/svgs/CreateAcoountSvg";


function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-t from-zinc-100 to-blue-300 flex items-center justify-center">
      <main className="bg-white flex w-[900px] h-4/6 rounded-lg shadow-2xl overflow-hidden">
        
          <CreateContForm />
          

        <aside className="w-1/2">
          <CreateAcoountSvg />
        </aside>
      </main>
    </div>
  );
}

export default App;
