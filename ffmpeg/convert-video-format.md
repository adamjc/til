# Convert a video from one encoding to another

`ffmpeg -i input.mp4 -vcodec copy -acodec copy out.mkv`

`-vcodec` / `-acodec` specifies the codec to use, in this case we are using `copy`, which takes the codec from the input file

To specfiy which codec to use:

`ffmpeg -i input.mp4 -c:v vp9 -c:a libvorbis output.mkv`

`-c:v` is (I think) an alias for `-vcodec`, here we are using the `vp9` encoding (https://en.wikipedia.org/wiki/VP9)

`-c:a` likewise, here we are using the `libvorbis` encoding (https://en.wikipedia.org/wiki/Vorbis)
