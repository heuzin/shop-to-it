import { Order } from './Order';
import { User } from './User';

export interface OrderDetails extends Order {
    user: User;
    shippingPrice: number;
    taxPrice: number;
    isDelivered: boolean;
    deliveredAt: string;
    isPaid: boolean;
    paidAt: string;
    createdAt: Date;
}
