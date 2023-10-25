import { OrderInterface } from 'interfaces/order';
import { ProductInterface } from 'interfaces/product';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface StoreInterface {
  id?: string;
  name: string;
  location: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  order?: OrderInterface[];
  product?: ProductInterface[];
  company?: CompanyInterface;
  _count?: {
    order?: number;
    product?: number;
  };
}

export interface StoreGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  location?: string;
  company_id?: string;
}
