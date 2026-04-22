<template> 
<!-- https://demo.templatemonster.com/pt-br/demo/100362.html?_gl=1*1savic7*_ga*MTc5MzA2MzQzNC4xNzc1NDMwNjcw*_ga_FTPYEGT5LY*czE3NzU0MzA2NjkkbzEkZzEkdDE3NzU0MzA2NzEkajU4JGwwJGgw -->
<header class="header"> 
    <img src="../assets/Foto de fundo minimalista para banner de LinkedIn.png" alt="Foto com nome Rafale de Abreu da Silva Rego
    e em baixo Full Stack developer" width="100%">
    <div class="logo"> 
    </div> 
    <nav class="nav"> 
      <router-link to="/">Início</router-link> 
      <a href="#about">Sobre</a> 
      <a href="#projetos">Projetos</a> 
      <a href="#contact">Contato</a> 
    </nav> 
  </header> 
</template>
 
<script> 
export default { 
  name: 'Header' 
} 
</script> 
 
<style scoped> 
.header { 
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
  align-items: center; 
  background-color: #0C3640; 
} 

.nav a { 
  justify-content: space-between;
  color: #ffffff;
  margin-left: 1rem; 
  text-decoration: none;
  font-size: 1.1em;
} 
 
.logo {
  font-size: 1.2em;
}
</style> 
