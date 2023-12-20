import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent: any, args: { productId: string }, context: any) => {
      const result = db.products.find((pd) => pd.id === args.productId);
      return result;
    },
    categories: () => db.categories,
    category: (parent: any, args: { categoryId: string }, context: any) => {
      const result = db.categories.find((ct) => ct.id === args.categoryId);
      return result;
    },
  },

  Product: {
    category: (parent: any, args: { categoryId: string }, context: any) => {
      const result = db.categories.find((ct) => ct.id === parent.categoryId);
      return result;
    },
    reviews: (parent: any, args: { categoryId: string }, context: any) => {
      const result = db.reviews.filter((re) => re.productId === parent.id);
      return result;
    },
  },

  Category: {
    products: (parent: any, args: any, context: any) => {
      const result = db.products.filter((pd) => pd.categoryId === parent.id);
      return result;
    },
  },
};
