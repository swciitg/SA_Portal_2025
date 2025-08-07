import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import BannerTop from "../Components/BannerTop";
import sendApiRequest from "../services/apiService";
import ROUTES from "../constants/apiRoutes";
import getStrapiMediaUrl from "../utils/strApiMediaUrl";

function FormsPage() {
  const [currPage, setCurrPage] = useState(1);
  const limitOnPage = 5;
  const [forms, setForms] = useState([]);
  const [formsShow,setFormsShow] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

const handleSearchChange = (e) => {
  const query = e.target.value;
  setSearchQuery(query);

  if (query.trim() === "") {
    setFormsShow(forms); // show all if empty
  } else {
    const lowerQuery = query.toLowerCase();

    const filtered = forms.filter((form) =>
      form.title?.toLowerCase().includes(lowerQuery) ||
      form.date?.toLowerCase().includes(lowerQuery)
    );

    setFormsShow(filtered);
  }

  // Optionally reset to first page
  setCurrPage(1);
};


  const paginatedForms = formsShow.slice(
    (currPage - 1) * limitOnPage,
    currPage * limitOnPage
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formsRes = await sendApiRequest(ROUTES.FORMS);
        // console.log("Forms data:", formsRes?.data);
        setForms(formsRes?.data);
        setFormsShow(formsRes?.data);
      } catch (error) {
        console.error("Error in fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BannerTop
        heading={"Forms"}
        route={["Student Affairs Council", "Forms"]}
      />
      <div className="px-4 py-4 sm:px-10 sm:py-8 md:px-28 md:py-20">
        {/* Heading + Search + Pagination */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0">
          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            All Forms
          </h2>

          {/* Search + Pagination */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            {/* Search Input */}
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search forms..."
              className="w-full sm:w-64 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Pagination Menu */}
            <PaginationMenu
              forms={formsShow}
              limitOnPage={limitOnPage}
              currPage={currPage}
              setCurrPage={setCurrPage}
            />
          </div>
        </div>

        {/* Forms */}
        {paginatedForms.length > 0 ? (
          <div className="flex flex-col mt-4 sm:mt-6 md:mt-10 space-y-1 text-neutral-900">
            {paginatedForms.map((form, idx) => (
              <FormItem
                key={idx}
                date={form.date}
                title={form.title}
                pdfUrl={getStrapiMediaUrl(form.pdf_File?.url)}
                wordUrl={getStrapiMediaUrl(form.word_File?.url)}
              />
            ))}
          </div>
        ) : (
          <div className="min-h-60 w-full flex items-center justify-center">
            <p>Nothing to show here.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default FormsPage;

function PaginationMenu({ forms, limitOnPage, currPage, setCurrPage }) {
  const maxPage = Math.ceil(forms.length / limitOnPage);

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
      <div
        className="size-8 sm:size-10 flex items-center justify-center bg-neutral-100 hover:bg-blue-700 hover:text-white cursor-pointer"
        onClick={() => goToPage(currPage - 1)}
      >
        <span className="h-full text-2xl mb-0.5 sm:mt-1">‹</span>
      </div>

      <div
        className="size-8 sm:size-10 flex items-end pb-1 justify-center border-2 border-neutral-100 hover:border-none hover:bg-blue-700 hover:text-white text-neutral-500 cursor-pointer"
        onClick={() => goToPage(1)}
      >
        <span className="text-xl">...</span>
      </div>

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

      <div
        className="size-8 sm:size-10 flex items-end pb-1 justify-center border-2 border-neutral-100 hover:border-none hover:bg-blue-700 hover:text-white text-neutral-500 cursor-pointer"
        onClick={() => goToPage(maxPage)}
      >
        <span className="text-xl">...</span>
      </div>

      <div
        className="size-8 sm:size-10 flex items-center justify-center bg-neutral-100 hover:bg-blue-700 hover:text-white cursor-pointer"
        onClick={() => goToPage(currPage + 1)}
      >
        <span className="h-full text-2xl mb-0.5 sm:mt-1">›</span>
      </div>
    </div>
  );
}

function FormItem({ date, title, pdfUrl = "#", wordUrl = "#" }) {
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
