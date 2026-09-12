import { useParams } from "react-router-dom";
import type { IAdvNumeric } from "@/types/types";
import { useAPI } from "@/hooks/useAPI";
import { useEffect, useMemo, useState } from "react";
import SimilarAdvsSliderWrapper from "@/components/similarAdvsSliderWrapper/SimilarAdvsSliderWrapper";
import Hero from "@/components/hero/Hero";
import Loading from "@/components/loading/Loading";

function AdvCategory() {
  const { category } = useParams();

  const params = useMemo(() => {
    if (category == "sale") {
      return { deal_type: 1 };
    } else if (category == "participation") {
      return { deal_type: 5 };
    } else if (category == "pre_sell") {
      return { deal_type: 4 };
    } else if (category == "exchange") {
      return { deal_type: 3 };
    } else {
      return {};
    }
  }, [category]);

  const { loading, refetch } = useAPI<{
    data: IAdvNumeric[];
  }>("api/advs", {
    method: "GET",
    limit: 99,
    params: params,
    onSuccess: (data) => {
      const mainSubCattegory1 = data?.data.filter((item: IAdvNumeric) => {
        return item.main_sub_category == 1;
      });
      const mainSubCattegory2 = data?.data.filter((item: IAdvNumeric) => {
        return item.main_sub_category == 2;
      });
      const mainSubCattegory3 = data?.data.filter((item: IAdvNumeric) => {
        return item.main_sub_category == 3;
      });
      const mainSubCattegory4 = data?.data.filter((item: IAdvNumeric) => {
        return item.main_sub_category == 4;
      });
      setMainSubCattegory1(mainSubCattegory1);
      setMainSubCattegory2(mainSubCattegory2);
      setMainSubCattegory3(mainSubCattegory3);
      setMainSubCattegory4(mainSubCattegory4);

      const cat1 = data?.data.filter((item: IAdvNumeric) => {
        return item.category == 1;
      });
      const cat2 = data?.data.filter((item: IAdvNumeric) => {
        return item.category == 2;
      });
      const cat3 = data?.data.filter((item: IAdvNumeric) => {
        return item.category == 3;
      });
      setCat1(cat1);
      setCat2(cat2);
      setCat3(cat3);
    },
  });

  const [mainSubCattegory1, setMainSubCattegory1] = useState<
    [] | IAdvNumeric[]
  >([]);
  const [mainSubCattegory2, setMainSubCattegory2] = useState<
    [] | IAdvNumeric[]
  >([]);
  const [mainSubCattegory3, setMainSubCattegory3] = useState<
    [] | IAdvNumeric[]
  >([]);
  const [mainSubCattegory4, setMainSubCattegory4] = useState<
    [] | IAdvNumeric[]
  >([]);

  const [cat1, setCat1] = useState<[] | IAdvNumeric[]>([]);
  const [cat2, setCat2] = useState<[] | IAdvNumeric[]>([]);
  const [cat3, setCat3] = useState<[] | IAdvNumeric[]>([]);

  let output;

  if (category == "places") {
    output = (
      <>
        <div className="mb-15">
          <SimilarAdvsSliderWrapper title="منطقه 1" data={cat1?.slice(0, 8)} />
        </div>

        <div className="mb-15">
          <SimilarAdvsSliderWrapper title="دبی" data={cat2?.slice(0, 8)} />
        </div>

        <div className="mb-15">
          <SimilarAdvsSliderWrapper title="استانبول" data={cat3?.slice(0, 8)} />
        </div>
      </>
    );
  } else if (category == "villa") {
    output = (
      <div className="mb-15">
        <SimilarAdvsSliderWrapper
          title="ویلایی و زمین"
          data={mainSubCattegory3?.slice(0, 8)}
          href={`/advs/main_sub_category=3`}
        />
      </div>
    );
  } else if (category == "discounts") {
    output = (
      <div className="mb-15">
        <SimilarAdvsSliderWrapper
          title="زیر قیمت"
          data={mainSubCattegory4?.slice(0, 8)}
        />
      </div>
    );
  } else {
    output = (
      <>
        <div className="mb-15">
          <SimilarAdvsSliderWrapper
            title="اداری تجاری"
            data={mainSubCattegory1?.slice(0, 8)}
            href={`/advs/main_sub_category=1`}
          />
        </div>

        <div className="mb-15">
          <SimilarAdvsSliderWrapper
            title="مسکونی"
            data={mainSubCattegory2?.slice(0, 8)}
            href={`/advs/main_sub_category=2`}
          />
        </div>

        <div className="mb-15">
          <SimilarAdvsSliderWrapper
            title="ویلایی و زمین"
            data={mainSubCattegory3?.slice(0, 8)}
            href={`/advs/main_sub_category=3`}
          />
        </div>
      </>
    );
  }

  useEffect(() => {
    refetch();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [category]);

  return (
    <>
      {loading && <Loading />}
      <Hero />
      <div className="w-full pt-20 pb-50 sm:pb-60 md:pb-70 lg:pb-80">
        <div className="px-5 md:px-10 lg:px-0">{output}</div>
      </div>
    </>
  );
}

export default AdvCategory;
