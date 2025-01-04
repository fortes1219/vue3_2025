<template>
  <el-card class="p-0 mb-4">
    <!-- Card header -->
    <div class="payment-card-header">
      <div class="paymentMethod flex">
        <p class="text-lg font-medium content-center mr-2">支付方式：{{ state.total }}</p>
        <el-radio-group v-model="userPaymentMethod">
          <el-radio value="1" label="cash">現金</el-radio>
          <el-radio value="2" label="creditCard">信用卡</el-radio>
        </el-radio-group>
      </div>
      <div class="remain-balance flex">
        <p class="content-center mr-4">未付款</p>
        <el-button color="#90aad4" plain icon="Check">確認付款</el-button>
      </div>
      <el-button type="danger" circle icon="CloseBold" plain class="delete-card-bt" @click="$emit('remove-card')">
      </el-button>
    </div>
    <!-- Card content -->
    <div class="payment-card-content">
      <!-- 此項支付金額 -->
      <div class="payment-amount-form flex max-w-sm">
        <label for="payment-amount" class="mx-5 my-3 content-center min-w-24"> 金額（整數） </label>
        <!-- 為什麼 formatter 沒有用？？？ -->
        <el-input
          v-model="paymentAmount"
          @input="handleInput"
          @blur="handleBlur"
          id="payment-amount"
          class="max-w-60 min-w-60"
          name="payment-amount"
          type="text"
        />
      </div>
      <div class="amount-hint ml-36">
        <p class="text-m text-gray-500">缺: {{ needToPay }}</p>
        <p class="text-m text-gray-500">超收: {{}}</p>
      </div>
      <!-- 此項支付金額百分比 -->
      <div class="payment-percentage-form flex max-w-sm">
        <label for="payment-percentage" class="mx-5 my-3 content-center min-w-24"> 所佔百分比 </label>
        <el-input
          v-model="Percentage"
          id="payment-percentage"
          class="max-w-60 min-w-60"
          name="payment-percentage"
          type="text"
          placeholder="輸入支付金額"
        />
        <span class="ml-3 content-center">%</span>
      </div>
      <!-- 此項支付金額截止日期 -->
      <div class="payment-deadline-form flex max-w-sm">
        <label for="payment-deadline" class="mx-5 my-3 content-center min-w-24"> 最晚付款日 </label>
        <el-input
          v-model="paymentDeadline"
          id="payment-deadline"
          class="max-w-60 min-w-60"
          name="payment-deadline"
          :suffix-icon="Calendar"
        />
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { ref, nextTick, watch, computed } from 'vue';
import { Calendar } from '@element-plus/icons-vue';
import useFormatter from '../composables/useFormatter';
import usePayments from '@/views/work-1/composables/usePayments';

// const { state } = usePayments();

const props = defineProps({
  state: {
    type: Object
  }
});

const paymentPercentage = ref('');
const paymentDeadline = ref('');

const userPaymentMethod = defineModel('userPaymentMethod', {
  type: String
});

const userPaymentAmount = defineModel('userPaymentAmount', {
  type: String
});

const userPaymentPercentage = defineModel('userPaymentPercentage', {
  type: String,
  default: '0'
});

watch(
  () => props.state,
  () => {
    console.log('## watch state: ', state.value);
  }
);

defineEmits(['remove-card']);

const paymentAmount = ref(0);

const needToPay = computed(() => {
  return props.state.total - paymentAmount.value;
});

const { inputValue, displayValue, actualValue: singlePayment, handleInput, handleBlur } = useFormatter('0');

// 監聽 inputValue 的變化，並將值傳到父元件，更新 paymentAmount
watch(inputValue, newValue => {
  if (newValue !== inputValue.value) {
    userPaymentAmount.value = newValue;
  }
  console.log('newValue:', newValue);
  console.log('singlePayment.value:', singlePayment.value);
  // 這裡要把值傳到父元件，但是為什麼會有延遲？？？
  console.log('userPaymentAmount.value:', userPaymentAmount.value);
});

const Percentage = computed(() => {
  const paymentPercentage = userPaymentPercentage.value / props.state.total;
  return paymentPercentage || 0;
});
</script>

<!------- style ------->

<style scoped>
.payment-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.payment-card-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
  gap: 20px; /* 添加間距 */
}
</style>
