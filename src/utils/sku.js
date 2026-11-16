
export const generateSKU = (productId, colour, size) => {
    const colourCode = colour
      .replace(/\s+/g, "")
      .toUpperCase()
      .slice(0, 3);
  
    return `${productId}-${colourCode}-${size}`.toUpperCase();
  };
  
  export const getVariantStock = (variant, size) => {
    return variant?.sizes.find(
      (item) => item.size === size
    )?.stock || 0;
  };
  