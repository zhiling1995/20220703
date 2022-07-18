# app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

day01:


1.vue-cli脚手架初始化项目        vue create app
   node + webpack + 淘宝镜像



node_modules文件夹：项目依赖文件夹
  node_modules   ES6语法翻译成ES5   让兼容性更好一些

public文件夹: 一般放置一些静态资源（图片）,需要注意，放在public文件夹中的静态资源，webpack进行打包的时候，会原封不动打包到dist文件夹中

src文件夹（程序员源代码文件夹）;
   assets文件夹：一般也是放置静态资源（一般放置多个组件供用的静态资源），需要注意，放置在assets文件夹里面静态资源，在webpack打包的时候，
   webpack会把静态资源当做一个模块，打包js文件里面

components文件夹：一般放置的是非路由组件（全局组件）

app.vue:唯一根组件，Vue当中的组件（.vue）

main.js:程序入口文件，也是整个程序当中最先执行的文件


babel.config.js ： 配置文件（babel 相关）

package.json文件：认为项目 ‘身份证’ , 记录项目叫什么 、 项目当中有哪些依赖 、项目怎么运行


package-lock.json：缓存性文件

README.md ： 说明性文件



2.项目得其他配置  方便其他开发效果
2.1  项目运行起来的时候，让浏览器自动打开
--package.json
   "scripts": {
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
    },
2.2   eslint 校验功能关闭

---在根目录下，创建一个vue.config.js  常见的配置代理都是在这个文件里  对外暴露一个对象 module.exports={}
比如：声明变量但是没有使用eslint校验工具报错。



2.3  src文件夹简写方法，配置别名 @
jsconfig.json配置别名@提示【@代表的是src文件夹，这样将来文件过多，找的时候方便很多】

{
   "compilerOptions":{
      "baseUrl": "./",
      "paths":{
         "@/*":["src/*"]

              }
      },
      "exclude":["node_modules","dist"]

   }
}



3.项目路由的分析
vue-router
前端所谓路由：KV键值对
key: URL(地址栏中的路径)
value:相应的路由组件
注意：项目上中下结构


路由组建：
home首页路由组件、Search路由组件、login登录路由、Refister注册路由


非路由组件

hearder
Footer[在首页、搜索页]，但是登录|注册|页面是没有的


4.完成非路由组件Header与Footer业务
1.书写页面
2.拆分组件
3.获取服务器的数据动态展示
4.完成相应的动态业务逻辑
注意1：创建组件的时候，组建的结构 + 组建的样式 + 图片资源
注意2：  咋们项目采用的是less样式，浏览器不识别less样式，需要通过less、less-loder进行处理
less ,把less样式变为css样式，浏览器才可以识别


5.路由组件的搭建
vue-router
在上面分析的时候，路由组件应该有4个：home、Search、login、Refister
-components  文件夹：经常放置的非路由组件（公用全局组件）
-pages|view文件夹：经常放置路由组件

5.1配置路由
项目当中配置的路由一般放置在router文件夹中

5.2总结
路由组件与非路由组件的区别？
1：路由组件一般放置在pages|view文件夹,非路由组件一般放置在components  文件夹
2.路由组件一般需要在router文件夹中进行注册（使用的即为组件的名字），非路由组件在使用的时候，一般都是以标签的形式使用

3：注册完路由，不管路由组件还是非路由组件都有$route、 $router属性
$route：一般获取路由信息【路径、query、params等等】
$router:一般进行编程式导航进行路由跳转【push|replace】

5.3路由的跳转？
路由的跳转有两种形式：
声明式导航router-link,可以进行路由的跳转
编程式导航push|replace,可以进行路由的跳转

编程式导航:声明式导航能做的，编程式导航都能做
但是编程式导航除了可以进行路由跳转，还可以做一些其他的业务逻辑




