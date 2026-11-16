
export const filterProducts = (
    products,
    { category, search, sort }
  ) => {
    let result = [...products];
  
    if (category && category !== "All") {
      result = result.filter(
        (product) => product.category === category
      );
    }
  
    if (search?.trim()) {
      const query = search.toLowerCase().trim();
  
      result = result.filter((product) => {
        const searchableText = [
          product.name,
          product.category,
          product.collection,
          ...product.keywords
        ].join(" ").toLowerCase();
  
        return searchableText.includes(query);
      });
    }
  
    switch (sort) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
  
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
  
      case "newest":
        result.sort(
          (a, b) =>
            new Date(b.createdAt) - new Date(a.createdAt)
        );
        break;
  
      case "featured":
        result.sort(
          (a, b) =>
            Number(b.isFeatured) - Number(a.isFeatured)
        );
        break;
  
      default:
        break;
    }
  
    return result;
  };
  