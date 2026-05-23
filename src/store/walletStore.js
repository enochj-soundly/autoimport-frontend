import { create } from 'zustand';
const useWalletStore = create((set) => ({
  balance: 0, transactions: [], loading: false,
  setBalance: (balance) => set({ balance }),
  setTransactions: (transactions) => set({ transactions }),
  addTransaction: (tx) => set((state) => ({ transactions: [tx, ...state.transactions], balance: tx.type === 'credit' ? state.balance + tx.amount : state.balance - tx.amount })),
  setLoading: (loading) => set({ loading }),
}));
export default useWalletStore;