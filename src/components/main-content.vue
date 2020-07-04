<template>
  <el-container>
    <el-header class="stickyTop">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#000"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">技术文章</el-menu-item>
        <el-menu-item index="3">程序人生</el-menu-item>
        <el-menu-item index="4">生活日记</el-menu-item>
        <el-menu-item index="5">关于我</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <div class="item" id="item2">
        <el-row :gutter="12">
          <el-col :span="8">
            <el-card shadow="hover">
              <div class="block">
                <el-carousel>
                  <el-carousel-item>
                    <img :src="tec1" />
                  </el-carousel-item>
                  <el-carousel-item>
                    <img :src="tec2" />
                  </el-carousel-item>
                  <el-carousel-item>
                    <img :src="tec3" />
                  </el-carousel-item>
                </el-carousel>
              </div>
              <p class="quotes">
                <i>程序员，他们想的是什么？他们想的永远都是技术，他们崇尚的也永远都是技术。</i>
              </p>
            </el-card>
          </el-col>
          <el-col :span="16">
            <el-card shadow="hover">
              <div class="card-title">
                <el-row>
                  <el-col :span="15">
                    <div class="grid-content bg-purple">排序：时间(默认) 访问量 评论数</div>
                  </el-col>
                  <el-col :span="9">
                    <div class="grid-content bg-purple-light">
                      <el-input
                        placeholder="请输入内容"
                        prefix-icon="el-icon-search"
                        v-model="artSearth"
                      ></el-input>
                    </div>
                  </el-col>
                </el-row>
              </div>
              <div class="card-content" v-infinite-scroll>
                <div :id="art.id" v-for="art in artList" :key="art.id" class="card-item">
                  <a href="/test" target="_target">
                    <h4>{{ art.title }}</h4>
                  </a>
                  <p>{{ art.desc }}</p>
                  <p>
                    <span>{{ art.updateTime }}</span>
                    <span v-for="t in art.tag" :key="t.id">
                      <el-tag type="success">{{ t.msg }}</el-tag>
                    </span>
                  </p>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <el-divider></el-divider>
      <div class="item" id="item3">
        <el-row :gutter="12">
          <el-col :span="16">
            <el-card shadow="hover">
              <div class="card-title">
                <el-row>
                  <el-col :span="15">
                    <div class="grid-content bg-purple">排序：时间(默认) 访问量 评论数</div>
                  </el-col>
                  <el-col :span="9">
                    <div class="grid-content bg-purple-light">
                      <el-input
                        placeholder="请输入内sss容"
                        prefix-icon="el-icon-search"
                        v-model="artSearth"
                      ></el-input>
                    </div>
                  </el-col>
                </el-row>
              </div>
              <div class="card-content" v-infinite-scroll="loadArtList">
                <div :id="art.id" v-for="art in artList" :key="art.id" class="card-item">
                  <h4>{{ art.title }}</h4>
                  <p>{{ art.desc }}</p>
                  <p>
                    <span>{{ art.updateTime }}</span>
                  </p>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">
              <div class="block">
                <el-carousel direction="vertical">
                  <el-carousel-item>
                    <img :src="pro1" />
                  </el-carousel-item>
                  <el-carousel-item>
                    <img :src="pro2" />
                  </el-carousel-item>
                  <el-carousel-item>
                    <img :src="pro3" />
                  </el-carousel-item>
                </el-carousel>
              </div>
              <p class="quotes">
                <i>如果你没有把握做到，最好就不要承诺，你什么也不承诺，至少别人不会看不起你。</i>
              </p>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <el-divider></el-divider>
      <div class="item" id="item4">
        <el-row :gutter="12">
          <el-col :span="8">
            <el-card shadow="hover">
              <div class="block">
                <el-carousel>
                  <el-carousel-item>
                    <img :src="life1" />
                  </el-carousel-item>
                  <el-carousel-item>
                    <img :src="life2" />
                  </el-carousel-item>
                  <el-carousel-item>
                    <img :src="life3" />
                  </el-carousel-item>
                </el-carousel>
              </div>
              <p class="quotes">
                <i>没有情调，不懂浪漫，也许这是程序员的一面，但拥有朴实无华的爱是他们的另一面。</i>
              </p>
            </el-card>
          </el-col>
          <el-col :span="16">
            <el-card shadow="hover">
              <div class="card-title">
                <el-row>
                  <el-col :span="15">
                    <div class="grid-content bg-purple">排序：时间(默认) 访问量 评论数</div>
                  </el-col>
                  <el-col :span="9">
                    <div class="grid-content bg-purple-light">
                      <el-input
                        placeholder="请输入内容"
                        prefix-icon="el-icon-search"
                        v-model="artSearth"
                      ></el-input>
                    </div>
                  </el-col>
                </el-row>
              </div>
              <div class="card-content" v-infinite-scroll>
                <div :id="art.id" v-for="art in artList" :key="art.id" class="card-item">
                  <h4>{{ art.title }}</h4>
                  <p>{{ art.desc }}</p>
                  <p>
                    <span>{{ art.updateTime }}</span>
                  </p>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <el-divider></el-divider>
      <div class="item" id="item5">
        <el-card shadow="hover">
          <div class="about">
            <p>落寞式 - 微笑</p>
            <p>Web前后端开发</p>
            <p>江苏省 - 南京市 - 雨花台区</p>
            <p>1601242027@qq.com</p>
            <p>
              <el-button type="primary" @click="_resumeTarget">查看简历</el-button>
            </p>
          </div>
        </el-card>
      </div>
    </el-main>
    <router-view />
    <el-footer>
      <p>© 2020 Wujie. All rights reserved.</p>
      <p>
        <a href="http://beian.miit.gov.cn" style="color:#939393;" target="_blank">苏ICP备20007857号</a>
      </p>
      <div style="width:300px;margin:0 auto; padding:5px 0;">
        <a
          target="_blank"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32032402000372"
          style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"
        >
          <img src="./../assets/image/icon-beian.png" style="float:left;height:20px;width:20px" />
          <p
            style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;"
          >苏公网安备 32032402000372号</p>
        </a>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex2: "1",
      bodyHeight: 0,
      tec1: require("../assets/image/technology-1.jpg"),
      tec2: require("../assets/image/technology-2.jpg"),
      tec3: require("../assets/image/technology-3.jpg"),
      pro1: require("../assets/image/program-1.jpg"),
      pro2: require("../assets/image/program-2.gif"),
      pro3: require("../assets/image/program-3.jpg"),
      life1: require("../assets/image/life-1.jpg"),
      life2: require("../assets/image/life-2.jpg"),
      life3: require("../assets/image/life-3.jpg"),
      artCount: 1,
      artSearth: "",
      artList: [
        {
          id: "a1",
          title: "SpringBoot使用Redis按照日历生成自增编号",
          desc: "目标：在系统中按日历生成编号，如 202003070001 刚开始，我",
          updateTime: "2020-01-01 12:21:21",
          tag: [
            {
              id: "t1",
              type: "success",
              msg: "成功"
            },
            {
              id: "t2",
              type: "success",
              msg: "成撒打双打功"
            }
          ]
        }
      ]
    };
  },
  mounted: function() {
    this.bodyHeight = document.querySelector("body").offsetHeight;
    this.initScroll();
  },
  methods: {
    initScroll() {
      let _this = this;
      window.addEventListener("scroll", function(e) {
        let scrollHeight = window.pageYOffset;
        let elHeader = document.querySelector(".stickyTop");
        if (scrollHeight >= _this.bodyHeight) {
          elHeader.style.position = "fixed";
          elHeader.style.top = "0";
        } else {
          elHeader.style.position = "absolute";
          elHeader.style.top = "";
        }
      });
    },
    handleSelect(key, keyPath) {
      this.scollToTarget(key);
    },
    scollToTarget(key) {
      if (key == 1) {
        window.scrollTo({ behavior: "instant", top: 0 });
      } else {
        let el = document.querySelector("#item" + key);
        this.$nextTick(function() {
          window.scrollTo({
            behavior: "smooth",
            top: this.bodyHeight + el.offsetTop - (key > 2 ? 60 : 0)
          });
        });
      }
    },
    loadArtList() {
      this.$axios
        .get("/test/technology.json")
        .then(res => {
          let arr = res.data.data;
          for (let i = 0; i < arr.length; i++) {
            arr[i].id = Math.random() * 100000000;
            this.artList.push(arr[i]);
          }
        })
        .catch(error => {
          console.warn(error);
        });
    },
    _resumeTarget() {
      let a = document.createElement("a");
      a.target = "_blank";
      a.href = "/resume";
      a.click();
    }
  }
};
</script>

<style scoped>
@import "../assets/css/main-content.css";
</style>
 



