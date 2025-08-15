# Files Page

The Files page loads your recent files from the server.

- Loads a [configurable number](./settings.md#files-per-page) of recent files from the server.
- Loads more pages as you scroll down until the list is exhausted.
- List is cached while using the app. Pull down from the top to refresh.
- Media is cached and does not download over metered connections [unless enabled](./settings.md#load-images-on-metered-connection).
- Clicking on an item opens a preview and downloads it from the server if not cached.

## List Display

- File Preview (Images and Videos)
- File Name (Original Name)
- File Size (Human Size)
- Number of Views
- Favorite Status
- Password Status

## Menu Options

- Download
- Delete
- Favorite
- Share Link
- Copy Link
- Open Link

## Bulk Options

- Download
- Delete
- Favorite

## File Preview

Click on any file to view a preview. Previews exist for the following media types:

- Video and Audio Files _([Media3](https://github.com/androidx/media))_
- Images and Animated Graphics _([Glide](https://github.com/bumptech/glide))_
- Text with Syntax Highlighting _([HighlightJS](https://github.com/highlightjs/highlight.js))_
