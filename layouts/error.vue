<template>
  <div>
    <div>
      <h1 v-if="error.statusCode === 400">
        BAD REQUEST
      </h1>
      <h1 v-else-if="error.statusCode === 401">
        UNAUTHORIZED
      </h1>
      <h1 v-else-if="error.statusCode === 402">
        FORBIDDEN
      </h1>
      <h1 v-else-if="error.statusCode === 403">
        NOT FOUND
      </h1>
      <h1 v-else-if="error.statusCode === 404">
        SERVER ERROR
      </h1>
      <h1 v-else>
        An error occurred
      </h1>
      <h2>
        {{error.statusCode}}
      </h2>
    </div>
    <div class="artboard">
      <div class="bb8">
        <div class="bb8-body">
          <div class="dot dot-1">
            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
          </div>
          <div class="dot dot-2"></div>
          <div class="circle circle-1"></div>
          <div class="circle circle-2"></div>
          <div class="circle circle-3"></div>
        </div>
        <div class="body-shadow-crop">
          <div class="body-shadow"></div>
        </div>
        <div class="bb8-head">
          <div class="head-bottom">
            <div class="head-side-1"></div>
            <div class="head-side-2"></div>
            <div class="head-bottom-base"></div>
          </div>
          <div class="head-top-crop">
            <div class="head-top"></div>
          </div>
          <div class="lens"></div>
          <div class="freckle"></div>
        </div>
        <div class="speedlines">
          <div class="one tail"></div>
          <div class="two tail"></div>
          <div class="three"></div>
          <div class="four"></div>
          <div class="five tail"></div>
        </div>
        <div class="sparkles">
          <div class="one small pulse-1"></div>
          <div class="two blue small pulse-2"></div>
          <div class="three blue med pulse-3"></div>
          <div class="four orange pulse-2"></div>
          <div class="five orange pulse-1"></div>
          <div class="six blue small pulse"></div>
          <div class="seven blue small pulse"></div>
          <div class="eight small pulse-3"></div>
          <div class="nine pulse"></div>
          <div class="ten orange small-1 pulse"></div>
          <div class="eleven small pulse"></div>
          <div class="twelve small pulse-2"></div>
          <div class="thirteen orange small pulse"></div>
          <div class="fourteen orange med pulse-3"></div>
          <div class="fifteen small pulse-1"></div>
          <div class="sixteen small pulse"></div>
        </div>
        <div class="ground">
          <div class="one">
            <div class="bump move-1"></div>
          </div>
          <div class="two"></div>
          <div class="three">
            <div class="bump move-2"></div>
          </div>
          <div class="four">
            <div class="bump"></div>
          </div>
          <div class="five"></div>
          <div class="six">
            <div class="bump move-2"></div>
          </div>
          <div class="seven">
            <div class="bump"></div>
          </div>
          <div class="eight">
            <div class="bump move-1"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="return">
      <nuxt-link to="/">
        HOME
      </nuxt-link>
    </div>
  </div>
</template>
 

<script>
export default {
  props: ["error"],
  layout: "empty"
};
</script>

<style lang="sass" scoped>
// Variables

$bg: #F5FAFC
$base: #EBF2FA
$base-tint: #A7D0E0
$stroke: #244356
$orange: #FDC23E
$blue: #449BAA
$red: #FF7761

// Styles

*
  box-sizing: border-box

body
  background: #eee

.artboard
  width: 800px
  height: 600px
  background: $bg
  box-shadow: 0px 3px 20px rgba(0,0,0,0.2)
  border-radius: 3px
  margin: 50px auto
  border: 20px white solid
  position: relative

.bb8
  width: 220px
  height: 220px
  position: absolute
  top: 222px
  left: 180px

.bb8-body
  width: 220px
  height: 220px
  background: $base
  position: absolute
  border-radius: 50%
  border: solid 8px $stroke
  overflow: hidden
  animation: spin 1s linear infinite

.circle
  width: 120px
  height: 120px
  border: 8px solid $stroke
  background-color: $orange
  border-radius: 50%
  position: absolute

  &:after
    content: ''
    display: block
    border: 8px solid $stroke
    background: $base
    border-radius: 50%
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    height: 35%
    width: 35%

.circle-1
  top: 10px
  left: -30px

.circle-2
  top: 123px
  left: 80px

.circle-3
  height: 300px
  width: 300px
  left: 120px
  top: -180px

.dot
  height: 18px
  width: 18px
  border-radius: 50%
  background: $stroke
  position: absolute

.dot-1
  top: 79px
  left: 113px

.dot-2
  top: 145px
  left: 40px

.line
  position: absolute
  height: 8px
  width: 100px
  background: $stroke

.line-1
  transform: rotate(40deg)
  top: 40px
  left: -70px

.line-2
  transform: rotate(160deg)
  top: -45px
  left: -60px

.line-3
  transform: rotate(-60deg)
  top: 25px
  left: 10px

.body-shadow-crop
  width: 220px
  height: 220px
  position: absolute
  border-radius: 50%
  border: solid 8px $stroke
  overflow: hidden
  -webkit-transform: translate3d(0, 0, 0)

.body-shadow
  width: 220px
  height: 220px
  border-radius: 50%
  position: absolute
  box-shadow: 0px 0px 60px rgba(0,0,0,0.4)
  left: -50px
  top: -20px


.bb8-head
  width: 160px
  height: 160px
  position: absolute
  top: -60px
  left: -30px
  transform: rotate(-30deg)

