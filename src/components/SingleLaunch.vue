<template>
  <div class="wrapper">
    <div class="launch-info">
      <article class="content">
        <h1 class="title">{{ launch.name }}</h1>
        <ul class="pads">
          <li v-for="pad in launch.location.pads" class="pad" :key="pad.id">{{ pad.name }}</li>
        </ul>
        <ul class="missions">
          <li class="mission" v-for="mission in launch.missions" :key="mission.id">
            <h2 class="mission__title">mission: {{ mission.name }}</h2>
            <p class="mission__description">{{ mission.description }}</p>
          </li>
        </ul>
      </article>
      <div class="date-box">
        <div class="date-start">{{ launch.windowstart }}</div>
        <Countdown :date="launch.windowstart" />
      </div>
    </div>
    <div class="poster">
      <img :src="launch.rocket.imageURL.replace('1920', '720')" :alt="launch.rocket.name" />
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
.launch-info {
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    align-items: center;
  }
}
.date-box {
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
  flex-flow: column nowrap;
  align-items: center;
}
.date-start {
  margin-bottom: 20px;
}
.poster {
  margin-bottom: 40px;
  img {
    display: block;
    max-width: 100%;
    width: auto;
    height: 100%;
    border-radius: 5px;
    margin: 0 auto;
  }
}
.content {
  flex: 1;
  @media (min-width: 699px) {
    margin: 40px 0;
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
  line-height: 1.5;
  max-width: 500px;
}
</style>
