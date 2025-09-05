# Home Page

The Home page is the full website, in the application.

The **start destination** can be set to this page, or the [Files page](/docs/files.md), in the [Application Settings](/docs/settings.md#start-destination).

::: info
This view will eventually be deprecated once all native features are added.
:::

Native Features:

- [Files](files.md)
- [User](user.md)
- [Settings](settings.md)
- [Upload](upload.md)
- [Widget](widget.md)

_There is also an [Uploading Guide](../guides/uploading.md)._

## Technical

This uses the Android System WebView to load the full Zipline website in the application.

- After logging in the cookie is saved to the WebView storage.
- If you log out in the WebView, you will have to manually log back in.
- If you clear your sessions, you will be logged out of the WebView.

The application, including uploads, will continue to work normally if logged out of the WebView.

::: tip NOTICE
The session bug is fixed in server version 4.2.2 or later. Upgrading the server will fix this issue.

Furthermore, this will restriction be re-enforced in a later version to prevent views from being counted in the file list.
More info on the [Files - List Display](files.md#list-display).
:::
