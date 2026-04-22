<template> 
  <div class="home"> 
   <!-- <section class="hero"> 
      <h1>Olá, eu sou Seu Nome</h1> 
      <p>Desenvolvedor Web | Designer | Criativo</p> 
    </section> -->  
    <About /> 
    <Tecnologias /> 
    <!--<Projects /> -->
  </div> 
</template> 
 
<script setup> 
import About from '@/components/About.vue' 
import Tecnologias from '@/components/Tecnologias.vue' 
import Projects from '@/components/Projects.vue' 
 
</script> 
<style>
  .home{
    margin-left: 5%;
    margin-right: 5%;
  }
</style>
