import dana from "/dana.webp";
import shopeepay from "/shopeepay.png";
import gopay from "/gopay.png";
import bni from "/bni.png";
import jenius from "/jenius.png";
import mandiri from "/mandiri.png";
import smbc from "/smbc.png";

const data = [
  {
    id: 1,
    name: "bni",
    number: "1182827795",
    username: "REFIANI LAILA MUHARAMI",
    background: "bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500",
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
    username: "REFIANI LAILA MUHARAMI",
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
    username: "REFIANI LAILA MUHARAMI",
    background: "bg-gradient-to-r from-sky-500 via-teal-500 to-lime-500",
    icon: [
      {
        id: 13,
        logo: smbc,
        class: "w-[92px] h-[38px]",
      },
      {
        id: 14,
        logo: jenius,
        class: "w-[96px] h-[48px]",
      },
    ],
  },
  {
    id: 4,
    name: "ewallet",
    number: "089636649116",
    username: null,
    background: "bg-gradient-to-r from-lime-500 via-sky-500 to-teal-500",
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
