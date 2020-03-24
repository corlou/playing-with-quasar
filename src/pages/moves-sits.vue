<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-primary">
      <q-input
      v-model="searchValue"
      @keyup.enter="doSearch"
      class="col"
      square
      filled
      bg-color="white"
      placeholder="Search"
      dense
      >

        <template v-slot:append>
          <q-btn
          @click="doSearch"
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
             <img src="statics/Move_List_Thumbnails/Sits_593b85eb8bbada75ae627f9e.jpg">
              <q-card-section>
                <div class="card-text">Sits</div>
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
      searchValue: ''
    }
  },
  methods: {
    doSearch () {
      console.info('TODO: search for move:', this.searchValue)
      this.searchValue = ''
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
a /* link colour for categories */
{
  text-decoration: none;
  color: #000000;
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
