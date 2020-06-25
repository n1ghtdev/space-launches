<template>
  <div class="wrapper">
    <header class="header">
      <router-link class="header-link" to="/" exact>
        <div class="container">
          <span class="arrow"></span>go back
        </div>
      </router-link>
    </header>
    <div class="launch container">
      <div class="launch-info">
        <div class="date-box">
          <div class="date-start">{{ new Date(launch.windowstart).toLocaleString() }}</div>
          <Countdown :date="launch.windowstart" />
        </div>
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
      </div>
      <div class="poster">
        <img :src="launch.rocket.imageURL.replace('1920', '720')" :alt="launch.rocket.name" />
      </div>
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
  position: relative;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000;
  border-bottom: 1px solid #222;
  width: 100%;
}
.header-link {
  display: block;
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  padding: 15px 0;

  &:hover {
    background: #fff;
    color: #000;
    .arrow:after {
      background: #000;
    }
  }
}
.arrow {
  position: relative;
  border-left: 2px solid;
  border-top: 2px solid;
  height: 10px;
  width: 10px;
  transform: rotate(-45deg);
  display: inline-block;
  margin-right: 15px;
  &:after {
    content: '';
    top: 6px;
    left: 0;
    transform: rotate(45deg) translateX(-4px);
    position: absolute;
    width: 15px;
    height: 2px;
    background: #fff;
    display: inline-block;
  }
}
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
}
.launch {
  margin-top: 40px;
}
.launch-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    align-items: center;
  }
}
.date-box {
  padding: 20px;
  display: flex;
  margin: 0 auto 20px auto;
  flex-flow: column nowrap;
  align-items: center;

  @media (min-width: 768px) {
    margin: 0 0 20px 0;
  }
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
    object-fit: cover;
  }
}
.content {
  margin: 20px 0;

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
  line-height: 1.7;
  max-width: 700px;
}
</style>
