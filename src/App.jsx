import Card from "./component/card";
import "./App.css";
import { FaWallet } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import data from "./data/data";

function App() {
  const handleClick = (data) => {
    navigator.clipboard.writeText(data);
    toast.success("Text Copied");
  };

  // console.log(data);
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <header className="mb-3 flex items-center ">
        <FaWallet className="text-teal-400 w-[36px] h-[36px] mr-2" />
        <h1 className="bg-gradient-to-r from-teal-400 to-sky-400 bg-clip-text text-transparent text-4xl font-semibold ">
          Laila&apos;s Wallet
        </h1>
      </header>
      {data.map((item) => (
        <Card key={item.id} {...item} handleClick={handleClick} />
      ))}
      {/* <Card handleClick={handleClick} /> */}
    </>
  );
}

export default App;
