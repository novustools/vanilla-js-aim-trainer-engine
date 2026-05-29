# Vanilla JS Aim Trainer & Reaction Engine

This repository contains the core, dependency-free JavaScript tracking logic for building custom browser-based aim trainers and reaction tests.

Built for gaming developers, it tracks hit/miss accuracy, calculates average reaction times, measures consistency (variance), and assigns competitive eSports ranks based on VCT/CS2 pro benchmarks.

For the full, interactive game with visual targets, flick/micro drills, and detailed performance reports, visit the [NovusTools Aim Trainer & Reaction Test](https://novustools.com/aim-trainer/).

## Game-Specific Aim Trainers
Practice your mechanics for specific game engines using our dedicated modules:
* [Valorant Aim Trainer](https://novustools.com/valorant-aim-trainer/)
* [CS2 Aim Trainer](https://novustools.com/cs2-aim-trainer/)
* [Apex Legends Aim Trainer](https://novustools.com/apex-legends-aim-trainer/)
* [Overwatch 2 Aim Trainer](https://novustools.com/overwatch-2-aim-trainer/)
* [Fortnite Aim Trainer](https://novustools.com/fortnite-aim-trainer/)

## Usage
Simply instantiate the class and register clicks (hits/misses) along with their respective reaction times. The engine handles the statistical math, variance calculations, and rank evaluation automatically.
