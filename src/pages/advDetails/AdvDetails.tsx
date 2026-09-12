import { useParams } from "react-router-dom";
import { useAPI } from "@/hooks/useAPI";
import type { IAdvNumeric } from "@/types/types";
import AdvDetailsMediaPart from "@/components/advDetailsMediaPart/AdvDetailsMediaPart";
import Container from "@/components/container/Container";
import AdvInfoBox from "@/components/advInfoBox/AdvInfoBox";
import MidBanner from "@/components/midBanner/MidBanner";
import { useEffect, useMemo } from "react";
import SimilarAdvsSliderWrapper from "@/components/similarAdvsSliderWrapper/SimilarAdvsSliderWrapper";
import Loading from "@/components/loading/Loading";

function AdvDetails() {
  const { id } = useParams();

  const { data, loading, refetch } = useAPI<IAdvNumeric>(`api/advs/${id}`, {
    method: "GET",
  });

  const params = useMemo(() => {
    return { category: data?.category };
  }, [data, id]);

  const {
    data: advs,
    loading: loadingAdvs,
    refetch: refetchAdvs,
  } = useAPI<{
    data: IAdvNumeric[];
  }>("api/advs", {
    method: "GET",
    limit: 10,
    params: params,
  });

  useEffect(() => {
    refetch();
    refetchAdvs();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  return (
    <>
      {(loading || loadingAdvs) && <Loading />}
      <div className="w-full pt-20 pb-50 sm:pb-60 md:pb-70 lg:pb-80">
        <Container>
          <div className="mb-15">
            <AdvDetailsMediaPart adv={data} />
          </div>
          <div className="mb-5 text-lg md:text-xl">{data?.title}</div>
          <div className="mb-10">
            <AdvInfoBox data={data} />
          </div>
          <div className="mb-15">
            <MidBanner />
          </div>
        </Container>
        <div className="px-5 md:px-10 lg:px-0">
          <SimilarAdvsSliderWrapper title="اگهی های مشابه" data={advs?.data} />
        </div>
      </div>
    </>
  );
}

export default AdvDetails;
