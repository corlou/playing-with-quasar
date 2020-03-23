<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-primary">
      <q-input
      v-model="newTask"
      @keyup.enter="addTask"
      class="col"
      square
      filled
      bg-color="white"
      placeholder="Search"
      dense
      >

        <template v-slot:append>
          <q-btn
          @click="addTask"
          round
          dense
          flat
          icon="search"
          />
        </template>
      </q-input>
    </div>
      <div class="flex-container">
        <div class="move-categories">
          <div class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card">
            <img src="statics/Move_List_Thumbnails/Aerials_593b85ea8bbada75ae627d6a.jpg">
            <q-card-section>
              <div class="card-text">Aerials</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card">
            <img src="statics/Move_List_Thumbnails/Climbs_593b85eb8bbada75ae627e16.jpg">
            <q-card-section>
              <div class="card-text">Climbs</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card">
            <img src="statics/Move_List_Thumbnails/Floor_593b85eb8bbada75ae6281b1.jpg">
            <q-card-section>
              <div class="card-text">Floor</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card">
            <img src="statics/Move_List_Thumbnails/Inverts_593b85eb8bbada75ae627f31.jpg">
            <q-card-section>
              <div class="card-text">Inverts</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card">
            <img src="statics/Move_List_Thumbnails/Sits_593b85eb8bbada75ae627f9e.jpg">
            <q-card-section>
              <div class="card-text">Sits</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card">
            <img src="statics/Move_List_Thumbnails/Spins_593b85eb8bbada75ae627f3c.jpg">
            <q-card-section>
              <div class="card-text">Spins</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card">
            <img src="statics/Move_List_Thumbnails/Splits_593b85eb8bbada75ae627edf.jpg">
            <q-card-section>
              <div class="card-text">Splits</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      newTask: '',
      tasks: [
      ]
    }
  },
  methods: {
    deleteTask (index) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Really delete?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.tasks.splice(index, 1)
        this.$q.notify('Task deleted')
      })
    },
    addTask () {
      this.tasks.push({
        title: this.newTask,
        done: false
      })
      this.newTask = ''
    }
  }
}

</script>

<style lang="scss">
.flex_container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

.move-categories {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: left;
}
.move-categories img {
    display: block;
    flex: 0 0 auto;
    z-index: 9998;
    margin-left: auto;
    margin-right: auto;
    padding-top: 1rem;
}
.card-text {
  text-align: center;
  font-size: 30px;
}
.my-card {
  -webkit-box-shadow: 0px 3px 31px rgba(0, 0, 0, .3);
    -moz-box-shadow: 0px 3px 13px rgba(0,0,0,.3);
    box-shadow: 0px 3px 13px rgba(0,0,0,.3);
}
/* Adjust float: left to wherever you want text positioned?/ padding-left for how far away from image */
.move-categories p {
    display: block;
    float: left;
    flex: 0 0 auto;
    text-align: center;
    padding-left: 5%;
}

/*adjust below sizes for image size */
@media screen and (min-width: 1024px) {
.move-categories {
    width: calc(100%);
    height: calc(100%);
}
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
.move-categories {
    width: calc(100%);
    height: calc(100%);
    padding-left: 3rem;
}
}

@media screen and (min-width: 481px) and (max-width: 768px) {
.move-categories {
    width: calc(100%);
    height: calc(100%);
    padding-left: 1rem;
}
}

@media screen and (min-width: 321px) and (max-width: 480px) {
.move-categories {
    width: calc(100%);
    height: calc(100%);
    padding-left: 4rem;
}
}

@media screen and (max-width: 320px) {
.move-categories {
    width: calc(100%);
    height: calc(100%);
    padding-left: 3rem;
}
}
</style>
