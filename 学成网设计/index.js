let data = [
  {
    src: 'images/course01.png',
    title: 'Think PHP 5.0 博客系统实战项目演练',
    num: 1125
  },
  {
    src: 'images/course02.png',
    title: 'Android 网络动态图片加载实战',
    num: 357
  },
  {
    src: 'images/course03.png',
    title: 'Angular2 大前端商城实战项目演练',
    num: 22250
  },
  {
    src: 'images/course04.png',
    title: 'Android APP 实战项目演练',
    num: 389
  },
  {
    src: 'images/course05.png',
    title: 'UGUI 源码深度分析案例',
    num: 124
  },
  {
    src: 'images/course06.png',
    title: 'Kami2首页界面切换效果实战演练',
    num: 432
  },
  {
    src: 'images/course07.png',
    title: 'UNITY 从入门到精通实战案例',
    num: 888
  },
  {
    src: 'images/course08.png',
    title: 'Cocos 深度学习你不会错过的实战',
    num: 590
  },
  {
    src: 'images/course01.png',
    title: 'Think PHP 5.0 博客系统实战项目演练',
    num: 1125
  },
  {
    src: 'images/course06.png',
    title: 'Kami2首页界面切换效果实战演练',
    num: 432
  }
]


let box_bd = document.querySelector('.box-bd')
let ul = box_bd.querySelector('ul')
for (let i = 0; i < data.length; i++) {
  // 创建元素
  let li = document.createElement('li')
  let a = document.createElement('a')
  let img2 = document.createElement('img')
  let h3 = document.createElement('h3')
  let p = document.createElement('p')
  let span1 = document.createElement('span')
  let span2 = document.createElement('span')
  // 设置属性
  img2.src = data[i].src
  h3.textContent = data[i].title
  span1.textContent = '高级'
  span1.className = 'gao'
  span2.textContent = `· ${data[i].num}人在学习`
  span2.className = 'ren'
  // 插入元素
  ul.appendChild(li)
  li.appendChild(a)
  a.appendChild(img2)
  a.appendChild(h3)
  a.appendChild(p)
  p.appendChild(span1)
  p.appendChild(span2)
  if (data[i].num > 1000) {
    let em = document.createElement('em')
    let img1 = document.createElement('img')
    img1.src = 'images/hot.png'
    a.appendChild(em)
    em.appendChild(img1)
  }
}
