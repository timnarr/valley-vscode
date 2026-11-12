# Releasing Valley

Valley is published to the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=TimGrochowski.valley-vscode) under the publisher ID `TimGrochowski` (display name: Tim Narr). Pushing a version tag publishes it through a GitHub workflow; that needs a one-time [setup](#set-up-trusted-publishing).

The commands use `@vscode/vsce@4.1.0`, the version this process was tested with. Replace `X.Y.Z` with the new version.

## 1. Check the sources

The files in `themes/` are generated from `src/`. Never edit them by hand.

```bash
npm ci
npm run build
npm test
git status
```

- `npm run build` stops on invalid color values. It then renews the screenshots, which takes about a minute (see [Renew the screenshots](#renew-the-screenshots)).
- `npm test` fails if a checked color combination drops below 3:1.
- `git status` must be clean after the build. If the build changed `themes/` or `screenshots/`, commit that first. CI runs the same checks on every push, without the screenshots.

Then look at the theme in VS Code: press **F5** (launch configuration "Launch Extension"), or run `code --extensionDevelopmentPath="$PWD" demo/`. In the new window, select **Valley** with `Cmd+K Cmd+T`. This version replaces your installed copy only in that window.

## 2. Pick the version

The Marketplace rejects a version that already exists. Check the current one:

```bash
npx @vscode/vsce@4.1.0 show TimGrochowski.valley-vscode
```

- **Patch** (0.5.0 → 0.5.1): fixes to existing colors.
- **Minor** (0.5.0 → 0.6.0): new colors or visible changes to the look.

## 3. Update the changelog

In `CHANGELOG.md`, rename `## Unreleased` to the version and date, in the format of the earlier entries (for example `## 0.5.0 - November 11, 2026`):

```markdown
## X.Y.Z - Month D, YYYY
```

The sections are `Changed`, `Added`, `Removed` and `Fixed`. List only what users see in the theme, not changes to the build, tests or CI.

## 4. Bump the version, commit and tag

```bash
npm version X.Y.Z --no-git-tag-version
git add CHANGELOG.md package.json package-lock.json
git commit -m "Release X.Y.Z"
git tag -a vX.Y.Z -m "Valley X.Y.Z"
```

`npm version` updates `package.json` and `package-lock.json`. `--no-git-tag-version` stops it from creating its own commit and tag, so the release commit and the annotated tag match the earlier ones.

## 5. Push

```bash
git push origin master vX.Y.Z
```

The tag starts the workflow [Publish](.github/workflows/publish.yml). It checks that the tag matches the version in `package.json`, builds the themes, runs the tests and publishes to the Marketplace with Trusted Publishing, without a token. Follow it in the **Actions** tab on GitHub or with:

```bash
gh run watch
```

## 6. Check the Marketplace

The Marketplace checks the package. After a few minutes the new version is live:

```bash
npx @vscode/vsce@4.1.0 show TimGrochowski.valley-vscode
```

Optionally, attach the package to a GitHub release (build it first as in [Upload by hand](#upload-by-hand)):

```bash
gh release create vX.Y.Z valley-vscode-X.Y.Z.vsix --title "Valley X.Y.Z" --notes "See CHANGELOG.md"
```

## If the workflow fails

Nothing reached the Marketplace, so the version is still free. Fix the cause, then move the tag to the fixed commit and push both again:

```bash
git tag -d vX.Y.Z
git push origin :refs/tags/vX.Y.Z
git tag -a vX.Y.Z -m "Valley X.Y.Z"
git push origin master vX.Y.Z
```

## Set up Trusted Publishing

Needed once, before the first release through the workflow. On the [publisher management page](https://marketplace.visualstudio.com/manage), open the publisher, select **Trusted Publishing** and create a policy:

- **Policy name:** `Release workflow`
- **Repository owner:** `timnarr`
- **Repository:** `valley-vscode`
- **Workflow:** `publish.yml`
- **Environment:** leave empty

See [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#publish-with-github-actions-and-trusted-publishing) in the VS Code docs for details.

## Upload by hand

Without the workflow, build the package and upload it in the browser. Do this before pushing the tag, or the workflow tries to publish the same version and fails.

```bash
npx @vscode/vsce@4.1.0 package
```

This creates `valley-vscode-X.Y.Z.vsix` in the repository root (ignored by git). vsce lists the included files. Expect exactly these 7 files, about 30 KB:

- `package.json`
- `readme.md`
- `changelog.md`
- `LICENSE.txt`
- `valley-icon.png`
- `themes/valley_dark.json`
- `themes/valley_dark_italic.json`

Anything else means `.vscodeignore` needs an update.

1. Open the [publisher management page](https://marketplace.visualstudio.com/manage/publishers/TimGrochowski) and sign in with the Microsoft account that owns the publisher.
2. Next to **Valley**, open the **⋯** menu and select **Update**.
3. Upload `valley-vscode-X.Y.Z.vsix`.

The upload needs no token. Azure DevOps retires global Personal Access Tokens on December 1, 2026; from then on, `vsce login` and `vsce publish` with a token no longer work.

## Optional: Open VSX

Valley is not on [Open VSX](https://open-vsx.org) yet. VSCodium, Cursor, Windsurf and other editors based on VS Code install extensions from there instead of the Marketplace.

1. Sign in to open-vsx.org with GitHub. In your profile settings, link an Eclipse account and sign the Publisher Agreement.
2. Create an access token in the open-vsx.org user settings.
3. Once, create the namespace:

   ```bash
   npx ovsx create-namespace TimGrochowski -p <token>
   ```

4. For each release, build the package as in [Upload by hand](#upload-by-hand), then:

   ```bash
   npx ovsx publish valley-vscode-X.Y.Z.vsix -p <token>
   ```

See [Publishing Extensions](https://github.com/eclipse/openvsx/wiki/Publishing-Extensions) in the Open VSX wiki for details.

## Renew the screenshots

A script takes the screenshots in `screenshots/`, so they follow every color change. `npm run build` runs it after building the themes; on its own:

```bash
npm run screenshots
```

- It needs macOS, VS Code in `/Applications` (or `VSCODE_APP` set to its path), the font [JetBrains Mono](https://www.jetbrains.com/lp/mono/), [oxipng](https://github.com/oxipng/oxipng) (`brew install oxipng`) and a network connection for the extensions the README recommends. In CI and outside macOS it skips itself.
- It starts VS Code with a separate profile in a temporary folder, so your own settings, extensions, keychain and Git configuration stay untouched. A VS Code window opens for about a minute and closes again; the screenshots don't depend on what you do meanwhile.
- A new screenshot replaces the old one only when more than 30 pixels differ; the log marks the others as unchanged. So `git status` only lists screenshots that really changed, and oxipng compresses only those, losslessly. A single motif renewed on its own can still differ from a full run in a few dozen pixels of the minimap, because language servers color only what has been on screen; `npm run build` renews all of them and is the reference.
- The script reads the settings and extensions from "Recommended Settings" in the README, so the screenshots always show what it recommends. `scripts/screenshots/motifs.js` lists every screenshot with its file, lines and the VS Code commands that set it up. `npm run screenshots -- valley-vscode-title` renews only the named ones.
- The theme comes from your working copy, the files in the screenshots from the last commit: the script opens a Git copy of `HEAD`. Commit changes to `demo/` before renewing.
- `npm run build:themes` builds only the themes, for quick rounds while working on colors.
- The README and the Marketplace page load the images from `master` on GitHub, so they show new screenshots after a push, without a new release.
