import { FaCheck } from "react-icons/fa";
import type { IAdvNumeric } from "../../types/types";
import {
  dealTypeTranslator,
  documentTypeTranslator,
  placeTypeTranslator,
  subCategoryTranslator,
} from "../../services/api";
import { useMemo } from "react";

interface IAdvInfoBox {
  data: IAdvNumeric | null | undefined;
}

function AdvInfoBox({ data }: IAdvInfoBox) {
  const infoField = [
    {
      id: 1,
      question: "شهر-محله:",
      answer: subCategoryTranslator(data?.sub_category ?? 0),
    },
    {
      id: 2,
      question: "نوع قرارداد:",
      answer: dealTypeTranslator(data?.deal_type ?? 0),
    },
    {
      id: 3,
      question: "نوع ملک:",
      answer: placeTypeTranslator(data?.place_type ?? 0),
    },
    {
      id: 4,
      question: "تعداد خواب:",
      answer: `${data?.room_count ?? "---"} خواب `,
    },
    { id: 5, question: "سن:", answer: data?.age ?? "---" },
    { id: 6, question: "متراژ:", answer: ` ${data?.meterage ?? "---"} متر` },
    {
      id: 7,
      question: "نوع سند:",
      answer: documentTypeTranslator(data?.document_type ?? 0),
    },
    { id: 8, question: "طبقه:", answer: `${data?.floor ?? "---"} طبقه` },
  ];

  let featuresField = useMemo(() => {
    let init = [
      { id: 1, feature: "انباری", answer: "false" },
      { id: 2, feature: "تراس", answer: "false" },
      { id: 3, feature: "سرایداری", answer: "false" },
      { id: 4, feature: "سونا", answer: "false" },
      { id: 5, feature: "استخر", answer: "false" },
      { id: 6, feature: "سالن ورزشی", answer: "false" },
      { id: 7, feature: "سالن سرگرمی", answer: "false" },
      { id: 8, feature: "آسانسور", answer: "false" },
      { id: 9, feature: "لابی", answer: "false" },
      { id: 10, feature: "کفپوش", answer: "false" },
      { id: 11, feature: "جکوزی", answer: "false" },
      { id: 12, feature: "هلی پد", answer: "false" },
      { id: 13, feature: "سالن اجتماعات", answer: "false" },
      { id: 14, feature: "کتابخانه", answer: "false" },
    ];
    const attributes = data?.attributes.split(",");
    init = init?.map((item, index) => {
      return { ...item, answer: attributes?.[index] ?? "false" };
    });
    console.log(data?.attributes, attributes);
    return init;
  }, [data]);

  return (
    <div className="w-full rounded-2xl bg-[#F2F2F2] py-10 overflow-hidden">
      <div className="w-full hidden md:flex items-center px-20 text-lg mb-5 font-semibold">
        <h4 className="w-1/2 ">اطلاعات ملک و نوع سند</h4>
        <h4 className="w-1/2 px-20">ویژگی ها:</h4>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center gap-5 md:gap-0">
        <div className="right w-full px-10 sm:px-20 md:px-5 lg:px-20 md:border-l-2 border-l-[#B3B3B3]">
          {infoField.map((item) => {
            return (
              <div
                key={item.id}
                className="py-3 flex items-center justify-between gap-10 border-b-2 border-b-[#E0E5F0] last-of-type:border-0"
              >
                <p>{item.question}</p>
                <p>{item.answer ?? "---"}</p>
              </div>
            );
          })}
        </div>
        <div className="left w-full px-10 sm:px-20 md:px-5 lg:px-20 flex flex-col md:flex-row gap-5 md:gap-10">
          <div className="w-full right">
            {featuresField.slice(0, 7).map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-2 mb-5 last-of-type:mb-0"
                >
                  <p>{item.feature}</p>
                  <div
                    className={`size-8 rounded-lg flex items-center justify-center ${item.answer == "true" ? "bg-[#0DA801]" : "bg-[#C1C1C1]"}`}
                  >
                    <FaCheck color="white" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full left">
            {featuresField.slice(7, 14).map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-2 mb-5 last-of-type:mb-0"
                >
                  <p>{item.feature}</p>
                  <div
                    className={`size-8 rounded-lg flex items-center justify-center ${item.answer == "true" ? "bg-[#0DA801]" : "bg-[#C1C1C1]"}`}
                  >
                    <FaCheck color="white" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvInfoBox;
