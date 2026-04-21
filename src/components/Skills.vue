<template> 
  <section id="skills" class="skills"> 
    <h2>Habilidades</h2> 
    <div class="skills-container"> 
      <div class="skill" v-for="(skill, index) in skills"  
:key="index"> 
        <h3>{{ skill.name }}</h3> 
        <div class="skill-level"> 
          <div class="skill-bar" :style="{ width: skill.level + '%'  
}"></div> 
        </div> 
        <span>{{ skill.level }}%</span> 
      </div> 
    </div> 
  </section> 
</template> 
 
<script> 
export default { 
  name: 'Skills', 
  data() { 
    return { 
      skills: [ 
        { name: 'Vue.js', level: 90 }, 
        { name: 'JavaScript', level: 85 }, 
        { name: 'HTML/CSS', level: 95 }, 
        { name: 'React', level: 75 }, 
        { name: 'Node.js', level: 70 } 
      ] 
    } 
  } 
} 
</script> 
  