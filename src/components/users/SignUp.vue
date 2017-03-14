<template lang="html">
  <div class="sign-up">
      <h2>Register</h2>
      <md-input-container>
        <label>First Name</label>
        <md-input v-model="registrant.firstName"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Last Name</label>
        <md-input v-model="registrant.lastName" ></md-input>
      </md-input-container>

      <md-input-container>
        <label>Student ID</label>
        <md-input v-model="registrant.studentId"></md-input>
      </md-input-container>

      <md-input-container>
        <label>E-Mail</label>
        <md-input v-model="registrant.email"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Username</label>
        <md-input v-model="registrant.username"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Password</label>
        <md-input v-model="registrant.password" type="password"></md-input>
      </md-input-container>

      <md-input-container md-has-password>
        <label>Confirm Password</label>
        <md-input v-model="registrant.confirmPassword" type="password"></md-input>
      </md-input-container>

      <div>
        <md-radio v-model="userType" id="student" name="student-type" md-value="student" class="md-primary">Student</md-radio>
        <md-radio v-model="userType" id="teacher" name="teacher-type" md-value="teacher" class="md-primary">Instructor</md-radio>
        <md-radio v-model="userType" id="company" name="company-type" md-value="company" class="md-primary">Company</md-radio>
      </div>

      <md-snackbar md-position="bottom center" ref="snackbar" :md-duration="duration">
        <span>{{ error }}</span>
        <md-button class="md-accent" md-theme="light-blue" @click.native="$refs.snackbar.close()">Retry</md-button>
      </md-snackbar>

        <md-button class="md-raised md-primary" @click.native="signup">Join Now</md-button>
  </div>
</template>

<script>
import UsersApi from '../../api/users.js'

export default {
  name: 'sign-up',
  data () {
    return {
      registrant: {
        firstName: '',
        lastName: '',
        studentId: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
      },
      error: '',
      userType: '',
      duration: 2000
    }
  },
  methods: {
    signup () {
      var app = this
      var signupForm = {
        firstName: app.registrant.firstName,
        lastName: app.registrant.lastName,
        studentId: app.registrant.studentId,
        email: app.registrant.email,
        username: app.registrant.username,
        password: app.registrant.password,
        userType: app.userType
      }
      console.log(app.signupForm)
      if (app.registrant.password !== app.registrant.confirmPassword) {
        app.error = 'password and confirm password do not match'
        this.open()
      } else if (signupForm.firstName === '' || signupForm.lastName === '' || signupForm.studentId === '' ||
          signupForm.email === '' || signupForm.username === '' || signupForm.password === '' || signupForm.userType === '') {
        app.error = 'please do not leave any field blank'
        this.open()
      } else {
        console.log('==== Successful ====')
        console.log(signupForm)
        app.errorShow = false
        UsersApi.signUp(signupForm)
      }
    },
    open () {
      console.log('==== Snackbar Triggered ====')
      this.$refs.snackbar.open()
    }
  }
}
</script>

<style lang="css">
</style>
