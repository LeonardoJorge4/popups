<template>
  <div class="popup">
    <h2 class="popup__title">{{ config.title }}</h2>
    <h3 class="popup__subtitle">{{ config.subtitle }}</h3>

    <div
      v-if="config.game"
      class="popup__content popup__content--game"
    >
      <img
        src="../assets/slot-machine-icon.png"
        alt="Jogo Caça-Níquel"
        class="popup__game-image"
      />
    </div>

    <div
      v-else
      class="popup__content popup__content--video"
    >
      <video
        :src="config.videoUrl"
        controls
      ></video>
    </div>

    <form>
      <div
        v-for="(field, index) in config.formFields"
        :key="index"
        class="popup__form-field"
      >
        <label>{{ field.label }}</label>
        <input
          :type="field.type"
          :placeholder="field.placeholder"
          class="popup__field"
        />
      </div>

      <div
        v-for="(field, index) in config.consentCheckboxes"
        :key="index"
        class="popup__form-field"
      >
        <label :for="field.id">{{ field.label }}</label>
        <input
          :id="field.id"
          type="checkbox"
          class="popup__consent-checkbox"
        />
      </div>
      <button
        type="submit"
        class="popup__submit-button"
      >
        Enviar
      </button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  props: ['config'],
};
</script>

<style scoped>
.popup {
  max-width: 450px;
  margin-bottom: 1rem;
  border-radius: 6px;
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

.popup__title {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.popup__subtitle {
  font-weight: 500;
}

.popup__content {
  margin: 1rem 0;
}

.popup__content--game {
  border: 2px solid #ab222e;
  animation: borderAnimation 5s infinite;
}

video {
  width: 100%;
}

.popup__form-field {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  margin-bottom: 1rem;
}

.popup__field {
  border: none;
  padding: 0.7rem;
  border-radius: 6px;
  background-color: #29292e;
  color: #ffffff;
}

.popup__consent-checkbox {
  align-self: flex-start;
  width: 24px;
  height: 24px;
}

.popup__submit-button {
  width: 100%;
  height: 40px;
  border: 0;
  background: #00875f;
  color: #ffffff;
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
}

.popup__submit-button:hover {
  background: #015f43;
  transition: background-color 0.2s;
}

.popup__game-image {
  width: 100%;
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
</style>
