import { ScoreService } from "../../service/score/score.service";
import { TimeBarService } from "../../service/time-bar/time-bar.service";
import { Difficulty } from "./Difficultys";

export class Medium extends Difficulty{
    constructor( 
        scoreService: ScoreService, 
        timeBarService: TimeBarService
    ){
        super(scoreService, timeBarService);
        this.value = "intermediario";
        this.difficulty = "Intermediário";
    }
    
    public incrementPoints(): void{
        this._scoreService.incrementPoints(2);
    }

    public incrementTime(): void{
        this._timeBarService.incrementTotalTime(3);
    }
}