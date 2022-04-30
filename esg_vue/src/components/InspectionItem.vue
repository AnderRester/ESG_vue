<template>
  <Renderer id="window" resize="window" orbit-ctrl ref="renderer" :shadow="true">
    <Camera :position="{x: 200, y: 500, z: 1400  }" />
    <Scene ref="scene" background="grey">
      <!-- <HemisphereLight /> -->

      <AmbientLight/>
      

      <!-- <FbxModel src="../../public/models/enter.fbx"/> -->
      <FbxModel src="../../public/models/column.fbx" @load="onLoad" @ready="onReady"/>
    </Scene>
  </Renderer>
</template>


<script lang="ts">
import {
  AmbientLight,
  HemisphereLight,
  Camera,
  Renderer,
  Scene,
  FbxModel,
} from 'troisjs';

export default ({
  components: { Camera, Renderer, Scene, AmbientLight, FbxModel, HemisphereLight },
  methods: {
    onLoad() {
      console.log('successfully loaded');
    },
    onReady() {
      console.log('___________________________');
      console.log('Ready for work');
    },
  },
});
</script>

<style>
#window {
  width: 100%;
  margin-left: auto;
}
</style>