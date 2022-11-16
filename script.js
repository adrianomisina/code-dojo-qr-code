async function getQrCode() {
  const randomNumber = Math.floor(Math.random() * 10)
  const response = await fetch(`https://chart.googleapis.com/chart?chs=250x250&cht=qr&chf=bg,s,65432100&chl="&ENCODEURL(C2)&chl=${randomNumber}`)
  const urlReturn = await response.blob()
  const div = document.querySelector('#demo')
  const imgURL = URL.createObjectURL(urlReturn)
  const img = `<img src="${imgURL}"/>`
  return div.innerHTML = img
} getQrCode()

