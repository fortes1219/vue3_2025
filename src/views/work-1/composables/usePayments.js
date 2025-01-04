import { ref, computed } from 'vue'

export default function usePayments(prop, emit) {
  const state = ref({
    total: 0, // 總金額
    cardlist: [],
    paymentFinished: false, // 是否付清總金額
    currentPayment: '', // 當前付款金額
    overPayment: '', // 要付金額之差額
    overPercentage: '', // 要付金額之百分比
    payState: '', //試算當前所有輸入框裡所有金額之付款狀態
  })

  return {
    state
  }
}