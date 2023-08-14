<template>
    <div class="search-dialog">
      <button @click="openDialog">打开搜索对话框</button>
      <dialog :open="dialogOpen" @close="closeDialog">
        <h2>搜索对话框</h2>
        <form @submit.prevent="submitSearch">
          <input type="text" v-model="searchQuery" placeholder="请输入搜索关键词" />
          <button type="submit">搜索</button>
        </form>
        <button @click="closeDialog">关闭</button>
      </dialog>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dialogOpen: false,
        searchQuery: ''
      };
    },
    methods: {
      openDialog() {
        this.dialogOpen = true;
      },
      closeDialog() {
        this.dialogOpen = false;
        this.searchQuery = ''; // 关闭对话框时清空搜索关键词
      },
      submitSearch() {
        // 执行搜索操作，可以使用 this.searchQuery
        console.log('执行搜索：', this.searchQuery);
        this.closeDialog(); // 搜索后关闭对话框
      }
    }
  };
  </script>
  
  <style>
  /* 样式 */
  .search-dialog {
    display: inline-block;
  }
  </style>
  