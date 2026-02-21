---
pageClass: faq-page
---

# Frequently Asked Questions

<span class="search-keywords">Help and FAQ</span>

If none of these [Questions](#questions-and-answers) or [Troubleshooting Steps](#troubleshooting-steps) help, please [reach out to support](support.md).

::: warning IMPORTANT
Zipline Server [v4.4.1](https://github.com/diced/zipline/releases/latest) requires Client [v1.0.32](https://github.com/cssnr/zipline-android/releases/latest) or greater to Authenticate.

For more details see the release notes, [release v1.0.32](https://github.com/cssnr/zipline-android/releases/tag/1.0.32)
:::

::: warning IMPORTANT
Zipline Server [v4.3.0](https://github.com/diced/zipline/releases/latest) requires Client [v1.0.29](https://github.com/cssnr/zipline-android/releases/latest) or greater to Upload Files.

For more details or to provide feedback, [join the discussion on GitHub](https://github.com/cssnr/zipline-android/discussions/87)
:::

## Questions and Answers

💡 _Click on the question to expand/collapse the answer._

<details><summary>Unable to Log into the Application</summary>

If you are not sure why you can't log in, enable the [Debug Logs](docs/settings.md#debugging) then attempt to log in again.
From there you can open the debug logs and get more information on the failure.

If you are unable to determine the reason for the failure,
please [contact support](support.md) with the error logs for more assistance.

---

</details>
<details><summary>Error when Uploading a File or Short URL</summary>

If you do not get a useful error message, enable [Debug Logging](docs/settings.md#debugging) in the Client Application.

You can also check the Zipline server logs for additional information on 500 Errors.

If the issue is not clear, please [contact support](support.md) with the debug and server logs.

::: tip NOTICE
If you are using server version [v4.3.0](https://github.com/diced/zipline/releases/latest) or later, you need to use Client Version `1.0.29` or later.
:::

---

</details>
<details><summary>The Application or WebView becomes Logged out</summary>

This only happens when your session is removed from the server.

If you click Log out everywhere, this includes the mobile application.

::: tip NOTICE
Make sure you are using server version 4.2.2 or later. [Releases](https://github.com/diced/zipline/releases)
:::

---

</details>

Don't see your question here? Please [let us know](support.md) what it is.

## Troubleshooting Steps

- Most navigation and display issues can be fixed by fully closing the app and restarting it.
- If you encounter issues with the media in the file list, try clearing the application cache.
- If you encounter issues with authentication, try clearing the application data (full reset).

If everything else fails, please [let us know](support.md) what happened.

## App Comparison

These are other Android applications designed to work with the Zipline server.

| GitHub&nbsp;Repository                                                              | Program&nbsp;Language                                                                                                                                                             |                                                                                                          APK Size                                                                                                          |                                                                                     Repo Size                                                                                     |                                                                                                           Downloads                                                                                                            |
| :---------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [cssnr/zipline-android](https://github.com/cssnr/zipline-android)                   | [![GitHub Top Language](https://img.shields.io/github/languages/top/cssnr/zipline-android)](https://github.com/cssnr/zipline-android?tab=readme-ov-file#readme)                   |             [![APK Size](https://badges.cssnr.com/gh/release/cssnr/zipline-android/latest/asset/app-release.apk/size?label=&icon=&color=darkgreen)](https://github.com/cssnr/zipline-android/releases/latest)              |          [![GitHub Repo Size](https://img.shields.io/github/repo-size/cssnr/zipline-android?label=)](https://github.com/cssnr/zipline-android?tab=readme-ov-file#readme)          |     [![GitHub Downloads](https://img.shields.io/github/downloads/cssnr/zipline-android/total?logo=vite&logoColor=white&label=)](https://tooomm.github.io/github-release-stats/?username=cssnr&repository=zipline-android)      |
| [Stef-00012/Zipline-Android-App](https://github.com/Stef-00012/Zipline-Android-App) | [![GitHub Top Language](https://img.shields.io/github/languages/top/Stef-00012/Zipline-Android-App)](https://github.com/Stef-00012/Zipline-Android-App?tab=readme-ov-file#readme) |    [![APK Size](https://badges.cssnr.com/gh/release/Stef-00012/Zipline-Android-App/latest/asset/app-release.apk/size?label=&icon=&color=darkgreen)](https://github.com/Stef-00012/Zipline-Android-App/releases/latest)     | [![GitHub Repo Size](https://img.shields.io/github/repo-size/Stef-00012/Zipline-Android-App?label=)](https://github.com/Stef-00012/Zipline-Android-App?tab=readme-ov-file#readme) | [![GitHub Downloads](https://img.shields.io/github/downloads/Stef-00012/Zipline-Android-App/total?logo=vite&logoColor=white&label=)](https://tooomm.github.io/github-release-stats/?username=cssnr&repository=zipline-android) |
| [nikolanovoselec/zipline-native](https://github.com/nikolanovoselec/zipline-native) | [![GitHub Top Language](https://img.shields.io/github/languages/top/nikolanovoselec/zipline-native)](https://github.com/nikolanovoselec/zipline-native?tab=readme-ov-file#readme) | [![APK Size](https://badges.cssnr.com/gh/release/nikolanovoselec/zipline-native/latest/asset/app-x86_64-release.apk/size?label=&icon=&color=darkgreen)](https://github.com/nikolanovoselec/zipline-native/releases/latest) | [![GitHub Repo Size](https://img.shields.io/github/repo-size/nikolanovoselec/zipline-native?label=)](https://github.com/nikolanovoselec/zipline-native?tab=readme-ov-file#readme) | [![GitHub Downloads](https://img.shields.io/github/downloads/nikolanovoselec/zipline-native/total?logo=vite&logoColor=white&label=)](https://tooomm.github.io/github-release-stats/?username=cssnr&repository=zipline-android) |

If there are any features you want to see, [please let us know](support.md)...

<picture>
    <source media="(prefers-color-scheme: dark)" :srcset="'https://api.star-history.com/svg?repos=cssnr/zipline-android,Stef-00012/Zipline-Android-App,nikolanovoselec/zipline-native&type=date&theme=dark&legend=top-left'" />
    <source media="(prefers-color-scheme: light)" :srcset="'https://api.star-history.com/svg?repos=cssnr/zipline-android,Stef-00012/Zipline-Android-App,nikolanovoselec/zipline-native&type=date&legend=top-left'" />
    <img class="starHistory" alt="Star History Chart" src="https://api.star-history.com/svg?repos=cssnr/zipline-android,Stef-00012/Zipline-Android-App,nikolanovoselec/zipline-native&type=date&legend=top-left" />
</picture>

<style scoped>
.faq-page summary {
    color: var(--vp-c-brand-1);
}
.faq-page summary:hover {
    filter: brightness(115%);
    /*color: var(--vp-c-indigo-2);*/
    /*text-decoration: underline;*/
    /*text-decoration-thickness: 1px;*/
}

.faq-page table img {
  display: inline-block;
  height: auto;
  width: auto;
  max-width: none;
  max-height: none;
  margin-right: 0;
  vertical-align: middle;
}

.starHistory {
    border-radius: 12px;
    width: 100%;
}
</style>
