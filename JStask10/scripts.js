  //функция конструктор

  let Tech = function(power) {


      let status = false

      power = power || 0

      this.enable = function() {
          status = true
      }

      this.disable = function() {
          status = false
      }

      this.getStatus = function() {
          return status
      }
      this.getPower = function() {
          return power
      }

  }




  let Teapot = function(power, size) {
      Tech.apply(this, arguments)

      size = size || 1000

      let waterAmount = 0,
          status = false,
          sT = null,
          self = this

      let parentGetStatus = this.getStatus,
          parentDisable = this.disable


      this.setWater = function(amount) {
          if (amount > 0 && amount <= size) waterAmount = amount
          else waterAmount = 0
      }

      this.getWater = function() {
          return waterAmount;
      }

      this.on = function() {
          if (parentGetStatus() == true && waterAmount > 0) {
              status = true
              boiling()

          }
      }

      this.off = function() {
          status = false

          clearTimeout(sT)
      }


      let boiling = function() {
          sT = setTimeout(function() {
              alert(" water please!")

              self.off()

          }, 8000)
      }

      // method getStatus 
      this.getStatus = function() {


          // polimormizm
          parentGetStatus.call(this)

          if (status == true && parentGetStatus() == true) return true
          return false
      }

      this.disable = function() {
          parentDisable.call(this)
          parentDisable()

          if (parentGetStatus() == false) this.off()
      }

      this.showInfo = function() {
          return 'Мощность ' + power + ', объем ' + size + ', залито воды ' + waterAmount + '. ' + (this.getStatus() ? ' Работает' : ' Не работает')
      }

  }

  let teapot = new Teapot(3500)

  console.log(teapot)
  console.log(teapot.showInfo())

  teapot.setWater(1000)
  console.log(teapot.showInfo())

  teapot.enable()
  teapot.on()
  console.log(teapot.showInfo())






  let title = document.createElement('title')
  title.innerHTML = 'dz10'

  let metaUTF8 = document.createElement('meta')
  metaUTF8.setAttribute('charset', 'UTF-8')

  console.log(title)
  console.log(metaUTF8)

  document.head.appendChild(title)
  document.head.appendChild(metaUTF8)

  let h1 = document.createElement('h1')
  h1.innerHTML = 'head'

  let p1 = document.createElement('p')
  p1.innerHTML = 'Из Закона также следует, что сотрудники милиции имеют право проводить личный досмотр граждан и досмотр находящихся при них вещей, в том числе с помощью технических и специальных средств, на входах в здания аэропортов, железнодорожных вокзалов, на объектах метрополитена и в иных местах, определенных законодательными актами Республики Беларусь.'

  document.body.appendChild(h1)
  document.body.appendChild(p1)

  let div1 = document.createElement('div')
  div1.innerHTML = 'text'
  div1.classList.add('block')

  document.body.appendChild(div1)

  let p2 = document.createElement('p')
  p2.innerHTML = 'В административном либо уголовном процессе гражданин может отказаться оказывать содействие сотрудникам милиции в получении информации из его телефона. В этом случае такие действия будут осуществлены сотрудниками милиции самостоятельно, с привлечением специалиста либо в рамках соответствующей экспертизы.'

  div1.appendChild(p2)

  let span1 = document.createElement('span')
  span1.innerHTML = 'Some text'

  p2.appendChild(span1)

  let ul1 = document.createElement('ul')
  ul1.innerHTML = '<li>Item1</li><li>Item2</li><li>Item3</li><li>Item4</li><li>Item5</li>'

  document.body.appendChild(ul1)


  let h2 = document.createElement('h2')
  h2.innerHTML = 'head 2'
  document.body.insertBefore(h2, document.querySelector('.block'))

  let li7 = document.createElement('li')
  li7.innerHTML = "New Item 7"

  ul1.insertBefore(li7, ul1.querySelector('li:nth-child(3)'))

  let banner = document.createElement('div')
  banner.innerHTML = 'Может ли сотрудник милиции проверить документы на улице?'
  banner.classList.add('banner-adv')

  document.body.insertBefore(banner, document.body.firstElementChild)

  banner.style.backgroundColor = 'green'
  banner.style.fontSize = '20px'
  banner.style.padding = '30px'
  banner.style.width = '200px'

  let style = document.createElement('style')
  style.innerHTML = `
    .banner-adv {
        position: absolute;
        top: 30%;
        left: 60%;
        margin-left: -360px;
    }
`
  document.head.appendChild(style)

  let ul1Clone = ul1.cloneNode(true)
  document.body.insertBefore(ul1Clone, div1)

  //перемеш-ние эл. 

  document.body.appendChild(p1)
  document.body.appendChild(ul1Clone)

  //удаление 
  ul1Clone.removeChild(ul1Clone.querySelector('li:nth-child(3)'))