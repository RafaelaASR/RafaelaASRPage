<template> 
  <footer class="footer"> 
    <div class="social-links"> 
      <a href="#" target="_blank"><i class="fab fa-github"></i></a> 
      <a href="#" target="_blank"><i class="fab  
fa-linkedin"></i></a> 
      <a href="#" target="_blank"><i class="fab  
fa-twitter"></i></a> 
    </div> 
    <p>© {{ currentYear }} Rafaela de Abreu. Todos os direitos  
reservados.</p> 
  </footer> 
</template> 
 
<script> 
export default { 
  name: 'Footer', 
  computed: { 
    currentYear() { 
      return new Date().getFullYear(); 
    } 
  } 
} 
</script> 
 
<style scoped> 
.footer { 
  background-color: #333; 
  color: white; 
  text-align: center; 
  padding: 1rem; 
} 
 
.social-links a { 
  color: white; 
  margin: 0 10px; 
  font-size: 1.5rem; 
} 
</style> 
 