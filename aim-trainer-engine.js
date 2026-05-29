/**
 * NovusTools - Vanilla JS Aim Trainer Engine
 * Tracks reaction times, accuracy, and calculates eSports performance metrics.
 */

class AimTrainerEngine {
    constructor() {
        this.hits = 0;
        this.totalClicks = 0;
        this.totalReactionTime = 0;
        this.reactionArray = [];
    }

    // Call this whenever a user clicks the screen (isHit = boolean, reactionTimeMs = number)
    registerClick(isHit, reactionTimeMs = 0) {
        this.totalClicks++;
        
        if (isHit && reactionTimeMs > 0) {
            this.hits++;
            this.totalReactionTime += reactionTimeMs;
            this.reactionArray.push(reactionTimeMs);
        }
    }

    getStats() {
        const accuracy = this.totalClicks > 0 ? (this.hits / this.totalClicks) * 100 : 0;
        const avgReaction = this.hits > 0 ? this.totalReactionTime / this.hits : 0;
        
        let variance = 0;
        if (this.reactionArray.length > 0) {
            const min = Math.min(...this.reactionArray);
            const max = Math.max(...this.reactionArray);
            variance = max - min; // Simple spread variance for consistency
        }

        return {
            hits: this.hits,
            totalClicks: this.totalClicks,
            accuracyPercent: Math.round(accuracy),
            averageReactionMs: Math.round(avgReaction),
            consistencyVariance: variance
        };
    }

    getPerformanceReport() {
        const stats = this.getStats();
        const avg = stats.averageReactionMs;
        const variance = stats.consistencyVariance;

        // Base Rank Evaluation
        let rank = 'Casual';
        if (avg > 0 && avg < 180) rank = 'Esports Pro';
        else if (avg > 0 && avg < 210) rank = 'Radiant / Global';
        else if (avg > 0 && avg < 240) rank = 'Diamond / High Tier';

        // Consistency Profiling
        let consistency = 'Erratic';
        if (variance < 50) consistency = 'Robot-like (Excellent)';
        else if (variance < 100) consistency = 'Stable';

        return {
            rankAssigned: rank,
            speedProfile: avg > 0 && avg < 200 ? 'Top 5% Elite' : avg > 0 && avg < 250 ? 'Above Average' : 'Needs Practice',
            consistencyProfile: consistency,
            proDifferenceMs: avg > 0 ? avg - 160 : 0 // Assuming 160ms is the pro baseline
        };
    }
    
    reset() {
        this.hits = 0;
        this.totalClicks = 0;
        this.totalReactionTime = 0;
        this.reactionArray = [];
    }
}

// Example Usage:
// const engine = new AimTrainerEngine();
// engine.registerClick(true, 185); // Hit, 185ms
// engine.registerClick(false);     // Miss
// engine.registerClick(true, 192); // Hit, 192ms
// console.log(engine.getPerformanceReport());
