# Features

Overview of available features and [screenshots](#screenshots).

[[toc]]

::: info
Missing a feature? Submit a [Feature Request](https://github.com/cssnr/zipline-android/discussions/categories/feature-requests) and we will get it added!
:::

## Screenshots

<ClientOnly>
<Swiper
    :modules="[Keyboard, Navigation, Pagination, EffectCoverflow]"
    :slides-per-view="1"
    :breakpoints="{ 1096: { slidesPerView: 3 }}"
    :pagination="{ clickable: true, type: 'fraction' }"
    :keyboard="true"
    :navigation="true"
    :grabCursor="true"
    :loop="true"
    :lazyPreloadPrevNext="2"
    :effect="'coverflow'"
    class="swiper">
<SwiperSlide><img src="https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/screenshots/1.jpg" alt="Screenshot" loading="lazy" /></SwiperSlide>
<SwiperSlide><img src="https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/screenshots/2.jpg" alt="Screenshot" loading="lazy" /></SwiperSlide>
<SwiperSlide><img src="https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/screenshots/3.jpg" alt="Screenshot" loading="lazy" /></SwiperSlide>
<SwiperSlide><img src="https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/screenshots/4.jpg" alt="Screenshot" loading="lazy" /></SwiperSlide>
<SwiperSlide><img src="https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/screenshots/5.jpg" alt="Screenshot" loading="lazy" /></SwiperSlide>
<SwiperSlide><img src="https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/screenshots/6.jpg" alt="Screenshot" loading="lazy" /></SwiperSlide>
<SwiperSlide><img src="https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/screenshots/7.jpg" alt="Screenshot" loading="lazy" /></SwiperSlide>
<SwiperSlide><img src="https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/screenshots/8.jpg" alt="Screenshot" loading="lazy" /></SwiperSlide>
<SwiperSlide><img src="https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/screenshots/9.jpg" alt="Screenshot" loading="lazy" /></SwiperSlide>
<SwiperSlide><img src="https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/screenshots/10.jpg" alt="Screenshot" loading="lazy" /></SwiperSlide>
<SwiperSlide><img src="https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/screenshots/11.jpg" alt="Screenshot" loading="lazy" /></SwiperSlide>
<SwiperSlide><img src="https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/screenshots/12.jpg" alt="Screenshot" loading="lazy" /></SwiperSlide>
<SwiperSlide><img src="https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/screenshots/13.jpg" alt="Screenshot" loading="lazy" /></SwiperSlide>
<SwiperSlide><img src="https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/screenshots/14.jpg" alt="Screenshot" loading="lazy" /></SwiperSlide>
<SwiperSlide><img src="https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/screenshots/15.jpg" alt="Screenshot" loading="lazy" /></SwiperSlide>
<SwiperSlide><img src="https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/screenshots/16.jpg" alt="Screenshot" loading="lazy" /></SwiperSlide>
<SwiperSlide><img src="https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/screenshots/17.jpg" alt="Screenshot" loading="lazy" /></SwiperSlide>
<SwiperSlide><img src="https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zipline/android/screenshots/18.jpg" alt="Screenshot" loading="lazy" /></SwiperSlide>
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
