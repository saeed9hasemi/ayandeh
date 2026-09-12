export interface IModal {
  type: "image" | "video";
  image?: IImage | null | undefined;
  image_video?: IImage | null | undefined;
  video?: string;
}

export interface IHomePage {
  index: IIndex;
  advs: IAdv[];
  index_videos: IndexVideos;
  blogs: IBlog[];
  footer: IFooter;
  meta: IMeta;
}

export interface IIndex {
  title: string;
  text: string;
  link: string;
}

export interface IAdv {
  id: number;
  title: string;
  image_1: IImage;
  image_2: IImage;
  image_3: IImage;
  img_video: IImage;
  video?: string;
  text: any;
  category: ICategory;
  sub_category?: ICategory;
  deal_type: ICategory;
  place_type: number;
  main_sub_category: number;
  document_type: number;
  floor?: string;
  room_count?: string;
  age?: string;
  meterage?: string;
  attributes: string;
  seo_options: ISeoOptions;
  created_at: string;
  updated_at: string;
}
export interface IAdvNumeric {
  id: number;
  title: string;
  image_1: IImage;
  image_2: IImage;
  image_3: IImage;
  img_video: IImage;
  video: string;
  text: any;
  category: number;
  main_sub_category: number;
  sub_category: number;
  deal_type: number;
  place_type: number;
  document_type: number;
  floor: any;
  room_count: any;
  age: any;
  meterage: any;
  attributes: string;
  created_at: string;
  updated_at: string;
  seo_options: SeoOptions;
}

export interface ICategory {
  id: number;
  title: string;
}

export interface SeoOptions {
  keyword: string;
  meta_description: string;
}

export interface IndexVideos {
  video_1: string;
  video_2: string;
  video_3: string;
  video_4: string;
  image_1: IImage;
  image_2: IImage;
  image_3: IImage;
  image_4: IImage;
}

export interface IBlog {
  id: number;
  title: string;
  image: IImage;
  time: string;
  description: string;
  blog_category_id: number;
  blog_subcategory_id: number;
  seo_options: ISeoOptions;
}

export interface IImage {
  url: string;
  alt: string;
  size: number;
  width: number;
  height: number;
}

export interface ISeoOptions {
  keyword: string;
  meta_description: string;
}

export interface IFooter {
  title: string;
  image: IImage;
  phone_1: string;
  phone_2: string;
  telegram: string;
  whatsapp: string;
  address: string;
  tel_link: string;
  insta_link: string;
  linkedin: string;
}

export interface IMeta {
  keyword: string;
  description: string;
}

export interface IAboutUs {
  title: string;
  image: IImage;
  description: string;
}

export interface IContactUs {
  title: string;
  image: IImage;
  phone_1: string;
  phone_2: string;
  telegram: string;
  whatsapp: string;
  address: string;
  tel_link: string;
  insta_link: string;
  linkedin: string;
}

export interface IAdvice {
  title: string;
  image: IImage;
  phone_1: string;
  phone_2: string;
  telegram: string;
  whatsapp: string;
  address: string;
}

export interface IBlogMain {
  id: number;
  title: string;
  image: IImage;
  seo_options: ISeoOptions;
  description: string;
  blog_category_id: number;
  blog_subcategory_id?: number;
  time: string;
  created_at: ICreatedAt;
  updated_at: ICreatedAt;
  tags: ITag[];
}

export interface ICreatedAt {
  day: number;
  month: IMonth;
  year: number;
  weak_day: IMonth;
  timestamp: number;
  date: string;
  jdate: string;
  string: string;
}

export interface IMonth {
  number: number;
  string: string;
}

export interface ITag {
  id: number;
  title: string;
  link: string;
  blog_id: number;
}
