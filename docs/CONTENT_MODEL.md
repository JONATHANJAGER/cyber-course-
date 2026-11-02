# Authoring model: building the online course

The goal is to make the platform a **self-contained teaching program**, not a page of research links. Every finished week must include original concept explanations, examples, specific supervised labs, a deliverable, practice questions with answer explanations, and notes on safe troubleshooting.

## Content architecture

- `data/course.js` is a complete 36-week **syllabus** and schedule. It contains `window.CYBER_COURSE`.
- `data/lessons.js` is the finished **teaching content** and contains `window.CYBER_LESSONS`.
- The website automatically renders a completed lesson packet when `window.CYBER_LESSONS.weeks[weekId]` exists.
- If a weekly packet does not yet exist, the UI explicitly says **Outline only**; it does not claim the week is already teachable.

### Each week packet should include

```js
window.CYBER_LESSONS = {
  weeks: {
    "5": {
      intro: "What this week's study develops.",
      outcomes: ["Observable learning outcome 1", "Outcome 2"],
      glossary: [["term", "Plain-language definition"]],
      lessons: {
        "17": {
          takeaway: "One memorable principle",
          concepts: [
            {heading: "Concept title", body: "Detailed original explanation ..."},
            {heading: "Worked example", body: "Step-by-step context ..."}
          ],
          steps: [
            "Preparation, safety and prerequisites",
            "Guided hands-on step",
            "Verification and evidence requirement",
            "Rollback and clean-up"
          ],
          example: {
            label: "Example command or policy",
            code: "pwd",
            why: "What the student should learn from this output"
          },
          reflection: "What conclusion can you support with evidence?"
        },
        "18": {}, "19": {}, "20": {}
      },
      quiz: [
        {
          prompt: "Original concept question?",
          choices: ["Option A", "Option B", "Option C", "Option D"],
          answer: 1,
          explanation: "Correct answer explained and wrong assumptions addressed."
        }
      ]
    }
  }
};
```

**This snippet illustrates the structure only.** Add a new week entry to the existing `weeks` object; do not overwrite Weeks 1–4. For a published week, author all four `lessons` objects and at least 10 sound questions before adding its entry. Class IDs and day assignments must match `data/course.js`.

## Instructional quality checklist

- [ ] A full independent student could study the material without hunting for missing textbooks.
- [ ] Every new acronym is defined on first use.
- [ ] Concept explanation includes a worked example and a business-relevant scenario.
- [ ] Lab specifies approved scope, prerequisites, commands or click paths, expected behavior, validation and rollback.
- [ ] No offensive experimentation on production equipment, public IPs or third-party systems.
- [ ] Assignments have meaningful evidence artifacts and an assessment rubric.
- [ ] Quiz questions are original, unambiguous and accompanied by correct explanations.
- [ ] Content covers Windows, Linux and macOS differences where appropriate.
- [ ] Cloud lab costs, free-tier limits and cleanup are specified before enabling paid resources.
- [ ] Industry exam objectives are periodically checked against the **current** official published version, without copying protected exam content.
- [ ] Statements about legal or industry requirements are appropriately sourced and updated.
- [ ] Student notes are never written to or exposed by the public GitHub repository.

## Proposed sequence for remaining authored materials

1. Weeks 5–8: Linux, Python, IAM, secure architecture (16 classes and checkpoint 2).
2. Weeks 9–12: warehouse security network capstone; NIST CSF and GRC; Security+ preparation.
3. Weeks 13–20: SOC, SIEM, incident response, digital forensics, Microsoft KQL.
4. Weeks 21–29: cloud security, Azure and AWS, AI evaluation and automation.
5. Weeks 30–36: project management, cyber budgets, staffing, board presentation, final portfolio.

## Safe upgrades for a real multi-student school

Phase two could use a hosted authentication service and access-controlled database to support private student accounts, cross-device sync, enrollment and instructor grading. Security requirements include authorization rules, backups, audit records, a privacy notice, retention controls, and a secure deployment process. GitHub Pages by itself is intentionally **static** and does not provide these services.

## Copyright and Chegg source alignment

The schedule was inspired by the organizational progression that the learner described after viewing Chegg/Thinkful screenshots. This repository contains only new explanations, exercises and prompts. It does **not** reproduce Chegg instructional text or protected images. Exact one-to-one equivalence to the screenshots has not been verified.
