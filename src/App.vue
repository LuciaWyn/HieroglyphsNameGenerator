<script setup lang="ts">
import {useGlyphsStore} from './stores/glyphs';
const GlyphsStore = useGlyphsStore();
</script>

<template>
  <div class="m-6 p-3 text-primary bg-warning text-center">
    <h1>Enter Name to Convert into Hieroglyphs</h1>
    <p>For you or your pet.</p>
    <h3 class="text-center">Enter Name:</h3>
    <input class="form-control text-center mb-3" v-model="GlyphsStore.name" type="text" name="name" />  
    <h4 class="text-center">Select Gender/Species</h4>
    <select class="form-control mb-3 form-select-lg" v-model="GlyphsStore.type">
      <option selected></option>
      <option value="𓀀">𓀀 - Man</option>
      <option value="𓁐">𓁐 - Woman</option>
      <option value="𓃠">𓃠 - Cat</option>
      <option value="𓃡">𓃡 - Dog</option>
    </select>
    <button class="btn border-primary mt-2 text-primary border-5" @click="GlyphsStore.generateGlyphs()">Enter Name</button>
  
  </div>
  <div class="row">
    <div class="col">
      <p class="text-center pt-3 Glyphs">{{GlyphsStore.glyphs}}</p>
    </div>
  </div>
</template>

<style>
.Glyphs{
  font-size: 7.5em;
  display: block;
}
</style>
