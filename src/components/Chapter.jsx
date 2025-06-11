// src/components/Chapter.js
import React from "react";
import Page from "./Page";

const Chapter = ({ name, pages }) => (
  <div className="chapter">
    <h1>{name}</h1>
    {pages.map((page, index) => (
      <Page key={index} title={page.title} images={page.images} />
    ))}
  </div>
);

export default Chapter;
