export const formatNaira = (n) => '\u20A6' + Number(n).toLocaleString();
export const formatUSD = (n) => '$' + Number(n).toLocaleString();
export const isValidPhone = (p) => /^(234|0)(70|80|81|90|91)\d{8}$/.test(p.replace(/\D/g, ''));
export const isValidBVN = (b) => /^\d{11}$/.test(b);
export const generateRef = (prefix = 'TXN') => `${prefix}-${Date.now().toString(36).toUpperCase()}`;
export const calculateMonthly = (principal, rate, months) => Math.round((principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1));