<template>
  <el-card shadow="hover">
    <!-- 商品圖片 -->
    <el-image :src="goods.ImageUrls[0]?.Url" fit="cover" class="w-full h-48 object-cover" />

    <!-- 商品資訊 -->
    <div class="mt-3">
      <!-- 商品名稱 -->
      <div class="min-h-[58px] text-ellipsis line-clamp-2">
        <h3 class="text-lg font-bold cursor-pointer hover:text-blue-500">
          {{ goods.Name }}
        </h3>
      </div>

      <!-- 類型標籤 -->
      <el-tag class="mt-2 cursor-pointer">
        {{ goods.GoodsType.Name }}
      </el-tag>

      <!-- 規格標籤 -->
      <div class="flex flex-wrap gap-2 min-h-[50px] my-2">
        <el-tag
          v-for="(spec, idx) in goods.GoodsSpecs"
          :key="spec.ID"
          class="m-0 cursor-pointer"
          size="small"
          type="info"
        >
          {{ spec.Specs }}
        </el-tag>
      </div>
      <!-- 價格 -->
      <div class="text-right">
        <span v-format-currency="currency" class="text-lg text-bold py-2">{{ goods.UnitPrice }}</span>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import Decimal from 'decimal.js';

const props = defineProps({
  goods: {
    type: Object,
    required: true
  },
  currency: {
    type: Object,
    default: () => {}
  }
});

const convertedPrice = computed(() => {
  if (!props.currency.rate) return props.goods.UnitPrice;
  return new Decimal(props.goods.UnitPrice).div(props.currency.rate).toFixed(2);
});
</script>
