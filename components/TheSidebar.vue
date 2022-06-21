<template>
  <div class="h-full w-64 border-r pt-4 px-3">
    <div
        v-for="menu of menus"
        :key="menu.url"
        :class="[
          'mt-2.5','py-2', 'text-sm', 'font-medium',  'px-2', 'rounded-lg', 'group','cursor-pointer', 'flex', 'items-center',
          'hover:bg-indigo-600',
          'hover:text-indigo-200',
          $route.name == menu.url ? 'bg-indigo-200' : '',
          $route.name == menu.url ? 'text-indigo-600' : 'text-slate-600',
        ]">
       <span class="material-icons md-36">{{menu.icon}}</span>&nbsp;&nbsp;  {{menu.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheSidebar',
  data: () => ({
    collapseShow: 'hidden',
    menus : [
      {
        name: 'Dashboard',
        url: 'index',
        icon: 'home'
      },
      {
        name: 'Branch',
        url: 'branch',
        icon: 'domain'
      },
      {
        name: 'Students',
        url: 'students',
        icon: 'supervisor_account'
      },
      {
        name: 'Inquiry',
        url: 'inquiry',
        icon: 'assignment'
      },
      {
        name: 'Users',
        url: 'user',
        icon: 'people'
      },
      {
        name: 'Reports',
        url: '#',
        icon: 'book'
      },
      {
        name: 'Settings',
        url: 'setting',
        icon: 'settings'
      }
    ]
  }),
  methods: {
    toggleCollapseShow (classes) {
      this.collapseShow = classes
    }
  }
}
</script>

<style scoped>

</style>
