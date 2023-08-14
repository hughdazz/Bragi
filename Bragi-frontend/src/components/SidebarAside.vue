<template>
  <aside :class="sidebarClass">
    <div class="sidebar-content">
      <h2 class="sidebar-title">{{ title }}</h2>
      <ul class="sidebar-menu">
        <li v-for="item in menuItems" :key="item.id" class="sidebar-menu-item">
          <router-link :to="item.route" class="sidebar-menu-link">{{
            item.label
          }}</router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: "SidebarAside",
  props: {
    title: String,
    menuItems: Array,
    collapsed: Boolean,
  },
  computed: {
    sidebarClass() {
      return {
        "sidebar-aside": true,
        collapsed: this.collapsed,
      };
    },
  },
};
</script>
<style scoped>
.sidebar-aside {
  width: 280px;
  background-color: #f4f4f4;
  padding: 20px;
  box-sizing: border-box;
  transition: width 0.3s;
}
.collapsed {
  width: 60px;
}
.sidebar-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
}
.sidebar-menu {
  list-style: none;
  padding: 0;
}
.sidebar-menu-item {
  margin-bottom: 10px;
}
.sidebar-menu-link {
  text-decoration: none;
  color: #333;
  transition: color 0.3s;
}
.sidebar-menu-link:hover {
  color: #ff9900;
}
</style>
