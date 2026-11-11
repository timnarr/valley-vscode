# Releasing Valley

Valley is published to the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=TimGrochowski.valley-vscode) under the publisher ID `TimGrochowski` (display name: Tim Narr).

The commands use `@vscode/vsce@4.1.0`, the version this process was tested with. Replace `X.Y.Z` with the new version.

## 1. Check the sources

The files in `themes/` are generated from `src/`. Never edit them by hand.

```bash
npm ci
npm run build
npm test
git status
```

- `npm run build` stops on invalid color values.
- `npm test` fails if a checked color combination drops below 3:1.
- `git status` must be clean after the build. If the build changed `themes/`, commit that first. CI runs the same checks on every push.

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

## 5. Package

```bash
npx @vscode/vsce@4.1.0 package
```

This creates `valley-vscode-X.Y.Z.vsix` in the repository root (ignored by git). vsce lists the included files. Expect exactly these 7 files, about 35 KB:

- `package.json`
- `readme.md`
- `changelog.md`
- `LICENSE.txt`
- `valley-icon.png`
- `themes/valley_dark.json`
- `themes/valley_dark_italic.json`

Anything else means `.vscodeignore` needs an update.

## 6. Upload to the Marketplace

1. Open the [publisher management page](https://marketplace.visualstudio.com/manage/publishers/TimGrochowski) and sign in with the Microsoft account that owns the publisher.
2. Next to **Valley**, open the **⋯** menu and select **Update**.
3. Upload `valley-vscode-X.Y.Z.vsix`.

The Marketplace checks the package. After a few minutes the new version is live:

```bash
npx @vscode/vsce@4.1.0 show TimGrochowski.valley-vscode
```

The upload needs no token. Azure DevOps retires global Personal Access Tokens on December 1, 2026. From then on, `vsce login` and `vsce publish` with a token no longer work. For publishing without the browser, see [Automate with GitHub Actions](#automate-with-github-actions).

## 7. Push

Push only after the Marketplace has accepted the package. If the upload fails, you can still fix the release commit and the tag locally.

```bash
git push origin master vX.Y.Z
```

Optionally, attach the package to a GitHub release:

```bash
gh release create vX.Y.Z valley-vscode-X.Y.Z.vsix --title "Valley X.Y.Z" --notes "See CHANGELOG.md"
```

## Optional: Open VSX

Valley is not on [Open VSX](https://open-vsx.org) yet. VSCodium, Cursor, Windsurf and other editors based on VS Code install extensions from there instead of the Marketplace.

1. Sign in to open-vsx.org with GitHub. In your profile settings, link an Eclipse account and sign the Publisher Agreement.
2. Create an access token in the open-vsx.org user settings.
3. Once, create the namespace:

   ```bash
   npx ovsx create-namespace TimGrochowski -p <token>
   ```

4. For each release, after step 5:

   ```bash
   npx ovsx publish valley-vscode-X.Y.Z.vsix -p <token>
   ```

See [Publishing Extensions](https://github.com/eclipse/openvsx/wiki/Publishing-Extensions) in the Open VSX wiki for details.

## Automate with GitHub Actions

With Marketplace Trusted Publishing, a GitHub workflow publishes without a stored token. Releasing then means pushing a tag, and steps 5 and 6 go away.

1. On the [publisher management page](https://marketplace.visualstudio.com/manage), open the publisher, select **Trusted Publishing** and create a policy:
   - **Policy name:** `Release workflow`
   - **Repository owner:** `timnarr`
   - **Repository:** `valley-vscode`
   - **Workflow:** `publish.yml`
   - **Environment:** leave empty
2. Add `.github/workflows/publish.yml`:

   ```yaml
   name: Publish

   on:
     push:
       tags:
         - 'v*'

   jobs:
     publish:
       runs-on: ubuntu-latest
       permissions:
         contents: read
         id-token: write
       steps:
         - uses: actions/checkout@v7
         - uses: actions/setup-node@v7
           with:
             node-version: lts/*
         - run: npm ci
         - run: npm run build
         - run: git diff --exit-code themes/
         - run: npm test
         - run: npx @vscode/vsce@4.1.0 publish --oidc
   ```

3. From then on, a release is steps 1 to 4, then `git push origin master vX.Y.Z`.

See [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#publish-with-github-actions-and-trusted-publishing) in the VS Code docs for details.
