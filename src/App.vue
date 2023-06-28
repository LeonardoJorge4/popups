<template>
  <div>    
    <Popup :config="gamePopupConfig" />
    <Popup :config="videoPopupConfig" />
  </div>
</template>

<script>
import Popup from './components/Popup.vue';
import SlotMachine from './components/SlotMachine.vue';

export default {
  components: {
    Popup,
    SlotMachine
  },
  data() {
    return {
      gamePopupConfig: {
        title: 'Popup de Jogo Caça-Níquel',
        subtitle: 'Descrição do jogo caça-níquel',
        game: true,
        formFields: [
          { label: 'Email', type: 'email', placeholder: 'Digite seu email' },
          { label: 'Nome', type: 'text', placeholder: 'Digite seu nome' },
          { label: 'Número de Celular', type: 'tel', placeholder: 'Digite seu número de celular' },
          { label: 'Gênero', type: 'text', placeholder: 'Digite seu gênero' },
        ],
        showConsentCheckbox: true,
      },
      videoPopupConfig: {
        title: 'Popup de Vídeo',
        subtitle: 'Descrição do vídeo',
        game: false,
        videoUrl: 'https://www.example.com/video.mp4',
        formFields: [
          { label: 'Email', type: 'email', placeholder: 'Digite seu email' },
          { label: 'Nome', type: 'text', placeholder: 'Digite seu nome' },
          { label: 'Número de Celular', type: 'tel', placeholder: 'Digite seu número de celular' },
          { label: 'Gênero', type: 'text', placeholder: 'Digite seu gênero' },
        ],
        showConsentCheckbox: false,
      },
    };
  },
};
</script>