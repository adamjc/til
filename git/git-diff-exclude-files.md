# Exclude files in git diff

```bash
$ git diff -- ':!package-lock.json' # do not show 'package-lock.json' changes in diff
$ git diff -- ':!*.json' # do not show any .json files
```