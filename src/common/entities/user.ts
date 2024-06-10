import { UserPermission } from '../constants/userPermission';

export interface User {
  name: string;
  email: string;
  permissions: UserPermission[];
  image: string;
}
