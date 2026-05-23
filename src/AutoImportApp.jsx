import { useState, useEffect } from "react";

const VEHICLES = [
  { id: 1, name: "Toyota Camry", year: 2021, price: 8500000, usdPrice: 12500,
    mileage: "32,000 mi", color: "Silver", status: "Available", auction: "Copart", vin: "4T1B11HK...ML049283",
    engine: "2.5L 4-Cylinder", transmission: "8-Speed Automatic", drivetrain: "FWD", seats: 5,
    features: ["Backup Camera", "Apple CarPlay", "Lane Departure Warning", "Adaptive Cruise Control", "Keyless Entry", "Bluetooth"],
    condition: "Clean Title — minor cosmetic wear on rear bumper. Mechanically sound, all systems functional.",
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80",
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    ],
    imageLabels: ["Front View", "Side View", "Rear View", "Interior"],
  },
  { id: 2, name: "Honda Accord", year: 2020, price: 7800000, usdPrice: 11200,
    mileage: "41,000 mi", color: "Black", status: "Available", auction: "IAAI", vin: "1HGCV1F3...LA028471",
    engine: "1.5L Turbo 4-Cylinder", transmission: "CVT Automatic", drivetrain: "FWD", seats: 5,
    features: ["Honda Sensing Suite", "Sunroof", "Heated Seats", "Dual-Zone Climate", "Android Auto", "LED Headlights"],
    condition: "Clean Title — excellent condition throughout. No accidents reported. Regular maintenance history available.",
    images: [
      "https://images.unsplash.com/photo-1606611013004-1a3e0e0e8e1b?w=800&q=80",
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
    ],
    imageLabels: ["Exterior", "Profile", "Dashboard", "Detail"],
  },
  { id: 3, name: "Lexus RX 350", year: 2019, price: 14500000, usdPrice: 21000,
    mileage: "38,000 mi", color: "White", status: "In Our Yard", auction: "Manheim", vin: "2T2BZMCA...KC194582",
    engine: "3.5L V6", transmission: "8-Speed Automatic", drivetrain: "AWD", seats: 5,
    features: ["Mark Levinson Audio", "Panoramic Roof", "Navigation", "Leather Seats", "360° Camera", "Power Liftgate", "Blind Spot Monitor"],
    condition: "Clean Title — premium condition. One owner, garage kept. Full Lexus service records.",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
      "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&q=80",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
    ],
    imageLabels: ["Front", "Side Angle", "Rear Quarter", "Interior"],
  },
  { id: 4, name: "Mercedes GLE 350", year: 2020, price: 18000000, usdPrice: 26000,
    mileage: "29,000 mi", color: "Grey", status: "Available", auction: "Copart", vin: "4JGFB4KE...LA483920",
    engine: "2.0L Turbo 4-Cylinder", transmission: "9-Speed Automatic", drivetrain: "4MATIC AWD", seats: 5,
    features: ["MBUX Infotainment", "Burmester Audio", "Ambient Lighting", "Heated & Ventilated Seats", "Head-Up Display", "Wireless Charging", "Parking Assist"],
    condition: "Clean Title — showroom condition. Certified pre-owned quality. No accidents, no paintwork.",
    images: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80",
      "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
    ],
    imageLabels: ["Front View", "Side Profile", "Interior", "Detail"],
  },
  { id: 5, name: "Toyota Highlander", year: 2021, price: 12000000, usdPrice: 17500,
    mileage: "25,000 mi", color: "Blue", status: "Available", auction: "IAAI", vin: "5TDGZRAH...MS129384",
    engine: "3.5L V6", transmission: "8-Speed Automatic", drivetrain: "AWD", seats: 7,
    features: ["Third Row Seating", "Toyota Safety Sense", "JBL Audio", "Power Moonroof", "Wireless Charging", "Hands-Free Liftgate"],
    condition: "Clean Title — family vehicle in great shape. Minor wear consistent with mileage. All features working.",
    images: [
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80",
    ],
    imageLabels: ["Exterior", "Side View", "Rear", "Cabin"],
  },
  { id: 6, name: "Honda CR-V", year: 2022, price: 9200000, usdPrice: 13400,
    mileage: "18,000 mi", color: "Red", status: "In Our Yard", auction: "Copart", vin: "7FARW2H8...NE048271",
    engine: "1.5L Turbo 4-Cylinder", transmission: "CVT Automatic", drivetrain: "AWD", seats: 5,
    features: ["Honda Sensing", "Heated Seats", "Remote Start", "Apple CarPlay", "Cargo Cover", "Roof Rails"],
    condition: "Clean Title — near-new condition with very low mileage. Single owner, no accidents.",
    images: [
      "https://images.unsplash.com/photo-1568844293986-8616cb5c8bdf?w=800&q=80",
      "https://images.unsplash.com/photo-1625231334168-29488f4ef4e0?w=800&q=80",
      "https://images.unsplash.com/photo-1612825173281-9a193378527e?w=800&q=80",
      "https://images.unsplash.com/photo-1547245324-d777c6f05e80?w=800&q=80",
    ],
    imageLabels: ["Front Angle", "Profile", "Rear Angle", "Interior"],
  },
  { id: 7, name: "Toyota RAV4", year: 2022, price: 10800000, usdPrice: 15800,
    mileage: "22,000 mi", color: "Midnight Black", status: "Available", auction: "Copart", vin: "2T3P1RFV...NW284710",
    engine: "2.5L 4-Cylinder", transmission: "8-Speed Automatic", drivetrain: "AWD", seats: 5,
    features: ["Toyota Safety Sense 2.0", "Wireless Charging", "JBL Audio", "Power Liftgate", "Heated Steering Wheel", "LED Fog Lights"],
    condition: "Clean Title — excellent overall condition. Single owner, full service history.",
    images: [
      "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800&q=80",
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80",
    ],
    imageLabels: ["Front Angle", "Side View", "Rear", "Interior"],
  },
  { id: 8, name: "Lexus ES 350", year: 2021, price: 11500000, usdPrice: 16800,
    mileage: "28,000 mi", color: "Eminent White", status: "In Our Yard", auction: "IAAI", vin: "58ABZ1B1...MU039471",
    engine: "3.5L V6", transmission: "8-Speed Automatic", drivetrain: "FWD", seats: 5,
    features: ["Mark Levinson Audio", "Panoramic Roof", "Navigation", "Leather Seats", "Blind Spot Monitor", "Adaptive Cruise"],
    condition: "Clean Title — pristine condition inside and out. One careful owner.",
    images: [
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&q=80",
      "https://images.unsplash.com/photo-1486496146582-9a526862de70?w=800&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    ],
    imageLabels: ["Exterior", "Side Profile", "Detail", "Interior"],
  },
];

const TRACKING = [
  { id: "TRK-2847", vehicle: "Toyota Camry 2021", steps: [
    { label: "Auction Won", done: true, date: "Apr 12" },
    { label: "Inspection Complete", done: true, date: "Apr 15" },
    { label: "Shipped from US", done: true, date: "Apr 22" },
    { label: "In Transit", done: true, date: "May 3" },
    { label: "Arrived at Port", done: false, date: "Est. May 28" },
    { label: "Customs Cleared", done: false, date: "Est. Jun 5" },
    { label: "Delivered", done: false, date: "Est. Jun 10" },
  ]},
  { id: "TRK-1935", vehicle: "Lexus RX 350 2019", steps: [
    { label: "Auction Won", done: true, date: "Mar 28" },
    { label: "Inspection Complete", done: true, date: "Apr 1" },
    { label: "Shipped from US", done: true, date: "Apr 8" },
    { label: "In Transit", done: true, date: "Apr 15" },
    { label: "Arrived at Port", done: true, date: "May 10" },
    { label: "Customs Clearing", done: true, date: "May 16" },
    { label: "Delivered", done: false, date: "Est. May 22" },
  ]},
];

const fmt = (n) => "\u20A6" + n.toLocaleString();

