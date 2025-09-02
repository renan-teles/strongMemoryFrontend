import { ScoreService } from "../../service/score/score.service";
import { TimeBarService } from "../../service/time-bar/time-bar.service";
import { Difficulty } from "./Difficultys";
import { Easy } from "./Easy";
import { Hard } from "./Hard";
import { Medium } from "./Medium";

export class GetDifficulty{
    private readonly easy!: Difficulty;
    private readonly medium!: Difficulty;
    private readonly hard!: Difficulty;

    constructor(
        scoreService: ScoreService, 
        timeBarService: TimeBarService
    ){
        this.easy = new Easy(scoreService, timeBarService);
        this.medium = new Medium(scoreService, timeBarService);
        this.hard = new Hard(scoreService, timeBarService);
    }

    public get(difficultyValue: string): Difficulty{
        if(difficultyValue === "facil"){
            return this.easy;
        }
        if(difficultyValue === "dificil"){
            return this.hard
        }
        return this.medium;
    }
}