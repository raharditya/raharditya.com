import React from "react";
import Project from "../Project";
import GleglegHeader from "./GleglegHeader";

export default function Glegleg() {
  const textColor = "#4D4833";
  const bgColor = "#E1D1CC";
  const titleColor = "#6C553D";
  const indexColor = "#DDC7C0";
  const containerColor = "#CEBEB9";

  const link = "https://github.com";
  const github = "https://github.com";
  const stacks = ["React", "NodeJS"];
  const year = "December 2020";

  return (
    <div>
      <Project
        index="02"
        title="gleGleg"
        indexColor={indexColor}
        titleColor={titleColor}
        header={<GleglegHeader />}
        bgColor={bgColor}
        containerColor={containerColor}
        link={link}
        github={github}
        stacks={stacks}
        year={year}
      >
        <h3
          className="milliard-bold text-2xl mt-6 mb-1"
          style={{ color: titleColor }}
        >
          Concept
        </h3>
        <p className="mb-4 " style={{ color: textColor, fontSize: "0.9rem" }}>
          This project is a web-app for pre-ordering system of a beverages
          business called gleGleg. The purpose of this web-app is to view the
          business’ catalogue as well as to pre-order the products.
        </p>
        <p className="mb-4 " style={{ color: textColor, fontSize: "0.9rem" }}>
          Buyers can add products into the cart and add more quantity of the
          products in the cart. When they’re ready to checkout, they will be
          asked to enter their information such as name, address, and phone
          number. Once they fill this information, it will be saved so future
          orders will be much faster and easier.
        </p>

        <img
          src="/assets/projects/glegleg/mid.png"
          alt=""
          className="my-8 mx-auto"
        />

        <p className="mb-4 " style={{ color: textColor, fontSize: "0.9rem" }}>
          When it’s finished, they will be taken to Whatsapp chat with the
          business’ contact person with the order details as well as the
          transaction id ready to be sent. The buyer’s order will also be saved
          so that they can repeat their order in a single touch.
        </p>

        <h3
          className="milliard-bold text-2xl mt-6 mb-1"
          style={{ color: titleColor }}
        >
          Implementation
        </h3>
        <p className="mb-4 " style={{ color: textColor, fontSize: "0.9rem" }}>
          This project was initially designed in Figma and later was made using
          React. I wrote the entire layout from scratch and used TailwindCSS to
          help with the styling. The cart and order history, as well as user’s
          shipping information are all saved to the device’s local storage using
          a custom hook. This is to make it easy for the buyer to repeat their
          previous order.
        </p>
      </Project>
    </div>
  );
}
