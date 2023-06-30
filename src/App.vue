<template>
  <div>
    <Popup :config="gamePopupConfig" />
    <Popup :config="videoPopupConfig" />
  </div>
</template>

<script lang="ts">
import { PopupProps } from './@types/popup';
import Popup from './components/Popup.vue';

export default {
  components: {
    Popup,
  },
  data() {
    const gamePopupConfig: PopupProps = {
      title: 'Jogo Caça-Níquel',
      subtitle:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
      game: true,
      formFields: [
        { type: 'email', placeholder: 'Digite seu email' },
        { type: 'text', placeholder: 'Digite seu nome' },
        {
          type: 'tel',
          placeholder: 'Digite seu número de celular',
        },
        { type: 'text', placeholder: 'Digite seu gênero' },
      ],
      consentCheckboxes: [
        {
          id: 'consentCheckbox',
          label: 'Consentimento na coleta de dados',
        },
      ],
    };

    const videoPopupConfig: PopupProps = {
      title: 'Popup de Vídeo',
      subtitle:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
      game: false,
      videoUrl: 'https://www.example.com/video.mp4',
      formFields: [
        { type: 'email', placeholder: 'Digite seu email' },
        { type: 'text', placeholder: 'Digite seu nome' },
        {
          type: 'tel',
          placeholder: 'Digite seu número de celular',
        },
        { type: 'text', placeholder: 'Digite seu gênero' },
      ],
    };

    return {
      gamePopupConfig,
      videoPopupConfig,
    };
  },
};
</script>
