import dana from "/dana.webp";
import shopeepay from "/shopeepay.png";
import gopay from "/gopay.png";
import { FaClone } from "react-icons/fa";
import bni from "/bni.png";
import jenius from "/jenius.png";
import mandiri from "/mandiri.png";
import smbc from "/smbc.png";

function Card({ handleClick }) {
  return (
    <>
      <div className="first:mt-0 bg-slate-50 rounded-md shadow-[14px_13px_6px_1px_rgba(0,_0,_0,_0.1)] overflow-hidden">
        <figure className="flex flex-row justify-start items-center">
          <img src={bni} className="p-2 w-[82px] h-[46px]" alt="React logo" />
        </figure>

        <div className="px-2 pt-2 pb-4 bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 flex  flex-col items-start">
          <h2 className=" text-lg text-white font-medium">
            REFIANI LAILA MUHARRAMI
          </h2>
          <p className=" text-lg text-white font-medium">No. Rek:</p>
          <div className="flex justify-between w-full items-center">
            <p className=" text-xl text-white font-medium">1182827795</p>
            <button
              onClick={() => handleClick("1182827795")}
              className="bg-slate-50 rounded-md px-2 py-1 flex items-center font-semibold text-slate-600"
            >
              Copy Text <FaClone className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-slate-50 rounded-md shadow-[14px_13px_6px_1px_rgba(0,_0,_0,_0.1)] overflow-hidden">
        <figure className="flex flex-row justify-start items-center">
          <img
            src={mandiri}
            className="p-2 w-[96px] h-[48px]"
            alt="React logo"
          />
        </figure>

        <div className="px-2 pt-2 pb-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-lime-500 flex  flex-col items-start">
          <h2 className=" text-lg text-white font-medium">
            REFIANI LAILA MUHARRAMI
          </h2>
          <p className=" text-lg text-white font-medium">No. Rek:</p>
          <div className="flex justify-between w-full items-center">
            <p className=" text-xl text-white font-medium">1090019951953</p>
            <button className="bg-slate-50 rounded-md px-2 py-1 flex items-center font-semibold text-slate-600">
              Copy Text <FaClone className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-slate-50 rounded-md shadow-[14px_13px_6px_1px_rgba(0,_0,_0,_0.1)] overflow-hidden">
        <figure className="flex flex-row justify-start items-center">
          <img src={smbc} className="p-2 w-[92px] h-[38px]" alt="React logo" />
          <img
            src={jenius}
            className="p-2 w-[96px] h-[48px]"
            alt="React logo"
          />
        </figure>

        <div className="px-2 pt-2 pb-4 bg-gradient-to-r from-sky-500 via-teal-500 to-lime-500 flex  flex-col items-start">
          <h2 className=" text-lg text-white font-medium">
            REFIANI LAILA MUHARRAMI
          </h2>
          <p className=" text-lg text-white font-medium">No. Rek:</p>
          <div className="flex justify-between w-full items-center">
            <p className=" text-xl text-white font-medium">90320230557</p>
            <button className="bg-slate-50 rounded-md px-2 py-1 flex items-center font-semibold text-slate-600">
              Copy Text <FaClone className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-slate-50 rounded-md shadow-[14px_13px_6px_1px_rgba(0,_0,_0,_0.1)] overflow-hidden">
        <figure className="flex flex-row justify-start items-center">
          <img src={dana} className="p-2 w-[82px] h-[36px]" alt="React logo" />
          <img
            src={shopeepay}
            className="p-2 w-[72px] h-[46px]"
            alt="React logo"
          />
          <img src={gopay} className="p-2 w-[92px] h-[38px]" alt="React logo" />
        </figure>

        <div className="px-2 pt-2 pb-4 bg-gradient-to-r from-lime-500 via-sky-500 to-teal-500 flex  flex-col items-start">
          <h2 className=" text-lg text-white font-medium">No. HP:</h2>
          <div className="flex justify-between w-full items-center">
            <p className=" text-xl text-white font-medium">089636649116</p>
            <button className="bg-slate-50 rounded-md px-2 py-1 flex items-center font-semibold text-slate-600">
              Copy Text <FaClone className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
