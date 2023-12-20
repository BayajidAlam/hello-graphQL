import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent: any, args: { productId: string }, context: any) => {
      return db.products.find((pd) => pd.id === args.productId);
    },
    categories: () => db.categories,
    category: (parent: any, args: { categoryId: string }, context: any) => {
      return db.categories.find((ct) => ct.id === args.categoryId);
    },
  },

  Product: {
    category: ({ categoryId }, args: { categoryId: string }, context: any) => {
      return db.categories.find((ct) => ct.id === categoryId);
    },
    reviews: ({ id }, args: { categoryId: string }, context: any) => {
      return db.reviews.filter((re) => re.productId === id);
    },
  },

  Category: {
    products: ({ id }, args: any, context: any) => {
      return db.products.filter((pd) => pd.categoryId === id);
    },
  },
};
