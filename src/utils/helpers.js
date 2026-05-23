// Format number as Naira
export const formatNaira = (amount) => {
  return '\u20A6' + Number(amount).toLocaleString();
};

// Format number as USD
export const formatUSD = (amount) => {
  return '$' + Number(amount).toLocaleString();
};

// Validate Nigerian phone number
export const isValidPhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  return /^(234|0)(70|80|81|90|91)\d{8}$/.test(cleaned);
};

// Validate BVN (11 digits)
export const isValidBVN = (bvn) => {
  return /^\d{11}$/.test(bvn);
};

// Generate tracking reference
export const generateRef = (prefix = 'TXN') => {
  return `${prefix}-${Date.now().toString(36).toUpperCase()}`;
};

// Truncate VIN
export const truncateVIN = (vin) => {
  if (!vin) return '';
  return vin.length > 11 ? `${vin.slice(0, 8)}...${vin.slice(-4)}` : vin;
};

// Calculate monthly payment
export const calculateMonthly = (principal, ratePerMonth, months) => {
  const r = ratePerMonth;
  const n = months;
  return Math.round((principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
};
