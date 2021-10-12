<template>
  <dashboard-user>
    <slot></slot>
  </dashboard-user>
</template>

<script>
import DashboardUser from '../components/user/DashboardUser.vue'

export default {
  name: "UserDashboard",
  components: {
    DashboardUser
  }
};
</script>
