// src/components/MetaTags.jsx
import React, { useEffect } from "react";

const MetaTags = () => {
  useEffect(() => {
    document.title = "The Corvette Journal - Chevrolet Corvette Sports Car Images";

    const metaDescription = document.createElement("meta");
    metaDescription.name =
      "TheCorvetteJournal.Com by Optical Automation, LLC, written by James L. Avakian";
    metaDescription.content =
      "This is a Chevrolet Corvette sports car image and information website for pre-sales, owners, and post-sale enthusiasts.";
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  return null;
};

export default MetaTags;
