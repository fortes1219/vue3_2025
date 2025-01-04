// 引入寫好的指令集檔案
import formatCurrency from './format-currency'

const directives = {
  formatCurrency  // 這裡是指令的名稱，需要遵循camelCase命名，並在模板中使用kebab-case形式。
}

// 匯出給main.js掛載
export const customDirectives = {
  install(app) {
    Object.entries(directives).forEach(([directiveName, directiveObj]) => {
      app.directive(directiveName, directiveObj)
    })
  },
}