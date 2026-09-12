import Container from "@/components/container/Container";
import { useAPI } from "@/hooks/useAPI";
import { fullURL } from "@/services/api";
import type { IAdvice } from "@/types/types";
import ContactUsCart from "@/components/contactUsCart/ContactUsCart";
import Loading from "@/components/loading/Loading";
import { useEffect } from "react";

type TVariant = "phone" | "tel" | "location";

interface IContactUsCart {
  id: number;
  title: string;
  data: any;
  variant: TVariant;
}

function Advice() {
  const { data, loading } = useAPI<IAdvice>("api/advice", {
    method: "GET",
  });

  const contactUsCarts: IContactUsCart[] = [
    {
      id: 1,
      variant: "phone",
      title: "شماره های تماس",
      data: (
        <div className="flex flex-col gap-1">
          <p className="text-sm md:text-base text-center">{data?.phone_1}</p>
          <p className="text-sm md:text-base text-center">{data?.phone_2}</p>
        </div>
      ),
    },
    {
      id: 2,
      variant: "tel",
      title: "شماره واتس اپ و تلگرام",
      data: (
        <div className="flex flex-col gap-1">
          <p className="text-sm md:text-base text-center">{data?.telegram}</p>
          <p className="text-sm md:text-base text-center">{data?.whatsapp}</p>
        </div>
      ),
    },
    {
      id: 3,
      variant: "location",
      title: "دفتر مرکزی",
      data: <p className="text-sm md:text-base text-center">{data?.address}</p>,
    },
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      {loading && <Loading />}
      <Container>
        <div className="mb-20 sm:mb-30 md:mb-40 lg:mb-50 py-20">
          <div className="w-full text-xl border-r-4 border-r-[#7879F1] p-1 font-semibold mb-15">
            درخواست مشاوره
          </div>
          <div className="w-full rounded-2xl mb-15">
            <img
              src={fullURL(data?.image.url)}
              alt="contactUs"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="text-xl font-semibold mb-15">{data?.title}</div>
          <div className="flex flex-col lg:flex-row items-start justify-between gap-20">
            {contactUsCarts.map((item) => {
              return (
                <ContactUsCart
                  key={item.id}
                  variant={item.variant}
                  title={item.title}
                  data={item.data}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Advice;
