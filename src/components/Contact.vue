<template> 
  <section id="contact" class="contact"  ref="element"
    :class="{ 'animate__animated animate__fadeInUp': isVisible }"> 
    <h2>Contato</h2> 

    <ul class="contact-container"> 
      <li><a href="https://github.com/RafaelaASR"><i class="ri-github-line"></i></a></li>
      <li><a mailto="rafaelaasr.ec@gmail.com"><i class="ri-mail-line"></i></a></li>
    </ul>
  </section>
</template> 
 
<script setup> 
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { element, isVisible } = useScrollAnimation({ threshold: 0.2 })
const currentYear = new Date().getFullYear()

</script> 
<style scoped>
h2{
  font-weight: 800;
  font-size: 30px;
}

.contact-container {
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 0;
  list-style: none;
}

.contact-container li {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #D96459;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.contact-container i {
  font-size: 26px;
  color: white;
}

.contact-container li:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}
</style>
