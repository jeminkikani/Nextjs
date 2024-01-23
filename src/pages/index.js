import Link from "next/link";
import Header from "../../components/Header";
import React from "react";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

function index({ data }) {
  return (
    <>
      <Header />
      <h1 className="headerContact">This Is Home (☞ﾟヮﾟ)☞</h1>
      {data.slice(0, 5).map((curElement) => {
        return (
          <div key={curElement.id}>
            <h3>{curElement.id}</h3>
            <h3>{curElement.title}</h3>
          </div>
        );
      })}
    </>
  );
}

export default index;
