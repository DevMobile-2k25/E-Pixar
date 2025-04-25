<style scoped>
/* Adicione essa regra se não houver uma regra global */
:global(body) {
  overflow-x: hidden;
}

.elephant {
    position: absolute;
    top: 47%;
    left: -5%;
    width: 45%;
}

.mcqueen {
    position: absolute;
    top: -7%;
    right: 0;
    width: 50%;
}

.monster {
    position: fixed;
    top: 45%;
    right: -3%;
    width: 50%;
}

.remi {
    position: absolute;
    bottom: 0%;
    left: 0%;
    width: 50%;
}

.up {
    position: absolute;
    top: -7%;
    left: 0%;
    width: 50%;
}

.wall {
    position: absolute;
    bottom: 0%;
    right: 0%;
    width: 50%;
}
</style>

<template>
  <img src="../../assets/images/OneBoard/elephant.png" alt="" class="elephant">
  <img src="../../assets/images/OneBoard/mcqueen.png" alt="" class="mcqueen">
  <img src="../../assets/images/OneBoard/monster.png" alt="" class="monster">
  <img src="../../assets/images/OneBoard/remi.png" alt="" class="remi">
  <img src="../../assets/images/OneBoard/up.png" alt="" class="up">
  <img src="../../assets/images/OneBoard/wall.png" alt="" class="wall">
</template>
