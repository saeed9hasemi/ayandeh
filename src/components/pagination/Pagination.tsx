import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface IPagination {
  count: number;
  page: number;
  setPage: any;
  limit?: number;
}

function Pagination({ count, page, setPage, limit = 8 }: IPagination) {
  const pageNumbers = Math.ceil(count / limit);

  const pages = [];

  for (let i = 1; i <= pageNumbers; i++) {
    pages.push(i);
  }

  return (
    <div className="w-full flex items-center justify-center gap-4 overflow-hidden flex-wrap">
      <div
        className="text-[#AAAAAB] cursor-pointer"
        onClick={() => {
          setPage((current: number) => {
            if (current != 1) {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              return current - 1;
            } else {
              return current;
            }
          });
        }}
      >
        <IoIosArrowForward />
      </div>
      {pages.map((item) => {
        return (
          <div
            key={item}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              setPage(item);
            }}
            className={`size-8 rounded-full  cursor-pointer flex items-center justify-center border ${page == item ? "bg-[#5456E4] border-[#5456E4] text-white" : "bg-white border-[#AAAAAB] text-[#AAAAAB]"}`}
          >
            {item}
          </div>
        );
      })}
      <div
        className="text-[#AAAAAB] cursor-pointer"
        onClick={() => {
          setPage((current: number) => {
            if (current != pageNumbers) {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              return current + 1;
            } else {
              return current;
            }
          });
        }}
      >
        <IoIosArrowBack />
      </div>
    </div>
  );
}

export default Pagination;
