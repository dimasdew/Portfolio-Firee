import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image?: string;
}

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
  return (
    <div
      className="product-card rounded-2xl overflow-hidden flex flex-col"
      style={{ background: "rgba(110,172,218,0.22)", border: "1px solid rgba(110,172,218,0.3)" }}
    >
      {/* Card Header */}
      <div className="px-4 pt-3 pb-2 flex items-center gap-2">
        <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs" style={{ background: "var(--midnight)", color: "var(--sand)" }}>
          ⬡
        </div>
        <div className="flex-1 h-px" style={{ background: "rgba(3,52,110,0.2)" }} />
      </div>

      {/* Image */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-4">
        <p className="font-bold text-sm mb-4 text-center" style={{ fontFamily: "Syne, sans-serif", color: "var(--midnight)" }}>
          {name}
        </p>

        {/* Placeholder image — swap this out with real images */}
        <div className="w-24 h-32 flex items-center justify-center rounded-xl mb-4" style={{ background: "rgba(255,255,255,0.4)" }}>
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-contain" />
          ) : (
            <div className="text-4xl opacity-30">💧</div>
          )}
        </div>

        <div className="text-xs font-medium opacity-60 mb-1" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--midnight)" }}>
          {price} ETH
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 pb-4 flex justify-center">
        <Link
          href={`/dashboard/details?id=${id}`}
          className="btn-sand text-xs px-6 py-2 rounded-lg"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
