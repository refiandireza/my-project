import dana from "/dana.webp";
import shopeepay from "/shopeepay.png";
import gopay from "/gopay.png";
import bni from "/bni.png";
import jenius from "/jenius2.png";
import mandiri from "/mandiri.png";
import smbc from "/smbc.png";

const data = [
  {
    id: 1,
    name: "bni",
    number: "1182827795",
    username: "REFIANI LAILA MUHARRAMI",
    background: "bg-gradient-to-r from-indigo-400 to-cyan-400",
    icon: [
      {
        id: 11,
        logo: bni,
        class: "w-[82px] h-[46px]",
      },
    ],
  },
  {
    id: 2,
    name: "mandiri",
    number: "1090019951953",
    username: "REFIANI LAILA MUHARRAMI",
    background: "bg-gradient-to-r from-amber-500 via-yellow-500 to-lime-500",
    icon: [
      {
        id: 12,
        logo: mandiri,
        class: "w-[96px] h-[48px]",
      },
    ],
  },
  {
    id: 3,
    name: "jenius",
    number: "90320230557",
    username: "REFIANI LAILA MUHARRAMI",
    background: "bg-gradient-to-r from-emerald-400 to-cyan-400",
    icon: [
      {
        id: 13,
        logo: smbc,
        class: "w-[92px] h-[38px]",
      },
      {
        id: 14,
        logo: jenius,
        class: "pt-3 pb-1 w-[96px] h-[42px]",
      },
    ],
  },
  {
    id: 4,
    name: "ewallet",
    number: "089636649116",
    username: null,
    background: "bg-gradient-to-r from-amber-500 to-pink-500",
    icon: [
      {
        id: 15,
        logo: dana,
        class: "w-[82px] h-[36px]",
      },
      {
        id: 16,
        logo: shopeepay,
        class: "w-[72px] h-[46px]",
      },
      {
        id: 17,
        logo: gopay,
        class: "[92px] h-[38px]",
      },
    ],
  },
];

export default data;
