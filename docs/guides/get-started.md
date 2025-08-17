# Get Started

Get started by [installing](#install) the application and logging into your server.

To proceed you will need the following:

1. Android Device _(Android 8+, API 26+, or Newer)_
2. Zipline Server _(Version 4 Only)_

Complete these tasks:

- [Server](#server)
- [Install](#install)
- [Login](#login)
- [Uploading](./uploading.md)

::: tip SCREENSHOTS
You can view screenshots [on GitHub](https://github.com/cssnr/zipline-android/?tab=readme-ov-file#Screenshots).
:::

## Server

This guide assumes you have a [diced/zipline](https://github.com/diced/zipline) server setup and accessible.

If not you can [get started](https://zipline.diced.sh/docs/get-started) with a zipline server.

## Install

To begin install the application on your device _(Android only)_.

<div class="flex-images">
    <a title="GitHub" href="https://github.com/cssnr/zipline-android/releases/latest/download/app-release.apk" target="_blank" rel="noopener">
        <img alt="GitHub" src="/images/badges/github.png">
    </a>
    <a title="Obtainium" href="https://apps.obtainium.imranr.dev/redirect?r=obtainium://add/https://github.com/cssnr/zipline-android" target="_blank" rel="noopener">
        <img alt="Obtainium" src="/images/badges/obtanium.png">
    </a>
    <a title="Google Play" href="https://play.google.com/store/apps/details?id=org.cssnr.zipline" target="_blank" rel="noopener">
        <img alt="Google Play" src="/images/badges/google-play.png">
    </a>
</div>

::: tip NOTE
Google Play is in Beta Testing.
To join please see [this discussion](https://github.com/cssnr/zipline-android/discussions/25).
:::

_To install the apk directly you may need to allow installation from unknown sources.
For more information see, [Release through a website](https://developer.android.com/studio/publish#publishing-website)._

[![GitHub Version](https://img.shields.io/github/v/release/cssnr/zipline-android?style=for-the-badge&logo=android&color=34A853&label=Latest%20Version)](https://github.com/cssnr/zipline-android/releases/latest)

::: info UPDATE NOTICE
If you install the apk directly there is no in-app update check.
Because of this [Obtainium](https://apps.obtainium.imranr.dev/redirect?r=obtainium://add/https://github.com/cssnr/zipline-android)
or [Google Play](https://play.google.com/store/apps/details?id=org.cssnr.zipline) is recommended.
:::

## Login

To log in you need to enter your Zipline Server URL, Username and Password.

You can copy the URL from your web browser, paste everything before `/dashboard`.

If you have Two-Factor enabled you will be prompted to enter a code after successful login.

Additionally, you can add [Custom Headers](../docs/settings.md#custom-headers) or enable [Debug Logging](../docs/settings.md#debugging).

::: tip GET HELP
If you have any trouble getting started, [support is available](../support.md).
:::

You can now start [uploading](./uploading.md) files and text, and shorten URLs.
