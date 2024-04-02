
/**
 * 复制文本到剪贴板
 * @param text 要复制的文本内容
 * @returns 是否成功复制文本到剪贴板
 */
export async function clipboard(text: string): Promise<boolean> {
  if (!navigator.clipboard) {
    try {
      const input = document.createElement('textarea');
      input.value = text;
      input.style.position = 'fixed';
      input.style.left = '-999px';
      input.style.opacity = '0';
      input.style.display = 'none'; // 将元素隐藏
      // 将 textarea 添加到文档中
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      return true;
    } catch (error) {
      console.error('复制到剪贴板失败:', error);
      return false;
    }
  } else {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      console.error('复制到剪贴板失败:', error);
      return false;
    }
  }
}
