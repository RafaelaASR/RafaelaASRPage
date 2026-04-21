<template> 
  <section id="projects" class="projects"> 
    <h2>Meus Projetos</h2> 
    <div class="projects-grid"> 
      <div class="project-card" v-for="(project, index) in projects"  
:key="index"> 
        <div class="project-image"> 
          <img :src="project.image" :alt="project.title"> 
        </div> 
        <div class="project-info"> 
          <h3>{{ project.title }}</h3> 
          <p>{{ project.description }}</p> 
          <div class="project-links"> 
            <a :href="project.demo" target="_blank">Demo</a> 
            <a :href="project.github" target="_blank">GitHub</a> 
          </div> 
        </div> 
      </div> 
    </div> 
  </section> 
</template> 
 
<script> 
export default { 
  name: 'Projects', 
  data() { 
    return { 
      projects: [ 
        { 
          title: 'Projeto 1', 
          description: 'Uma breve descrição do projeto.', 
          image: 'https://via.placeholder.com/300x200', 
          demo: '#', 
          github: '#' 
        }, 
        // Adicione mais projetos conforme necessário 
      ] 
    } 
  } 
} 
</script> 
  