<template>
  <nav class="nav-bar">
    <div class="nav-bar__title-circle"></div>
    <p class="nav-bar__title-words">PLAYLIVING IZU</p>
    <ul class="nav-bar__list">
      <li>Room</li>
      <li>Experience</li>
      <li>Food</li>
      <li>Access</li>
      <li>Reserve</li>
      <li><i class="fa-brands fa-instagram"></i></li>
    </ul>
    <div class="nav-bar__empty"></div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.nav-bar {
  width: 17vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}
.nav-bar__empty {
  width: 100%;
  height: 25%;
}
.nav-bar__title-circle {
  border-radius: 36%;
  border: 1px solid black;
  width: 65px;
  height: 45px;
  margin-top: 48px;
}
.nav-bar__title-words {
  font-size: 13px;
  font-weight: 350;
  letter-spacing: 2px;
  position: relative;
  top: -67px;
  left: 0;
}
.nav-bar__list {
  list-style-type: none;
  font-family: "Montserrat", sans-serif;
  font-size: 90%;
  font-weight: 350;
  margin-top: 30px;
}
.nav-bar li {
  margin-bottom: 10px;
  letter-spacing: 1px;
}
.nav-bar li:last-child {
  padding-top: 8px;
  font-size: 15px;
}
</style>
