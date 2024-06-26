<script setup lang="ts">
</script>

<template>
  <div>[IconExamView.vue]</div>
  <div class="flex">
    <div class="background-image">100%</div>
    <div class="background-image">hello</div>
    <div class="background-image">
      hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
      hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
  
    </div>
    <div class="background-image">50%</div>
    <div class="background-image">hello</div>
    <div class="background-image">hello</div>
    <div class="background-image">hello</div>
  </div>

  <div>[exam2]</div>
    <div class="ex-layout">
      <div class="gnb">Global menu</div>
      <div class="main">
        <div class="lnb"> Left menu
          hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
           hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello 
        </div>
        <div class="content">
          Content area Content area Content area Content area Content area Content area Content area Content area
          Content area Content area Content area Content area Content area Content area Content area Content area
          Content area Content area Content area Content area Content area Content area Content area Content area
          Content area Content area Content area Content area Content area Content area Content area Content area
          Content area Content area Content area Content area Content area Content area Content area Content area
        </div>
      </div>
      <div class="footer">Footer area </div>
    </div>
</template>
<style>
  :root {
    --main-bg-color: brown;
    --width-size: 20px;
  }

  .flex {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100vh;
  }
  
  .background-image {
    display: flex;
    flex: 1 1 50%;
    align-items: center;
    position: relative;
    /* justify-content: flex-start; */
    /* align-content: stretch; */
    align-items: center;
    padding-left: var(--width-size); /* Adjust based on your image size */
    height: var(--width-size); /* Adjust as needed */
    border: 1px solid yellow;
    &:nth-child(1) {
      flex-basis: 100%;
    }
    &:nth-child(2) {
      flex-basis: 20px;
      height: 20em;
      align-items: center;
      align-content: stretch;
    }
    &:nth-child(3) {
      /* height: 40vh; */
      /* align-items: flex-start; */
      /* align-content: flex-start; */
      align-self:center;
    }
  }

  .background-image::before {
    content: '';
    position: absolute;
    justify-content: center;
    left: 0;
    width: var(--width-size); /* Adjust based on your image size */
    height: var(--width-size); /* Adjust as needed */
    background: url('../assets/logo.svg') no-repeat center center;
    background-size: contain; /* Adjust as needed */
  }

  /* exam2 */
  .ex-layout {
    min-width: 100px;
  
    .gnb {
      padding: 15px;
      background-color: #1064A3;
      color: white;
    }
    .main {
      background-color: rgba(84, 84, 84, 0.2);
      display: flex;
    
      :after {clear: both; display: block; content:''}
      .lnb {
        flex: 1 0 130px;
        padding: 10px;
        border-right: 1px solid #d9d9d951;
      }
      .content {
        float: left;
        padding: 40px;
      }
    }
    .footer {
      padding: 10px;
      color: brown;
      background-color: #E5F1FA;
    }
  }
</style>
