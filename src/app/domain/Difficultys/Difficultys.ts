import { ScoreService } from "../../service/score/score.service";
import { TimeBarService } from "../../service/time-bar/time-bar.service";

export abstract class Difficulty {
    public difficulty!: string;
    public value!: string;
    protected readonly _scoreService!: ScoreService;
    protected readonly _timeBarService!: TimeBarService;

    constructor(
        scoreBarService: ScoreService, 
        timeBarService: TimeBarService
    ) {
        this._scoreService = scoreBarService;
        this._timeBarService = timeBarService;
    }

    public abstract incrementPoints(): void;
    public abstract incrementTime(): void;
}