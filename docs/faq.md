# Frequently Asked Questions

<span class="search-keywords">Help and FAQ</span>

If none of these [Questions](#questions-and-answers) or [Troubleshooting Steps](#troubleshooting-steps) help, please [reach out to support](support.md).

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

<style scoped>
summary {
    color: var(--vp-c-brand-1);
}
summary:hover {
    filter: brightness(115%);
    /*color: var(--vp-c-indigo-2);*/
    /*text-decoration: underline;*/
    /*text-decoration-thickness: 1px;*/
}
</style>
