const plugin = require('tailwindcss/plugin');
const { px, pxr } = require('./helpers.js');

const pixel = plugin.withOptions(
    () => {},
    ({
         minWidth = [0, 1280, 1],
         maxWidth = [0, 1280, 1],
         minHeight = [0, 1280, 1],
         maxHeight = [0, 1280, 1],
         spacing = [0, 1280, 1],
         borderWidth = [0, 32, 1],
         borderRadius = [0, 32, 1],
         fontSize = [0, 64, 2],
         lineHeights = [0, 64, 2],
         letterSpacing = [0, 64, 2],
         width = [0, 1280, 1],
         height = [0, 1280, 1],
         rem = true,
         extend = false,
         suffix = 'px',
     }) => {
        const theme = {
            minWidth: rem
                ? pxr(minWidth[0], minWidth[1], minWidth[2], suffix)
                : px(minWidth[0], minWidth[1], minWidth[2], suffix),
            maxWidth: rem
                ? pxr(maxWidth[0], maxWidth[1], maxWidth[2], suffix)
                : px(maxWidth[0], maxWidth[1], maxWidth[2], suffix),
            minHeight: rem
                ? pxr(minHeight[0], minHeight[1], minHeight[2], suffix)
                : px(minHeight[0], minHeight[1], minHeight[2], suffix),
            maxHeight: rem
                ? pxr(maxHeight[0], maxHeight[1], maxHeight[2], suffix)
                : px(maxHeight[0], maxHeight[1], maxHeight[2], suffix),
            spacing: rem
                ? pxr(spacing[0], spacing[1], spacing[2], suffix)
                : px(spacing[0], spacing[1], spacing[2], suffix),
            borderWidth: rem
                ? pxr(borderWidth[0], borderWidth[1], borderWidth[2], suffix)
                : px(borderWidth[0], borderWidth[1], borderWidth[2], suffix),
            borderRadius: rem
                ? pxr(borderRadius[0], borderRadius[1], borderRadius[2], suffix)
                : px(borderRadius[0], borderRadius[1], borderRadius[2], suffix),
            fontSize: rem
                ? pxr(fontSize[0], fontSize[1], fontSize[2], suffix)
                : px(fontSize[0], fontSize[1], fontSize[2], suffix),
            lineHeights: rem
                ? pxr(lineHeights[0], lineHeights[1], lineHeights[2], suffix)
                : px(lineHeights[0], lineHeights[1], lineHeights[2], suffix),
            letterSpacing: rem
                ? pxr(letterSpacing[0], letterSpacing[1], letterSpacing[2], suffix)
                : px(letterSpacing[0], letterSpacing[1], letterSpacing[2], suffix),
            width: rem
                ? pxr(width[0], width[1], width[2], suffix)
                : px(width[0], width[1], width[2], suffix),
            height: rem
                ? pxr(height[0], height[1], height[2], suffix)
                : px(height[0], height[1], height[2], suffix),
        };

        return extend
            ? {
                theme: {
                    extend: theme,
                },
            }
            : { theme };
    }
);

module.exports = pixel;
