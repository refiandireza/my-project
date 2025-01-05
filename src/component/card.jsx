import { FaClone } from "react-icons/fa";

function Card({ name, username, background, number, icon, handleClick }) {
  return (
    <>
      <div className="mt-8 bg-slate-50 rounded-md shadow-[14px_13px_6px_1px_rgba(0,_0,_0,_0.1)] overflow-hidden">
        <figure className="flex flex-row justify-start items-center">
          {icon.map((item) => (
            <img
              src={item.logo}
              className={`p-2 ${item.class}`}
              alt={`${name} logo`}
              key={item.id}
            />
          ))}
        </figure>

        <div
          className={`px-2 pt-2 pb-4 ${background} flex flex-col items-start`}
        >
          {username !== null && (
            <h2 className=" text-lg text-white font-medium">{username}</h2>
          )}
          <p className=" text-lg text-white font-medium">
            {name === "ewallet" ? "No. HP:" : "No. Rek:"}
          </p>
          <div className="flex justify-between w-full items-center">
            <p className=" text-xl text-white font-medium">{number}</p>
            <button
              onClick={() => handleClick(number)}
              className="bg-slate-50 rounded-md px-2 py-1 flex items-center font-semibold text-slate-600"
            >
              Copy Text <FaClone className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
