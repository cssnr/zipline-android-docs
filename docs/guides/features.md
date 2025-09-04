# Features

A Native Kotlin Android Application with a Mobile First Design.
Everything is cached and images are not downloaded over metered connections unless enabled.
User profile and stats widget are updated in the background with a user configurable task.

Please submit a [Feature Request](https://github.com/cssnr/zipline-android/discussions/categories/feature-requests) for any features you would like to see.

[[toc]]

## Screenshots 📸 {#screenshots}

<VPSwiper
base-url="https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/docs"
:number-of-slides="22"
:breakpoints="{ 680: { slidesPerView: 3 } }"
:pagination="{ type: 'fraction' }"
effect="coverflow"
:coverflow-effect="{ slideShadows: false }"
height="480px"
/>

## Uploading

Supports all Files, Text and Short URLs. Works with both **Share** and **Open With** actions.

### Files and Text

- Folder
- Password
- Max Views
- Deletes At
- File Name Format
- Custom File Name
- Image Compression Percent

### Short URLs

- Vanity Name

_For more info see the [Uploading Docs](../docs/upload.md)._

## File List

Native File List with multi-select, edit and delete.

- Multi-Select
- Infinite Scroll
- Download, Edit or Delete

_For more info see the [Files Docs](../docs/files.md)._

## Management

Allows editing your user and server management.

### All Users

- Username
- Password
- Copy Token
- Enable/Disable TOTP
- Change Avatar (Cropper)

### Administrators

- Generate Thumbnails
- CLear Temp Files
- Clear Zero-Byte Files
- Requery File Sizes

_For more info see the [User Docs](../docs/user.md)._

## Stats Widget

You can add a stats widget to the home screen to display stats and provide functions.

- Shows Total Files and Size
- Upload and Launch Shortcuts

_For more info see the [Widget Docs](../docs/widget.md)._

## Custom Headers

Allows adding and managing custom headers which are added to every request.

This allows use with services like Cloudflare Zero Trust.

_For more info see the [Settings Docs](../docs/settings.md#custom-headers)._

## Open to Share

Many application's don't support both Share and Open with intents.
Additionally, many applications don't offer both Share and Open when selecting files.

Zipline, however, supports both intents and allows re-sharing any file(s).

Because of this, you can open files with Zipline, then Share them to other supported apps.

---

<GetOnBadges />
