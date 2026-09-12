import { useNavigate, useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import { useEffect, useMemo, useState } from "react";
import { useAPI } from "../../hooks/useAPI";
import LatestSliderSlide from "../../components/latestSliderSlide/LatestSliderSlide";
import {
  categoryTranslator,
  dealTypeTranslator,
  fullURL,
} from "../../services/api";
import type { IAdvNumeric } from "../../types/types";
import Pagination from "../../components/pagination/Pagination";
import CustomInput from "../../components/customInput/CustomInput";
import { RiInformationLine } from "react-icons/ri";
import Loading from "../../components/loading/Loading";

function Advs() {
  const navigate = useNavigate();
  const { query } = useParams();
  const queryParams = new URLSearchParams(query);

  const initializeByQuery = (
    value: string,
    outputType: "string" | "number",
  ) => {
    const exist = queryParams.has(value);
    if (exist) {
      const res = queryParams.get(value);
      return outputType == "number" ? Number(res) : res;
    } else {
      return outputType == "number" ? 0 : "";
    }
  };

  const [change, setChange] = useState(1);

  const [search, setSearch] = useState(initializeByQuery("search", "string"));
  const [mainSubCategory, setMainSubCategory] = useState(
    initializeByQuery("main_sub_category", "number"),
  );
  const [category, setCategory] = useState(
    initializeByQuery("category", "number"),
  );
  const [documentType, setDocumentType] = useState(
    initializeByQuery("document_type", "number"),
  );
  const [placeType, setPlaceType] = useState(
    initializeByQuery("place_type", "number"),
  );
  const [dealType, setDealType] = useState(
    initializeByQuery("deal_type", "number"),
  );
  const [subCategory, setSubCategory] = useState(
    initializeByQuery("sub_category", "number"),
  );

  const categories = [
    {
      id: 1,
      value: "منطقه 1",
      subCategories: [
        {
          id: 1,
          value: "ولنجک",
        },
        {
          id: 2,
          value: "زعفرانیه",
        },
        {
          id: 3,
          value: "محمودیه",
        },
        {
          id: 4,
          value: "الهیه",
        },
        {
          id: 5,
          value: "فرشته",
        },
        {
          id: 6,
          value: "قیطریه",
        },
        {
          id: 7,
          value: "نیاوران",
        },
        {
          id: 8,
          value: "فرمانیه",
        },
        {
          id: 9,
          value: "لواسانات",
        },
      ],
    },
    { id: 2, value: "دبی", subCategories: [] },
    { id: 3, value: "استانبول", subCategories: [] },
  ];

  const findSubCategories = (categoryId: number) => {
    const cat = categories.find((item) => {
      return item.id == categoryId;
    });
    return cat?.subCategories;
  };

  const inputs = [
    {
      id: 1,
      type: "text",
      placeHolder: "جست و جو",
      selectOptions: [],
      value: search,
      setter: setSearch,
    },
    {
      id: 2,
      type: "select",
      placeHolder: "زیردسته ی اصلی",
      selectOptions: [
        { id: "*", value: "همه" },
        { id: 1, value: "اداری، تجاری" },
        { id: 2, value: "مسکونی" },
        { id: 3, value: "ویلایی و زمین" },
        { id: 4, value: "زیر قیمت" },
      ],
      value: mainSubCategory,
      setter: setMainSubCategory,
    },
    {
      id: 3,
      type: "select",
      placeHolder: "منطقه",
      selectOptions: [
        { id: "*", value: "همه" },
        {
          id: 1,
          value: "منطقه 1",
          subCategories: [
            {
              id: 1,
              value: "ولنجک",
            },
            {
              id: 2,
              value: "زعفرانیه",
            },
            {
              id: 3,
              value: "محمودیه",
            },
            {
              id: 4,
              value: "الهیه",
            },
            {
              id: 5,
              value: "فرشته",
            },
            {
              id: 6,
              value: "قیطریه",
            },
            {
              id: 7,
              value: "نیاوران",
            },
            {
              id: 8,
              value: "فرمانیه",
            },
            {
              id: 9,
              value: "لواسانات",
            },
          ],
        },
        { id: 2, value: "دبی", subCategories: [] },
        { id: 3, value: "استانبول", subCategories: [] },
      ],
      value: category,
      setter: setCategory,
    },
    {
      id: 4,
      type: "select",
      placeHolder: "محله",
      selectOptions: category == 0 ? [] : findSubCategories(Number(category)),
      value: subCategory,
      setter: setSubCategory,
    },
    {
      id: 5,
      type: "select",
      placeHolder: "نوع سند",
      selectOptions: [
        { id: "*", value: "همه" },
        { id: 1, value: "شخصی" },
        { id: 2, value: "استان قدس" },
        { id: 3, value: "بنیاد" },
        { id: 4, value: "اوقاف" },
      ],
      value: documentType,
      setter: setDocumentType,
    },
    {
      id: 6,
      type: "select",
      placeHolder: "نوع ملک",
      selectOptions: [
        { id: "*", value: "همه" },
        { id: 1, value: "آپارتمان اداری" },
        { id: 2, value: "تجاری اداری" },
        { id: 3, value: "آپارتمان مسکونی" },
        { id: 4, value: "ویلایی" },
        { id: 5, value: "کلنگی" },
        { id: 6, value: "زمین" },
      ],
      value: placeType,
      setter: setPlaceType,
    },
    {
      id: 7,
      type: "select",
      placeHolder: "نوع قرارداد",
      selectOptions: [
        { id: "*", value: "همه" },
        { id: 1, value: "فروش" },
        { id: 2, value: "رهن و اجاره" },
        { id: 3, value: "تهاتر (معاوضه)" },
        { id: 4, value: "پیش فروش" },
        { id: 5, value: "مشارکت در ساخت" },
      ],
      value: dealType,
      setter: setDealType,
    },
  ];

  const params = useMemo(() => {
    let final = {};

    if (search) {
      final = { ...final, search: search };
    }
    if (mainSubCategory) {
      final = { ...final, main_sub_category: mainSubCategory };
    }
    if (category) {
      final = { ...final, category: category };
    }
    if (documentType) {
      final = { ...final, document_type: documentType };
    }
    if (placeType) {
      final = { ...final, place_type: placeType };
    }
    if (dealType) {
      final = { ...final, deal_type: dealType };
    }
    if (subCategory) {
      final = { ...final, sub_category: subCategory };
    }

    return final;
  }, [change]);

  const { data, loading, count, page, setPage } = useAPI<{
    data: IAdvNumeric[];
  }>("api/advs", {
    method: "GET",
    limit: 12,
    params: params,
  });

  useEffect(() => {
    const filters: {
      id: number;
      value: string;
      setter: any;
      outputType: "string" | "number";
    }[] = [
      { id: 1, value: "search", setter: setSearch, outputType: "string" },
      {
        id: 2,
        value: "main_sub_category",
        setter: setMainSubCategory,
        outputType: "number",
      },
      { id: 3, value: "category", setter: setCategory, outputType: "number" },
      {
        id: 4,
        value: "document_type",
        setter: setDocumentType,
        outputType: "number",
      },
      {
        id: 5,
        value: "place_type",
        setter: setPlaceType,
        outputType: "number",
      },
      { id: 6, value: "deal_type", setter: setDealType, outputType: "number" },
      {
        id: 7,
        value: "sub_category",
        setter: setSubCategory,
        outputType: "number",
      },
    ];

    filters.forEach((item) => {
      item.setter(initializeByQuery(item.value, item.outputType));
    });
    setChange(change + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [query]);

  return (
    <>
      {loading && <Loading />}
      <Container>
        <div className="w-full pt-20 pb-50 sm:pb-60 md:pb-70 lg:pb-80">
          <div className="w-full p-4 rounded-xl shadow bg-[#F8F9F9] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-15">
            {inputs.map((input) => {
              return (
                <CustomInput
                  key={input.id}
                  placeHolder={input.placeHolder}
                  selectOptions={input.selectOptions ?? []}
                  setter={input.setter}
                  value={input.value}
                  type={input.type}
                />
              );
            })}
            <div className="w-full flex flex-row-reverse items-center gap-2">
              <button
                className="rounded-lg px-4 py-2 text-sm text-white bg-[#5D5FEF] hover:bg-[#8B91FC] cursor-pointer transition-all duration-300"
                onClick={() => {
                  setChange(change + 1);
                  setPage(1);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                فیلتر کردن
              </button>
              <button
                className="rounded-lg px-4 py-2 text-sm text-white bg-[#FF4D4F] hover:bg-[#FF7875] cursor-pointer transition-all duration-300"
                onClick={() => {
                  setSearch("");
                  setMainSubCategory(0);
                  setCategory(0);
                  setDealType(0);
                  setDocumentType(0);
                  setPlaceType(0);
                  setSubCategory(0);
                  setChange(change - 1);
                  setPage(1);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                بازنشانی
              </button>
            </div>
          </div>
          {(data?.data.length ?? 0 > 0) ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-4 lg:gap-8 mb-15">
                {data?.data.map((item) => {
                  return (
                    <div onClick={() => navigate(`/adv_details/${item.id}`)}>
                      <LatestSliderSlide
                        key={item?.id}
                        title={item?.title}
                        imgURL={fullURL(item?.image_1.url)}
                        alt={item?.image_1.alt}
                        categoryTitle={categoryTranslator(item?.category)}
                        dealTypeTitle={
                          dealTypeTranslator(item?.deal_type) ?? "---"
                        }
                      />
                    </div>
                  );
                })}
              </div>
              <Pagination
                count={count}
                page={page}
                setPage={setPage}
                limit={12}
              />
            </>
          ) : (
            <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
              <RiInformationLine size={80} color="#1677FF" />
              <p className="text-xl lg:text-2xl">
                آگهی برای این زیردسته یافت نشد
              </p>
            </div>
          )}
        </div>
      </Container>
    </>
  );
}

export default Advs;
