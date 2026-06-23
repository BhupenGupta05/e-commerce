import { Category } from "@prisma/client";

export const products = [
  {
    id: "prod_1",
    name: "iPhone 15 Pro",
    description: "Latest Apple smartphone with titanium design",
    priceInPaisa: 13490000,
    stock: 12,
    tags: ["apple", "iphone", "premium"],
    category: Category.electronics,
    imageUrl: [
      "https://images.unsplash.com/photo-1696446701045-2d9f8a0c7c6b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "prod_2",
    name: "Samsung Galaxy S24",
    description: "Flagship Android smartphone with AI camera",
    priceInPaisa: 9990000,
    stock: 20,
    tags: ["samsung", "android", "galaxy"],
    category: Category.electronics,
    imageUrl: [
      "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "prod_3",
    name: "Sony WH-1000XM5",
    description: "Noise cancelling wireless headphones",
    priceInPaisa: 2999000,
    stock: 35,
    tags: ["sony", "headphones", "audio"],
    category: Category.electronics,
    imageUrl: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518441902117-f0a7b6b2c6e0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "prod_4",
    name: "MacBook Air M2",
    description: "Lightweight laptop powered by Apple Silicon",
    priceInPaisa: 11490000,
    stock: 18,
    tags: ["macbook", "laptop", "apple"],
    category: Category.electronics,
    imageUrl: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca9?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "prod_5",
    name: "Nike Air Force 1",
    description: "Classic white sneakers for everyday wear",
    priceInPaisa: 799000,
    stock: 50,
    tags: ["nike", "shoes", "sneakers"],
    category: Category.clothing,
    imageUrl: [
      "https://images.unsplash.com/photo-1528701800489-20be3c0c2f39?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1528701800489-20be3c0c2f40?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1528701800489-20be3c0c2f41?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "prod_6",
    name: "Levi's Denim Jacket",
    description: "Classic blue denim jacket",
    priceInPaisa: 3499000,
    stock: 40,
    tags: ["levis", "jacket", "denim"],
    category: Category.clothing,
    imageUrl: [
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1520975916090-3105956dac39?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "prod_7",
    name: "Wooden Coffee Table",
    description: "Minimalist wooden center table",
    priceInPaisa: 5999000,
    stock: 10,
    tags: ["furniture", "table", "wood"],
    category: Category.furniture,
    imageUrl: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe86?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "prod_8",
    name: "LED Desk Lamp",
    description: "Adjustable study desk lamp",
    priceInPaisa: 1290000,
    stock: 60,
    tags: ["lamp", "led", "study"],
    category: Category.furniture,
    imageUrl: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782d?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "prod_9",
    name: "Harry Potter Book Set",
    description: "Complete fantasy book series collection",
    priceInPaisa: 499900,
    stock: 25,
    tags: ["books", "harrypotter", "fiction"],
    category: Category.books,
    imageUrl: [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "prod_10",
    name: "Organic Coffee Beans",
    description: "Premium roasted arabica beans",
    priceInPaisa: 89900,
    stock: 100,
    tags: ["coffee", "organic", "beans"],
    category: Category.food,
    imageUrl: [
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
    ],
  },

  // =========================
  // AUTO GENERATED PRODUCTS 11–50
  // =========================
  ...Array.from({ length: 40 }).map((_, i) => {
    const id = i + 11;

    const categories = [
      Category.electronics,
      Category.clothing,
      Category.books,
      Category.food,
      Category.furniture,
      Category.beauty,
      Category.other,
    ] as const;

    const category = categories[id % categories.length];

    const imageMap: Record<string, string[]> = {
      ELECTRONICS: [
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop",
      ],
      CLOTHING: [
        "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1528701800489-20be3c0c2f39?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1520975916090-3105956dac39?w=800&h=600&fit=crop",
      ],
      BOOKS: [
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop",
      ],
      FOOD: [
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop",
      ],
      FURNITURE: [
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe86?w=800&h=600&fit=crop",
      ],
      BEAUTY: [
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1596462502278-27bfdc403349?w=800&h=600&fit=crop",
      ],
      OTHER: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf31?w=800&h=600&fit=crop",
      ],
    };

    return {
      id: `prod_${id}`,
      name: `Premium ${category.toLowerCase()} Product ${id}`,
      description: `High quality ${category.toLowerCase()} product designed for everyday use`,
      priceInPaisa: 50000 + id * 12345,
      stock: 10 + (id % 30),
      tags: [category.toLowerCase(), "premium", `tag${id}`],
      category,
      imageUrl: imageMap[category],
    };
  }),
];