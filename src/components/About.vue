<template> 
  <section
    id="about"
    ref="element"
    class="tecnologias"
    :class="{ 'animate__animated animate__fadeInUp': isVisible }"
  >
    <img id="foto-perfil" src="../assets/fotoPerfil.jpeg" alt="" width="20%" height="10%">
    <div class="about-content">
      <h2>Sobre mim</h2>
      <div class="content">
        <div class="about-text">
          <p>Olá! Sou desenvolvedora júnior Full Stack Frontend com quase 2 anos de experiência.</p>
          <p>Ao longo desse período, desenvolvimento de telas para dashboards, relatórios e gestão de usuários. Fiz ligações com APIs e envio de cobrança por e-maila partir de arquivos csv.
          </p>
          <p>Trabalho bem em equipe, sou resiliente e comprometida com que faço. Gosto de identificar problemas e buscar soluções, além de estar sempre em constante aprendizado, tanto pessoal quanto profissional.</p>
          <p>Também gosto de viajar e, nas horas vagas, montar quebra-cabeças.</p>
        </div>
      </div>
    </div>
  </section> 
</template> 
 
<script setup> 
import 'animate.css'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { element, isVisible } = useScrollAnimation({ threshold: 0.1 })

</script> 
<style scoped>
#about{
  display: flex;
  margin-top: 50px;
}

#foto-perfil{
  margin-top: 10px;
  border-radius: 10%;
  border: 10px solid #0C3640;
}

h2{
  font-weight: 800;
  font-size: 30px;
}

.about-content{
  font-size: 1em;
  margin-top: 5%;
  margin-left: 5%;
}

.about-text{
  margin-top: 20px;
  line-height: 2em;
}
</style>  