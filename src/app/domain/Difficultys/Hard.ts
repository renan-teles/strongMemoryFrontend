import { ScoreService } from "../../service/score/score.service";
import { TimeBarService } from "../../service/time-bar/time-bar.service";
import { Difficulty } from "./Difficultys";

export class Hard extends Difficulty{
    constructor( 
        scoreService: ScoreService, 
        timeBarService: TimeBarService
    ){
        super(scoreService, timeBarService);
        this.value = "dificil";
        this.difficulty = "Difícil";
    }
    
    public incrementPoints(): void{
        this._scoreService.incrementPoints(3);
    }

    public incrementTime(): void{
        this._timeBarService.incrementTotalTime(4);
    }
}