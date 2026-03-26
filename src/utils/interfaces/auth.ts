export enum AuthRoles {
  Admin = "Admin",
}

export type AuthUserType = {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: AuthRoles;
  };
};
