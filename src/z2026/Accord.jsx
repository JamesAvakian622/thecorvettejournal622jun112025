import React from "react";
import "./Accord.css";
import Accordion from "./Accordion";
  // the functioj that gets executed

export default function Accord() {
  const accordions = [
    {
      title: "Accordion 1",
      links: [
        { label: "Link 1", url: "https://example.com/1" },
        { label: "Link 2", url: "https://example.com/2" },
        { label: "Link 3", url: "https://example.com/3" },
        { label: "Link 4", url: "https://example.com/4" },
        { label: "Link 5", url: "https://example.com/5" },
      ],
    },
    {
      title: "Accordion 2",
      links: [
        { label: "Link A", url: "https://example.com/A" },
        { label: "Link B", url: "https://example.com/B" },
        { label: "Link C", url: "https://example.com/C" },
        { label: "Link D", url: "https://example.com/D" },
        { label: "Link E", url: "https://example.com/E" },
      ],
    },
    {
      title: "Accordion 3",
      links: [
        { label: "Google", url: "https://www.google.com" },
        { label: "Facebook", url: "https://www.facebook.com" },
        { label: "Twitter", url: "https://www.twitter.com" },
        { label: "GitHub", url: "https://www.github.com" },
        { label: "Stack Overflow", url: "https://stackoverflow.com" },
      ],
    },
    {
      title: "Accordion 4",
      links: [
        { label: "Link X", url: "https://example.com/X" },
        { label: "Link Y", url: "https://example.com/Y" },
        { label: "Link Z", url: "https://example.com/Z" },
        { label: "Link M", url: "https://example.com/M" },
        { label: "Link N", url: "https://example.com/N" },
      ],
    },
    {
      title: "Accordion 5",
      links: [
        { label: "My Site", url: "https://mysite.com" },
        { label: "Portfolio", url: "https://portfolio.com" },
        { label: "Docs", url: "https://docs.com" },
        { label: "Blog", url: "https://blog.com" },
        { label: "Contact", url: "https://contact.com" },
      ],
    },
  ];

  return (
    <div style={styles.container}>
      <h1>Responsive Accordions</h1>
      {accordions.map((accordion, index) => (
        <Accordion key={index} title={accordion.title} links={accordion.links} />
      ))}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
  },
};


