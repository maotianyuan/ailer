type FullScreenApi = {
  requestFullscreen?: () => void;
  webkitRequestFullscreen?: () => void; /* Safari */
  msRequestFullscreen?: () => void; /* IE11 */
};

type DocumentFullScreenApi = {
  exitFullscreen?: () => void;
  webkitExitFullscreen?: () => void; /* Safari */
  msExitFullscreen?: () => void; /* IE11 */
};

type FullScreenElementApi = {
  fullscreenElement?: Element | null;
  webkitFullscreenElement?: Element | null; /* Safari */
  msFullscreenElement?: Element | null; /* IE11 */
};

/**
 * 进入全屏模式
 * @param element 要进入全屏的 HTML 元素
 * @returns 是否成功进入全屏模式
 */
export const enterFullScreen = (element: HTMLElement): boolean => {
  const fullscreenApi = element as HTMLElement & FullScreenApi;
  if (fullscreenApi.requestFullscreen) {
    fullscreenApi.requestFullscreen();
  } else if (fullscreenApi.webkitRequestFullscreen) {
    fullscreenApi.webkitRequestFullscreen();
  } else if (fullscreenApi.msRequestFullscreen) {
    fullscreenApi.msRequestFullscreen();
  } else {
    console.error('当前浏览器不支持全屏模式。');
    return false;
  }
  return true;
};

/**
 * 退出全屏模式
 * @returns 是否成功退出全屏模式
 */
export const exitFullScreen = (): boolean => {
  const documentFullscreenApi = document as Document & DocumentFullScreenApi;
  if (documentFullscreenApi.exitFullscreen) {
    documentFullscreenApi.exitFullscreen();
  } else if (documentFullscreenApi.webkitExitFullscreen) {
    documentFullscreenApi.webkitExitFullscreen();
  } else if (documentFullscreenApi.msExitFullscreen) {
    documentFullscreenApi.msExitFullscreen();
  } else {
    console.error('当前浏览器不支持退出全屏模式。');
    return false;
  }
  return true;
};

/**
 * 切换全屏模式
 * @param element 要进入全屏的 HTML 元素
 * @returns 是否成功切换全屏模式
 */
export const toggleFullScreen = (element: HTMLElement): boolean => {
  if (isFullScreen()) {
    return exitFullScreen();
  } else {
    return enterFullScreen(element);
  }
};

/**
 * 检查当前是否处于全屏模式
 * @returns 是否处于全屏模式
 */
export const isFullScreen = (): boolean => {
  const fullScreenElementApi = document as Document & FullScreenElementApi;
  return !!(
    fullScreenElementApi.fullscreenElement ||
    fullScreenElementApi.webkitFullscreenElement ||
    fullScreenElementApi.msFullscreenElement
  );
};
