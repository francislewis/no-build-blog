##How it works
Everything wriiten on this site is written in [markdown](https://daringfireball.net/projects/markdown/).
This makes it easy for anybody to write it. To write it you may find these resources useful 

1. [Cheatsheet](https://help.github.com/articles/markdown-basics/)

2. [StackEdit](https://stackedit.io/editor) (Markdown editor)

####On page load
On page load this is what happens:

1. HTML page including navbar and css are loaded.
2. A new AJAX HTTP request is made through JS and themarkdown content is loaded.
3. The raw markdown is then rendered using [Strapdown JS](http://strapdownjs.com/) to make it look better.
