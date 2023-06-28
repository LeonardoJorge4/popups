<template>
  <div class="slot-machine">
    <h1>Caça-Níquel</h1>
    <div class="reels">
      <div class="reel" v-for="(reel, index) in reels" :key="index">
        <div class="symbols" :style="{ transform: `translateY(${reelPosition[index]}px)` }">
          <div class="symbol" v-for="symbol in reel" :key="symbol" :class="symbol"></div>
        </div>
      </div>
    </div>
    <button @click="spin" :disabled="isSpinning">Girar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reels: [
        ['cherry', 'lemon', 'orange', 'plum', 'bell', 'bar', 'seven'],
        ['cherry', 'lemon', 'orange', 'plum', 'bell', 'bar', 'seven'],
        ['cherry', 'lemon', 'orange', 'plum', 'bell', 'bar', 'seven'],
      ],
      reelPosition: [0, 0, 0],
      symbolHeight: 100,
      isSpinning: false,
      spinIntervals: [],
    };
  },
  methods: {
    spin() {
      if (this.isSpinning) return;

      this.isSpinning = true;
      this.reelPosition = [0, 0, 0];

      const spinDuration = 3000; // 3 seconds
      const symbolHeight = this.symbolHeight;
      const maxTranslateY = -400;

      this.spinIntervals = this.reels.map((reel, index) => {
        const totalSymbols = reel.length;
        const finalPosition = -(totalSymbols * symbolHeight);
        const spins = 3 + index; // increase number of spins for each reel

        const randomPosition = Math.floor(Math.random() * totalSymbols); // generate random position

        return setInterval(() => {
          const currentPosition = this.reelPosition[index];
          const newPosition = currentPosition - symbolHeight;

          if (newPosition <= finalPosition) {
            clearInterval(this.spinIntervals[index]);
            this.spinIntervals.splice(index, 1);
            this.reelPosition[index] = finalPosition % symbolHeight;

            // Move reel to the random position
            const offset = randomPosition * symbolHeight;
            this.reelPosition[index] = finalPosition + offset;

            this.checkWin();
          } else {
            this.reelPosition[index] = newPosition > maxTranslateY ? newPosition : maxTranslateY;
          }
        }, spinDuration / spins);
      });

      setTimeout(() => {
        this.isSpinning = false;
      }, spinDuration);
    },
    checkWin() {
      const winCombinations = ['777', 'barbarbar', 'bellbellbell'];

      const symbols = this.reels.map((reel, index) => {
        const position = Math.floor(this.reelPosition[index] / this.symbolHeight) % reel.length;
        return reel[position];
      }).join('');

      if (winCombinations.includes(symbols)) {
        alert('Você ganhou!');
      }
    },
  },
  beforeDestroy() {
    this.spinIntervals.forEach((interval) => {
      clearInterval(interval);
    });
  },
};
</script>

<style>
.slot-machine {
  text-align: center;
}

.reels {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.reel {
  width: 100px;
  height: 300px;
  overflow: hidden;
  border: 1px solid #ccc;
  margin: 0 10px;
}

.symbols {
  transition: transform 1s;
}

.symbol {
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: center;
}

.cherry {
  background-color: red;
}

.lemon {
  background-color: yellow;
}

.orange {
  background-color: orange;
}

.plum {
  background-color: purple;
}

.bell {
  background-color: silver;
}

.bar {
  background-color: green;
}

.seven {
  background-color: blue;
}

button {
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
}
</style>
