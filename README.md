<p align="center">
<img src="./public/steeeam-og-image.png" width='400'/>
<h1 align="center">
    Steeeam - Visualize your Steam account
</h1>
<p align="center">
    Calculate your game library value, total playtime, average game cost, and more. Dynamically generate a shareable card to brag (or cry) about your collection on Discord, GitHub, and other platforms.
</p>

# Shareable image
Dynamically generate your Steam card image directly in places like Discord channels, GitHub markdown files, and Facebook posts.

### Discord, Facebook, etc..
Use the base URL `https://steeeam.vercel.app/api/` and change `<steam_username_or_id>` to your Steam username or steamID64. Use [this tool](https://steamid.io/) to find your steamID64.
```
https://steeeam.vercel.app/api/<steam_username_or_id>
```

### GitHub, other markdown
Use it directly on GitHub or other places that accept markdown by copy/pasting this into your markdown.
```
[![My Steam card](https://steeeam.vercel.app/<steam_username_or_id>)](https://steeeam.vercel.app)
```

# Customize your card
Personalize every aspect of your card by appending any of the options below, or use the pre-made `light` and `dark` themes for your convenience.

### Examples
```
https://steeeam.vercel.app/api/zevnda
```
<img src="./public/example1.png" width='300'/>

```
https://steeeam.vercel.app/api/zevnda?theme=light
```
<img src="./public/example2.png" width='300'/>

```
https://steeeam.vercel.app/api/zevnda?bg_color=344e41&title_color=f6f4d2&text_color=e8f0fe&sub_title_color=a7c957&border_color=588157&border_width=5&progbar_bg=588157&progbar_color=a7c957
```
<img src="./public/example3.png" width='300'/>

### Options
| Name              | Description                                              | Type                                               | Default value |
| ----------------- | -------------------------------------------------------- | -------------------------------------------------- | ------------- |
| `country_code`    | Display currency values for this country code.           | [alpha-2 code](https://www.iban.com/country-codes) | `us`          |
| `bg_color`        | Card's background color.                                 | string (hex color)                                 | `0b0b0b`      |
| `title_color`     | Card's title color.                                      | string (hex color)                                 | `ffffff`      |
| `sub_title_color` | Body sub-title color.                                    | string (hex color)                                 | `adadad`      |
| `text_color`      | Body text color.                                         | string (hex color)                                 | `ffffff`      |
| `username_color`  | Steam username text color.                               | string (hex color)                                 | `ffffff`      |
| `id_color`        | Steam ID text color.                                     | string (hex color)                                 | `adadad`      |
| `cp_color`        | Current price text color.                                | string (hex color)                                 | `f87171`      |
| `ip_color`        | Initial price text color.                                | string (hex color)                                 | `4ade80`      |
| `div_color`       | Body divider color.                                      | string (hex color)                                 | `ffffff`      |
| `border_color`    | Card's border color.                                     | string (hex color)                                 | `ffffff30`    |
| `border_width`    | Card's border width.                                     | number (0-10)                                      | `1`           |
| `hide_border`     | Hide the card's border                                   | boolean                                            | `false`       |
| `progbar_bg`      | Progress bar background color.                           | string (hex color)                                 | `ffffff30`    |
| `progbar_color`   | Progress bar foreground color.                           | string (hex color)                                 | `006fee`      |
| `theme`           | Choose from 'light' or 'dark'. *(Overrides all options)* | enum                                               | `dark`        |

..more themes, options, and card layouts coming soon. If you would like to contribute your own ideas, please feel free to create a PR.