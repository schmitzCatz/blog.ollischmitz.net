# Blog

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
* https://webpack.js.org/
* https://bulma.io/
* https://bulma.io/extensions/
* https://fontawesome.com/
* https://containers.dev/

## Release

Trigger release workflow

`git tag v*`
`git push --tags`

## Test GitHub Actions with `act`

https://github.com/nektos/act

`act --container-architecture linux/amd64 --env ImageOS=ubuntu22 `

