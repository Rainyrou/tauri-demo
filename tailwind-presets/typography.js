import plugin from 'tailwindcss/plugin';

const BASE_FONT_SIZE = 16;

function toRem(px) {
  return (px / BASE_FONT_SIZE).toFixed(3) + 'rem';
}

export default plugin(({ addBase, addUtilities, theme }) => {
  const breakpoints = theme('screens');

  addBase({
    html: {
      '-webkit-font-smoothing': 'antialiased', // 使用像素平滑, 该属性仅在 MacOS 下生效, 防止过重
      fontSize: BASE_FONT_SIZE + 'px',
    },
    body: {
      fontWeight: 450,
      lineHeight: 1.3333,
    },
  });

  // mobile
  const textStylesMobile = {
    '.text-h1': {
      fontSize: toRem(18),
      lineHeight: toRem(23),
      fontWeight: 500,
    },
    '.text-h1-s': {
      fontSize: toRem(14.5),
      lineHeight: toRem(20),
      fontWeight: 500,
    },
    '.text-body': {
      fontSize: toRem(14),
      lineHeight: toRem(21),
      fontWeight: 400,
    },
  };

  /**
   * tablet
   * @type {typeof textStylesMobile}
   * */
  const textStylesTablet = {
    '.text-h1': {
      fontSize: toRem(18),
      lineHeight: toRem(23),
      fontWeight: 500,
    },
    '.text-h1-s': {
      fontSize: toRem(14.5),
      lineHeight: toRem(20),
      fontWeight: 500,
    },
    '.text-body': {
      fontSize: toRem(14),
      lineHeight: toRem(21),
      fontWeight: 400,
    },
  };

  /**
   * desktop
   * @type {typeof textStylesMobile}
   * */
  const textStylesDesktop = {
    '.text-h1': {
      fontSize: toRem(18),
      lineHeight: toRem(23),
      fontWeight: 500,
    },
    '.text-h1-s': {
      fontSize: toRem(14.5),
      lineHeight: toRem(20),
      fontWeight: 500,
    },
    '.text-body': {
      fontSize: toRem(14),
      lineHeight: toRem(21),
      fontWeight: 400,
    },
  };

  addUtilities(textStylesMobile);

  if (breakpoints.tablet) {
    addUtilities(
      // 做这个处理是为了能让 tailwindcss vscode 插件可以正确识别
      Object.keys(textStylesTablet).map((key) => {
        return {
          [`@media (min-width: ${breakpoints.tablet})`]: {
            [key]: textStylesTablet[key],
          },
        };
      }),
    );
  }

  if (breakpoints.desktop) {
    addUtilities(
      // 做这个处理是为了能让 tailwindcss vscode 插件可以正确识别
      Object.keys(textStylesDesktop).map((key) => {
        return {
          [`@media (min-width: ${breakpoints.desktop})`]: {
            [key]: textStylesDesktop[key],
          },
        };
      }),
    );
  }
});
