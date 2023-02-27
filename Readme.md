# Blog

uses jekyll-compose

```
  draft      # Creates a new draft post with the given NAME
  post       # Creates a new post with the given NAME
  publish    # Moves a draft into the _posts directory and sets the date
  unpublish  # Moves a post back into the _drafts directory
  page       # Creates a new page with the given NAME
  rename     # Moves a draft to a given NAME and sets the title
  compose    # Creates a new file with the given NAME
```

```
jekyll draft "My new draft"
jekyll publish _drafts/my-new-draft.md
```


## Development
* https://jekyllrb.com/

## Utility container
``
docker run --rm --volume="${PWD}:/srv/jekyll" -p 35729:35729 -p 4000:4000 -it jekyll/jekyll sh
``
jekyll s --livereload --force_polling

