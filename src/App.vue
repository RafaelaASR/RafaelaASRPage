<template> 
  <div id="app"> 
    <Header /> 
    <router-view/> 
    <Footer /> 
  </div> 
</template> 
 
<script> 
import Header from './components/Header.vue' 
import Footer from './components/Footer.vue' 
 
export default { 
  name: 'App', 
  components: { 
    Header, 
    Footer 
  } 
} 
</script> 
<style>
#app {
  display: flex;
  flex-direction: column;
  margin-left: 0;
  padding-left: 0;
  padding-right: 0;
}
</style>
  