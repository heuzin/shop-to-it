export interface AllProducts {
    products: Products[];
    page: number;
    pages: number;
}

export interface Products {
    _id: string;
    name: string;
    image: string;
    brand: string;
    category: string;
    description: string;
    reviews: Review[];
    rating: number;
    numReviews: number;
    price: number;
    countInStock: number;
}

interface Review {
    _id: string;
    name: string;
    rating: number;
    comment: string;
    createdAt: Date;
}
