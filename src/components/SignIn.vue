<template>
  <div class="sign-in">
    <md-list class="md-double-line">
      <md-list-item>
        <md-avatar class="md-avatar-icon">
          <md-icon>folder</md-icon>
        </md-avatar>
        <div class="md-list-text-container">
          <md-input-container>
            <label>Username</label>
            <md-input v-model="username" placeholder=""></md-input>
          </md-input-container>
        </div>
      </md-list-item>
      <md-list-item>
        <md-avatar class="md-avatar-icon">
          <md-icon>folder</md-icon>
        </md-avatar>
        <div class="md-list-text-container">
          <md-input-container>
            <label>Password</label>
            <md-input v-model="password" placeholder="" type="password" @keyup.enter.native="login"></md-input>
          </md-input-container>
        </div>
      </md-list-item>
      <md-list-item>
        <span style="flex: 1"></span>
        <md-button class="md-raised md-primary" @click.native="login">Login</md-button>
        Not a member? <a @click="navigateTo('Users.sign_up')">Join now</a>
        <span style="flex: 1"></span>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import UsersApi from '../api/users.js'
import router from '../router'

export default {
  name: 'sign-in',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log('methods.login')
      var app = this
      var signinForm = {
        username: app.username,
        password: app.password
      }
      UsersApi.logIn(signinForm, function (_response) {
        // router.push({ name: 'Posts.index' })
      })
    },
    navigateTo (nav) {
      console.log('methods.navigate')
      router.push({ name: nav })
    }
  }
}
</script>

<style scoped>
</style>
