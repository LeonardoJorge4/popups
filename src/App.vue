<template>
  <div>
    <Popup :config="gamePopupConfig" />
  </div>
</template>

<script lang="ts">
import Popup from './components/Popup.vue';

export default {
  components: {
    Popup,
  },
  data() {
    return {
      gamePopupConfig: {
        title: 'Jogo Caça-Níquel',
        subtitle:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
        game: true,
        formFields: [
          { label: 'Email', type: 'email', placeholder: 'Digite seu email' },
          { label: 'Nome', type: 'text', placeholder: 'Digite seu nome' },
          {
            label: 'Número de Celular',
            type: 'tel',
            placeholder: 'Digite seu número de celular',
          },
          { label: 'Gênero', type: 'text', placeholder: 'Digite seu gênero' },
        ],
        consentCheckboxes: [
          {
            id: 'consentCheckbox',
            label: 'Consentimento na coleta de dados',
          },
        ],
      },
      videoPopupConfig: {
        title: 'Popup de Vídeo',
        subtitle:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
        game: false,
        videoUrl: 'https://www.example.com/video.mp4',
        formFields: [
          { label: 'Email', type: 'email', placeholder: 'Digite seu email' },
          { label: 'Nome', type: 'text', placeholder: 'Digite seu nome' },
          {
            label: 'Número de Celular',
            type: 'tel',
            placeholder: 'Digite seu número de celular',
          },
          { label: 'Gênero', type: 'text', placeholder: 'Digite seu gênero' },
        ],
      },
    };
  },
};
</script>
