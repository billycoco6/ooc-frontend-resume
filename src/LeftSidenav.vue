<template lang="html">
  <div class="left-sidenav">
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title">MUIC Resume</h2>
    </md-toolbar>
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Menu</h3>
        </div>
        <md-list>
          <md-list-item>
            <router-link :to="{ name: 'Users.profile' }"><md-icon>move_to_inbox</md-icon> <span>Profile</span></router-link>
          </md-list-item>
          <md-list-item>
            <router-link :to="{ name: 'Posts.index' }"><md-icon>move_to_inbox</md-icon> <span>Feeds</span></router-link>
          </md-list-item>
          <md-list-item>
            <router-link :to="{ name: 'Users.sign_in' }"><md-icon>move_to_inbox</md-icon> <span>Log out</span></router-link>
          </md-list-item>
        </md-list>
      </md-toolbar>
    </md-sidenav>
  </div>
</template>

<script>
export default {
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    }
  }
}
</script>

<style lang="css">
</style>
