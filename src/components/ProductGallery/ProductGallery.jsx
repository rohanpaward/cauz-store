
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

function ProductGallery({ images, productName }) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [images]);

  if (!images?.length) {
    return (
      <div className="aspect-[4/5] bg-[#EFEEE9]" />
    );
  }

  const currentImage = images[activeImage];

  return (
    <div className="grid grid-cols-[65px_1fr] gap-3 md:grid-cols-[90px_1fr] md:gap-5">

      <div className="flex flex-col gap-3">
        {images.map((image, index) => (
          <button
            key={`${image.url}-${index}`}
            onClick={() => setActiveImage(index)}
            className={`aspect-[4/5] overflow-hidden border ${
              activeImage === index
                ? "border-black"
                : "border-transparent"
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      <div className="relative aspect-[4/5] overflow-hidden bg-[#EFEEE9]">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage.url}
            src={currentImage.url}
            alt={currentImage.alt || productName}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>

    </div>
  );
}

export default ProductGallery;
