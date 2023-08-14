<!--
 * @Author: JfanLiu 1300083451@qq.com
 * @Date: 2023-08-14 11:55:17
 * @LastEditors: JfanLiu 1300083451@qq.com
 * @LastEditTime: 2023-08-14 16:37:37
 * @FilePath: \Bragi\Bragi-frontend\src\components\SearchDialog.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="search-dialog">
    <button @click="openDialog">打开搜索对话框</button>
    <dialog :open="dialogOpen" @close="closeDialog">
      <h2>搜索对话框</h2>
      <form @submit.prevent="submitSearch">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="请输入搜索关键词"
        />
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
      searchQuery: "",
    };
  },
  methods: {
    openDialog() {
      this.dialogOpen = true;
    },
    closeDialog() {
      this.dialogOpen = false;
      this.searchQuery = ""; // 关闭对话框时清空搜索关键词
    },
    submitSearch() {
      // 执行搜索操作，可以使用 this.searchQuery
      console.log("执行搜索：", this.searchQuery);
      this.closeDialog(); // 搜索后关闭对话框
    },
  },
};

class RenderStrategy {
  render(node, entering, refPath) {
    throw new Error("render method must be implemented");
  }
}
class Md2VditorIRDOMStrategy extends RenderStrategy {
  render(node, entering, refPath) {
    if (entering) {
      return [``, 2];
    } else {
      console.log(node.TokensStr());

      if (refPath.substring(0, 2) === "&&") {
        return [
          `<a style='color: magenta;font-weight: bold;text-decoration: none;cursor: pointer;' href="${refPath}" value="${refPath}" onclick="jumptoRef(this)">${node.Text()}</a>`,
          2,
        ];
      } else {
        return [
          `<a style='color: dodgerblue;cursor: pointer' href="${refPath}" value="${refPath}" onclick="jumptoLink(this)">${node.Text()}</a>`,
          2,
        ];
      }
    }
  }
}

this.vditor.vditor.lute.SetJSRenderers({
  renderers: {
    Md2VditorIRDOM: {
      renderLink: (node, entering) => {
        const strategy = new Md2VditorIRDOMStrategy();
        return strategy.render(node, entering, this.refPath);
      },
    },
  },
});


Md2VditorIRDOMStrategy.StrategyName = "Md2VditorIRDOMStrategy";
</script>

<style>
/* 样式 */
.search-dialog {
  display: inline-block;
}
</style>
