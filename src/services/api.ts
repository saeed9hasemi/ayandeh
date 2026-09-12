import axios from "axios";

export const client = axios.create({
  baseURL: "https://api-ayandeh.dadekavweb.ir/",
});

// client.interceptors.request.use((config) => {
//   const loaclToken = localStorage.getItem("token");

//   if (loaclToken && loaclToken !== "null" && loaclToken !== "undefined") {
//     try {
//       const token = JSON.parse(loaclToken);

//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//     } catch (error) {
//       console.error("Invalid user data in localStorage:", error);
//       localStorage.removeItem("token");
//     }
//   }

//   return config;
// });

/////////////////////////////////////

export const fullURL = (url: string | null | undefined) => {
  return url ? `https://api-ayandeh.dadekavweb.ir/${url}` : "";
};

export const dealTypeTranslator = (value: number) => {
  if (value == 1) {
    return "فروش";
  } else if (value == 2) {
    return "اجاره";
  } else if (value == 3) {
    return "تهاتر";
  } else if (value == 4) {
    return "پیش فروش";
  } else if (value == 5) {
    return "مشارکت";
  } else {
    return "---";
  }
};

export const categoryTranslator = (value: number) => {
  if (value == 1) {
    return "منطقه 1";
  } else if (value == 2) {
    return "دبی";
  } else if (value == 3) {
    return "استانبول";
  } else {
    return "---";
  }
};

export const subCategoryTranslator = (value: number) => {
  if (value == 1) {
    return "تهران ولنجک";
  } else if (value == 2) {
    return "تهران زعفرانیه";
  } else if (value == 3) {
    return "تهران محمودیه";
  } else if (value == 4) {
    return "---";
  } else if (value == 5) {
    return "تهران فرشته";
  } else if (value == 6) {
    return "تهران قیطریه";
  } else if (value == 7) {
    return "تهران نیاوران";
  } else if (value == 8) {
    return "تهران فرمانیه";
  } else if (value == 9) {
    return "تهران لواسانات";
  } else if (value == 10) {
    return "استانبول";
  } else {
    return "---";
  }
};

export const mainSubCategoryTranslator = (value: number) => {
  if (value == 1) {
    return "مسکونی";
  } else if (value == 2) {
    return "ویلایی و زمین";
  } else if (value == 3) {
    return "زیر قیمت";
  } else {
    return "---";
  }
};

export const documentTypeTranslator = (value: number) => {
  if (value == 1) {
    return "شخصی";
  } else if (value == 2) {
    return "استان قدس";
  } else if (value == 3) {
    return "بنیاد";
  } else if (value == 4) {
    return "اوقاف";
  } else {
    return "---";
  }
};

export const placeTypeTranslator = (value: number) => {
  if (value == 1) {
    return "آپارتمان اداری";
  } else if (value == 2) {
    return "تجاری اداری";
  } else if (value == 3) {
    return "آپارتمان مسکونی";
  } else if (value == 4) {
    return "ویلایی";
  } else if (value == 5) {
    return "کلنگی";
  } else if (value == 6) {
    return "زمین";
  } else {
    return "---";
  }
};
