# GitHub Pages deployment & maintenance

**No account connection is necessary for me to generate these files. Publishing to your GitHub account is a separate action you perform.**

## Publish

1. Download and extract the course ZIP.
2. Visit https://github.com/new, enter a repository name such as `cyber-upgrade-academy`, and choose the visibility you want.
3. In the empty repository, choose **uploading an existing file** or **Add file → Upload files**. Drag in the **contents** of the extracted course project. (For many files/folders, the GitHub Desktop app or `git push` may be easier.)
4. Commit to `main`. The repository root must directly contain `index.html`, `sw.js`, the `assets` directory and the `data` directory.
5. On GitHub, open **Settings → Pages** and choose **Deploy from a branch → main → /(root)**, then Save. Some account/repository combinations may have different Pages settings or access restrictions.
6. Your expected URL is `https://GITHUB-USERNAME.github.io/REPOSITORY-NAME/`.
7. Use that same URL on your laptop and phone. Add to Home Screen using your browser's menu if supported.

**Repository visibility:** A public repo publishes the source materials to anyone. If you later want a private paid-access school, plan for a different hosting/access-control architecture.

## Update a module

1. Edit `data/lessons.js` using the model in `CONTENT_MODEL.md`.
2. Run `node scripts/validate.js` if Node is available (the website does not require Node).
3. Change `CACHE_VERSION` in `sw.js`, e.g. from `cyber-upgrade-v1.0.0` to `cyber-upgrade-v1.0.1`.
4. Commit and push the edits to GitHub.
5. Refresh the published website. If an installed PWA still shows older content, close/reopen or refresh after the service worker updates.

## HTTPS, offline access and local files

- GitHub Pages serves HTTPS and supports the optional app manifest and service worker.
- Offline support caches code/course data **after a successful online visit**. It is not a promise that every browser will support every feature offline.
- Opening `index.html` locally on a desktop is convenient, but service workers, PWA installation and some browser-storage behavior vary for `file://` pages. Hosted HTTPS is preferred.
- No GitHub Pages upload, login or remote storage of a learner's private progress occurs in the built-in app.

## Accessibility and device checks

Review text at mobile widths (320–430px), zoom, keyboard navigation, color contrast and quiz form behavior. The provided interface has responsive CSS, labels and semantic controls, but more testing should be performed before a commercial launch.

## Security before adding cloud accounts

Never place GitHub tokens, API keys, student records, private exam answers from a commercial platform, or real production logs in `data/*.js`. Any script uploaded to public GitHub Pages is downloadable by visitors.
