# Smart Study Hub

https://github.com/talaaamnsy/fastlearner-ui-prototype
Work directly on the existing FastLearner project now. Do not just analyze, explain, or give me a plan. Make the code changes and implement the functionality.

IMPORTANT:

- Do NOT rebuild the project from scratch.

- Do NOT redesign the existing UI.

- Preserve the current visual design, navigation, typography, spacing, colors, responsive layout, and existing components.

- Reuse the existing code wherever possible.

- Focus on functionality that is currently missing.

IMPLEMENT THESE CHANGES:

1. MAKE LEARN FUNCTIONAL

Make the Learn section actually work for:

- SKD

- UTBK

- Psikotes

- TPA

- TBI

SKD materials:

TWK:

- Nasionalisme

- Integritas

- Bela Negara

- Pilar Negara

- Bahasa Negara

TIU:

- Verbal Analogi

- Verbal Silogisme

- Verbal Analitis

- Numerik Berhitung

- Numerik Deret Angka

- Numerik Perbandingan Kuantitatif

- Numerik Soal Cerita

- Figural Analogi

- Figural Ketidaksamaan

- Figural Serial

TKP:

- Pelayanan Publik

- Jejaring Kerja

- Sosial Budaya

- Teknologi Informasi dan Komunikasi

- Profesionalisme

- Anti Radikalisme

UTBK should directly show:

- PU

- PPU

- PBM

- PK

- LBI

- LBE

- PM

Do not add another TPS/Tes Literasi layer in the UI.

2. IMPLEMENT A REAL QUESTION ENGINE

Create a reusable question data structure and make questions load dynamically instead of being hardcoded into individual pages.

Each question should support:

- id

- exam

- subtest

- material

- question

- options

- correct_answer

- explanation

- difficulty

- estimated_time

- tags

Add a small sample dataset for every exam/subtest so the functionality can be tested.

3. IMPLEMENT QUESTION FLOW

Make this flow actually work:

Question

→ select answer

→ submit

→ correct/incorrect feedback

→ explanation

→ next question

→ finish

→ result summary

Prevent accidental skipping if an answer has not been submitted.

4. IMPLEMENT TIMER

Every question has an estimated_time.

Track:

- estimated_time

- actual time_taken

Keep these as separate values.

Implement the existing 60-second Challenge mode:

- 60 seconds per question

- automatically submit/end the question when time expires

- record time_taken

- continue correctly to the next question

5. MAKE CUSTOM DRILL FUNCTIONAL

Existing Custom Drill UI should actually filter the question dataset.

Support:

- exam

- subtest

- multiple materials

- question count: 10 / 15 / 20 / 30

- difficulty: All / Easy / Medium / Hard

- status: All / Unanswered / Incorrect / Needs Review / Mastered

- Challenge mode

6. IMPLEMENT MISTAKES AND NEEDS REVIEW

Track every attempt.

Mistakes:

- all questions the user has answered incorrectly before

Needs Review:

- questions actively marked for review

Allow a question to be marked/unmarked as Needs Review.

7. IMPLEMENT MASTERY

Track question performance over repeated attempts.

Store:

- attempts

- correct answers

- incorrect answers

- accuracy

- last_practiced

- time_taken

- mastery

- needs_review

Use a simple mastery calculation for now. Do not overcomplicate it.

8. IMPLEMENT PROGRESS

Make the existing Progress page use actual stored user data instead of static/demo numbers.

Show:

- total questions

- correct

- incorrect

- accuracy

- average time

- study time

- streak

- weak materials

- mastery

- daily/weekly/monthly progress

9. IMPLEMENT STREAK

Track daily practice activity.

Support:

- current streak

- longest streak

- daily activity

10. PERSIST USER DATA

If there is no backend/database connected yet, use localStorage.

Create a clean data/service layer so localStorage can later be replaced with Supabase without rewriting the question UI.

11. RESULT SUMMARY

After a drill finishes, show actual:

- score

- correct

- incorrect

- accuracy

- average time

- total time

- materials/topics practiced

- questions that need review

12. HOME DASHBOARD

Replace static/demo progress values with actual stored data where possible.

Keep the existing Home design.

13. RESPONSIVE

Make sure all implemented functionality works on desktop and mobile.

14. DO NOT ADD A HUGE QUESTION BANK

Only create enough sample questions to verify that the entire system works.

AFTER IMPLEMENTING:

- Check all existing routes.

- Check that navigation still works.

- Check that Learn → material → question → result works.

- Check Custom Drill filters.

- Check Challenge mode.

- Check Mistakes and Needs Review.

- Check Progress updates after answering questions.

- Fix any runtime/type/build errors you introduce.

Do not stop at describing the implementation. Actually modify the existing project and make the changes now.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://smart-drill-quest.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/cd244ff2-90f4-4e06-a3cb-efadc0c69a66).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
