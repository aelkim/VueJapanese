<template>
  <div class="inquiry--fixed shadow">
    <i class="fa-brands fa-rocketchat"></i>
  </div>
</template>

<script>
export default {};
</script>

<style>
.inquiry--fixed {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  position: fixed;
  left: 17px;
  bottom: 17px;
  background-color: #f0f3f3;
  visibility: hidden;
  opacity: 0;
  transition: all 1s ease-in-out;
}
.inquiry--fixed i {
  font-size: 26px;
  position: relative;
  left: 29%;
  bottom: -30%;
}
</style>
