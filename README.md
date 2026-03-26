# Created Using Google Stitch

# Run locally
```
npx @11ty/eleventy --serve --port 4001 --input=. --output=_site_11ty
```
Will display at `http://127.0.0.1:4001/`.
Run `git add *`, `git commit`, and `git push` for online update.

# Useful stuff
Link to one of your own posts:
```
[Link text](/posts/safety-shield/)
```
Link to a youtube video:
```
<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:2rem 0;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube.com/embed/ldvWMJVBLa0" frameborder="0" allowfullscreen></iframe></div>
```
Insert an image and limit its size:
```
<img src="/assets/img/optical_belt_sorter.png" alt="image-right" style="max-width:430px;width:100%;float:right;margin:0 0 1rem 2rem;"/>
```