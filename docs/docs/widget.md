# Widget

You can add a stats widget to the home screen to display [stats](#stats) and provide [functions](#functions).

![Stats Widget](/images/shots/widget.jpg)

[[toc]]

## Stats

The widget displays the following stats:

- Total Number of Files
- Total Size of Files
- Last Updated Time

_Note: is the client last updated time and not server generation time since this endpoint does not return updatedAt._

## Functions

The widget has the following functions:

- Upload Button
- Refresh Button
- Launch Application

## Updates

The widget [update interval](../docs/settings#update-interval) can be configured in [settings](../docs/settings.md).
This uses the [Android Work Manager](https://developer.android.com/develop/background-work/background-tasks/persistent/getting-started)
so the shortest configurable interval is 15 minutes.

Choose when and how it runs:

- Configurable Update Interval
- Disabled on Metered Connections

Choose which tasks run:

- Stats
- Profile
- Avatar _(may increase data usage)_

For more details on updates see [Settings - Update Interval](settings#update-interval).

## Display

You can customize look and feel of the widget:

- Text Color
- Background Color
- Background Opacity
- Size (2x1 minimum)
