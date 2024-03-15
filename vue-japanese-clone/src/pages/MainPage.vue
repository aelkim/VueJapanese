<template>
  <div>
    <main>
      <div class="box--absolute"></div>
      <div class="main-img">
        <img src="../images/배경화면4.jpg" width="100%" height="100%" />
        <div>
          <h1>親しさが、</h1>
          <h1>深まる家。</h1>
          <h3>海と森のあいだ、海を見渡す高台に佇む</h3>
          <h3>温泉付プライベートホテル「PLAYLIVING IZU」</h3>
        </div>
      </div>
    </main>
    <NavBar />
    <InquiryBox />
    <div class="desciption">
      <img class="좌측사진" src="../images/좌측사진.png" />
      <img class="우측사진" src="../images/우측사진.png" />
      <div>
        <h4>たった数日</h4>
        <h4>時間を共に過ごすことで、</h4>
        <h4>ぐっと深まる仲がある。</h4>
        <h4>おいしいごはんを食べること。</h4>
        <h4>周りを気にせず思いっきり笑い、話すこと。</h4>
        <h4>美しい景色に感動すること。</h4>
        <h4>音楽や映画、素晴らしい作品を味わうこと。</h4>
        <h4>自由で、心が踊る時間を共有すること──。</h4>
        <h4>自然の光が目一杯に入り込み、</h4>
        <h4>窓からは海が望む開放的な家。</h4>
        <h4>仲間と自然と、ゆっくりゆったり過ごせる家。</h4>
        <h4>都心からも行きやすい</h4>
        <h4>伊豆高原の高台に、そんな一軒家を作りました。</h4>
        <h4>ここは、親しさが、深まる家。</h4>
        <h4>PLAYLIVING IZUへ、ようこそ。</h4>
      </div>
    </div>
    <img />
    <main height="1000vh"></main>
    <!-- <div>오른쪽 네모 fixed 예약 박스</div> -->
  </div>
</template>

<script>
import InquiryBox from "../components/InquiryBox.vue";
import NavBar from "../components/NavBar.vue";

export default {
  // mounted() {
  //   window.scrollTo(0, 0);
  // },
  components: {
    InquiryBox,
    NavBar,
  },
};
const 스크롤함수 = () => {
  const 스크롤양 = $(window).scrollTop();
  if (스크롤양 > 100) {
    $(".inquiry--fixed").css({ visibility: "visible", opacity: "1" });
  }
};
$(window).scroll(스크롤함수);
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
}
.montserrat {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
.shadow {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
main {
  display: flex;
  width: 100vw;
  height: 94vh;
}
main .box--absolute {
  width: 17%;
  height: 100%;
}
.main-img {
  width: 83%;
  height: 100%;
}
.main-img img {
  border-radius: 0 0 0 7%;
  object-fit: cover;
}
.main-img div {
  width: 360px;
  height: 160px;
  position: relative;
  bottom: 33%;
  right: -67%;
  color: white;
}
.main-img h1 {
  font-weight: 200;
  font-size: 35px;
  font-family: "Noto Serif JP", serif;
  margin-bottom: 4px;
  letter-spacing: 3px;
}
.main-img h3 {
  margin-top: 8px;
  font-weight: 100;
  font-family: "Noto Serif JP", serif;
  letter-spacing: 2px;
}

.desciption {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.desciption div {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 100px;
  padding-left: 115px;
}
.desciption h4 {
  /* width: 430px; */
  font-size: 13px;
  font-family: "Noto Serif JP", serif;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 10px;
}
.좌측사진 {
  width: 29%;
  position: absolute;
  left: 5%;
  top: 35%;
}
.우측사진 {
  width: 27%;
  right: 0;
  top: 12%;
  position: absolute;
}
</style>
