import { OrderItemInterface } from 'interfaces/order-item';
import { StoreInterface } from 'interfaces/store';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  quantity: number;
  store_id: string;
  created_at?: any;
  updated_at?: any;
  order_item?: OrderItemInterface[];
  store?: StoreInterface;
  _count?: {
    order_item?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  store_id?: string;
}