.head-top
  width: 160px
  height: 160px
  background: $base
  border: solid 8px $stroke
  position: absolute
  border-radius: 50%
  box-shadow: -10px 0px 0px 5px rgba(0,0,0,0.2) inset

.lens
  width: 56px
  height: 56px
  border-radius: 50%
  border: solid 8px $stroke
  background: #295A6D
  position: absolute
  top: 20px
  left: 50%
  margin-left: -28px
  overflow: hidden

  &:before,
  &:after
    content: ''
    display: block
    width: 6px
    height: 70px
    background: #2A6B80
    position: absolute
    left: 10px
    top: -20px
    transform: rotate(40deg)

  &:after
    width: 10px
    left: 25px
    top: -10px

.freckle
  height: 13px
  width: 13px
  border-radius: 50%
  background: $stroke
  top: 60px
  left: 120px
  position: absolute

.head-top-crop
  height: 50%
  overflow: hidden
  position: relative

.head-bottom
  position: absolute
  width: 100%
  top: 80px

.head-bottom-base,
.head-side-1,
.head-side-2
  border-bottom: 8px solid $stroke
  background: $base-tint
  height: 20px

  position: absolute

.head-bottom-base
  width: 78%
  left: 11%

.head-side-1
  width: 30px
  transform: rotate(40deg)
  transform-origin: bottom left
  top: -16px
  left: -3px
  border-radius: 0px 0px 8px 8px

.head-side-2
  width: 30px
  transform: rotate(-40deg)
  transform-origin: bottom right
  top: -16px
  right: -3px
  border-radius: 0px 0px 8px 8px

.speedlines > div
  height: 8px
  width: 55px
  background: $stroke
  border-radius: 8px
  position: absolute
  left: 120px

  &.tail:after
    content: ''
    display: block
    height: 8px
    width: 20px
    border-radius: 8px
    background: $stroke
    position: absolute
    left: 100%
    margin-left: 5px

  &.one
    top: -60px
    left: 53px

  &.two
    top: -21px
    left: 113px

  &.three
    top: -10px
    left: 103px
    width: 30px

  &.four
    top: 121px
    left: 203px
    width: 30px

  &.five
    top: 141px
    left: 218px
    width: 50px

.sparkles > div
  width: 30px
  height: 30px
  position: absolute

  &:before,
  &:after
    content: ''
    display: block
    width: 40%
    height: 100%
    border-radius: 20px
    background: $red
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)

  &:after
    transform: translate(-50%, -50%) rotate(90deg)

  &.blue:before,
  &.blue:after
    background: $blue

  &.orange:before,
  &.orange:after
    background: $orange

  &.med
    transform: scale(0.6)

  &.small
    transform: scale(0.4)

  &.one
    top: -53px
    left: 140px

  &.two
    top: -46px
    left: 210px

  &.three
    top: -6px
    left: 186px

  &.four
    top: -16px
    left: 280px

  &.five
    top: 44px
    left: 230px

  &.six
    top: 94px
    left: 240px

  &.seven
    top: 154px
    left: 216px

  &.eight
    top: 187px
    left: 185px

  &.nine
    top: 63px
    left: 325px

  &.ten
    top: 124px
    left: 315px

  &.eleven
    top: 161px
    left: 294px

  &.twelve
    top: 27px
    left: 366px

  &.thirteen
    top: 37px
    left: 415px

  &.fourteen
    top: 87px
    left: 385px

  &.fifteen
    top: 137px
    left: 378px

  &.sixteen
    top: 97px
    left: 455px

  &.pulse
    animation: pulse 1s linear infinite

  &.pulse-1
    animation: pulse 1s 300ms linear infinite

  &.pulse-2
    animation: pulse 1s 600ms linear infinite

  &.pulse-3
    animation: pulse 1s 900ms linear infinite

.ground > div
  height: 8px
  width: 80px
  background: $stroke
  position: absolute
  top: 212px
  left: -90px
  border-radius: 8px

  &.one .bump
    left: 40px

  &.two
    width: 25px
    left: -1px

  &.three
    width: 300px
    left: 34px

  &.four
    width: 90px
    left: 346px

    .bump
      left: 10px

  &.five
    width: 20px
    left: 450px

  &.six
    width: 80px
    left: 11px
    top: 255px

    .bump
      left: 10px

  &.seven
    width: 127px
    left: 171px
    top: 255px

    .bump
      left: 60px

  &.eight
    width: 87px
    left: 71px
    top: 295px

    .bump
      left: 30px

  .bump
    height: 15px
    width: 30px
    position: absolute
    top: -7px
    overflow: hidden
    animation: move 0.5s linear infinite

    &.move-1
      animation: move 0.5s 350ms linear infinite

    &.move-2
      animation: move 0.5s 700ms linear infinite

    &:after
      content: ''
      display: block
      height: 30px
      width: 30px
      border: 8px solid $stroke
      border-radius: 50%
      background: $bg
      box-sizing: border-box

@keyframes spin

  0%
    transform: rotate(360deg)
  100%
    transform: rotate(0deg)

@keyframes pulse
  0%
    transform: scale(1)
  90%
    transform: scale(0.3)

  100%
    transform: scale(1)

@keyframes move
  0%
    left: 5%
    transform: scale(0)

  10%
    transform: scale(1)

  90%
    transform: scale(1)

  100%
    left: 55%
    transform: scale(0)

  
.return
  text-align: center
  color: #999

a
  color: #333

h1, h2
  text-align: center
  margin: 50px

h2
  color: #666

</style>
