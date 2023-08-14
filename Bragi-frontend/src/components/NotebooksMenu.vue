<template>
  <div class="notebooks-menu">
    <h2>笔记本列表</h2>
    <transition-group name="notebook-list" tag="ul" class="notebook-list">
      <li
        v-for="notebook in notebooks"
        :key="notebook.id"
        @click="selectNotebook(notebook)"
      >
        <div class="notebook-item">
          <span class="notebook-name">{{ notebook.name }}</span>
          <button class="delete-button" @click="deleteNotebook(notebook.id)">
            删除
          </button>
        </div>
      </li>
    </transition-group>
    <button class="add-button" @click="addNotebook">添加笔记本</button>
  </div>
</template>
<script>
export default {
  props: {
    notebooks: {
      type: Array,
      required: true,
    },
  },
  methods: {
    selectNotebook(notebook) {
      this.$emit("notebook-selected", notebook);
    },
    addNotebook() {
      const newNotebook = {
        id: this.notebooks.length + 1,
        name: `新笔记本 ${this.notebooks.length + 1}`,
      };
      this.notebooks.push(newNotebook);
      this.$emit("notebook-added", newNotebook);
    },
    deleteNotebook(notebookId) {
      const index = this.notebooks.findIndex(
        (notebook) => notebook.id === notebookId
      );
      if (index !== -1) {
        this.notebooks.splice(index, 1);
      }
    },
  },
};
</script>

<style>
/* 样式 */
.notebooks-menu {
  border: 1px solid #ccc;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

.notebook-list-move {
  transition: transform 0.5s;
}

.notebook-list-enter-active,
.notebook-list-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.notebook-list-enter,
.notebook-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.notebook-list {
  list-style: none;
  padding: 0;
}

.notebook-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
  margin-bottom: 10px;
}

.notebook-name {
  font-weight: bold;
}

.delete-button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.delete-button:hover {
  background-color: #c82333;
}

.add-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-button:hover {
  background-color: #0056b3;
}
</style>
