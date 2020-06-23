<template>
  <article class="launch">
    <header class="header">
      <h2 class="title">
        <router-link :to="`/launch/${launch.id}`">{{ launch.name }}</router-link>
      </h2>
      <span class="date">{{ launch.windowstart.split(',').shift() }}</span>
    </header>
    <div class="poster">
      <router-link :to="`/launch/${launch.id}`">
        <img :src="launch.rocket.imageURL.replace('1920', '720')" :alt="launch.rocket.name" />
      </router-link>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Launch',
  props: ['launch'],
};
</script>

<style lang="scss" scoped>
.launch {
  flex-basis: 100%;
  padding: 10px 5px;
  @media (min-width: 768px) {
    flex-basis: 50%;
  }
  @media (min-width: 1280px) {
    flex-basis: 33.33%;
  }
  @media (min-width: 1600px) {
    flex-basis: 25%;
  }
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 10px;
}
.title {
  font-size: 16px;

  a {
    color: #fff;

    &:hover {
      text-decoration: underline;
    }
  }
}
.date {
  font-size: 14px;
  font-weight: bold;
  color: $color_green;
  text-transform: uppercase;
}
.poster {
  width: 100%;
  height: 600px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
}
</style>
