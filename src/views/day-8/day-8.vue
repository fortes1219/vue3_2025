<template>
  <div class="p-4">
    <h1 class="text-xl">Directive 自定義指令</h1>
    <p class="text-sm my-4">範例: 貨幣顯示轉換</p>
    <div class="w-[200px] my-4">
      <el-select v-model="currency" placeholder="請選擇貨幣" @change="onCurrencyChange">
        <el-option v-for="item in currencyList" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
    <!-- 商品列表 -->
    <div class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <GoodsCard v-for="item in goodsStore.getProducts" :key="item.ID" :goods="item" :currency="selectedCurrency" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from 'vue';
import GoodsCard from './components/goodsCard.vue';
import { useGoodsStore } from '@/stores/goods';

const goodsStore = useGoodsStore();

const currency = ref('USD');
const selectedCurrency = ref({});

const currencyList = ref([
  { label: '美元', value: 'USD', locale: 'en-US', rate: 31, minimumFractionDigits: 0 },
  { label: '台幣', value: 'TWD', locale: 'zh-TW', rate: 1, minimumFractionDigits: 0 },
  { label: '歐元', value: 'EUR', locale: 'de-DE', rate: 30, minimumFractionDigits: 0 },
  { label: '日圓', value: 'JPY', locale: 'ja', rate: 0.21, minimumFractionDigits: 0 }
]);

const onCurrencyChange = val => {
  selectedCurrency.value = currencyList.value.find(item => item.value === val);
  console.log('## selected currency:', selectedCurrency.value);
};

onMounted(async () => {
  await nextTick();
  await goodsStore.getProductList();
  onCurrencyChange(currency.value);
});
</script>
