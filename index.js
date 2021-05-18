
const daysEl = document.querySelector(`[data-value="days"]`);
const hoursEl = document.querySelector(`[data-value="hours"]`);
const minsEl = document.querySelector(`[data-value="mins"]` );
const secsEl = document.querySelector(`[data-value="secs"]`);

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.interval = null;
        this.selector = selector;
        this.targetDate = targetDate;
        this.start();
    }

    start() {

        this.interval = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            
            if (deltaTime < 0) {    
                return; 
            } else {
                const { days, hours, mins, secs } = this.getTimeComponents(deltaTime)
                this.updateTimerFace({ days, hours, mins, secs });
            }
        }, 1000);
    }

    stop() {
        clearInterval(this.interval);
    }

    updateTimerFace ({ days, hours, mins, secs }) {
        daysEl.textContent = `${days}`;
        hoursEl.textContent = `${hours}`;
        minsEl.textContent = `${mins}`;
        secsEl.textContent = `${secs}`;
    }
    
    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
       return {days,hours,mins,secs};
    }
    
    pad(value) {
       return String(value).padStart(2, '0');
    }
   
};

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('june 23, 2021'), 
});



   



