// 时间格式化
/**
 * 时间戳转换日期
 * @param <int> unixTime    待时间戳(秒)
 * @param <bool> isFull    返回完整时间(Y-m-d 或者 Y-m-d H:i:s)
 * @param <int>  timeZone   时区
 */
export const formatDate = (unixTime, isFull, timeZone) => {
  if (unixTime) {
    if (typeof (timeZone) === 'number') {
      unixTime = parseInt(unixTime) + parseInt(timeZone) * 60 * 60
    }
    let time = new Date(unixTime * 1000)
    let ymdhis = ''
    ymdhis += time.getFullYear() + '-'
    ymdhis += (time.getMonth() < 9 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1) + '-'
    ymdhis += time.getDate() < 10 ? '0' + time.getDate() : time.getDate()
    if (isFull === true) {
      ymdhis += '\xa0\xa0' + (time.getHours() < 10 ? '0' + time.getHours() : time.getHours()) + ':'
      ymdhis += (time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()) + ':'
      ymdhis += time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()
    }
    return ymdhis
  } else {
    return ''
  }
}
// 金额格式化
export const numberFormat = (number, decimals, decPoint, thousandsSep, roundtag) => {
  /*
  * 参数说明：
  * number：要格式化的数字
  * decimals：保留几位小数
  * decPoint：小数点符号
  * thousandsSep：千分位符号
  * roundtag:舍入参数，默认 'ceil' 向上取,'floor'向下取,'round' 四舍五入
  * */
  number = (number + '').replace(/[^0-9+-Ee.]/g, '')
  roundtag = roundtag || 'round' // 'ceil','floor','round'
  let n = !isFinite(+number) ? 0 : +number
  let prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
  let sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep
  let dec = (typeof decPoint === 'undefined') ? '.' : decPoint
  let s = ''
  let toFixedFix = function (n, prec) {
    let k = Math.pow(10, prec)
    return '' + parseFloat(Math[roundtag](parseFloat((n * k).toFixed(prec * 2))).toFixed(prec * 2)) / k
  }
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
  let re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + sep + '$2')
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}
export const DateAdd = (interval, number, timestamp) => {
  /**
   * 参数:interval,字符串表达式，表示要添加的时间间隔
   * 参数:number,数值表达式，表示要添加的时间间隔的个数
   * 参数:timestamp,时间戳
   * 返回:新的时间对象
   * let now = new Date()
   * DateAdd(interval,number,date)
   */
  let date = new Date(timestamp - 24 * 60 * 60 * 1000)
  switch (interval) {
    case '年' : {
      date.setFullYear(date.getFullYear() + number)
      return date
    }
    case '季度' : {
      date.setMonth(date.getMonth() + number * 3)
      return date
    }
    case '月' : {
      date.setMonth(date.getMonth() + number)
      return date
    }
    case '周' : {
      date.setDate(date.getDate() + number * 7)
      return date
    }
    case '天' : {
      date.setDate(date.getDate() + number)
      return date
    }
    case '时' : {
      date.setHours(date.getHours() + number)
      return date
    }
    case '分' : {
      date.setMinutes(date.getMinutes() + number)
      return date
    }
    case '秒' : {
      date.setSeconds(date.getSeconds() + number)
      return date
    }
    default: {
      date.setDate(date.getDate() + number)
      return date
    }
  }
}
export const numberToUpper = (money) => {
  let cnNums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'] // 汉字的数字
  let cnIntRadice = ['', '拾', '佰', '仟'] // 基本单位
  let cnIntUnits = ['', '万', '亿', '兆'] // 对应整数部分扩展单位
  let cnDecUnits = ['角', '分', '毫', '厘'] // 对应小数部分单位
  let cnInteger = '整' // 整数金额时后面跟的字符
  let cnIntLast = '元' // 整型完以后的单位
  let maxNum = 999999999999999.9999 // 最大处理的数字
  let IntegerNum // 金额整数部分
  let DecimalNum // 金额小数部分
  let ChineseStr = '' // 输出的中文金额字符串
  let parts // 分离金额后用的数组，预定义
  if (money === '') {
    return ''
  }
  money = parseFloat(money)
  if (money >= maxNum) {
    alert('超出最大处理数字')
    return ''
  }
  if (money === 0) {
    ChineseStr = cnNums[0] + cnIntLast + cnInteger
    return ChineseStr
  }
  money = money.toString() // 转换为字符串
  if (money.indexOf('.') === -1) {
    IntegerNum = money
    DecimalNum = ''
  } else {
    parts = money.split('.')
    IntegerNum = parts[0]
    DecimalNum = parts[1].substr(0, 4)
  }
  if (parseInt(IntegerNum, 10) > 0) { // 获取整型部分转换
    let zeroCount = 0
    let IntLen = IntegerNum.length
    for (let i = 0; i < IntLen; i++) {
      let n = IntegerNum.substr(i, 1)
      let p = IntLen - i - 1
      let q = p / 4
      let m = p % 4
      if (n === '0') {
        zeroCount++
      } else {
        if (zeroCount > 0) {
          ChineseStr += cnNums[0]
        }
        zeroCount = 0 // 归零
        ChineseStr += cnNums[parseInt(n)] + cnIntRadice[m]
      }
      if (m === 0 && zeroCount < 4) {
        ChineseStr += cnIntUnits[q]
      }
    }
    ChineseStr += cnIntLast
    // 整型部分处理完毕
  }
  if (DecimalNum !== '') { // 小数部分
    let decLen = DecimalNum.length
    for (let i = 0; i < decLen; i++) {
      let n = DecimalNum.substr(i, 1)
      if (n !== '0') {
        ChineseStr += cnNums[Number(n)] + cnDecUnits[i]
      }
    }
  }
  if (ChineseStr === '') {
    ChineseStr += cnNums[0] + cnIntLast + cnInteger
  } else if (DecimalNum === '') {
    ChineseStr += cnInteger
  }
  return ChineseStr
}
// 情景5: 设置选择三个月之前到今天的日期
// data (){
//    return {
//        pickerOptions0: {
//           disabledDate(time) {
//             let curDate = (new Date()).getTime();
//             let three = 90 * 24 * 3600 * 1000;
//             let threeMonths = curDate - three;
//             return time.getTime() > Date.now() || time.getTime() < threeMonths;;
//           }
//         }
//    }
// }
