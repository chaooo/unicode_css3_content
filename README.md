# unicode_css_content
##### Base on Unicode Standard of Version 9.0.0.
##### 使用方法：
  * 整理了一些常用的HTML特殊字符，这些字符属于unicode字符集，所以文档需要声明为UTF-8；
  * 用于CSS文件中时，需要用反斜杠`\`转义(如：`content:'\2190';`)；
  * 也可以用于javascript，和CSS用法一样，不过要用`\u`来转义。

##### 需要主意的是：
  * 有的字符在不同的浏览器下表现不太一样；比如小雪人` ☃ `在firefox和Chrome下不太一样，钻石` ◆ `在IE下要比Chrome下要大一些；
  * 有的字符在某个浏览器下不会显示；当然原因并不是字符代码的问题，而是浏览器的bug，但是，98%的字符都能在所有浏览器下正常显示的，不过如果你真的要使用，最好仔细在各个浏览器下验证一下。
  * iOS等智能终端默认显示彩色，而且有一些字符的识别度也比较差，所以，使用的时候要特别注意移动浏览器。

##### 速查表
  * [demo](https://chaooo.github.io/unicode_css3_content/)
<a href="https://chaooo.github.io/unicode_css3_content/"><img src="http://obzf7z93c.bkt.clouddn.com/blog/Unicode.png" align="right"></a>

##### 参考网址：
  * Unicode 9.0 Character Code Charts：[http://www.unicode.org/charts/](http://www.unicode.org/charts/)


