<template> 
  <footer class="footer">
    <Contact />
    <div class="social-links">
      <p>© {{ currentYear }} Rafaela de Abreu. Todos os direitos  
      reservados.</p>
    </div>
  </footer> 
</template> 
 
<script setup>
import 'animate.css'
import Contact from '@/components/Contact.vue'

const currentYear = new Date().getFullYear()

</script>
 
<style scoped> 
.footer { 
  background-color: #333; 
  color: white; 
  padding: 1rem; 
} 

.social-links{
  text-align: center; 
}
 
</style> 
 