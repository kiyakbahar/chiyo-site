import { CartItem } from '../types';

// Sample cart items for demonstration
export const sampleCartItems: CartItem[] = [
    {
        id: 1,
        name: "Strawberry Chia Pudding",
        price: 3.99,
        quantity: 1,
        image: "/assets/chiyo/jars-both.png",
    },
];

export const getTotalPrice = (items: CartItem[]): number => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};
