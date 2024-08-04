export const coursesDataTransform = (products: any[]) => {
    return products.map(product => ({
      id: product.id,
      title: product.title,
      instructor: product.brand,
      image: product.images[0],
      level: product.category,
      duration: product.price,
      description: product.description,
      tags: product.tags,
      stock: product.stock,
    }));
  };
  