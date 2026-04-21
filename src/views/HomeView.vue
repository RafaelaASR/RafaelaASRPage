<template> 
  <div class="home"> 
    <section class="hero"> 
      <h1>Olá, eu sou Seu Nome</h1> 
      <p>Desenvolvedor Web | Designer | Criativo</p> 
    </section> 
     
    <About /> 
    <Skills /> 
    <Projects /> 
    <Contact /> 
  </div> 
</template> 
 
<script> 
import About from '@/components/About.vue' 
import Skills from '@/components/Skills.vue' 
import Projects from '@/components/Projects.vue' 
import Contact from '@/components/Contact.vue' 
 
export default { 
  name: 'Home', 
  components: { 
    About, 
    Skills, 
    Projects, 
    Contact 
  } 
} 
</script> 
