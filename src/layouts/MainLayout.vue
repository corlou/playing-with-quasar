<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <div class="q-px-md q-pt-sm q-mb-md">
          <div class="text-h4">PoleGuide</div>
      </div>
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="600"
      >
        <q-scroll-area style="height: calc(100% - 192px); margin-top: 192px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item
              to="/"
              exact
              clickable
              v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                Home
              </q-item-section>
            </q-item>

            <q-item
              to="/favourites"
              exact
              clickable
              v-ripple>
              <q-item-section avatar>
                <q-icon name="favorite" />
              </q-item-section>

              <q-item-section>
                Favourites
              </q-item-section>
            </q-item>

            <q-item
              to="/profile"
              exact
              clickable
              v-ripple>
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>

              <q-item-section>
                Profile
              </q-item-section>
            </q-item>

            <q-item
              to="/"
              exact
              clickable
              v-ripple>
              <q-item-section avatar>
                <q-icon class="icon-menu"
                name="power_settings_new" />
              </q-item-section>

              <q-item-section>
                Logout
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" style="height: 192px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="145px" class="q-mb-sm">
              <img src="statics/Placeholder_User.jpg">
            </q-avatar>
            <div class="text-weight-bold"></div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style lang="scss">
  .q-icon-menu {
    color: #ae8556;
  }
  .q-item-section {
    color: #ae8556;
  }
  .q-item {
    color: #ae8556;
    font-weight: 500;
  }
</style>
