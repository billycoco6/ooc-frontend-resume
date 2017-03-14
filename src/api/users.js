import Vue from 'vue'
import store from '../store'

export default {
  signUp (signupParams, callback) {
    console.log(store)
    Vue.$http.post('/users', signupParams)
    .then(function (response) {
      store.dispatch('login')
      callback(response.data)
    })
  },
  logIn (loginParams, callback) {
    console.log(store)
    console.log(loginParams)
    Vue.$http.post('/login', loginParams)
    .then(function (response) {
      console.log('==== Log In Testdrive ====')
      // store.dispatch('login')
      callback(response.data)
      // console.log(response.data)
      return response.data
    })
    .catch(function (response) {
      // store.dispatch('logout')
    })
  }
  // logout (callback) {
  //   console.log(store)
  //   Vue.$http.delete('/users/api_sign_out.json')
  //   .then(function (response) {
  //     store.dispatch('logout')
  //     callback(response.data)
  //   })
  //   .catch(function (response) {
  //     store.dispatch('logout')
  //   })
  // },
  // checkLoggedIn () {
  //   Vue.$http.get('')
  //   .then(function (response) {
  //     store.dispatch('login')
  //   })
  //   .catch(function (response) {
  //     store.dispatch('logout')
  //   })
  // }
}
