<template>
  <div class="p-4">
    <!-- 顯示當前過濾狀態 -->
    <div class="flex items-center gap-2 mb-4">
      <el-tag v-if="searchText">關鍵字: {{ searchText }}</el-tag>
      <el-tag v-if="activeType">類型: {{ activeType }}</el-tag>
      <el-tag v-if="specText">規格: {{ specText }}</el-tag>
    </div>

    <!-- 商品列表 -->
    <div class="grid grid-cols-4 gap-4">
      <GoodsCard v-for="item in goodsStore.getProducts" :key="item.ID" :goods="item" @click="onRouterChange(item.ID)" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from 'vue';
import GoodsCard from './components/goodsCard.vue';
import { useGoodsProvider } from './composables/useGoodsProvider';
import { useGoodsStore } from '@/stores/goods';
import { useRouter } from 'vue-router';

const router = useRouter();

const goodsStore = useGoodsStore();

const { activeType, searchText, specText } = useGoodsProvider();

// 監聽過濾條件變化
watch([activeType, searchText, specText], ([type, keyword, spec]) => {
  console.log('過濾條件更新：', { type, keyword, spec });
  // 這裡可以觸發你的過濾邏輯
});

const onRouterChange = id => {
  router.push({ name: 'goodsDetail', params: { id } });
};

onMounted(async () => {
  await nextTick();
  goodsStore.getProductList();
});
</script>
