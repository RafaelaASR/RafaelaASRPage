<template> 
  <section id="contact" class="contact"> 
    <h2>Contato</h2> 

    <ul class="contact-container"> 
      <li>
        <i class="ri-instagram-line"></i>
      </li>
      <li>
        <i class="ri-mail-line"></i>
      </li>
      <li>
        <i class="ri-github-line"></i>
      </li>
      <li>
        <i class="ri-whatsapp-line"></i>
      </li>      
    </ul> 
  </section>
</template> 
 
<script setup> 
import 'animate.css'
import { useScrollAnimation } from '@/stores/scrollAnimation'

const { element, isVisible } = useScrollAnimation({ threshold: 0.2 })
</script> 
<style scoped>
#contact{
  margin-top: 3%;
}

h2{
  font-weight: 800;
  font-size: 30px;
}


.contact-container {
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 30px;
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

/* ✨ efeito hover */
.contact-container li:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}
</style>
