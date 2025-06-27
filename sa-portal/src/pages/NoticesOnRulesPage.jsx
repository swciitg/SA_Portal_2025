import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import sendApiRequest from "../services/apiService";
import ROUTES from "../constants/apiRoutes";
import BannerTop from "../Components/BannerTop";
import getStrapiMediaUrl from "../utils/strApiMediaUrl";

function FormsPage() {
  const [currPage, setCurrPage] = useState(1);
  const limitOnPage = 5; // limit per page

  const [notices, setNotices] = useState([]);

  // paginated forms to render
  const paginatedNotices = notices.slice(
    (currPage - 1) * limitOnPage,
    currPage * limitOnPage
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const noticesRes = await sendApiRequest(ROUTES.NOTICES_ON_RULES);

        console.log({ noticesRes });

        setNotices(noticesRes?.data);
      } catch (error) {
        console.error("Error in fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BannerTop heading={"Notices on Rules"} route={["Rules", "Notices"]} />
      <div className="px-4 py-4 sm:px-10 sm:py-8 md:px-28 md:py-20">
        {/* Heading and Pagination menu */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Notices On Rules
          </h2>
          <PaginationMenu
            notices={notices}
            limitOnPage={limitOnPage}
            currPage={currPage}
            setCurrPage={setCurrPage}
          />
        </div>

        {/* Notices */}
        <div className="flex flex-col mt-4 sm:mt-6 md:mt-10 space-y-1 text-neutral-900">
          {paginatedNotices.map((notice, idx) => (
            <NoticeItem
              key={idx}
              date={notice.date}
              title={notice.title}
              pdfUrl={getStrapiMediaUrl(notice.pdf_File?.url)}
              wordUrl={getStrapiMediaUrl(notice.word_File?.url)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default FormsPage;

function PaginationMenu({ notices, limitOnPage, currPage, setCurrPage }) {
  const maxPage = Math.ceil(notices.length / limitOnPage);

  // Calculate which 3 page numbers to show
  const visiblePages = useMemo(() => {
    if (maxPage <= 3) return Array.from({ length: maxPage }, (_, i) => i + 1);
    if (currPage === 1) return [1, 2, 3];
    if (currPage === maxPage) return [maxPage - 2, maxPage - 1, maxPage];
    return [currPage - 1, currPage, currPage + 1];
  }, [currPage, maxPage]);

  const goToPage = (page) => {
    if (page >= 1 && page <= maxPage) setCurrPage(page);
  };

  return (
    <div className="flex space-x-0.5 sm:space-x-1 py-2 w-fit">
      {/* Previous Page */}
      <div
        className="size-8 sm:size-10 flex items-center justify-center bg-neutral-100 hover:bg-blue-700 hover:text-white cursor-pointer"
        onClick={() => goToPage(currPage - 1)}
      >
        <span className="h-full text-2xl mb-0.5 sm:mt-1">‹</span>
      </div>

      {/* First Page */}
      <div
        className="size-8 sm:size-10 flex items-end pb-1 justify-center border-2 border-neutral-100 hover:border-none hover:bg-blue-700 hover:text-white text-neutral-500 cursor-pointer"
        onClick={() => goToPage(1)}
      >
        <span className="text-xl">...</span>
      </div>

      {/* Page Numbers */}
      {visiblePages.map((page) => (
        <div
          key={page}
          onClick={() => goToPage(page)}
          className={`size-8 sm:size-10 flex items-center justify-center hover:border-none hover:bg-blue-700 hover:text-white cursor-pointer ${
            page === currPage
              ? "border-none bg-blue-700 text-white font-medium"
              : "border-2 border-neutral-100 text-neutral-500"
          }`}
        >
          <span>{page}</span>
        </div>
      ))}

      {/* Last Page */}
      <div
        className="size-8 sm:size-10 flex items-end pb-1 justify-center border-2 border-neutral-100 hover:border-none hover:bg-blue-700 hover:text-white text-neutral-500 cursor-pointer"
        onClick={() => goToPage(maxPage)}
      >
        <span className="text-xl">...</span>
      </div>

      {/* Next Page */}
      <div
        className="size-8 sm:size-10 flex items-center justify-center bg-neutral-100 hover:bg-blue-700 hover:text-white cursor-pointer"
        onClick={() => goToPage(currPage + 1)}
      >
        <span className="h-full text-2xl mb-0.5 sm:mt-1">›</span>
      </div>
    </div>
  );
}

function NoticeItem({ date, title, pdfUrl = "#", wordUrl = "#" }) {
  return (
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-1">
      <div className="py-4 px-6 border flex items-center justify-center font-semibold">
        {date}
      </div>

      <div className="flex flex-col sm:flex-row flex-1 items-start sm:items-center justify-between px-6 py-3 border space-y-2 sm:space-y-0">
        <div>{title}</div>

        <div className="flex space-x-2 h-full w-full sm:w-auto">
          <div className="w-full sm:w-20 py-2 h-full flex items-center justify-center bg-neutral-100 hover:bg-blue-700 hover:text-white duration-75">
            <Link
              to={pdfUrl}
              target="_blank"
              className="w-full h-full flex items-center justify-center"
            >
              PDF
            </Link>
          </div>
          <div className="w-full sm:w-20 py-2 h-full flex items-center justify-center bg-neutral-100 hover:bg-blue-700 hover:text-white duration-75">
            <Link
              to={wordUrl}
              target="_blank"
              className="w-full h-full flex items-center justify-center"
            >
              WORD
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
