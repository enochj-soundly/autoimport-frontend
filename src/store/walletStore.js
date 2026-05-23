import { create } from 'zustand';

const useWalletStore = create((set) => ({
  balance: 0,
  transactions: [],
  loading: false,

  setBalance: (balance) => set({ balance }),

  setTransactions: (transactions) => set({ transactions }),

  addTransaction: (transaction) => set((state) => ({
    transactions: [transaction, ...state.transactions],
    balance: transaction.type === 'credit'
      ? state.balance + transaction.amount
      : state.balance - transaction.amount,
  })),

  setLoading: (loading) => set({ loading }),
}));

export default useWalletStore;
