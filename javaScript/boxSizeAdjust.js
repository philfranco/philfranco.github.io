var input = document.querySelector('input')
var footer = document.querySelector('footer')

input.addEventListener('change', function(){
  footer.style.setProperty('--textBox_h', window.innerHeight)
  footer.style.setProperty('--textBox_w', window.innerWidth)
})