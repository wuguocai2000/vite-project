<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { lightTheme,darkTheme } from "@/utils/common"

const mql = window.matchMedia('(prefers-color-scheme: dark)');
if (mql.matches) {
  // 当前为深色模式
  darkTheme()
} else {
  // 当前为浅色模式
  lightTheme()
}
// 设置 onchange 事件的回调函数
mql.onchange = function (evt) {
  if (evt.matches) {
    // 当前为深色模式
    dark()
  } else {
    // 当前为浅色模式
    light()
  }
}
</script>

<template>
  <router-view />
</template>

<style scoped>

</style>
