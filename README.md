# Cyber Upgrade Academy

**An original, mobile-friendly nine-month cybersecurity learning website.**

![Status: pilot](https://img.shields.io/badge/status-interactive%20pilot-69d8aa) ![Deployment: GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-77b6ff)

The **entire curriculum** is mapped: 36 weeks, 144 classes, four days (Tuesday–Friday) at five planned hours each day, 720 planned hours, nine monthly checkpoints, and six portfolio projects.

The **first four weeks** are published as original interactive teaching packets: 16 class lessons with worked explanations, guided practice, vocabulary, local learning notes, lab-step checklists, and **50** original graded multiple-choice questions with explanations. **Weeks 5–36 are structured outlines, not finished teaching materials.** This is an honest, extensible prototype of the eventual online academy.

## 1. Open and test on your laptop

Unzip the project and open `index.html` in Chrome, Edge, Firefox, or Safari. For the best offline/install experience, deploy it over HTTPS using GitHub Pages. **No build step, npm install, database, or paid hosting is required for this pilot.**

## 2. Publish to GitHub Pages

1. Sign in to GitHub and create a new repository, for example `cyber-upgrade-academy`. Choose **Public** if you want standard free public GitHub Pages hosting (availability depends on account/repository settings).
2. Unzip the download on your computer. Upload **the contents** of the `Cyber_Upgrade_Online_Course` folder to the repository root, not the ZIP file and not an extra enclosing folder. Confirm `index.html` is at the top level.
3. Commit the uploaded files to your `main` branch.
4. Go to the repository **Settings → Pages → Build and deployment**. Under **Source**, choose **Deploy from a branch**. Choose **`main`** and **`/(root)`**, then **Save**.
5. After GitHub Pages finishes publishing, open your public course URL:
   `https://YOUR-GITHUB-USERNAME.github.io/cyber-upgrade-academy/`
6. Open the same link on your phone. You may optionally use your browser's **Add to Home Screen** option.

If you choose a repository with a different name, substitute that name in the URL. GitHub Pages sometimes needs several minutes to publish or refresh.

**Important:** Publishing a GitHub Pages website does **not** create a student database, password protection, accounts, or automatic progress synchronization. The course content in a public repository and website can be read by others.

## 3. Progress, scores, and portability

- Completion checkmarks, quiz scores, lab-step checklists and notes are saved using browser `localStorage` on the current device.
- To move your progress from laptop to phone, open **My workspace → Export progress**, transfer that `.json` file to the other device, then open **My workspace → Import progress**.
- **Import replaces** the progress already on the receiving device. Back up first.
- Clearing browser data or using private browsing may erase unsynced work. Do not enter passwords, access tokens, client data or employer records into personal notes.

## 4. What's inside

| Path | Purpose |
|---|---|
| `index.html` | Application shell, navigational layout and accessibility landmarks |
| `assets/styles.css` | Responsive design for phone and desktop |
| `assets/app.js` | Client-side routing, classrooms, quizzes, notes and local progress |
| `assets/icon.svg` | App icon |
| `data/course.js` | All 36 weeks, 144 classes, month titles and six portfolio projects |
| `data/lessons.js` | Pilot original guided lessons for Weeks 1–4 and 50 graded questions |
| `manifest.webmanifest` | PWA metadata for installation support |
| `sw.js` | Optional offline caching after first online load |
| `docs/CONTENT_MODEL.md` | Extend the platform with more authored lessons and quizzes |
| `docs/DEPLOYMENT_GUIDE.md` | Detailed deployment and update instructions |
| `docs/LEARNER_GUIDE.md` | Suggested student workflow |
| `docs/Curriculum_Blueprint.txt` | Master 36-week course plan |
| `scripts/validate.js` | Content integrity checks (optional; requires Node to run) |

The online website itself uses **no external scripts, CDNs, trackers or fonts**. The badges in this README are optional GitHub markdown visuals and do not load inside the learning website.

## 5. Extending the curriculum

Open `docs/CONTENT_MODEL.md` to author each new week as an original `weeks[weekNumber]` packet, with one full lesson per class and assessment questions. For a week with complete content, the platform automatically treats it as **Lessons ready**. Do not copy the Chegg/Thinkful proprietary lesson text or screenshots into a public website; use the structural inspiration while writing original explanations and labs.

If you edit `assets/app.js`, `assets/styles.css`, or the curriculum data, **update the cache version** at the top of `sw.js` so an installed version receives new content. Commit and publish again.

## 6. Responsible lab use

This program covers defensive concepts. Conduct tests only on systems you own or are authorized to test. Use a private or host-only VM network when appropriate, sanitize screenshots, protect secrets, and follow cloud cost controls. Credential exams and professional eligibility are independent of completion of this educational pilot.

## License & course rights

No open-source/content re-use license has been selected by the course owner. Do not assume the absence of a license grants permission to redistribute or commercialize original teaching content. Third-party trademarks (CompTIA, Microsoft, AWS, GitHub, Chegg) remain with their owners. This prototype is not affiliated with or endorsed by any of those organizations.
