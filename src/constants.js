export const PALETTE = {
  PRIMARY: {
    BLACK: '#000000',
    WHITE: '#ffffff',
    LIGHT_CYAN: '#55ffff',
    LIGHT_MAGENTA: '#ff55ff',
  },
  SECONDARY: {
    YELLOW: '#ffff55',
    LIGHT_GREEN: '#55ff55',
    LIGHT_RED: '#ff5555',
    BLACK: '#000000',
  },
};

export const ASSETS = {
  BACKGROUND: 'BACKGROUND',
  BULLET: 'BULLET',
  PLAYER: 'PLAYER',
  TARGET: 'TARGET',
  BUTTON: 'BUTTON',
  BLOCK: 'BLOCK',
};

export const STATES = {
  BOOT: 'BOOT',
  TITLE: 'TITLE',
  END: 'END',
};

export const CANVAS = {
  WIDTH: 960,
  HEIGHT: 960 / 8 * 5, // Original CGA used 320 x 200, so aspect ratio is 8:5
  CELL_SIZE: 40, // 960 & 600 is divisible by this.
  CELL_COUNT_X: 24,
  CELL_COUNT_Y: 15,
};

export const PHYSICS = 'PHYSICS';
