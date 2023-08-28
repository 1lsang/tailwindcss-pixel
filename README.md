# TailwindCSS Pixel 

## Introduction

TailwindCSS Pixel is an plugin for Tailwind CSS that allows you to define styles based on pixel (px) values directly in your markup. This plugin bridges the gap between Tailwind's utility-first approach and the need for pixel-specific adjustments. It's especially useful for projects where fine-grained control over layout and design is needed.

## Features

- Pixel-based margin, padding, width, height, etc.
- Works seamlessly with existing Tailwind CSS utilities.
- Highly configurable to fit your needs.

## Installation

Install the package via npm or yarn or pnpm:

```bash
npm install tailwindcss-pixel
# or
yarn add tailwindcss-pixel
# or
pnpm add tailwindcss-pixel
```

Then, add `tailwindcss-pixel` to your `tailwind.config.js`:

```javascript
// tailwind.config.js

module.exports = {
  // ...
  plugins: [
    require('tailwindcss-pixel')({
        rem: true, // default: false
        // ...
    }),
    // ...
  ],
}
```

- **`rem`**
  - default: `false`
  - If set to `true`, rem-based pixel units will be available. 
  - Example: `w-10px` → `width: 0.625rem;`
- **`extends`**
  - If set to `true`, the plugin will extend the default Tailwind CSS utilities instead of adding new ones. This is useful if you want to use pixel-based adjustments in your project but don't want to have to use the `px` suffix for all of them.
- **`suffix`**
  - The suffix to use for the pixel-based utilities. Defaults to `px`.
- **properties**
  - `[start: number, end: number, gap: number]`
  - spacing, min-width, min-height, max-width, max-height, width, height, fontSize, borderWidth, borderRadius, fontSize, lineHeights, letterSpacing, etc.
  - You can customize the plugin by adding a `pixel` object inside the `theme` section of your `tailwind.config.js`:
  - Example: 
    ```javascript
    // tailwind.config.js

    module.exports = {
      plugins: [
        require('tailwindcss-pixel')({
            rem: true, // default: false
            minWidth: [0, 1024, 2] // this will generate from min-w-0 to min-w-1024 with 2px gap
        }),
        // ...
      ],
    }
    ```
    
## Usage

After installation and configuration, pixel-specific utility classes become available in your HTML markup:

```html
<!-- width -->
<div class="w-200px">Width 200px</div>

<!-- height -->
<div class="h-100px">Height 100px</div>

<!-- margin and padding -->
<div class="m-10px p-20px">Margin and padding</div>

<!-- font size -->
<div class="text-20px">Font size 20px</div>

<!-- border width -->
<div class="border-1px">Border width 1px</div>

<!-- border radius -->
<div class="rounded-10px">Border radius 10px</div>

<!-- etc -->
```

## Configuration

You can customize the plugin by adding a `pixel` object inside the `theme` section of your `tailwind.config.js`:

```javascript
// tailwind.config.js

module.exports = {
  theme: {
    // ...
    pixel: {
      spacing: {
        '10': '10px',
        '20': '20px',
        '30': '30px',
        // ...
      },
      //...
    },
  },
  plugins: [
    require('tailwindcss-pixel-plugin'),
  ],
}
```

## License

MIT

For more information, see [LICENSE](LICENSE).

