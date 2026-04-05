import { Package, Truck, CheckCircle2, RotateCcw } from "lucide-react";

const ORDERS = [
  { id: 1, product: "Mineral Water", qty: 2, price: 10, status: 2 },
  { id: 2, product: "Mineral Water", qty: 4, price: 10, status: 1 },
];

const STEPS = [
  { label: "Redeemed", icon: Package },
  { label: "Delivering", icon: Truck },
  { label: "Completed", icon: CheckCircle2 },
];

export default function OrderPage() {
  return (
    <div className="card" style={{ padding: 28 }}>
      <div className="badge badge-sky" style={{ marginBottom: 20, fontSize: 9 }}>Order History</div>
      <h2 style={{ fontFamily: "Space Grotesk", fontWeight: 700, fontSize: 18, color: "white", letterSpacing: "-0.01em", marginBottom: 20 }}>Order Status</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {ORDERS.map(order => (
          <div key={order.id} style={{ borderRadius: 10, border: "1px solid var(--border)", overflow: "hidden" }}>

            {/* Order header */}
            <div style={{ padding: "14px 16px", background: "rgba(110,172,218,0.04)", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 44, height: 56, borderRadius: 6, background: "rgba(110,172,218,0.06)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontSize: 20, opacity: 0.2 }}>💧</span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontWeight: 600, fontSize: 14, color: "white", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{order.product}</p>
                <p style={{ fontSize: 12, color: "rgba(110,172,218,0.45)", marginTop: 3 }}>Qty: {order.qty}</p>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <p style={{ fontSize: 10, color: "rgba(110,172,218,0.4)", marginBottom: 2 }}>per item</p>
                <p className="mono" style={{ fontSize: 14, fontWeight: 700, color: "var(--sand)" }}>$ {order.price}</p>
              </div>
            </div>

            {/* Status + total */}
            <div style={{ padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
              {/* Track */}
              <div style={{ display: "flex", alignItems: "center" }}>
                {STEPS.map((step, i) => {
                  const done = i <= order.status;
                  const Icon = step.icon;
                  return (
                    <div key={step.label} style={{ display: "flex", alignItems: "center" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                        <div style={{
                          width: 22, height: 22, borderRadius: "50%",
                          background: done ? "rgba(110,172,218,0.12)" : "transparent",
                          border: `1.5px solid ${done ? "var(--sky)" : "rgba(110,172,218,0.2)"}`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <Icon size={11} color={done ? "var(--sky)" : "rgba(110,172,218,0.25)"} />
                        </div>
                        <span style={{ fontSize: 11, fontWeight: done ? 600 : 400, color: done ? "var(--sky)" : "rgba(110,172,218,0.3)" }}>
                          {step.label}
                        </span>
                      </div>
                      {i < STEPS.length - 1 && (
                        <div style={{ width: 18, height: 1, background: i < order.status ? "var(--sky)" : "rgba(110,172,218,0.15)", margin: "0 6px" }} />
                      )}
                    </div>
                  );
                })}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <button className="btn-ghost" style={{ fontSize: 11, padding: "6px 12px", gap: 5 }}>
                  <RotateCcw size={11} /> Redeem Again
                </button>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontSize: 10, color: "rgba(110,172,218,0.4)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Total</p>
                  <p className="mono" style={{ fontSize: 14, fontWeight: 700, color: "var(--sand)" }}>$ {order.qty * order.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}