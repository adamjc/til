# Clean stale, remote, branch refs

```bash
$ git branch -r 
 origin/master
 origin/some-long-dead-branch-that-is-not-actually-on-origin-anymore
$ git remote prune origin
Pruning origin
URL: git@github.com:adamjc/til.git
 * [pruned] origin/some-long-dead-branch-that-is-not-actually-on-origin-anymore
$ git branch -r
 origin/master
```