export interface Item {
    title: string,
    subtitle: string,
    description: string,
    category: number,
    img: string,
    imgParallax?: DataImagesParallax,
    price: number,
    properties: {
        duration: string,
        calories: number,
        punctuation: number
    }
}

export type DataImagesParallax = {
    back: string;
    front: string;
};