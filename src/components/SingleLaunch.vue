<template>
  <div class="wrapper">
    <header class="header">
      <div class="date">{{ launch.windowstart }}</div>
      <Countdown :date="launch.windowstart" />
    </header>
    <div class="row">
      <div class="poster">
        <img
          :src="launch.rocket.imageURL.replace('1920', '720')"
          :alt="launch.rocket.name"
        />
      </div>
      <article class="content">
        <h1 class="title">{{ launch.name }}</h1>
        <ul class="pads">
          <li v-for="pad in launch.location.pads" class="pad" :key="pad.id">
            {{ pad.name }}
          </li>
        </ul>
        <ul class="missions">
          <li
            class="mission"
            v-for="mission in launch.missions"
            :key="mission.id"
          >
            <h2 class="mission__title">mission: {{ mission.name }}</h2>
            <p class="mission__description">{{ mission.description }}</p>
          </li>
        </ul>
      </article>
    </div>
  </div>
</template>

<script>
import Countdown from './Countdown.vue';

export default {
  components: {
    Countdown,
  },
  props: {
    launch: Object,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
}
.row {
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 899px) {
    flex-wrap: nowrap;
  }
}
.header {
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
  flex-flow: column nowrap;
  align-items: center;
}
.date {
  margin-bottom: 20px;
}
.poster {
  flex: 1 0 50%;
  img {
    max-width: 100%;
    width: auto;
    height: 100%;
    border-radius: 5px;
  }
}
.content {
  @media (min-width: 699px) {
    margin-left: 25px;
    padding: 15px 30px;
  }
}
.title {
  margin-bottom: 10px;
}
.pads {
  margin-bottom: 40px;
  list-style-type: none;
}
.pad {
}
.missions {
  list-style-type: none;
}
.mission {
}
.mission__title {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
  margin-bottom: 10px;
}
.mission__description {
  line-height: 1.35;
}
</style>
