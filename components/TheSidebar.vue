<template>
  <div class="h-full w-64 border-r pt-4 px-3">
    <nav aria-label="Main" class="flex-1 ">
      <div v-for="menu of menus" :key="menu.url">
        <nuxt-link
          :to="menu.url"
          class="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-indigo-600 bg-primary-100 dark:bg-primary"
          role="button"
          aria-haspopup="false"
          aria-expanded="false"
          :class="[
            'text-sm', 'font-medium', 'px-2', 'rounded-sm', 'group','cursor-pointer', 'flex', 'items-center','hover:bg-indigo-600',
            'hover:text-indigo-200',
            $route.name == menu.url ? 'bg-indigo-200' : '',
            $route.name == menu.url ? 'text-indigo-600' : 'text-slate-600',
          ]"
          @click="toggleCollapseShow(menu.name)"
        >
          <span v-if="menu.icon" class="material-icons md-18">{{ menu.icon }}</span>
          <span class="ml-2 text-sm"> {{ menu.name }} </span>
          <span v-if="menu.subMenu && menu_pos[menu.name] == 'down'" class="ml-auto material-icons">
            keyboard_arrow_up
          </span>
          <span v-if="menu.subMenu && (menu_pos[menu.name] == '' || menu_pos[menu.name] == 'up')" class="ml-auto material-icons">
            keyboard_arrow_down
          </span>
        </nuxt-link>
        <div v-if="menu.subMenu && menu_pos[menu.name] == 'up'" class="mt-2 space-y-2 px-7" role="menu" aria-label="Layouts">
          <a
            v-for="submenu of menu.subMenu"
            :key="submenu.name"
            href="layouts/two-columns-sidebar.html"
            role="menuitem"
            class="block p-2 hover:text-indigo-600 text-sm transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light"
          >
            {{ submenu.name }}
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import sidebarMenu from '@/json/sidebarmenu.json'
export default {
  name: 'TheSidebar',
  data: () => ({
    collapseShow: 'hidden',
    menu_pos: {
      Settings: '',
      Reports: ''
    },
    menus: sidebarMenu.menus
  }),
  methods: {
    toggleCollapseShow (menuName) {
      this.menu_pos[menuName] = (this.menu_pos[menuName] === 'up' || this.menu_pos[menuName] === '') ? 'down' : 'up'
    }
  }
}
</script>

<style scoped>

</style>
