const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

function getFontFamily() {
  wx.loadFontFace({
    family: 'webfont',
    source: 'url("//d.sicq.org/assets/src/SourceHanSansCN-Normal.ttf")',//这个文件放到您的服务器根目录下
    success: function (res) {
      console.log(res.status) // loaded 
    },
    fail: function (res) {
      console.log(res.status) // error 
    },
    complete: function (res) {
      console.log(res.status);
    }
  });
}

module.exports = {
  formatTime
}
