# Minimal mistakes 
[Demo and Guides](https://mmistakes.github.io/minimal-mistakes/)
[Github](https://github.com/mmistakes/minimal-mistakes)

# Run locally
```
bundle install
bundle exec jekyll serve
```
# Useful stuff
Link to one of your own posts:
```
[Link text]({% link _posts/2023-01-29-safety-shield.md %})
```
Link to a youtube video:
```
{% include video id="ldvWMJVBLa0" provider="youtube" %}
```
Insert an image and limit its size:
```
![image-right]({{ site.url }}{{ site.baseurl }}/assets/img/optical_belt_sorter.png){: width="430" .align-right }
```