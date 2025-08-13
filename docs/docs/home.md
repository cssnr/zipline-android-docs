# Home Page

The Home page is the full website, in the application.

The **start destination** can be set to this page, or the [Files page](/docs/files.md), in the [Application Settings](/docs/settings.md#start-destination).

::: tip NOTE
This view will eventually be deprecated once all native features are added.
:::

Native Features:

- [Files](./files.md)
- [User](./user.md)
- [Settings](./settings.md)
- [Uploading](../guides/uploading.md)

## Technical

This uses the Android System WebView to load the full Zipline website in the application.

- After logging in the cookie is saved to the WebView storage.
- If you log out in the WebView, you will be logged out of the application.
- If you clear your sessions, you will be logged out of the WebView, and the application.

::: info
These drawbacks will be fixed in future releases.
:::
