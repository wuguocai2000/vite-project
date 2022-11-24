<template>
  <div class="index">
    <div class="head">{{ $t('title') }}
      <div class="left_lang">
        <span class="dark">
          <img @click="changeLang" src="@/assets/whiteLang.svg" class="lang" />
          <img @click="changeSkin" src="@/assets/whiteSkin.svg" class="lang" />
        </span>
        <span class="light">
          <img @click="changeLang" src="@/assets/blackLang.svg" class="lang" />
          <img @click="changeSkin" src="@/assets/blackSkin.svg" class="lang" />
        </span>
      </div>
      <div class="right_menu" @mouseenter="enter" @mouseleave="leave">
        <span class="dark">
          <img src="@/assets/whiteMenu.svg" class="menu" />
          <img src="@/assets/whiteMenu.svg" class="menu2" />
        </span>
        <span class="light">
          <img src="@/assets/blackMenu.svg" class="menu" />
          <img src="@/assets/blackMenu.svg" class="menu2" />
        </span>
      </div>
    </div>
    <div class="title">
      <span class="dark">
        <img src="@/assets/whiteCycle.svg" class="img" />
      </span>
      <span class="light">
        <img src="@/assets/blackCycle.svg" class="img" />
      </span>
      <div>
        <p>
          {{ $t('subtitle') }}<br>{{ $t('subtitle2') }}<br>{{ $t('subtitle3') }}
        </p>
      </div>
    </div>
    <swiper></swiper>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import swiper from './components/swiper.vue'
import { lightTheme,darkTheme,isMobile } from "@/utils/common"
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const changeLang = () => {
  let val = localStorage.getItem('lang') || 'zh'
  if (val == 'zh') {
    val = 'en'
  } else {
    val = 'zh'
  }
  locale.value = val;
  localStorage.setItem("lang", val);
};

const changeSkin = () => {
  let val = localStorage.getItem('skin') || 'dark'
  if (val == 'dark') {
    lightTheme()
  } else {
    darkTheme()
  }
}

let tl = gsap.timeline({
  defaults: {
    duration: .3
  }
})

const enter = () => {
  if (!isMobile()) {
    tl
      .to('.menu', {
        x: 44
      })
    tl
      .to('.menu2', {
        x: 22
      }, '-=0.3')
  }
}

const leave = () => {
  if (!isMobile()) {
    tl
      .to('.menu2', {
        x: 0
      })
    tl
      .to('.menu', {
        x: 0
      }, '-=0.3')
  }
}
</script>

<style lang="scss" scoped>
.index {

  .head {
    letter-spacing: 1px;
    font-size: 14px;
    padding: 30px 0;
    line-height: 28px;
    display: flex;
    justify-content: center;
    font-weight: bold;
    // position: fixed;
    // width: 100%;
    // z-index: 10;

    .left_lang {
      position: absolute;
      left: 28px;
      width: 28px;
      height: 28px;
      cursor: pointer;

      .lang {
        width: 22px;
        height: 28px;
        margin-right: 28px;
      }
    }

    .menu {
      width: 22px;
      height: 28px;
    }

    .right_menu {
      position: absolute;
      right: 28px;
      width: 22px;
      height: 28px;
      overflow: hidden;
      cursor: pointer;

      .menu2 {
        width: 22px;
        height: 28px;
        position: absolute;
        right: 22px;
      }
    }
  }

  .title {
    width: 100%;
    text-align: center;
    font-size: 65px;
    font-weight: 900;
    line-height: 70px;

    .img {
      width: 80px;
      height: 80px;
      margin: 0 auto;
    }
  }
}

@media (min-width: 700px) {
  .index {
    .head {
      padding: 30px 0 90px 0;
    }
  }
}
</style>
