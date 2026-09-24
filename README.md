# ExamHelp

SC-900 and CompTIA Security+ SY0-701 study app with a sequential 33-day plan, lessons, quizzes, and progress tracking. Each new day unlocks only after the active day is completed, while completed days remain available for review.

## Run locally

Open `index.html` in a browser. No build step or package installation is required.

## Deploy with GitHub Pages

In the repository settings, select **Pages**, choose **Deploy from a branch**, and publish the `main` branch from its root directory.

## Project files

- `index.html` — application layout, styling, quiz engine, and stats views
- `data.js` — daily lessons and question bank

Progress is stored in the browser's `localStorage`. Clearing site data removes saved progress and attempt history.