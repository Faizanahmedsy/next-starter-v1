export interface Permission {
  id: number;
  role_id: number;
  module_id: number;
  institute_id: number;
  allow: {
    add: boolean;
    edit: boolean;
    view: boolean;
    delete: boolean;
  };
  module: {
    id: number;
    module_name: string;
  };
}

export interface UserAuthResp {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  user_name: string;
  gender: string;
  mobile_number: string;
  address: string;
  institute_id: number;
  status: string;
  role_id: number;
  state_id: number;
  city_id: number;
  profile_image: string;
  permissions: Permission[];
}

export interface AuthState {
  role: string;
  permissions: Permission[];
  accessToken: string;
  user: UserAuthResp | null;
  setUser: (userData: UserAuthResp, accessToken: string) => void;
  logout: () => void;
}
