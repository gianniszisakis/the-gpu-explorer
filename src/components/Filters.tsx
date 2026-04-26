import { images } from "../data/images";

interface FiltersProps {
  filteredData: string[];
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export default function Filters({
  filteredData,
  filter,
  setFilter,
}: FiltersProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-3 px-2 mb-6">
      {filteredData.map((brand: string) => {
        const count =
          brand === "all"
            ? images.length
            : images.filter((img) => img.brand === brand).length;
        return (
          <button
            key={brand}
            onClick={() => setFilter(brand)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
        transition-all duration-300
        ${
          filter === brand
            ? "bg-blue-600 text-white shadow-[0_0_12px_rgba(59,130,246,0.6)]"
            : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
        }`}
          >
            {`${brand.toUpperCase()} (${count})`}
          </button>
        );
      })}
    </div>
  );
}
