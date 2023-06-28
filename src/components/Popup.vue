<template>
  <div class="popup">
    <h2>{{ config.title }}</h2>
    <h3>{{ config.subtitle }}</h3>

    <div
      v-if="config.game"
      class="animated-border"
    >
      <img
        src="../assets/caca-niquel.png"
        alt="Jogo Caça-Níquel"
        width="400"
      />
    </div>

    <div v-else>
      <video
        :src="config.videoUrl"
        controls
      ></video>
    </div>

    <form>
      <div
        v-for="(field, index) in config.formFields"
        :key="index"
        class="form-field"
      >
        <label>{{ field.label }}</label>
        <input
          :type="field.type"
          :placeholder="field.placeholder"
          class="field"
        />
      </div>

      <div
        v-if="config.showConsentCheckbox"
        class="form-field"
      >
        <label for="consentCheckbox">Consentimento na coleta de dados</label>
        <input
          id="consentCheckbox"
          type="checkbox"
          class="consentCheckbox"
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ['config'],
};
</script>

<style scoped>
.popup {
  margin-bottom: 1rem;
  border-radius: 8px;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  animation: popupAnimation 0.5s ease-out;
}

@keyframes popupAnimation {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.form-field {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  margin-bottom: 0.5rem;
}

.field {
  border: none;
  padding: 0.7rem;
  border-radius: 8px;
}

button[type='submit'] {
  width: 100%;
  margin-top: 1rem;
}

.animated-border {
  border: 2px solid rgb(255, 0, 0);
  animation: borderAnimation 5s infinite;
  margin-bottom: 1rem;
}

@keyframes borderAnimation {
  0% {
    border-color: rgb(255, 0, 0);
  }
  25% {
    border-color: rgb(0, 255, 0);
  }
  50% {
    border-color: rgb(0, 0, 255);
  }
  75% {
    border-color: rgb(255, 255, 0);
  }
  100% {
    border-color: rgb(255, 0, 0);
  }
}

/* Estilos adicionais conforme necessário */
</style>
