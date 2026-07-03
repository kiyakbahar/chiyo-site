import { NavItem } from "@/features/navigation";

export interface IngredientGroup {
    heading: string;
    items: string[];
}

export interface NutritionFact {
    label: string;
    value: string;
}

export interface PageContent {
    nav: {
        logo: string;
        items: NavItem[];
        cartCount: number;
    };
    hero: {
        eyebrow: string;
        flavorTag: string;
        title: string;
        description: string;
        buttonText: string;
    };
    about: {
        heading: string;
        body: string;
        claim: string;
    };
    ingredients: IngredientGroup;
    nutrition: NutritionFact[];
    gallery: {
        heading: string;
        body: string;
    };
    footer: {
        heading: string;
        body: string;
    };
}

export const pageContent: PageContent = {
    nav: {
        logo: "Chiyo",
        items: [
            { label: "Product" },
            { label: "Ingredients" },
            { label: "About" },
            { label: "Contact" },
        ],
        cartCount: 1,
    },
    hero: {
        eyebrow: "100% Healthy",
        flavorTag: "Strawberry",
        title: "Strawberry Chia Pudding",
        description:
            "Chiyo is a healthy mini pudding made with fresh strawberries, plain yogurt, chia seeds and homemade granola. A clean, nutritious and light snack for any moment of the day.",
        buttonText: "Order Now",
    },
    about: {
        heading: "We have nothing to hide. We're transparent.",
        body: "Chiyo is a healthy mini pudding made with fresh strawberries, plain yogurt, chia seeds and homemade granola. Each jar contains only natural ingredients—no additives, no artificial flavors, nothing hidden. Chiyo offers a clean, nutritious and light snack that brings natural energy to any moment of the day.",
        claim: "100% Healthy",
    },
    ingredients: {
        heading: "Ingredients",
        items: [
            "Plain Yogurt (pasteurized cow's milk, yogurt culture)",
            "Fresh Strawberry Purée (strawberries, a touch of honey)",
            "Honey",
            "Chia Seeds",
            "Homemade Granola",
            "Rolled oats",
            "Dried fruit pieces",
            "Almonds or hazelnuts",
            "Lightly sweetened with honey",
        ],
    },
    nutrition: [
        { label: "Energy", value: "120 kcal" },
        { label: "Protein", value: "6 g" },
        { label: "Fat", value: "3.2 g" },
        { label: "Saturated Fat", value: "1.5 g" },
        { label: "Carbohydrates", value: "18 g" },
        { label: "Sugars", value: "8 g" },
        { label: "Fiber", value: "4.5 g" },
        { label: "Salt", value: "0.1 g" },
        { label: "Omega-3", value: "1.1 g" },
    ],
    gallery: {
        heading: "Made for your everyday glow-up",
        body: "Grab a spoon and a jar of Chiyo wherever your day takes you — post-workout, mid-afternoon slump, or a light dessert after dinner.",
    },
    footer: {
        heading: "Get your first jar of Chiyo",
        body: "Fresh strawberries, real yogurt, chia and homemade granola — nothing hidden, nothing artificial.",
    },
};
