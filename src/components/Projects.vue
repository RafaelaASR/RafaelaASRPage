<template> 
  <section 
    id="projects" ref="element"
    class="tecnologias"
    :class="{ 'animate__animated animate__fadeInUp': isVisible }"
  >
    <h2>Meus Projetos</h2> 
    <div class="projects-grid"> 
      
    </div> 
  </section> 
</template> 
 
<script setup> 
import 'animate.css'
import { useScrollAnimation } from '@/stores/scrollAnimation'

const { element, isVisible } = useScrollAnimation({ threshold: 0.2 })
</script> 
<style scoped>
#tecnologias{
  margin-top: 3%;
}

h2{
  font-weight: 800;
  font-size: 30px;
}

.tecnologias-container{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
  margin-top: 30px;
  margin-left: 25%;
  margin-right: 25%;
}
</style>
  