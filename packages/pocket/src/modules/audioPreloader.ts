/**
 * 音频预加载
 */

// 检查浏览器是否支持 AudioContext
const AudioContext = (window as any).AudioContext || (window as any).webkitAudioContext;
const audioContext = AudioContext ? new AudioContext() : null;


const audioPreloader = {
  /**
   * 加载音频资源并返回音频缓冲区或音频元素
   * @param src - 音频资源路径
   * @returns 返回 Promise 对象，成功时返回音频缓冲区或音频元素，失败时返回错误信息
   */
  loadAudio(src: string): Promise<AudioBuffer | HTMLAudioElement> {
    return new Promise((resolve, reject) => {
      if (!src) {
        reject(new Error('音频资源路径不能为空'));
        return;
      }
      if (audioContext) {
        const request = new XMLHttpRequest();
        request.open('GET', src, true);
        request.responseType = 'arraybuffer';
        request.onload = () => {
          audioContext.decodeAudioData(
            request.response,
            (buffer: AudioBuffer) => {
              resolve(buffer);
            },
            (error: DOMException) => {
              reject(error.message);
            }
          );
        };
        request.onerror = () => {
          reject(new Error('加载音频资源失败'));
        };
        request.send();
      } else {
        const audio = new Audio(src);
        audio.onloadedmetadata = () => {
          resolve(audio);
        };
        audio.onerror = () => {
          reject(new Error('加载音频资源失败'));
        };
      }
    });
  },

  /**
   * 播放音频
   * @param audio - 音频缓冲区或音频元素
   * @returns 返回音频源对象，用于控制音频的播放
   */
  play(buffer: AudioBuffer | HTMLAudioElement): HTMLAudioElement | AudioBufferSourceNode | void  {
    if (!buffer) {
      return;
    }

    if (audioContext && buffer instanceof AudioBuffer) {
      const { state = '', resume = null } = audioContext;

      if (state && state !== 'running') {
        if (resume) {
          audioContext.resume().catch((error: DOMException) => {
            console.error('恢复音频上下文失败:', error.message);
          });
        }
      }
      const source = audioContext.createBufferSource();
      source.buffer = buffer;
      source.connect(audioContext.destination);
      source.start(0);
      return source;
    } else if (buffer instanceof HTMLAudioElement) {
      // 使用 <audio> 元素播放音频
      buffer.play().catch((error: DOMException) => {
        console.error('播放音频失败:', error.message);
      });
      return buffer;
    } else {
      console.error('不支持的音频对象类型');
    }
  }
};

export default audioPreloader;