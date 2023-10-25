import { StoreInterface } from 'interfaces/store';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  address?: string;
  phone_number?: string;
  email?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  store?: StoreInterface[];
  user?: UserInterface;
  _count?: {
    store?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  phone_number?: string;
  email?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
