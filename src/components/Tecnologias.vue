<template> 
  <section
    id="tecnologias"
    ref="element"
    class="tecnologias"
    :class="{ 'animate__animated animate__fadeInUp': isVisible }"
  >
    <h2>Tecnologias e ferramentas</h2> 
    <div class="tecnologias-container">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="imagem do ícone do PHP" width="10%">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="imagem do ícone do PHP" width="10%">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="imagem do ícone do Javascript" width="10%">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="imagem do ícone do Html5" width="10%">
      <img src="http://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="imagem do ícone do Css3" width="10%">
    </div>
    <div class="tecnologias-container"> 
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg" alt="imagem do ícone do Vue.js" width="10%">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg" alt="imagem do ícone do Vue.js" width="10%">
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