/**
 * 检查字符串中的括号是否匹配
 * @param value 要检查的字符串
 * @returns 如果括号匹配，则返回 true，否则返回 false
 */
const matchRich = (value: string) => {
  const stack: string[] = [];
  for (let i = 0, item: string; i < value.length; i++) {
    item = value.charAt(i);
    if (item === '(') {
      stack.push('(');
    } else if (item === ')') {
      if (stack.length > 0) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
};

/**
 * 验证数学公式的合法性
 * @param value 要验证的数学公式
 * @param callback 验证结果的回调函数
 * @returns 如果数学公式合法，则返回 true，否则返回 false
 */
export const validateFormula = (value: string, callback: (v: Error) => void): boolean => {
  // 空格
  if (/(^\s+)|(\s+$)|\s+/g.test(value)) {
    callback(new Error('公式中间有空格'));
    return false;
  }

  // 匹配 + - * / 英文汉子
  if (/[^+\-*/0-9a-zA-Z()\u4e00-\u9fa5_]/.test(value)) {
    callback(new Error('字符不规范'));
    return false;
  }

  // 运算符号不能在首末位
  if (/^[\+\-\*\/.]|[\+\-\*\/.]$/.test(value)) {
    callback(new Error('运算符号不能在首末位'));
    return false;
  }

  // 错误情况，运算符连续
  if (/[\+\-\*\/]{2,}/.test(value)) {
    callback(new Error('运算符连续'));
    return false;
  }

  // 空括号
  if (/\(\)/.test(value)) {
    callback(new Error('空括号'));
    return false;
  }

  // 空括号
  if (/\[\]/.test(value)) {
    callback(new Error('空中括号'));
    return false;
  }

  if (!matchRich(value)) {
    callback(new Error('括号不配对'));
  }

  // 错误情况，(后面是运算符
  if (/\([\+\-\*\/]/.test(value)) {
    callback(new Error('(后面是运算符 '));
    return false;
  }

  // 错误情况，)前面是运算符
  if (/[\+\-\*\/]\)/.test(value)) {
    callback(new Error(')前面是运算符 '));
    return false;
  }

  // 错误情况，(前面不是运算符
  // if (/[^\+\-\*\/]\(/.test(value)) {
  if (/[^\+\-\*\/\\(]\(/.test(value)) {
    callback(new Error('(前面不是运算符 '));
    return false;
  }

  // 错误情况，)后面不是运算符
  // if (/\)[^\+\-\*\/]/.test(value)) {
  if (/\)[^\+\-\*\/\)]/.test(value)) {
    callback(new Error(')后面不是运算符 '));
    return false;
  }

  return true;
};
