# Remove pruned local branches

```bash
$ git branch -vv | grep ': gone]' | awk '{print $1}' | xargs echo git branch -D # remove 'echo' to actually do it
```

`git branch -vv` is the 'extra verbose' mode, this will print out any origin the branch has, including whether or not it is 'gone' (not in the remote)

`grep ': gone]'` will return only branches that are _not_ in the remote but _are_ local

`awk '{print $1}'` prints the first 'field' (whitespaces are separators, so this prints just the name of the branch)

`xargs git branch -D` will pass in the output of anything before it as an argument, so here we pass in a list of branches of `git branch -D` which will do the rest for us.
