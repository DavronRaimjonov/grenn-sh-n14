export interface FieldType {
  email?: string;
  password?: string;
}
export interface RegisterType {
  name?: string;
  surname: string;
  email?: string;
  password?: string;
  confirm_password?: string;
}

export interface WishListItemType {
  flower_id: string;
  route_path: string;
}
export interface AuthUser {
  _id?: string;
  email?: string;
  name?: string;
  surname?: string;
  profile_photo?: string;
  create_account_limit?: number;
  phone_number?: string;
  wishlist?: WishListItemType[];
  username?: string;
  country?: string;
  town?: string;
  street_address?: string;
  additional_street_address?: string;
  state?: string;
  zip?: string;
  followers?: string[];
  permission?: {
    create: boolean;
    update: boolean;
    delete: boolean;
    read: boolean;
  };
}

export interface HeroSliderType {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  big_img_url: string;
  small_img_url: string;
  buttonText: string;
}
export interface CategoryType {
  count: number;
  created_at: string;
  created_by: string;
  route_path: string;
  title: string;
  __v: number;
  _id: string;
}
export interface DiscounType {
  discoount_up_to: number;
  id: number;
  poster_image_url: string;
  title: string;
}
