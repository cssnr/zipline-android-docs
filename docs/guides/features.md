# Features

Overview of features and [screenshots](#screenshots).

[[toc]]

::: info
Missing a feature? Submit a [Feature Request](https://github.com/cssnr/zipline-android/discussions/categories/feature-requests) and we will get it added!
:::

## Screenshots

<!--suppress HtmlUnknownAttribute -->
<script setup>
const requestFullscreen = () => document.querySelector('.swiper')?.requestFullscreen()
</script>

<button @click="requestFullscreen" style="display: inline-flex; align-items: center; gap: 0.5rem;">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-fullscreen-icon lucide-fullscreen"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><rect width="10" height="8" x="7" y="8" rx="1"/></svg>
View in Full Screen
</button>

<ClientOnly>
<Swiper
    :modules="[Keyboard, Mousewheel, Navigation, Pagination, EffectCoverflow]"
    :slides-per-view="1"
    :breakpoints="{ 1096: { slidesPerView: 3 }}"
    :pagination="{ clickable: true, type: 'fraction' }"
    :coverflowEffect="{ slideShadows: false }"
    :keyboard="true"
    :mousewheel="true"
    :navigation="true"
    :grabCursor="true"
    :loop="true"
    :lazyPreloadPrevNext="2"
    :effect="'coverflow'"
    class="swiper">
<SwiperSlide v-for="i in 18" :key="i">
    <img :src="`https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/screenshots/${i}.jpg`" alt="Loading..." loading="lazy" />
</SwiperSlide>
</Swiper>
</ClientOnly>

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
