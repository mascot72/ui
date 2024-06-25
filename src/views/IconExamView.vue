<script setup lang="ts">
</script>

<template>
  <div>[IconExamView.vue]</div>
  <div class="background-image">hello</div>
</template>
<style>
    <style>
        .background-image {
            display: flex;
            align-items: center;
            position: relative;
            padding-left: 100px; /* Adjust based on your image size */
            height: 100px; /* Adjust as needed */
        }

        .background-image::before {
            content: '';
            position: absolute;
            left: 0;
            width: 100px; /* Adjust based on your image size */
            height: 100px; /* Adjust as needed */
            background: url('../assets/logo.svg') no-repeat center center;
            background-size: contain; /* Adjust as needed */
        }
    </style>
