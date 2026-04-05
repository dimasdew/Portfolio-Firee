import { CheckCircle2, Truck, Package } from "lucide-react";

const ORDERS = [
  {
    id: 1,
    product: "Mineral Water",
    qty: 2,
    priceEach: 10,
    status: "completed", // redeemed | delivering | completed
  },
  {
    id: 2,
    product: "Mineral Water",
    qty: 4,
    priceEach: 10,
    status: "delivering",
  },
];

const STATUS_STEPS = ["Redeemed", "Delivering", "Completed"];

function getStepIndex(status: string) {
  if (status === "completed") return 2;
  if (status === "delivering") return 1;
  return 0;
}

export default function ProfileOrderPage() {
  return (
    <div className="rounded-3xl p-8 shadow-sm" style={{ background: "white", border: "1px solid rgba(110,172,218,0.2)" }}>
      <h3 className="text-lg font-extrabold mb-6" style={{ fontFamily: "Syne, sans-serif", color: "var(--midnight)" }}>
        Order Status
      </h3>

      <div className="space-y-4">
        {ORDERS.map((order) => {
          const total = order.qty * order.priceEach;
          const stepIndex = getStepIndex(order.status);

          return (
            <div
              key={order.id}
              className="rounded-2xl p-5"
              style={{ background: "rgba(110,172,218,0.12)", border: "1px solid rgba(110,172,218,0.25)" }}
            >
              <div className="flex items-start gap-4">
                {/* Product Image placeholder */}
                <div className="w-16 h-20 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.7)" }}>
                  <span className="text-2xl opacity-25">💧</span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <p className="font-bold text-sm" style={{ fontFamily: "Syne, sans-serif", color: "var(--midnight)" }}>
                      {order.product}
                    </p>
                    <p className="font-bold text-sm shrink-0 ml-4" style={{ fontFamily: "Syne, sans-serif", color: "var(--navy)" }}>
                      $ {order.priceEach}
                    </p>
                  </div>
                  <p className="text-xs opacity-50 mb-4" style={{ fontFamily: "DM Sans, sans-serif" }}>Qty: {order.qty}</p>

                  {/* Status track */}
                  <div className="flex items-center gap-1 flex-wrap">
                    {STATUS_STEPS.map((step, i) => (
                      <div key={step} className="flex items-center gap-1">
                        <div
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                          style={i <= stepIndex
                            ? { background: "var(--navy)", color: "var(--sand)", fontFamily: "DM Sans, sans-serif" }
                            : { background: "rgba(3,52,110,0.08)", color: "rgba(2,21,38,0.4)", fontFamily: "DM Sans, sans-serif" }
                          }
                        >
                          {i === 0 && <Package size={11} />}
                          {i === 1 && <Truck size={11} />}
                          {i === 2 && <CheckCircle2 size={11} />}
                          {step}
                        </div>
                        {i < STATUS_STEPS.length - 1 && (
                          <div className="w-6 h-px" style={{ background: i < stepIndex ? "var(--navy)" : "rgba(3,52,110,0.2)" }} />
                        )}
                      </div>
                    ))}

                    <button
                      className="ml-auto btn-primary text-xs px-3 py-1.5 rounded-lg"
                    >
                      Redeem Again
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-3 flex justify-end" style={{ borderTop: "1px solid rgba(3,52,110,0.1)" }}>
                <span className="text-sm font-bold" style={{ fontFamily: "Syne, sans-serif", color: "var(--midnight)" }}>
                  Total : $ {total}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
