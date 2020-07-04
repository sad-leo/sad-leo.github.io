<template>
  <div class="container">
    <div class="container-content">
      <div class="header">
        <p>
          <i class="el-icon-user-solid"></i>
        </p>
        <p>吴 杰</p>
        <p>Web前后端开发</p>
        <p>
          <el-button class="btn" type="info" @click="toBody">
            Know Me Better
            <i class="el-icon-arrow-right el-icon--right"></i>
          </el-button>
        </p>
      </div>
    </div>
    <MainContent></MainContent>
  </div>
</template>
<script>
import MainContent from "./../components/main-content";
export default {
  components: {
    MainContent
  },
  data() {
    return {};
  },
  created: function() {
    this.printMsg();
  },
  mounted: function() {},
  methods: {
    printMsg() {
      try {
        window.console &&
          window.console.log &&
          (console.log(
            "___.   .__                 \n\\_ |__ |  |   ____   ____ \n | __ \\|  |  /  _ \\ / ___\\ \n | \\_\\ \\  |_(  <_> ) /_/  > \n |___  /____/\\____/\\___  / \n     \\/           /_____/  "
          ),
          console.log("欢迎来到落寞式~微笑的个人博客！！！"));
      } catch (e) {
        console.error(e);
      }
    },
    toBody() {
      let el = document.querySelector(".el-container");
      this.$nextTick(function() {
        window.scrollTo({ behavior: "instant", top: el.offsetTop });
      });
    }
  }
};
</script>

<style scoped>
.container,
.container-content {
  height: calc(100vh);
  width: 100%;
}
.container {
  background-image: url("/static/images/parallex.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
}
.container-content {
  background: rgba(0, 0, 0, 0.5);
}
.header {
  height: 50%;
  width: 50%;
  margin: 0 auto;
  top: 20%;
  position: relative;
  text-align: center;
}
.header p {
  color: #ffffff;
  font-size: 25px;
}
.header p:first-child {
  font-size: 140px;
}
.header p:nth-child(3) {
  line-height: 50px;
}
.btn {
  background-color: #000000;
  border: 0px;
  margin-top: 10px;
}
.btn:hover {
  margin-top: 9px;
}
</style>
