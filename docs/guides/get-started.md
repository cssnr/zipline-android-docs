---
prev:
  text: 'Get Help'
  link: '/support'
---

# Get Started

Get started by [installing](#install) the application and [logging](#login) into your [server](#server).

You can view [screenshots](features.md#screenshots) 📸 on the [features](features.md) page.

## Install

To begin install the application on your device _(Android 8+ API 26+)_.

<GetOnBadges
:animation="['animate__lightSpeedInLeft', 'animate__jackInTheBox', 'animate__lightSpeedInRight']"
/>

_Note: Google Play is in Closed Testing. To join please see [this discussion](https://github.com/cssnr/zipline-android/discussions/25)._

If you are unsure which provider to choose, [Obtainium](https://obtainium.imranr.dev/) is recommended.

::: details View QR Codes 📸
[![Get on GitHub](/images/qr/github.png)](https://github.com/django-files/android-client/releases/latest/download/app-release.apk)

[![Get on Obtainium](/images/qr/obtainium.png)](https://apps.obtainium.imranr.dev/redirect?r=obtainium://add/https://github.com/cssnr/zipline-android)

[![Get on Google](/images/qr/google.png)](https://play.google.com/store/apps/details?id=org.cssnr.zipline)
:::

[![Latest Release](https://img.shields.io/github/v/release/cssnr/zipline-android?style=for-the-badge&logo=android&color=34A853&label=Latest%20Release)](https://github.com/cssnr/zipline-android/releases/latest)
[![Latest Pre-Release](https://img.shields.io/github/v/release/cssnr/zipline-android?style=for-the-badge&logo=android&label=Pre-Release&include_prereleases)](https://github.com/cssnr/zipline-android/releases)

_To install the apk directly you may need to allow installation from unknown sources.
For more information see, [Release through a website](https://developer.android.com/studio/publish#publishing-website)._

## Login

To log in you need to enter your Zipline Server URL, Username and Password.

You can copy the URL from your web browser, paste everything before `dashboard`.

If you have Two-Factor enabled you will be prompted to enter a code after successful login.

Additionally, you can add [Custom Headers](../docs/settings.md#custom-headers) or enable [Debug Logging](../docs/settings.md#debugging).

You can now start [uploading](uploading.md) files and text or create [short URL's](uploading.md#text-or-url).

::: tip ❔ HELP
If you have any trouble getting started, [support is available](../support.md).
:::

## Server

This guide assumes you have a [diced/zipline](https://github.com/diced/zipline) server setup and accessible.

If not you can [get started here](https://zipline.diced.sh/docs/get-started). Only version 4 is supported.
