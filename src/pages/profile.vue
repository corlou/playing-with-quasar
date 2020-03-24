<template>
  <div class="q-pa-md" style="max-width: 400px">
    <h5 class="q-mt-none">My Profile</h5>

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Your name *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please enter your name']"
      />

      <q-input
        filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 18 && val < 100 || 'You must be over 18 to use this app'
        ]"
      />

      <q-input
        filled
        v-model="email"
        label="Your email *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please enter your email']"
      />
      <div class="upload-profile">
        <div class="q-gutter-md row items-start">
          <q-uploader
            url="http://localhost:4444/upload"
            label="Change my profile pic"
            multiple
            :max-total-size="4096"
            style="max-width: 300px"
          />
    </div>
  </div>

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script>
export default {
  data () {
    return {
      name: null,
      age: null,
      email: null,

      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.email = null
      this.accept = false
    }
  }
}
</script>

<style lang="scss">
upload-profile {
  padding-left: -1rem;
  }
</style>
