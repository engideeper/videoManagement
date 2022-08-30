<!--
 * @Author: Austen austen.guo@tcsoft.net.cn
 * @Date: 2022-08-30 15:09:17
 * @LastEditors: Austen austen.guo@tcsoft.net.cn
 * @LastEditTime: 2022-08-30 15:09:57
 * @FilePath: \video-management\src\components\video.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <video-player
      src="/your-path/video.mp4"
      poster="/your-path/poster.jpg"
      controls
      :loop="true"
      :volume="0.6"
    />
  </template>
  
  <script>
    import { defineComponent } from 'vue'
    import { VideoPlayer } from '@videojs-player/vue'
    import 'video.js/dist/video-js.css'
  
    export default defineComponent({
      components: {
        VideoPlayer
      }
    })
  </script>