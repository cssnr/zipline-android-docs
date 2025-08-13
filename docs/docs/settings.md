# Settings Page

The Settings page lets you configure how the application works.

[[toc]]

## Application Settings

### Start Destination

Select which page is displayed when you launch the application.

Can be the [Home page](./home.md) or [File page](./files.md).

### Show Share after Upload

After a file is uploaded or URL shortened, the link is copied to the clipboard automatically.

If you prefer to use the share sheet to re-share the link, enable this to automatically show the dialog after every upload.

### Custom Headers

These custom headers are added to every request, including the Home WebView, for use with services like Cloudflare Zero Trust.

## Upload Settings

These are global [Zipline Upload Options](https://zipline.diced.sh/docs/guides/upload-options) applied to every upload.

### Save Original Filename

In Zipline the original filename is stored as a metadata field on the file object.
Turn this off to disable this behavior.

### File Name Option

Sets the [Zipline Filename Option](https://zipline.diced.sh/docs/guides/upload-options#file-name-format) used when uploading files.
The default is `Random`.

::: tip NOTE
Setting this to `Name` will cause subsequent uploads with the same name to fail.
:::

### File Folder

Select a default folder for all uploads (can be overridden on a per-upload basis).

### Image Compression Percent

Note that 100% is maximum quality and may result in files being larger than the source.

Set this to `0` to disable compression (default).

## File List

### Auto Play Media

Automatically plays media files (if applicable) when clicking on them from the file list.

### Files Per Page

This sets the number of files loaded when you first visit the files page, and the number of files loaded as you scroll down.

_If you set this number too low (less than fills the screen) the app will continue fetching more pages until the view port is filled._

### Load Images on Metered Connection

When on a metered connection, a warning is displayed and images that are not already cached are not loaded.

Clicking on an item and opening the preview, always downloads the media if not already cached, regardless of this setting.

## Widget Settings

You can configure the widget:

- Text Color
- Background Color
- Background Opacity

### Update Interval

This is how frequently the application updates data from the server in the background.

Set this to `Disabled` prevent any background updates.

You can enable or disabling updating the following data:

- User Stats (required for Widget)
- User Profile
- User Avatar

::: tip NOTE
The only way to disable the background task is to set **Update Interval** to `Disabled`.
:::

## Debugging

Enabling debugging will log various actions, such as background updates and login attempts, to a file for later review.

::: details Click Here for more details
You can view the currently configured logging [on GitHub](https://github.com/search?q=repo%3Acssnr%2Fzipline-android%20.debuglog%28%22&type=code) (if logged in).
:::
