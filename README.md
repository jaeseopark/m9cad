# m9cad

m9cad is a webapp that lets you trace lines and curves on top of a video, as if you are drawing something in a video editing software. The drawing can be exported as svg.

The app was originally developed because my old computer was far too slow to run [Motion](https://www.apple.com/final-cut-pro/motion/). Importing an svg was much easier on the computer. I have since upgraded the computer so there isn't any use for me anymore.

## Usage

1. Go to (TBD).
1. Drag-and-drop a local video file into the blank space in the middle.
1. Jump to the frame of the video you want to trace using the playback control component at the bottom.
1. Draw things over the frame. The interface closely resembles existing painting tools and follow most of the conventions, so it should not be difficult to figure it out.
1. Hit the Save button at the top right corner to export visible layers as a single svg. Conversely, you can hide a layer to prevent it from going into the svg, if that's what you want.

## Development

```bash
docker-compose up --build

# When there are changes to the dependencies, flush the Docker volume cache:
# docker-compose down -v
```

## Packaging

TBD
