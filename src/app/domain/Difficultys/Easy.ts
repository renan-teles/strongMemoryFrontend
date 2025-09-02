import { ScoreService } from "../../service/score/score.service";
import { TimeBarService } from "../../service/time-bar/time-bar.service";
import { Difficulty } from "./Difficultys";

export class Easy extends Difficulty{
    constructor( 
        scoreService: ScoreService, 
        timeBarService: TimeBarService
    ){
        super(scoreService, timeBarService);
        this.value = "facil";
        this.difficulty = "Fácil";
    }
    
    public incrementPoints(): void{
        this._scoreService.incrementPoints(1);
    }

    public incrementTime(): void{
        this._timeBarService.incrementTotalTime(2);
    }
}