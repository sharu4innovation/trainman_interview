import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Angular 6';

  timeLeft: number=null;
  displayTime: string;
  orgt:number=null;
  interval;

  startTimer() {
    this.timeLeft = this.orgt*60
    this.displayTime = new Date(this.timeLeft * 1000).toISOString().substr(11, 8)

    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        this.displayTime = new Date(this.timeLeft * 1000).toISOString().substr(11, 8)
      } else {
        alert("timer stopped .....")
        this.resetTimer()
      }
    },1000)
  }

  pauseTimer(t:number) {
    clearInterval(this.interval);
  }

  resetTimer(){
    clearInterval(this.interval);
    this.displayTime = new Date(this.orgt*60* 1000).toISOString().substr(11, 8)
  }

}

