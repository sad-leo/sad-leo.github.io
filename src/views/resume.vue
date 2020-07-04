<template>
  <div>
    <vueCanvasNest :config="{color:'0,0,0', count: 280}" ></vueCanvasNest>
    <div class="res-content">
        <div class="item">
            <div>
                designing...
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import vueCanvasNest from "vue-canvas-nest";
export default {
  components: {
    vueCanvasNest
  }
};
</script>

<style scoped>
    .res-content{
        width: 80%;
        margin: 0 auto;
        margin-top: 30px;
        background-color: #ffffff;
        padding: 10px;
    }
    .item{
        text-align: center;
        height: 100px;
    }
    .item div{
        float: left;
        margin: 0 auto;
    }
</style>