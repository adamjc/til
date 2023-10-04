# Cut the start/end time of a video

`ffmpeg -ss 00:01:00 -to 00:02:00 -i input.mp4 -c copy output.mp4`

`-i` the input file

`-ss` seeks to the start time specified (needs to have `-i` option)

`-to` stop writing the output at the time specified (needs to have `-i` option)

`-c copy` this is an option to trim via stream copy. (NB: very fast)
