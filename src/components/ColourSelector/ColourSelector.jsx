
function ColourSelector({
    variants,
    selectedVariant,
    onSelect
  }) {
    return (
      <div>
        <div className="mb-4 flex justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[1.5px]">
            Colour
          </p>
  
          <p className="text-xs text-[#77766F]">
            {selectedVariant.colourName}
          </p>
        </div>
  
        <div className="flex gap-3">
          {variants.map((variant) => (
            <button
              key={variant.variantId}
              onClick={() => onSelect(variant)}
              aria-label={`Select ${variant.colourName}`}
              aria-pressed={
                selectedVariant.variantId === variant.variantId
              }
              className={`flex h-9 w-9 items-center justify-center rounded-full border ${
                selectedVariant.variantId === variant.variantId
                  ? "border-black"
                  : "border-transparent"
              }`}
            >
              <span
                className="h-6 w-6 rounded-full border border-black/10"
                style={{
                  backgroundColor: variant.colourCode
                }}
              />
            </button>
          ))}
        </div>
      </div>
    );
  }
  
  export default ColourSelector;
  