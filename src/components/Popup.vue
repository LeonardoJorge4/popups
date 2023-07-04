<template>
  <div
    class="popup"
    :class="config.game ? 'popup__game' : 'popup__video'"
  >
    <div v-if="config.game">
      <img
        alt="Jogo Caça-Níquel"
        src="https://images.unsplash.com/photo-1604028297236-42130c7dcc3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      />
    </div>

    <div v-else>
      <video
        :src="config.videoUrl"
        controls
      ></video>
    </div>

    <div class="popup__form-container">
      <h2 class="popup__title">{{ config.title }}</h2>
      <h3 class="popup__subtitle">{{ config.subtitle }}</h3>

      <form>
        <div
          v-for="(field, index) in config.formFields"
          :key="index"
          class="popup__form-field"
        >
          <select
            id="cars"
            name="genre"
            class="popup__field"
            :placeholder="field.placeholder"
            v-if="field.type === 'select'"
          >
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
            <option value="dont-inform">Prefiro não informar</option>
          </select>

          <input
            v-else
            class="popup__field"
            :type="field.type"
            :placeholder="field.placeholder"
          />
        </div>

        <button
          type="submit"
          class="popup__submit-button"
        >
          ENVIAR
        </button>

        <div
          v-for="(field, index) in config.consentCheckboxes"
          :key="index"
          class="popup__container-consent-checkbox"
        >
          <input
            :id="field.id"
            type="checkbox"
            class="popup__consent-checkbox"
          />
          <label :for="field.id">{{ field.label }}</label>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { type PropType } from 'vue';
import { PopupProps } from '../@types/popup';

export default {
  props: {
    config: {
      type: Object as PropType<PopupProps>,
      required: true,
    },
  },
};
</script>

<style scoped>
.popup {
  display: flex;
  max-width: 800px;
  border-radius: 12px;
  background-color: #fff;
  animation: popupAnimation 0.5s ease-out;
  margin-bottom: 2rem;
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

.popup__game {
  flex-direction: row;
}

.popup__video {
  flex-direction: column;
}

.popup__game img {
  width: 100%;
  height: 100%;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}

.popup__video video {
  width: 100%;
  height: 100%;
  padding: 1.5rem 1.5rem 0 1.5rem;
}

.popup__form-container {
  padding: 1.5rem;
}

.popup__title {
  color: #111111;
  font-weight: bold;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.popup__subtitle {
  color: #adadad;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.popup__form-field {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  margin-bottom: 1rem;
}

.popup__field {
  height: 60px;
  padding: 1rem;
  color: #111111;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 1.2rem;
}

.popup__field::placeholder {
  color: #ccc;
}

.popup__container-consent-checkbox {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 1rem;
}

.popup__consent-checkbox {
  align-self: flex-start;
  width: 24px;
  height: 24px;
}

.popup__container-consent-checkbox label {
  font-size: 1.2rem;
  color: #adadad;
}

.popup__submit-button {
  width: 100%;
  height: 60px;
  border: 0;
  background: #111111;
  color: #ffffff;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.5rem;
  margin-top: 0.5rem;
}

.popup__submit-button[disabled] {
  background-color: #555555;
  cursor: not-allowed;
}

.popup__submit-button:not(:disabled):hover {
  background: #232323;
  transition: background-color 0.2s;
}

@media (max-width: 768px) {
  .popup__game {
    flex-direction: column;
  }

  .popup__game img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom-left-radius: 0;
  }
}
</style>
