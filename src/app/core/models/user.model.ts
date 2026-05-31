export interface UserPermissions {
  is_admin: boolean;
  is_technicien: boolean;
  is_chef_site: boolean;
  is_logistique: boolean;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  permissions: UserPermissions;
}
