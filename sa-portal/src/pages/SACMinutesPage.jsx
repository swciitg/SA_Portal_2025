import React, { useState, useEffect } from "react";
import MinuteCard from "../Components/MinuteCard";
import BannerTop from "../Components/BannerTop";
import sendApiRequest from "../services/apiService";
import ROUTES from "../constants/apiRoutes";
import getStrapiMediaUrl from "../utils/strApiMediaUrl";

const SMALL_SCREEN_CARDS = 20;
const LARGE_SCREEN_CARDS = 40;

const SACMinutesPage = () => {
  const [page, setPage] = useState(1);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const [minutes, setMinutes] = useState([]);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const CARDS_PER_PAGE = isLargeScreen
    ? LARGE_SCREEN_CARDS
    : SMALL_SCREEN_CARDS;
  const totalPages = Math.ceil(minutes.length / CARDS_PER_PAGE);

  // Calculate prev and next pages if they exist
  const prevPage = page > 1 ? page - 1 : null;
  const nextPage = page < totalPages ? page + 1 : null;

  const startIdx = (page - 1) * CARDS_PER_PAGE;
  const pageCards = minutes.slice(startIdx, startIdx + CARDS_PER_PAGE);

  // Split for large screens
  const leftColumnCards = isLargeScreen
    ? pageCards.slice(0, SMALL_SCREEN_CARDS)
    : pageCards;
  const rightColumnCards = isLargeScreen
    ? pageCards.slice(SMALL_SCREEN_CARDS)
    : [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const minutesRes = await sendApiRequest(ROUTES.SAC_MINUTES);

        console.log({ minutesRes });

        setMinutes(minutesRes?.data);
      } catch (error) {
        console.error("Error in fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BannerTop
        heading={"SAC Minutes"}
        route={["Student Affairs Council", "SAC Minutes"]}
      />
      <div className="min-h-screen bg-gray-50 px-6 md:px-16 py-6">
        {/* Header and Pagination */}
        <div className="flex justify-between items-center mb-6 px-3">
          <h1 className="text-2xl font-semibold">SAC Minutes</h1>

          {/* Simple Pagination */}
          <div className="flex items-center space-x-1 select-none">
            {/* Previous Button */}
            <button
              className="px-3 py-1 bg-gray-200 disabled:opacity-50"
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              aria-label="Previous page"
            >
              &lt;
            </button>

            <button
              className="border border-gray-300 text-gray-500 px-3 py-1 cursor-default"
              disabled
            >
              ...
            </button>

            <button
              className={`px-3 py-1 ${
                page > 1
                  ? "border border-gray-300 text-gray-500 hover:bg-gray-300"
                  : "customCOlor text-white cursor-default"
              }`}
              onClick={() => setPage(Math.max(page - 1, 1))}
            >
              {Math.max(page - 1, 1)}
            </button>

            <button
              // className="px-3 py-1 customCOlor text-white cursor-default"
              className={`px-3 py-1 ${
                page > 1 && page < totalPages
                  ? "customCOlor text-white cursor-default"
                  : "border border-gray-300 text-gray-500 hover:bg-gray-300"
              }`}
              onClick={() =>
                setPage(Math.max(Math.min(page, totalPages - 1), 2))
              }
              aria-current="page"
            >
              {Math.max(page, 2)}
            </button>

            <button
              className={`px-3 py-1 ${
                page < totalPages
                  ? "border border-gray-300 text-gray-500 hover:bg-gray-300"
                  : "customCOlor text-white cursor-default"
              }`}
              onClick={() => setPage(Math.min(page + 1, totalPages))}
            >
              {Math.max(page + 1, 3)}
            </button>

            <button
              className="border border-gray-300 text-gray-500 px-3 py-1 cursor-default"
              disabled
            >
              ...
            </button>

            <button
              className="px-3 py-1 bg-gray-200 disabled:opacity-50"
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              aria-label="Next page"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Cards Layout */}
        {isLargeScreen ? (
          <div className="flex gap-4">
            {/* Left column */}
            <div className="flex flex-col w-1/2 space-y-4">
              {leftColumnCards.map((item, idx) => (
                <MinuteCard
                  key={startIdx + idx}
                  idx={startIdx + idx + 1}
                  title={item.title}
                  pdfUrl={getStrapiMediaUrl(item.pdf_File?.url)}
                />
              ))}
            </div>

            {/* Right column */}
            <div className="flex flex-col w-1/2 space-y-4">
              {rightColumnCards.map((item, idx) => (
                <MinuteCard
                  key={startIdx + SMALL_SCREEN_CARDS + idx}
                  idx={startIdx + SMALL_SCREEN_CARDS + idx + 1}
                  title={item.title}
                  pdfUrl={getStrapiMediaUrl(item.pdf_File?.url)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col space-y-4">
            {pageCards.map((item, idx) => (
              <MinuteCard
                key={startIdx + idx}
                idx={startIdx + idx + 1}
                title={item.title}
                pdfUrl={getStrapiMediaUrl(item.pdf_File?.url)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SACMinutesPage;
