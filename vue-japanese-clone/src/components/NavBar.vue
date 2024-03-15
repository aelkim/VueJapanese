<template>
  <nav class="nav-bar">
    <a href="/"><div class="nav-bar__title-circle"></div></a>
    <p class="nav-bar__title-words">
      <a href="/">PLAYLIVING IZU</a>
    </p>
    <ul class="nav-bar__list">
      <li><a href="./dooreverywhere">Room</a></li>
      <li><a href="/">Experience</a></li>
      <li><a href="./dooreverywhere">Food</a></li>
      <li><a href="/">Access</a></li>
      <li><a href="./dooreverywhere">Reserve</a></li>
      <li>
        <a href="https://www.instagram.com/ael_iamness/"
          ><i class="fa-brands fa-instagram"></i
        ></a>
      </li>
    </ul>
    <div class="nav-bar__empty"></div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
a {
  color: inherit;
  text-decoration: none;
  outline: none;
}
a:hover,
a:active {
  text-decoration: none;
  color: inherit;
  background-color: inherit;
}
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
