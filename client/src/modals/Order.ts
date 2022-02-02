import { CartItem } from './CartItems';
import { ShippingAddress } from './ShippingAddress';

export interface Order {
    orderItems: CartItem[];
    shippingAddress: ShippingAddress;
    paymentMethod: string;
    itemsPrice?: number;
    shippingPrice?: number;
    taxPrice?: number;
    totalPrice?: number;
    _id?: string;
}
