const display = document.querySelector('#count-display');
const incBtn = document.querySelector('#inc-btn');
const decBtn = document.querySelector('#dec-btn');

const CounterApp = {
  count: 0,

  increment: function () {
    this.count++;
    display.textContent = this.count;
  },

  decrement: function () {
    this.count--;
    display.textContent = this.count;
  }
};

// Attach handlers using .bind()
incBtn.addEventListener('click', CounterApp.increment.bind(CounterApp));
decBtn.addEventListener('click', CounterApp.decrement.bind(CounterApp));
