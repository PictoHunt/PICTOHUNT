import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";
import AnimationError from "./animations/Error";
import AnimationLoading from "./animations/Loading";

const alamyUrl = `/api/images/api/v2/search`;

const parseXml = (xmlText) => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "text/xml");
  const imageNodes = xmlDoc.getElementsByTagName("I");

  const images = [];
  for (let i = 0; i < imageNodes.length; i++) {
    const node = imageNodes[i];
    const id = node.getAttribute("ID");
    const ar = node.getAttribute("AR");
    const altText = node.getAttribute("CAPTION")
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "") + "-";
    const imageUrl = `https://c7.alamy.com/comp/${ar}/${altText}${ar}.jpg`;
    images.push({ id, imageUrl, altText });
  }
  return images;
};


const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const [activeImage, setActiveImage] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); // Track the current page number

  const response = useQuery(["images", searchTerm, pageNumber], async () => {
    try {
      const result = await axios.get(alamyUrl, {
        params: {
          qt: searchTerm,
          pn: pageNumber,
        },
        timeout: 5000,
      });

      const images = parseXml(result.data);
      return images;
    } catch (error) {
      throw new Error("Error fetching data from API.");
    }
  });

  const handleShare = (imageUrl) => {
    navigator.clipboard.writeText(imageUrl).then(() => {
    }).catch((error) => {
      console.error("Error copying to clipboard:", error);
    });
  };

  const handleDownload = (e, imageUrl, altText) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "https://www.alamy.com/aggregator-api/download?url=" + imageUrl;
    link.download = `${altText}.jpg`;
    link.click();
  };

  if (response.isLoading) {
    return (
      <section className="image-container no-results">
        <AnimationLoading />
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className="image-container no-results">
        <AnimationError />
      </section>
    );
  }

  const images = response.data;

  // Calculate the range of images to display on the current page
  const startIndex = (pageNumber - 1) * 8;
  const endIndex = Math.min(startIndex + 8, images.length);
  const imagesToDisplay = images.slice(startIndex, endIndex);

  return (
    <section className="image-container">
      <div className="image-grid">
        {imagesToDisplay.map((item) => (
          <div
            key={item.id}
            className={`image-card ${activeImage === item.id ? "active" : ""}`}
            onClick={() => setActiveImage(item.id)}
          >
            <img src={item.imageUrl} alt={item.altText} className="img" />
            {activeImage === item.id && (
              <div className="image-actions">
                <button
                  className="image-action-button share-button"
                  onClick={() => handleShare(item.imageUrl)}
                >
                  <i class="bi bi-clipboard"></i>
                </button>
                <a
                  href={item.imageUrl}
                  className="image-action-button download-button"
                  onClick={(e) => handleDownload(e, item.imageUrl, item.altText)}
                >
                  <i class="bi bi-download"></i>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;