export default function App() {
  const [tab, setTab] = useState("home");
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [downPct, setDownPct] = useState(50);
  const [tenor, setTenor] = useState(12);
  const [financeStep, setFinanceStep] = useState(0);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", employer: "", salary: "", bvn: "" });
  const [submitted, setSubmitted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [fadeIn, setFadeIn] = useState(true);
  const [requestData, setRequestData] = useState({ year: "", make: "", model: "", trim: "", maxBudget: "", color: "", maxMileage: "", features: "", name: "", phone: "", notes: "" });
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [requestStep, setRequestStep] = useState(0);
  const [walletBalance, setWalletBalance] = useState(2450000);
  const [showFundWallet, setShowFundWallet] = useState(false);
  const [fundMethod, setFundMethod] = useState(null);
  const [fundAmount, setFundAmount] = useState("");
  const [showCryptoDetails, setShowCryptoDetails] = useState(null);
  const [fundSuccess, setFundSuccess] = useState(false);
  const [walletTab, setWalletTab] = useState("wallet");
  const TRANSACTIONS = [
    { id: "TXN-4821", type: "credit", method: "Paystack", amount: 2000000, date: "May 18, 2026", desc: "Wallet top-up via bank transfer" },
    { id: "TXN-4790", type: "debit", method: "Vehicle", amount: 4250000, date: "May 15, 2026", desc: "Down payment — Toyota Camry 2021" },
    { id: "TXN-4763", type: "credit", method: "Crypto", amount: 4700000, date: "May 12, 2026", desc: "Wallet top-up via USDT" },
    { id: "TXN-4710", type: "debit", method: "Vehicle", amount: 350000, date: "May 8, 2026", desc: "Clearing & delivery fee" },
  ];

  useEffect(() => {
    setFadeIn(false);
    const t = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(t);
  }, [tab, selectedVehicle, selectedTrack]);

  const filteredVehicles = VEHICLES.filter(v =>
    v.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const styles = {
    app: {
      width: "100%", maxWidth: 430, margin: "0 auto", minHeight: "100vh",
      background: "#0A0E17", fontFamily: "'DM Sans', sans-serif", position: "relative",
      display: "flex", flexDirection: "column", overflow: "hidden",
    },
    content: {
      flex: 1, overflowY: "auto", paddingBottom: 90,
      opacity: fadeIn ? 1 : 0, transform: fadeIn ? "translateY(0)" : "translateY(8px)",
      transition: "opacity 0.3s ease, transform 0.3s ease",
    },
    nav: {
      position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)",
      width: "100%", maxWidth: 430, display: "flex", justifyContent: "space-around",
      background: "linear-gradient(180deg, rgba(10,14,23,0.85) 0%, #0A0E17 40%)",
      backdropFilter: "blur(20px)", padding: "12px 0 20px", zIndex: 100,
      borderTop: "1px solid rgba(212,175,55,0.1)",
    },
    navItem: (active) => ({
      display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
      background: "none", border: "none", cursor: "pointer", padding: "4px 12px",
      color: active ? "#D4AF37" : "#5A6070", fontSize: 10, fontWeight: active ? 700 : 500,
      transition: "all 0.2s ease", letterSpacing: 0.5,
    }),
    navIcon: (active) => ({
      fontSize: 22, filter: active ? "drop-shadow(0 0 8px rgba(212,175,55,0.5))" : "none",
      transition: "all 0.2s ease", transform: active ? "scale(1.1)" : "scale(1)",
    }),
  };

  // =========== HOME SCREEN ===========
  const HomeScreen = () => (
    <div style={{ padding: "0 20px" }}>
      <div style={{ paddingTop: 50, marginBottom: 24 }}>
        <p style={{ color: "#5A6070", fontSize: 13, marginBottom: 4, letterSpacing: 1, textTransform: "uppercase" }}>Welcome to</p>
        <h1 style={{ color: "#fff", fontSize: 28, fontWeight: 800, margin: 0, letterSpacing: -0.5 }}>
          Auto<span style={{ color: "#D4AF37" }}>Import</span>
        </h1>
        <p style={{ color: "#7A8090", fontSize: 14, marginTop: 6 }}>Premium US vehicles, delivered to your door</p>
      </div>

      <div style={{
        display: "flex", alignItems: "center", gap: 10, background: "#12172A",
        borderRadius: 14, padding: "12px 16px", marginBottom: 24,
        border: "1px solid rgba(212,175,55,0.15)",
      }}>
        <span style={{ color: "#5A6070", fontSize: 18 }}>{"\uD83D\uDD0D"}</span>
        <input placeholder="Search vehicles..." value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          style={{ background: "none", border: "none", outline: "none", color: "#fff", fontSize: 15, flex: 1, fontFamily: "inherit" }}
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
        {[
          { icon: "\uD83D\uDE97", label: "Browse", count: `${VEHICLES.length} cars`, action: () => {} },
          { icon: "\uD83D\uDCCD", label: "Track", count: `${TRACKING.length} active`, action: () => setTab("track") },
          { icon: "\uD83D\uDD0E", label: "Request", count: "Custom order", action: () => setTab("request") },
          { icon: "\uD83D\uDCB3", label: "Finance", count: "Apply now", action: () => setTab("finance") },
        ].map((item, i) => (
          <button key={i} onClick={item.action} style={{
            background: "linear-gradient(135deg, #12172A 0%, #1A2035 100%)",
            border: "1px solid rgba(212,175,55,0.12)", borderRadius: 16, padding: "18px 12px",
            cursor: "pointer", textAlign: "center",
          }}>
            <div style={{ fontSize: 26, marginBottom: 6 }}>{item.icon}</div>
            <div style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>{item.label}</div>
            <div style={{ color: "#D4AF37", fontSize: 11, marginTop: 4 }}>{item.count}</div>
          </button>
        ))}
      </div>

      {/* Info banner */}
      <div style={{
        background: "rgba(46,204,113,0.06)", borderRadius: 12, padding: "12px 16px", marginBottom: 18,
        border: "1px solid rgba(46,204,113,0.12)",
      }}>
        <p style={{ color: "#B0B8C4", fontSize: 12, margin: 0, lineHeight: 1.5 }}>
          {"\u26A1"} These vehicles are already secured and inspected in the US. Pay and we ship immediately. Can't find what you want? <span onClick={() => setTab("request")} style={{ color: "#D4AF37", fontWeight: 700, cursor: "pointer", textDecoration: "underline" }}>Request a custom order</span> and we'll source it at auction.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <h2 style={{ color: "#fff", fontSize: 18, fontWeight: 700, margin: 0 }}>Vehicles for Sale</h2>
        <span style={{ color: "#D4AF37", fontSize: 12, fontWeight: 600 }}>{filteredVehicles.length} available</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {filteredVehicles.map(v => (
          <button key={v.id} onClick={() => { setSelectedVehicle(v); setActiveImgIdx(0); }} style={{
            background: "linear-gradient(135deg, #12172A 0%, #161D30 100%)",
            border: "1px solid rgba(212,175,55,0.08)", borderRadius: 18,
            padding: 0, cursor: "pointer", textAlign: "left", overflow: "hidden",
          }}>
            <div style={{ width: "100%", height: 180, position: "relative", overflow: "hidden" }}>
              <img src={v.images[0]} alt={v.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(transparent, rgba(10,14,23,0.9))" }} />
              <span style={{
                position: "absolute", top: 10, right: 10,
                background: v.status === "In Our Yard" ? "rgba(46,204,113,0.9)" : "rgba(52,152,219,0.9)",
                color: "#fff", fontSize: 11, padding: "4px 12px", borderRadius: 20, fontWeight: 600,
              }}>{v.status}</span>
              <span style={{
                position: "absolute", top: 10, left: 10,
                background: "rgba(10,14,23,0.7)", color: "#D4AF37", fontSize: 11,
                padding: "4px 10px", borderRadius: 20, fontWeight: 600,
              }}>{v.images.length} photos</span>
            </div>
            <div style={{ padding: "14px 16px 16px" }}>
              <div style={{ color: "#fff", fontSize: 16, fontWeight: 700 }}>{v.year} {v.name}</div>
              <div style={{ color: "#7A8090", fontSize: 12, marginTop: 4 }}>{v.mileage} · {v.color} · {v.engine}</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
                <span style={{ color: "#D4AF37", fontSize: 17, fontWeight: 800 }}>{fmt(v.price)}</span>
                <span style={{ color: "#5A6070", fontSize: 12 }}>Sourced from {v.auction}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* CTA for custom request */}
      <div style={{
        background: "linear-gradient(135deg, #1A1F35 0%, #12172A 100%)",
        borderRadius: 18, padding: 24, marginTop: 20, textAlign: "center",
        border: "1px solid rgba(212,175,55,0.15)",
      }}>
        <div style={{ fontSize: 36, marginBottom: 10 }}>{"\uD83D\uDD0E"}</div>
        <h3 style={{ color: "#fff", fontSize: 17, fontWeight: 700, margin: "0 0 8px" }}>Don't see what you want?</h3>
        <p style={{ color: "#7A8090", fontSize: 13, margin: "0 0 16px", lineHeight: 1.5 }}>
          Tell us the exact year, make, and model and we'll source it from US auctions within 3-7 days.
        </p>
        <button onClick={() => setTab("request")} style={{
          background: "linear-gradient(135deg, #D4AF37, #B8962E)", border: "none",
          borderRadius: 14, padding: "14px 32px", color: "#0A0E17",
          fontSize: 14, fontWeight: 800, cursor: "pointer",
        }}>Request a Custom Order</button>
      </div>
    </div>
  );

  // =========== VEHICLE DETAIL ===========
  const VehicleDetail = () => {
    const v = selectedVehicle;
    const downPayment = Math.round(v.price * (downPct / 100));
    const loanAmount = v.price - downPayment;
    const monthlyRate = 0.025;
    const monthly = Math.round((loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenor)) / (Math.pow(1 + monthlyRate, tenor) - 1));

    return (
      <div>
        {/* Image Gallery */}
        <div style={{ position: "relative", width: "100%", height: 280, overflow: "hidden" }}>
          <img src={v.images[activeImgIdx]} alt={v.imageLabels[activeImgIdx]} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.3s ease" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(transparent, rgba(10,14,23,0.95))" }} />
          <button onClick={() => { setSelectedVehicle(null); setActiveImgIdx(0); }} style={{
            position: "absolute", top: 44, left: 16, background: "rgba(10,14,23,0.6)",
            border: "none", borderRadius: 12, padding: "10px 14px", cursor: "pointer",
            color: "#fff", fontSize: 14, backdropFilter: "blur(8px)", fontFamily: "inherit",
          }}>{"\u2190"} Back</button>
          <div style={{
            position: "absolute", top: 44, right: 16, background: "rgba(10,14,23,0.6)",
            borderRadius: 20, padding: "6px 14px", color: "#fff", fontSize: 12, fontWeight: 600,
          }}>{activeImgIdx + 1} / {v.images.length}</div>
          {activeImgIdx > 0 && (
            <button onClick={() => setActiveImgIdx(activeImgIdx - 1)} style={{
              position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)",
              background: "rgba(10,14,23,0.5)", border: "none", borderRadius: "50%",
              width: 40, height: 40, cursor: "pointer", color: "#fff", fontSize: 20,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>{"\u2039"}</button>
          )}
          {activeImgIdx < v.images.length - 1 && (
            <button onClick={() => setActiveImgIdx(activeImgIdx + 1)} style={{
              position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
              background: "rgba(10,14,23,0.5)", border: "none", borderRadius: "50%",
              width: 40, height: 40, cursor: "pointer", color: "#fff", fontSize: 20,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>{"\u203A"}</button>
          )}
          <div style={{ position: "absolute", bottom: 14, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6 }}>
            {v.images.map((_, i) => (
              <button key={i} onClick={() => setActiveImgIdx(i)} style={{
                width: i === activeImgIdx ? 20 : 8, height: 8, borderRadius: 4, padding: 0,
                background: i === activeImgIdx ? "#D4AF37" : "rgba(255,255,255,0.4)",
                border: "none", cursor: "pointer", transition: "all 0.3s ease",
              }} />
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div style={{ display: "flex", gap: 8, padding: "12px 20px", overflowX: "auto" }}>
          {v.images.map((img, i) => (
            <button key={i} onClick={() => setActiveImgIdx(i)} style={{
              width: 70, height: 52, borderRadius: 10, overflow: "hidden", flexShrink: 0, padding: 0,
              border: i === activeImgIdx ? "2px solid #D4AF37" : "2px solid transparent",
              cursor: "pointer", opacity: i === activeImgIdx ? 1 : 0.5, transition: "all 0.2s ease",
            }}>
              <img src={img} alt={v.imageLabels[i]} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </button>
          ))}
        </div>

        <div style={{ padding: "0 20px" }}>
          {/* Status badge + title */}
          <div style={{ marginBottom: 16 }}>
            <span style={{
              background: v.status === "In Our Yard" ? "rgba(46,204,113,0.15)" : "rgba(52,152,219,0.15)",
              color: v.status === "In Our Yard" ? "#2ecc71" : "#3498db",
              fontSize: 11, padding: "4px 12px", borderRadius: 20, fontWeight: 700,
            }}>{v.status}</span>
            <h1 style={{ color: "#fff", fontSize: 24, fontWeight: 800, margin: "8px 0 4px" }}>{v.year} {v.name}</h1>
            <p style={{ color: "#D4AF37", fontSize: 22, fontWeight: 800, margin: "0 0 6px" }}>{fmt(v.price)}</p>
            <p style={{ color: "#5A6070", fontSize: 12, margin: 0 }}>VIN: {v.vin}</p>
          </div>

          {/* Key specs */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 20 }}>
            {[
              { label: "Mileage", value: v.mileage, icon: "\uD83D\uDEE3\uFE0F" },
              { label: "Engine", value: v.engine.split(" ")[0], icon: "\u2699\uFE0F" },
              { label: "Seats", value: v.seats, icon: "\uD83D\uDCBA" },
            ].map((item, i) => (
              <div key={i} style={{
                background: "#12172A", borderRadius: 14, padding: "12px 10px", textAlign: "center",
                border: "1px solid rgba(212,175,55,0.08)",
              }}>
                <div style={{ fontSize: 20, marginBottom: 4 }}>{item.icon}</div>
                <div style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>{item.value}</div>
                <div style={{ color: "#5A6070", fontSize: 10, marginTop: 2, textTransform: "uppercase", letterSpacing: 0.5 }}>{item.label}</div>
              </div>
            ))}
          </div>

          {/* Vehicle Details */}
          <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Vehicle Details</h3>
          <div style={{ background: "#12172A", borderRadius: 16, padding: 16, border: "1px solid rgba(212,175,55,0.08)", marginBottom: 20 }}>
            {[
              { label: "Color", value: v.color },
              { label: "Engine", value: v.engine },
              { label: "Transmission", value: v.transmission },
              { label: "Drivetrain", value: v.drivetrain },
              { label: "Sourced From", value: v.auction },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                <span style={{ color: "#7A8090", fontSize: 13 }}>{item.label}</span>
                <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>{item.value}</span>
              </div>
            ))}
          </div>

          {/* Condition Report */}
          <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 12 }}>{"\uD83D\uDCCB"} Condition Report</h3>
          <div style={{ background: "rgba(46,204,113,0.06)", borderRadius: 14, padding: 16, border: "1px solid rgba(46,204,113,0.12)", marginBottom: 20 }}>
            <span style={{ background: "rgba(46,204,113,0.2)", color: "#2ecc71", fontSize: 11, padding: "3px 10px", borderRadius: 20, fontWeight: 700 }}>Clean Title</span>
            <p style={{ color: "#B0B8C4", fontSize: 13, lineHeight: 1.6, margin: "10px 0 0" }}>{v.condition}</p>
          </div>

          {/* Features */}
          <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 12 }}>{"\u2728"} Features & Equipment</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
            {v.features.map((f, i) => (
              <span key={i} style={{
                background: "#12172A", border: "1px solid rgba(212,175,55,0.1)",
                borderRadius: 10, padding: "8px 14px", color: "#C8CED6", fontSize: 12, fontWeight: 500,
              }}>{"\u2713"} {f}</span>
            ))}
          </div>

          {/* Cost Breakdown */}
          <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 12 }}>{"\uD83D\uDCB0"} Total Cost Breakdown</h3>
          <div style={{ background: "#12172A", borderRadius: 16, padding: 16, border: "1px solid rgba(212,175,55,0.08)", marginBottom: 24 }}>
            {[
              { label: "Vehicle Price (USD)", value: `$${v.usdPrice.toLocaleString()}` },
              { label: "Auction Fees", value: `$${Math.round(v.usdPrice * 0.08).toLocaleString()}` },
              { label: "Shipping (RoRo)", value: "$1,800" },
              { label: "Marine Insurance", value: `$${Math.round(v.usdPrice * 0.015).toLocaleString()}` },
              { label: "Customs Duty", value: fmt(Math.round(v.price * 0.15)) },
              { label: "Clearing & Delivery", value: fmt(350000) },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: i < 5 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                <span style={{ color: "#7A8090", fontSize: 13 }}>{item.label}</span>
                <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>{item.value}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 0 4px", borderTop: "1px solid rgba(212,175,55,0.2)", marginTop: 4 }}>
              <span style={{ color: "#D4AF37", fontSize: 15, fontWeight: 700 }}>Total Landed Cost</span>
              <span style={{ color: "#D4AF37", fontSize: 15, fontWeight: 800 }}>{fmt(v.price)}</span>
            </div>
          </div>

          {/* Financing Calculator */}
          <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 12 }}>{"\uD83D\uDCB3"} Financing Calculator</h3>
          <div style={{ background: "linear-gradient(135deg, #1A1F35 0%, #12172A 100%)", borderRadius: 16, padding: 20, border: "1px solid rgba(212,175,55,0.15)", marginBottom: 24 }}>
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ color: "#7A8090", fontSize: 13 }}>Down Payment</span>
                <span style={{ color: "#D4AF37", fontSize: 14, fontWeight: 700 }}>{downPct}% — {fmt(downPayment)}</span>
              </div>
              <input type="range" min={40} max={70} value={downPct} onChange={e => setDownPct(+e.target.value)} style={{ width: "100%", accentColor: "#D4AF37" }} />
            </div>
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ color: "#7A8090", fontSize: 13 }}>Loan Tenor</span>
                <span style={{ color: "#D4AF37", fontSize: 14, fontWeight: 700 }}>{tenor} months</span>
              </div>
              <input type="range" min={6} max={24} step={3} value={tenor} onChange={e => setTenor(+e.target.value)} style={{ width: "100%", accentColor: "#D4AF37" }} />
            </div>
            <div style={{ background: "rgba(212,175,55,0.08)", borderRadius: 12, padding: 16, textAlign: "center", border: "1px solid rgba(212,175,55,0.2)" }}>
              <div style={{ color: "#7A8090", fontSize: 12, marginBottom: 4 }}>Estimated Monthly Payment</div>
              <div style={{ color: "#D4AF37", fontSize: 28, fontWeight: 800 }}>{fmt(monthly)}</div>
              <div style={{ color: "#5A6070", fontSize: 11, marginTop: 4 }}>Loan amount: {fmt(loanAmount)}</div>
            </div>
          </div>

          {/* CTA */}
          <div style={{ display: "flex", gap: 12, marginBottom: 30 }}>
            <button onClick={() => { setTab("finance"); setSelectedVehicle(null); }} style={{
              flex: 1, background: "linear-gradient(135deg, #D4AF37 0%, #B8962E 100%)",
              border: "none", borderRadius: 14, padding: "16px 0", color: "#0A0E17",
              fontSize: 15, fontWeight: 800, cursor: "pointer",
            }}>{"\u26A1"} Buy Now / Apply for Financing</button>
            <button style={{
              width: 52, background: "#12172A", border: "1px solid rgba(212,175,55,0.2)",
              borderRadius: 14, cursor: "pointer", fontSize: 22, display: "flex", alignItems: "center", justifyContent: "center",
            }}>{"\uD83D\uDCDE"}</button>
          </div>
        </div>
      </div>
    );
  };

  // =========== TRACK SCREEN ===========
  const TrackScreen = () => (
    <div style={{ padding: "0 20px" }}>
      <div style={{ paddingTop: 50, marginBottom: 24 }}>
        <h1 style={{ color: "#fff", fontSize: 24, fontWeight: 800, margin: "0 0 6px" }}>Track Shipment</h1>
        <p style={{ color: "#7A8090", fontSize: 14 }}>Monitor your vehicle from auction to delivery</p>
      </div>
      {!selectedTrack ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {TRACKING.map(t => {
            const doneCount = t.steps.filter(s => s.done).length;
            const pct = Math.round((doneCount / t.steps.length) * 100);
            return (
              <button key={t.id} onClick={() => setSelectedTrack(t)} style={{
                background: "linear-gradient(135deg, #12172A 0%, #161D30 100%)",
                border: "1px solid rgba(212,175,55,0.08)", borderRadius: 18, padding: 20, cursor: "pointer", textAlign: "left",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ color: "#D4AF37", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>{t.id}</span>
                  <span style={{
                    background: pct === 100 ? "rgba(46,204,113,0.15)" : "rgba(212,175,55,0.12)",
                    color: pct === 100 ? "#2ecc71" : "#D4AF37", fontSize: 11, padding: "3px 10px", borderRadius: 20, fontWeight: 600,
                  }}>{pct}% Complete</span>
                </div>
                <div style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 12 }}>{t.vehicle}</div>
                <div style={{ background: "#0A0E17", borderRadius: 10, height: 6, overflow: "hidden" }}>
                  <div style={{ width: `${pct}%`, height: "100%", borderRadius: 10, background: "linear-gradient(90deg, #D4AF37, #F0D060)" }} />
                </div>
              </button>
            );
          })}
          <div style={{ background: "#12172A", borderRadius: 16, padding: 20, textAlign: "center", border: "1px dashed rgba(212,175,55,0.2)", marginTop: 10 }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>{"\uD83D\uDD0D"}</div>
            <p style={{ color: "#7A8090", fontSize: 14 }}>Have a tracking ID?</p>
            <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
              <input placeholder="Enter tracking ID" style={{
                flex: 1, background: "#0A0E17", border: "1px solid rgba(212,175,55,0.15)",
                borderRadius: 10, padding: "12px 14px", color: "#fff", fontSize: 14, fontFamily: "inherit", outline: "none",
              }} />
              <button style={{ background: "#D4AF37", border: "none", borderRadius: 10, padding: "0 20px", color: "#0A0E17", fontWeight: 700, cursor: "pointer" }}>Track</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => setSelectedTrack(null)} style={{ background: "none", border: "none", color: "#D4AF37", cursor: "pointer", fontSize: 14, padding: "0 0 20px", fontFamily: "inherit" }}>{"\u2190"} Back to shipments</button>
          <div style={{ background: "#12172A", borderRadius: 18, padding: 20, border: "1px solid rgba(212,175,55,0.1)", marginBottom: 20 }}>
            <div style={{ color: "#D4AF37", fontSize: 12, fontWeight: 700, letterSpacing: 1, marginBottom: 4 }}>{selectedTrack.id}</div>
            <div style={{ color: "#fff", fontSize: 20, fontWeight: 800 }}>{selectedTrack.vehicle}</div>
          </div>
          <div style={{ position: "relative", paddingLeft: 28 }}>
            {selectedTrack.steps.map((step, i) => {
              const isLast = i === selectedTrack.steps.length - 1;
              const isCurrent = step.done && (isLast || !selectedTrack.steps[i + 1].done);
              return (
                <div key={i} style={{ position: "relative", paddingBottom: isLast ? 0 : 32 }}>
                  {!isLast && <div style={{ position: "absolute", left: -19, top: 24, width: 2, bottom: 0, background: step.done ? "linear-gradient(180deg, #D4AF37, rgba(212,175,55,0.2))" : "rgba(255,255,255,0.06)" }} />}
                  <div style={{
                    position: "absolute", left: -28, top: 2, width: 20, height: 20, borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: step.done ? (isCurrent ? "linear-gradient(135deg, #D4AF37, #F0D060)" : "#D4AF37") : "#1A2035",
                    border: step.done ? "none" : "2px solid #2A3045",
                    boxShadow: isCurrent ? "0 0 12px rgba(212,175,55,0.5)" : "none",
                    fontSize: 10, color: step.done ? "#0A0E17" : "#5A6070", fontWeight: 800,
                  }}>{step.done ? "\u2713" : i + 1}</div>
                  <div>
                    <div style={{ color: step.done ? "#fff" : "#5A6070", fontSize: 15, fontWeight: step.done ? 700 : 500 }}>{step.label}</div>
                    <div style={{ color: isCurrent ? "#D4AF37" : "#5A6070", fontSize: 12, marginTop: 3, fontWeight: isCurrent ? 600 : 400 }}>{step.date}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ background: "rgba(212,175,55,0.06)", borderRadius: 14, padding: 16, marginTop: 28, border: "1px solid rgba(212,175,55,0.12)" }}>
            <div style={{ color: "#D4AF37", fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{"\uD83D\uDCCB"} Shipment Details</div>
            {[
              { l: "Shipping Method", v: "Roll-on/Roll-off (RoRo)" },
              { l: "Origin Port", v: "Houston, TX" },
              { l: "Destination Port", v: "Tin Can Island, Lagos" },
              { l: "Marine Insurance", v: "Active \u2713" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                <span style={{ color: "#7A8090", fontSize: 13 }}>{item.l}</span>
                <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>{item.v}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  // =========== FINANCE SCREEN ===========
  const FinanceScreen = () => {
    if (submitted) {
      return (
        <div style={{ padding: "0 20px", paddingTop: 80, textAlign: "center" }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", margin: "0 auto 24px", background: "linear-gradient(135deg, #D4AF37, #F0D060)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40 }}>{"\u2713"}</div>
          <h2 style={{ color: "#fff", fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Application Submitted!</h2>
          <p style={{ color: "#7A8090", fontSize: 14, lineHeight: 1.6, marginBottom: 30 }}>Our team will review your details and contact you within 24-48 hours.</p>
          <div style={{ background: "#12172A", borderRadius: 14, padding: 16, textAlign: "left", border: "1px solid rgba(212,175,55,0.1)", marginBottom: 24 }}>
            <div style={{ color: "#D4AF37", fontSize: 12, fontWeight: 700, marginBottom: 8 }}>Reference: FIN-{Math.floor(Math.random() * 9000 + 1000)}</div>
            <div style={{ color: "#7A8090", fontSize: 13 }}>You will receive a confirmation SMS and email shortly.</div>
          </div>
          <button onClick={() => { setSubmitted(false); setFinanceStep(0); setTab("home"); }} style={{
            background: "linear-gradient(135deg, #D4AF37, #B8962E)", border: "none", borderRadius: 14, padding: "16px 40px", color: "#0A0E17", fontSize: 15, fontWeight: 800, cursor: "pointer",
          }}>Back to Home</button>
        </div>
      );
    }
    const steps = ["Personal Info", "Employment", "Review"];
    return (
      <div style={{ padding: "0 20px" }}>
        <div style={{ paddingTop: 50, marginBottom: 24 }}>
          <h1 style={{ color: "#fff", fontSize: 24, fontWeight: 800, margin: "0 0 6px" }}>Apply for Financing</h1>
          <p style={{ color: "#7A8090", fontSize: 14 }}>Get approved in as little as 48 hours</p>
        </div>
        <div style={{ display: "flex", gap: 8, marginBottom: 28 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ flex: 1, textAlign: "center" }}>
              <div style={{ height: 4, borderRadius: 4, marginBottom: 8, background: i <= financeStep ? "linear-gradient(90deg, #D4AF37, #F0D060)" : "rgba(255,255,255,0.06)" }} />
              <span style={{ color: i <= financeStep ? "#D4AF37" : "#5A6070", fontSize: 11, fontWeight: i === financeStep ? 700 : 500 }}>{s}</span>
            </div>
          ))}
        </div>
        {financeStep === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[{ key: "name", label: "Full Name", ph: "Enter your full name", type: "text" }, { key: "phone", label: "Phone Number", ph: "+234 xxx xxx xxxx", type: "tel" }, { key: "email", label: "Email Address", ph: "your@email.com", type: "email" }, { key: "bvn", label: "BVN", ph: "Bank Verification Number", type: "text" }].map(f => (
              <div key={f.key}>
                <label style={{ color: "#7A8090", fontSize: 12, display: "block", marginBottom: 6 }}>{f.label}</label>
                <input type={f.type} placeholder={f.ph} value={formData[f.key]} onChange={e => setFormData({ ...formData, [f.key]: e.target.value })}
                  style={{ width: "100%", boxSizing: "border-box", background: "#12172A", border: "1px solid rgba(212,175,55,0.15)", borderRadius: 12, padding: "14px 16px", color: "#fff", fontSize: 15, fontFamily: "inherit", outline: "none" }} />
              </div>
            ))}
          </div>
        )}
        {financeStep === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[{ key: "employer", label: "Employer / Business Name", ph: "Company name" }, { key: "salary", label: "Monthly Income (\u20A6)", ph: "e.g. 500,000" }].map(f => (
              <div key={f.key}>
                <label style={{ color: "#7A8090", fontSize: 12, display: "block", marginBottom: 6 }}>{f.label}</label>
                <input placeholder={f.ph} value={formData[f.key]} onChange={e => setFormData({ ...formData, [f.key]: e.target.value })}
                  style={{ width: "100%", boxSizing: "border-box", background: "#12172A", border: "1px solid rgba(212,175,55,0.15)", borderRadius: 12, padding: "14px 16px", color: "#fff", fontSize: 15, fontFamily: "inherit", outline: "none" }} />
              </div>
            ))}
            <div>
              <label style={{ color: "#7A8090", fontSize: 12, display: "block", marginBottom: 6 }}>Employment Type</label>
              <div style={{ display: "flex", gap: 10 }}>
                {["Salaried", "Self-Employed", "Civil Servant"].map(t => (
                  <button key={t} style={{ flex: 1, padding: "12px 0", borderRadius: 10, border: "1px solid rgba(212,175,55,0.2)", background: "#12172A", color: "#fff", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>{t}</button>
                ))}
              </div>
            </div>
            <div style={{ background: "rgba(212,175,55,0.06)", borderRadius: 12, padding: 14, border: "1px solid rgba(212,175,55,0.12)", marginTop: 8 }}>
              <p style={{ color: "#7A8090", fontSize: 12, lineHeight: 1.5, margin: 0 }}>{"\uD83D\uDCCE"} Documents needed: valid government ID, proof of income, utility bill, and passport photo.</p>
            </div>
          </div>
        )}
        {financeStep === 2 && (
          <div>
            <div style={{ background: "#12172A", borderRadius: 16, padding: 20, border: "1px solid rgba(212,175,55,0.1)" }}>
              <h3 style={{ color: "#D4AF37", fontSize: 14, fontWeight: 700, marginTop: 0, marginBottom: 16 }}>Application Summary</h3>
              {[{ l: "Full Name", v: formData.name || "\u2014" }, { l: "Phone", v: formData.phone || "\u2014" }, { l: "Email", v: formData.email || "\u2014" }, { l: "BVN", v: formData.bvn || "\u2014" }, { l: "Employer", v: formData.employer || "\u2014" }, { l: "Monthly Income", v: formData.salary ? `\u20A6${formData.salary}` : "\u2014" }].map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: i < 5 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                  <span style={{ color: "#7A8090", fontSize: 13 }}>{item.l}</span>
                  <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>{item.v}</span>
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(46,204,113,0.08)", borderRadius: 12, padding: 14, marginTop: 16, border: "1px solid rgba(46,204,113,0.15)" }}>
              <p style={{ color: "#7A8090", fontSize: 12, lineHeight: 1.5, margin: 0 }}>{"\u2713"} By submitting, you authorize us to share your information with our banking partner for loan processing.</p>
            </div>
          </div>
        )}
        <div style={{ display: "flex", gap: 12, marginTop: 28, marginBottom: 20 }}>
          {financeStep > 0 && <button onClick={() => setFinanceStep(financeStep - 1)} style={{ flex: 1, padding: "16px 0", borderRadius: 14, border: "1px solid rgba(212,175,55,0.3)", background: "none", color: "#D4AF37", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>Back</button>}
          <button onClick={() => { if (financeStep < 2) setFinanceStep(financeStep + 1); else setSubmitted(true); }} style={{
            flex: 1, padding: "16px 0", borderRadius: 14, border: "none", background: "linear-gradient(135deg, #D4AF37, #B8962E)", color: "#0A0E17", fontSize: 15, fontWeight: 800, cursor: "pointer", fontFamily: "inherit",
          }}>{financeStep < 2 ? "Continue" : "Submit Application"}</button>
        </div>
      </div>
    );
  };

  // =========== REQUEST SCREEN ===========
  const POPULAR_MAKES = ["Toyota", "Honda", "Lexus", "Mercedes-Benz", "BMW", "Hyundai", "Kia", "Ford", "Chevrolet", "Nissan"];
  const YEAR_OPTIONS = Array.from({ length: 10 }, (_, i) => String(2026 - i));

  const RequestScreen = () => {
    if (requestSubmitted) {
      return (
        <div style={{ padding: "0 20px", paddingTop: 80, textAlign: "center" }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", margin: "0 auto 24px", background: "linear-gradient(135deg, #D4AF37, #F0D060)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40 }}>{"\u2713"}</div>
          <h2 style={{ color: "#fff", fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Request Submitted!</h2>
          <p style={{ color: "#7A8090", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>We'll search US auctions for your {requestData.year} {requestData.make} {requestData.model} and notify you when we find a match.</p>
          <div style={{ background: "#12172A", borderRadius: 14, padding: 16, textAlign: "left", border: "1px solid rgba(212,175,55,0.1)", marginBottom: 24 }}>
            <div style={{ color: "#D4AF37", fontSize: 12, fontWeight: 700, marginBottom: 8 }}>Reference: REQ-{Math.floor(Math.random() * 9000 + 1000)}</div>
            <div style={{ color: "#7A8090", fontSize: 13, lineHeight: 1.5 }}>Typical turnaround is 3-7 days. We'll contact you with photos, condition reports, and full pricing.</div>
          </div>
          <button onClick={() => { setRequestSubmitted(false); setRequestStep(0); setRequestData({ year: "", make: "", model: "", trim: "", maxBudget: "", color: "", maxMileage: "", features: "", name: "", phone: "", notes: "" }); }} style={{
            background: "linear-gradient(135deg, #D4AF37, #B8962E)", border: "none", borderRadius: 14, padding: "16px 30px", color: "#0A0E17", fontSize: 15, fontWeight: 800, cursor: "pointer", marginRight: 10,
          }}>Submit Another</button>
          <button onClick={() => { setRequestSubmitted(false); setRequestStep(0); setTab("home"); }} style={{
            background: "none", border: "1px solid rgba(212,175,55,0.3)", borderRadius: 14, padding: "16px 24px", color: "#D4AF37", fontSize: 15, fontWeight: 700, cursor: "pointer",
          }}>Back to Home</button>
        </div>
      );
    }
    const stepsLabels = ["Vehicle", "Preferences", "Contact"];
    const inputStyle = { width: "100%", boxSizing: "border-box", background: "#12172A", border: "1px solid rgba(212,175,55,0.15)", borderRadius: 12, padding: "14px 16px", color: "#fff", fontSize: 15, fontFamily: "inherit", outline: "none" };
    const chipStyle = (active) => ({ padding: "10px 14px", borderRadius: 10, cursor: "pointer", fontFamily: "inherit", fontSize: 12, fontWeight: 600, transition: "all 0.2s ease", background: active ? "linear-gradient(135deg, #D4AF37, #B8962E)" : "#12172A", color: active ? "#0A0E17" : "#fff", border: active ? "none" : "1px solid rgba(212,175,55,0.12)" });

    return (
      <div style={{ padding: "0 20px" }}>
        <div style={{ paddingTop: 50, marginBottom: 24 }}>
          <h1 style={{ color: "#fff", fontSize: 24, fontWeight: 800, margin: "0 0 6px" }}>Request a Vehicle</h1>
          <p style={{ color: "#7A8090", fontSize: 14 }}>Tell us what you want — we'll source it at US auctions</p>
        </div>
        <div style={{ display: "flex", gap: 8, marginBottom: 28 }}>
          {stepsLabels.map((s, i) => (
            <div key={i} style={{ flex: 1, textAlign: "center" }}>
              <div style={{ height: 4, borderRadius: 4, marginBottom: 8, background: i <= requestStep ? "linear-gradient(90deg, #D4AF37, #F0D060)" : "rgba(255,255,255,0.06)" }} />
              <span style={{ color: i <= requestStep ? "#D4AF37" : "#5A6070", fontSize: 11, fontWeight: i === requestStep ? 700 : 500 }}>{s}</span>
            </div>
          ))}
        </div>

        {requestStep === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={{ color: "#7A8090", fontSize: 12, display: "block", marginBottom: 8 }}>Year *</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {YEAR_OPTIONS.map(y => <button key={y} onClick={() => setRequestData({ ...requestData, year: y })} style={chipStyle(requestData.year === y)}>{y}</button>)}
              </div>
            </div>
            <div>
              <label style={{ color: "#7A8090", fontSize: 12, display: "block", marginBottom: 8 }}>Make *</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
                {POPULAR_MAKES.map(m => <button key={m} onClick={() => setRequestData({ ...requestData, make: m })} style={chipStyle(requestData.make === m)}>{m}</button>)}
              </div>
              <input placeholder="Or type a make..." value={POPULAR_MAKES.includes(requestData.make) ? "" : requestData.make} onChange={e => setRequestData({ ...requestData, make: e.target.value })} style={inputStyle} />
            </div>
            <div>
              <label style={{ color: "#7A8090", fontSize: 12, display: "block", marginBottom: 6 }}>Model *</label>
              <input placeholder="e.g. Camry, Accord, RX 350" value={requestData.model} onChange={e => setRequestData({ ...requestData, model: e.target.value })} style={inputStyle} />
            </div>
            <div>
              <label style={{ color: "#7A8090", fontSize: 12, display: "block", marginBottom: 6 }}>Trim (optional)</label>
              <input placeholder="e.g. SE, EX-L, F Sport, AMG" value={requestData.trim} onChange={e => setRequestData({ ...requestData, trim: e.target.value })} style={inputStyle} />
            </div>
          </div>
        )}

        {requestStep === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={{ color: "#7A8090", fontSize: 12, display: "block", marginBottom: 6 }}>Maximum Budget (\u20A6)</label>
              <input placeholder="e.g. 10,000,000" value={requestData.maxBudget} onChange={e => setRequestData({ ...requestData, maxBudget: e.target.value })} style={inputStyle} />
            </div>
            <div>
              <label style={{ color: "#7A8090", fontSize: 12, display: "block", marginBottom: 8 }}>Preferred Color</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Any", "Black", "White", "Silver", "Grey", "Blue", "Red"].map(c => <button key={c} onClick={() => setRequestData({ ...requestData, color: c })} style={chipStyle(requestData.color === c)}>{c}</button>)}
              </div>
            </div>
            <div>
              <label style={{ color: "#7A8090", fontSize: 12, display: "block", marginBottom: 8 }}>Maximum Mileage</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Any", "Under 30k", "Under 50k", "Under 80k", "Under 100k"].map(m => <button key={m} onClick={() => setRequestData({ ...requestData, maxMileage: m })} style={chipStyle(requestData.maxMileage === m)}>{m}</button>)}
              </div>
            </div>
            <div>
              <label style={{ color: "#7A8090", fontSize: 12, display: "block", marginBottom: 6 }}>Must-Have Features (optional)</label>
              <textarea placeholder="e.g. Leather seats, sunroof, backup camera..." value={requestData.features} onChange={e => setRequestData({ ...requestData, features: e.target.value })} rows={3} style={{ ...inputStyle, resize: "none" }} />
            </div>
            <div>
              <label style={{ color: "#7A8090", fontSize: 12, display: "block", marginBottom: 6 }}>Additional Notes (optional)</label>
              <textarea placeholder="Any other preferences..." value={requestData.notes} onChange={e => setRequestData({ ...requestData, notes: e.target.value })} rows={2} style={{ ...inputStyle, resize: "none" }} />
            </div>
          </div>
        )}

        {requestStep === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={{ color: "#7A8090", fontSize: 12, display: "block", marginBottom: 6 }}>Your Name *</label>
              <input placeholder="Full name" value={requestData.name} onChange={e => setRequestData({ ...requestData, name: e.target.value })} style={inputStyle} />
            </div>
            <div>
              <label style={{ color: "#7A8090", fontSize: 12, display: "block", marginBottom: 6 }}>Phone Number *</label>
              <input placeholder="+234 xxx xxx xxxx" value={requestData.phone} onChange={e => setRequestData({ ...requestData, phone: e.target.value })} type="tel" style={inputStyle} />
            </div>
            <div style={{ background: "#12172A", borderRadius: 16, padding: 20, border: "1px solid rgba(212,175,55,0.1)" }}>
              <h3 style={{ color: "#D4AF37", fontSize: 14, fontWeight: 700, marginTop: 0, marginBottom: 16 }}>Your Request Summary</h3>
              {[
                { l: "Vehicle", v: `${requestData.year} ${requestData.make} ${requestData.model}${requestData.trim ? " " + requestData.trim : ""}` },
                { l: "Budget", v: requestData.maxBudget ? `\u20A6${requestData.maxBudget}` : "Flexible" },
                { l: "Color", v: requestData.color || "Any" },
                { l: "Max Mileage", v: requestData.maxMileage || "Any" },
                { l: "Features", v: requestData.features || "None specified" },
                { l: "Notes", v: requestData.notes || "None" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: i < 5 ? "1px solid rgba(255,255,255,0.04)" : "none", gap: 16 }}>
                  <span style={{ color: "#7A8090", fontSize: 13, flexShrink: 0 }}>{item.l}</span>
                  <span style={{ color: "#fff", fontSize: 13, fontWeight: 600, textAlign: "right" }}>{item.v}</span>
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(212,175,55,0.06)", borderRadius: 12, padding: 14, border: "1px solid rgba(212,175,55,0.12)" }}>
              <p style={{ color: "#7A8090", fontSize: 12, lineHeight: 1.5, margin: 0 }}>{"\uD83D\uDD0D"} Our team will search active US auctions for vehicles matching your specs. We typically find options within 3-7 days and will contact you with photos, condition reports, and a full cost breakdown.</p>
            </div>
          </div>
        )}

        <div style={{ display: "flex", gap: 12, marginTop: 28, marginBottom: 20 }}>
          {requestStep > 0 && <button onClick={() => setRequestStep(requestStep - 1)} style={{ flex: 1, padding: "16px 0", borderRadius: 14, border: "1px solid rgba(212,175,55,0.3)", background: "none", color: "#D4AF37", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>Back</button>}
          <button onClick={() => { if (requestStep < 2) setRequestStep(requestStep + 1); else setRequestSubmitted(true); }} style={{
            flex: 1, padding: "16px 0", borderRadius: 14, border: "none", background: "linear-gradient(135deg, #D4AF37, #B8962E)", color: "#0A0E17", fontSize: 15, fontWeight: 800, cursor: "pointer", fontFamily: "inherit",
          }}>{requestStep < 2 ? "Continue" : "Submit Request"}</button>
        </div>
      </div>
    );
  };

  // =========== PROFILE SCREEN ===========
  // =========== WALLET / ACCOUNT SCREEN ===========
  const CRYPTO_WALLETS = [
    { coin: "BTC", name: "Bitcoin", icon: "\u20BF", address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh", network: "Bitcoin Network", color: "#F7931A" },
    { coin: "ETH", name: "Ethereum", icon: "\u039E", address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", network: "ERC-20", color: "#627EEA" },
    { coin: "USDT", name: "Tether USDT", icon: "\u20AE", address: "TKVPFqKLMnbJRGPdWUXcfstJdRBRWmMg9P", network: "TRC-20 (Tron)", color: "#26A17B" },
  ];

  const ProfileScreen = () => {

    // Fund Wallet Flow
    if (showFundWallet) {
      if (fundSuccess) {
        return (
          <div style={{ padding: "0 20px", paddingTop: 80, textAlign: "center" }}>
            <div style={{ width: 80, height: 80, borderRadius: "50%", margin: "0 auto 24px", background: "linear-gradient(135deg, #D4AF37, #F0D060)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40 }}>{"\u2713"}</div>
            <h2 style={{ color: "#fff", fontSize: 22, fontWeight: 800, marginBottom: 8 }}>
              {fundMethod === "paystack" ? "Payment Initiated!" : "Transfer Details Sent!"}
            </h2>
            <p style={{ color: "#7A8090", fontSize: 14, lineHeight: 1.6, marginBottom: 24 }}>
              {fundMethod === "paystack"
                ? "Complete the payment on the Paystack checkout page. Your wallet will be credited instantly once payment is confirmed."
                : `Send the exact amount to the wallet address provided. Your wallet will be credited after network confirmation (usually 10-30 minutes).`}
            </p>
            <button onClick={() => { setShowFundWallet(false); setFundMethod(null); setFundAmount(""); setFundSuccess(false); setShowCryptoDetails(null); }} style={{
              background: "linear-gradient(135deg, #D4AF37, #B8962E)", border: "none", borderRadius: 14, padding: "16px 40px", color: "#0A0E17", fontSize: 15, fontWeight: 800, cursor: "pointer",
            }}>Back to Wallet</button>
          </div>
        );
      }

      // Crypto detail view
      if (showCryptoDetails) {
        const crypto = CRYPTO_WALLETS.find(c => c.coin === showCryptoDetails);
        return (
          <div style={{ padding: "0 20px" }}>
            <button onClick={() => setShowCryptoDetails(null)} style={{ background: "none", border: "none", color: "#D4AF37", cursor: "pointer", fontSize: 14, padding: "50px 0 20px", fontFamily: "inherit" }}>{"\u2190"} Back</button>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{ width: 60, height: 60, borderRadius: "50%", margin: "0 auto 14px", background: `${crypto.color}22`, border: `2px solid ${crypto.color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, fontWeight: 800, color: crypto.color }}>{crypto.icon}</div>
              <h2 style={{ color: "#fff", fontSize: 20, fontWeight: 800, margin: "0 0 4px" }}>Send {crypto.name}</h2>
              <p style={{ color: "#7A8090", fontSize: 13 }}>Network: {crypto.network}</p>
            </div>
            <div style={{ background: "#12172A", borderRadius: 16, padding: 20, border: "1px solid rgba(212,175,55,0.1)", marginBottom: 20 }}>
              <label style={{ color: "#7A8090", fontSize: 12, display: "block", marginBottom: 8 }}>Amount to fund ({"\u20A6"})</label>
              <input placeholder="e.g. 5,000,000" value={fundAmount} onChange={e => setFundAmount(e.target.value)} style={{
                width: "100%", boxSizing: "border-box", background: "#0A0E17", border: "1px solid rgba(212,175,55,0.15)", borderRadius: 12, padding: "14px 16px", color: "#fff", fontSize: 18, fontFamily: "inherit", outline: "none", fontWeight: 700, textAlign: "center",
              }} />
            </div>
            <div style={{ background: "#12172A", borderRadius: 16, padding: 20, border: "1px solid rgba(212,175,55,0.1)", marginBottom: 20 }}>
              <div style={{ color: "#7A8090", fontSize: 12, marginBottom: 8 }}>Send {crypto.coin} to this address:</div>
              <div style={{
                background: "#0A0E17", borderRadius: 12, padding: "14px 16px",
                border: "1px solid rgba(212,175,55,0.1)", wordBreak: "break-all",
                color: "#D4AF37", fontSize: 13, fontWeight: 600, fontFamily: "monospace", lineHeight: 1.6,
              }}>{crypto.address}</div>
              <button onClick={() => navigator.clipboard?.writeText(crypto.address)} style={{
                width: "100%", marginTop: 12, padding: "12px 0", borderRadius: 10,
                background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)",
                color: "#D4AF37", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
              }}>{"\uD83D\uDCCB"} Copy Address</button>
            </div>
            <div style={{ background: "rgba(230,126,34,0.08)", borderRadius: 12, padding: 14, border: "1px solid rgba(230,126,34,0.15)", marginBottom: 24 }}>
              <p style={{ color: "#e67e22", fontSize: 12, lineHeight: 1.5, margin: 0, fontWeight: 600 }}>{"\u26A0\uFE0F"} Important:</p>
              <p style={{ color: "#B0B8C4", fontSize: 12, lineHeight: 1.5, margin: "6px 0 0" }}>
                Only send {crypto.name} ({crypto.coin}) on the {crypto.network} network. Sending other tokens or using the wrong network will result in permanent loss of funds.
              </p>
            </div>
            <button onClick={() => setFundSuccess(true)} style={{
              width: "100%", padding: "16px 0", borderRadius: 14, border: "none",
              background: "linear-gradient(135deg, #D4AF37, #B8962E)", color: "#0A0E17",
              fontSize: 15, fontWeight: 800, cursor: "pointer", fontFamily: "inherit",
            }}>I've Sent the {crypto.coin}</button>
          </div>
        );
      }

      // Fund method selection
      return (
        <div style={{ padding: "0 20px" }}>
          <button onClick={() => { setShowFundWallet(false); setFundMethod(null); setFundAmount(""); }} style={{ background: "none", border: "none", color: "#D4AF37", cursor: "pointer", fontSize: 14, padding: "50px 0 20px", fontFamily: "inherit" }}>{"\u2190"} Back to Wallet</button>
          <h1 style={{ color: "#fff", fontSize: 24, fontWeight: 800, margin: "0 0 6px" }}>Fund Wallet</h1>
          <p style={{ color: "#7A8090", fontSize: 14, marginBottom: 24 }}>Choose your preferred payment method</p>

          {!fundMethod && (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {/* Paystack option */}
              <button onClick={() => setFundMethod("paystack")} style={{
                background: "linear-gradient(135deg, #12172A, #161D30)", border: "1px solid rgba(212,175,55,0.1)",
                borderRadius: 18, padding: 20, cursor: "pointer", textAlign: "left", display: "flex", gap: 16, alignItems: "center",
              }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: "rgba(0,168,182,0.1)", border: "1px solid rgba(0,168,182,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: 14, fontWeight: 800, color: "#00A8B6" }}>PAY</span>
                </div>
                <div>
                  <div style={{ color: "#fff", fontSize: 16, fontWeight: 700 }}>Paystack</div>
                  <div style={{ color: "#7A8090", fontSize: 12, marginTop: 4 }}>Bank transfer, card, or USSD</div>
                  <div style={{ color: "#2ecc71", fontSize: 11, marginTop: 6, fontWeight: 600 }}>{"\u26A1"} Instant credit</div>
                </div>
              </button>

              {/* Crypto option */}
              <button onClick={() => setFundMethod("crypto")} style={{
                background: "linear-gradient(135deg, #12172A, #161D30)", border: "1px solid rgba(212,175,55,0.1)",
                borderRadius: 18, padding: 20, cursor: "pointer", textAlign: "left", display: "flex", gap: 16, alignItems: "center",
              }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: "rgba(247,147,26,0.1)", border: "1px solid rgba(247,147,26,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: 24, fontWeight: 800, color: "#F7931A" }}>{"\u20BF"}</span>
                </div>
                <div>
                  <div style={{ color: "#fff", fontSize: 16, fontWeight: 700 }}>Cryptocurrency</div>
                  <div style={{ color: "#7A8090", fontSize: 12, marginTop: 4 }}>BTC, ETH, or USDT</div>
                  <div style={{ color: "#D4AF37", fontSize: 11, marginTop: 6, fontWeight: 600 }}>{"\uD83D\uDD12"} Secure & borderless</div>
                </div>
              </button>
            </div>
          )}

          {/* Paystack form */}
          {fundMethod === "paystack" && (
            <div>
              <div style={{ background: "#12172A", borderRadius: 16, padding: 20, border: "1px solid rgba(212,175,55,0.1)", marginBottom: 20 }}>
                <label style={{ color: "#7A8090", fontSize: 12, display: "block", marginBottom: 8 }}>Amount ({"\u20A6"})</label>
                <input placeholder="Enter amount" value={fundAmount} onChange={e => setFundAmount(e.target.value)} style={{
                  width: "100%", boxSizing: "border-box", background: "#0A0E17", border: "1px solid rgba(212,175,55,0.15)", borderRadius: 12, padding: "16px", color: "#fff", fontSize: 22, fontFamily: "inherit", outline: "none", fontWeight: 800, textAlign: "center",
                }} />
                <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
                  {["1,000,000", "2,000,000", "5,000,000"].map(amt => (
                    <button key={amt} onClick={() => setFundAmount(amt)} style={{
                      flex: 1, padding: "10px 0", borderRadius: 10, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
                      background: fundAmount === amt ? "rgba(212,175,55,0.15)" : "#0A0E17",
                      border: fundAmount === amt ? "1px solid rgba(212,175,55,0.3)" : "1px solid rgba(255,255,255,0.06)",
                      color: fundAmount === amt ? "#D4AF37" : "#7A8090",
                    }}>{"\u20A6"}{amt}</button>
                  ))}
                </div>
              </div>
              <div style={{ background: "rgba(0,168,182,0.06)", borderRadius: 12, padding: 14, border: "1px solid rgba(0,168,182,0.12)", marginBottom: 20 }}>
                <p style={{ color: "#B0B8C4", fontSize: 12, lineHeight: 1.5, margin: 0 }}>
                  {"\uD83D\uDD12"} Secured by Paystack. You'll be redirected to complete payment via bank transfer, card, or USSD. Funds are credited instantly.
                </p>
              </div>
              <button onClick={() => setFundSuccess(true)} style={{
                width: "100%", padding: "16px 0", borderRadius: 14, border: "none",
                background: "linear-gradient(135deg, #00A8B6, #008E9B)", color: "#fff",
                fontSize: 15, fontWeight: 800, cursor: "pointer", fontFamily: "inherit",
              }}>{"\uD83D\uDD12"} Pay with Paystack</button>
              <button onClick={() => setFundMethod(null)} style={{
                width: "100%", marginTop: 12, padding: "14px 0", borderRadius: 14,
                border: "1px solid rgba(212,175,55,0.2)", background: "none",
                color: "#D4AF37", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
              }}>Choose different method</button>
            </div>
          )}

          {/* Crypto selection */}
          {fundMethod === "crypto" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <p style={{ color: "#7A8090", fontSize: 13, marginBottom: 4 }}>Select cryptocurrency:</p>
              {CRYPTO_WALLETS.map(c => (
                <button key={c.coin} onClick={() => setShowCryptoDetails(c.coin)} style={{
                  background: "linear-gradient(135deg, #12172A, #161D30)", border: "1px solid rgba(212,175,55,0.08)",
                  borderRadius: 16, padding: 18, cursor: "pointer", textAlign: "left",
                  display: "flex", alignItems: "center", gap: 14,
                }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12, background: `${c.color}15`, border: `1px solid ${c.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 22, fontWeight: 800, color: c.color, flexShrink: 0,
                  }}>{c.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: "#fff", fontSize: 15, fontWeight: 700 }}>{c.name}</div>
                    <div style={{ color: "#7A8090", fontSize: 12, marginTop: 3 }}>{c.network}</div>
                  </div>
                  <span style={{ color: "#5A6070", fontSize: 18 }}>{"\u203A"}</span>
                </button>
              ))}
              <button onClick={() => setFundMethod(null)} style={{
                width: "100%", marginTop: 8, padding: "14px 0", borderRadius: 14,
                border: "1px solid rgba(212,175,55,0.2)", background: "none",
                color: "#D4AF37", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
              }}>Choose different method</button>
            </div>
          )}
        </div>
      );
    }

    // Main wallet/account view
    return (
      <div style={{ padding: "0 20px" }}>
        <div style={{ paddingTop: 50, marginBottom: 20 }}>
          <h1 style={{ color: "#fff", fontSize: 24, fontWeight: 800, margin: 0 }}>My Account</h1>
        </div>

        {/* Wallet Card */}
        <div style={{
          background: "linear-gradient(135deg, #1A1408 0%, #12172A 40%, #0D1A2A 100%)",
          borderRadius: 20, padding: 24, marginBottom: 20,
          border: "1px solid rgba(212,175,55,0.2)",
          boxShadow: "0 8px 32px rgba(212,175,55,0.08)",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div>
              <div style={{ color: "#7A8090", fontSize: 12, letterSpacing: 0.5, textTransform: "uppercase" }}>Wallet Balance</div>
              <div style={{ color: "#D4AF37", fontSize: 32, fontWeight: 800, marginTop: 6 }}>{fmt(walletBalance)}</div>
            </div>
            <div style={{
              width: 48, height: 48, borderRadius: 14,
              background: "linear-gradient(135deg, #D4AF37, #F0D060)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24,
            }}>{"\uD83D\uDCB0"}</div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => setShowFundWallet(true)} style={{
              flex: 1, padding: "14px 0", borderRadius: 12, border: "none",
              background: "linear-gradient(135deg, #D4AF37, #B8962E)", color: "#0A0E17",
              fontSize: 14, fontWeight: 800, cursor: "pointer", fontFamily: "inherit",
            }}>{"\u002B"} Fund Wallet</button>
            <button style={{
              flex: 1, padding: "14px 0", borderRadius: 12,
              border: "1px solid rgba(212,175,55,0.3)", background: "none",
              color: "#D4AF37", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
            }}>Withdraw</button>
          </div>
        </div>

        {/* Tab toggle */}
        <div style={{ display: "flex", gap: 0, marginBottom: 20, background: "#12172A", borderRadius: 14, padding: 4, border: "1px solid rgba(212,175,55,0.1)" }}>
          {[{ id: "wallet", label: "Transactions" }, { id: "account", label: "Account" }].map(t => (
            <button key={t.id} onClick={() => setWalletTab(t.id)} style={{
              flex: 1, padding: "12px 0", borderRadius: 11, border: "none", cursor: "pointer",
              fontFamily: "inherit", fontSize: 13, fontWeight: 700, transition: "all 0.25s ease",
              background: walletTab === t.id ? "linear-gradient(135deg, #D4AF37, #B8962E)" : "transparent",
              color: walletTab === t.id ? "#0A0E17" : "#7A8090",
            }}>{t.label}</button>
          ))}
        </div>

        {walletTab === "wallet" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 700, margin: 0 }}>Recent Transactions</h3>
              <span style={{ color: "#D4AF37", fontSize: 12, fontWeight: 600 }}>{TRANSACTIONS.length} total</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {TRANSACTIONS.map(tx => (
                <div key={tx.id} style={{
                  background: "#12172A", borderRadius: 14, padding: 16,
                  border: "1px solid rgba(212,175,55,0.06)", display: "flex", alignItems: "center", gap: 14,
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: tx.type === "credit" ? "rgba(46,204,113,0.1)" : "rgba(231,76,60,0.1)",
                    border: `1px solid ${tx.type === "credit" ? "rgba(46,204,113,0.2)" : "rgba(231,76,60,0.2)"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, color: tx.type === "credit" ? "#2ecc71" : "#e74c3c",
                  }}>{tx.type === "credit" ? "\u2193" : "\u2191"}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>{tx.desc}</div>
                    <div style={{ color: "#5A6070", fontSize: 11, marginTop: 4 }}>{tx.date} · {tx.method} · {tx.id}</div>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div style={{ color: tx.type === "credit" ? "#2ecc71" : "#e74c3c", fontSize: 14, fontWeight: 700 }}>
                      {tx.type === "credit" ? "+" : "-"}{fmt(tx.amount)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Payment methods */}
            <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 700, margin: "24px 0 14px" }}>Payment Methods</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { icon: "PAY", label: "Paystack", sub: "Bank transfer, cards, USSD", color: "#00A8B6" },
                { icon: "\u20BF", label: "Bitcoin", sub: "BTC Network", color: "#F7931A" },
                { icon: "\u039E", label: "Ethereum", sub: "ERC-20", color: "#627EEA" },
                { icon: "\u20AE", label: "USDT", sub: "TRC-20 (Tron)", color: "#26A17B" },
              ].map((pm, i) => (
                <div key={i} style={{
                  background: "#12172A", borderRadius: 14, padding: "14px 16px",
                  border: "1px solid rgba(212,175,55,0.06)", display: "flex", alignItems: "center", gap: 12,
                }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 10, background: `${pm.color}15`, border: `1px solid ${pm.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: pm.icon === "PAY" ? 10 : 18, fontWeight: 800, color: pm.color,
                  }}>{pm.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>{pm.label}</div>
                    <div style={{ color: "#5A6070", fontSize: 11, marginTop: 2 }}>{pm.sub}</div>
                  </div>
                  <span style={{ background: "rgba(46,204,113,0.15)", color: "#2ecc71", fontSize: 10, padding: "3px 10px", borderRadius: 20, fontWeight: 600 }}>Active</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {walletTab === "account" && (
          <div>
            {[
              { icon: "\uD83D\uDCE6", label: "My Orders", sub: "2 active orders" },
              { icon: "\uD83D\uDCC4", label: "Documents", sub: "Vehicle docs & receipts" },
              { icon: "\uD83D\uDD14", label: "Notifications", sub: "Manage alerts" },
              { icon: "\uD83D\uDCAC", label: "Support", sub: "Chat with our team" },
              { icon: "\u2699\uFE0F", label: "Settings", sub: "Account preferences" },
            ].map((item, i) => (
              <button key={i} style={{
                width: "100%", display: "flex", alignItems: "center", gap: 14,
                background: "#12172A", border: "1px solid rgba(212,175,55,0.06)",
                borderRadius: 14, padding: "16px", cursor: "pointer", marginBottom: 8, textAlign: "left",
              }}>
                <span style={{ fontSize: 22 }}>{item.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>{item.label}</div>
                  <div style={{ color: "#5A6070", fontSize: 12, marginTop: 2 }}>{item.sub}</div>
                </div>
                <span style={{ color: "#5A6070", fontSize: 16 }}>{"\u203A"}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  // =========== RENDER ===========
  const renderScreen = () => {
    if (selectedVehicle) return <VehicleDetail />;
    switch (tab) {
      case "home": return <HomeScreen />;
      case "track": return <TrackScreen />;
      case "request": return <RequestScreen />;
      case "finance": return <FinanceScreen />;
      case "profile": return <ProfileScreen />;
      default: return <HomeScreen />;
    }
  };

  return (
    <div style={styles.app}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <div style={styles.content}>{renderScreen()}</div>
      <div style={styles.nav}>
        {[
          { id: "home", icon: "\uD83C\uDFE0", label: "Home" },
          { id: "request", icon: "\uD83D\uDD0E", label: "Request" },
          { id: "track", icon: "\uD83D\uDCCD", label: "Track" },
          { id: "finance", icon: "\uD83D\uDCB3", label: "Finance" },
          { id: "profile", icon: "\uD83D\uDC64", label: "Account" },
        ].map(item => (
          <button key={item.id} onClick={() => { setTab(item.id); setSelectedVehicle(null); setSelectedTrack(null); }} style={styles.navItem(tab === item.id)}>
            <span style={styles.navIcon(tab === item.id)}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
