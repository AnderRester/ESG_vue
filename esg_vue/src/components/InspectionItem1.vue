<template>
  <Renderer id="window" resize="window" antialias orbit-ctrl ref="renderer" :shadow="true">
    <Camera :position="{ x: 10, y: 20, z: 10 }" />
    <Scene background="#424242">
      <!-- <DirectionalLight :position="{x: 10, y: 10, z: 1000 }" :intensity="5"/> -->
      <!-- <DirectionalLight cast-shadow /> -->
      <!-- <HemisphereLight/> -->

      <AmbientLight :intensity="0.2" :position="{x: 100, y: 200, z: 300}"/>
      <!-- <PointLight color="#ffffff" :intensity="1" ref="light" /> -->
      <!-- <PointLight :position="{ z: 100 }" :intensity="150" /> -->


      <!-- <FbxModel src="../../public/models/enter.fbx"/> -->
      <FbxModel src="../../models/plate.fbx" @load="onLoad" @ready="onReady"></FbxModel>
    </Scene>
  </Renderer>
</template>


<script lang="ts">
import {
  AmbientLight,
  HemisphereLight,
  PointLight,
  DirectionalLight,
  Camera,
  Renderer,
  Scene,
  FbxModel,
  StandardMaterial
} from 'troisjs';

export default ({
  components: { Camera, Renderer, Scene, AmbientLight, FbxModel, HemisphereLight, PointLight, DirectionalLight, StandardMaterial },
  props: {

  },
  methods: {
    onLoad(model) {
      model.traverse(o => {
        if (o.isMesh) {
          // handle both multiple and single materials
          const asArray = Array.isArray(o.material) ? o.material : [o.material]
          // 0 works for matte materials - change as needed
          asArray.forEach(mat => mat.metalness = 0)
        }
      })
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