# Videos drop zone

Per `figma-spec-desktop.md` §5.8 designer annotations — these 7 looped background/card videos
are referenced as **Freepik Premium** stock by the designer. Тарас downloads them with his
Freepik subscription and drops the resulting `.mp4` files into this folder using the slugs below.

For best perf also export `.webm` for each (Chromium/Firefox prefer it; the `<video>` source list
already requests `.webm` first, falls back to `.mp4`).

## Required filenames

| Slug | Source URL (Freepik Premium) | Page · Section |
|---|---|---|
| `home-hero.mp4` / `.webm` | aerial-interstate-commerce-shipping-highway_761528 | Home Hero (full-bleed bg) |
| `home-audience-shippers.mp4` / `.webm` | aerial-shot-shows-road-running-through-forest-with-large-truck_6295569 | Home → "Trexim для учасників" → Для вантажовідправників card |
| `home-audience-logistics.mp4` / `.webm` | aerial-view-goods-warehouse_2504811 | Home → "Trexim для учасників" → Для логістичних компаній card |
| `about-hero.mp4` / `.webm` | aerial-road-expressway_973997 | About hero bg |
| `opportunities-hero.mp4` / `.webm` | aerial-view-modern-highway-running-through-expansive-rural-fields-sunset_6779262 | Opportunities hero bg |
| `partners-market.mp4` / `.webm` | aerial-view-rural-highway-with-trucks-traveling_3416545 | Partners → "Ключові показники ринку" right-side slot |
| `tariffs-pilot.mp4` / `.webm` | warehouse-inventory-scanning_3859848 | Tariffs → Pilot section macbook screen |

## Recommended encoding

```bash
# H.264 mp4 (universal fallback)
ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 26 -an -movflags +faststart -vf "scale='min(1920,iw)':-2" output.mp4

# VP9 webm (better compression)
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 32 -b:v 0 -an -vf "scale='min(1920,iw)':-2" output.webm
```

`-an` strips audio (videos play muted). `-movflags +faststart` enables progressive playback.
Target file size: ≤4 MB per video for hero, ≤2 MB for card slots.

## How the site uses these

- `<video autoplay muted loop playsinline poster="…fallback-png">` per spec §5.8.
- Static poster image (the `_hero section.png` etc. already in `src/assets/images/`) renders
  while video loads, and replaces video for users with `prefers-reduced-motion: reduce`.
- If a `.mp4` is missing, the poster image stays as the fallback indefinitely — site does NOT
  break, just shows the static photo.

## License

All 7 source videos are Freepik **Premium** content. Тарас's active Freepik Premium subscription
covers commercial use without attribution. Verify the licence chip on each Freepik page before
publishing on a public domain.
