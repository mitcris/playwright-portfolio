# Playwright Portfolio

Personal project for automating E2E tests (UI & API) with **Playwright** and **TypeScript**.
This repository is also my learning log as I move from Senior Functional QA into QA Automation.

## Stack

- Playwright
- TypeScript
- Node.js

## Progress log

This is my README file and the first change I made in my repository.

At this point (July 27th, 2026) I have completed the next steps:

1. Verified the full setup is done: VS Code, Node.js, and the Playwright + TypeScript extension installed.
2. Created my own project for my Playwright portfolio.
3. Completed my 1st Git cycle.
4. Created a new branch and edited a file to push my changes to the repository.

### Semana 2 — TypeScript mínimo y mi primer test de login

At this point (July 31st, 2026) I completed:

1. Understood the `import { test, expect }` line piece by piece.
2. Learned the difference between an action (locator + `.click()`)
   and a verification (`expect(...)` + assertion).
3. Learned how to choose locators with criteria (getByRole, data-test, id).
4. Wrote my first real login test on SauceDemo — on my own.
5. Debugged a real error (`about:blank` — a missing `page.goto()`),
   reading the trace instead of guessing.
6. Learned that each test runs independently and must be self-sufficient.
7. Learned to organize tests by functionality (one .spec file per feature).

### Week 3 — Codegen

1. Learned to record flows with Codegen and, more importantly, to read
   and refine the generated code (not just paste it).
2. Learned to choose stable locators and to add my own assertions,
   since Codegen records actions but rarely verifications.
3. Explored the difference between toBeVisible, toHaveText, and
   toHaveCount, and how to pick the right assertion for the test's goal.

### Week 4 — Locators in depth & repo organization

1. Applied real code review feedback from my manager: removed dead code,
   added Arrange-Act-Assert structure, and fixed the final newline.
2. Learned git stash to safely handle uncommitted local changes.
3. Organized the test suite by feature: consolidated into login.spec.ts
   and cart.spec.ts, removing duplicates.
4. Learned to choose locators with criteria: user-facing first
   (getByRole, getByText), then stable attributes (data-test).
5. Learned to prefer identity over position, and how to handle multiple
   matching elements (strict mode, filter vs nth).

## Author

Mitzi Mejia — Senior QA Engineer