# Tie Shirt - put together a tie and a shirt

This is a really simple app. The idea is simply to give a way to quickly and easily
combine shirt and tie combinations visually so that you can see what the combination
will look like.


## Layout

Something like this:

<pre>
+----------------------------------------------------------------------------------+
|                                                                                  |
|                                                                                  |
|                   (1)                                                            |
|                                    +---------+                                   |
|                             .-----/+  /   \  +\-----.                            |
|                             |      + / --- \ +      |                            |
|                   (2)       |       / ++-++ \       |                            |
|                             |   ++    |   |    ++   |                            |
|                             |    |    |   |    |    |                            |
|                             |    |   |     |   |    |                            |
|                             |    |   |     |   |    |                            |
|                             |    |   |     |   |    |                            |
|                             |    |   +     +   |    |                            |
|                             |    |    X   X    |    |                            |
|                             +----+      X      +----+                            |
|                             |    |-------------|    |                            |
|                             +----+             +----+                            |
|                                                                                  |
|    (3) Swatches:                                                                 |
|       +----------------------------------------------------------------+         |
|       | +----+ +----+ +----+ +----+ +----+ +----+ +----+ +----+ +----+ |         |
|       | |    | |    | |    | |    | |    | |    | |    | |    | |    | |         |
|       | |    | |    | |    | |    | |    | |    | |    | |    | |    | |         |
|       | +----+ +----+ +----+ +----+ +----+ +----+ +----+ +----+ +----+ |         |
|       +----------------------------------------------------------------+         |
+-------+------------------------------------------------------------------+-------+
</pre>

(1) Shirt:    this will be filled with a pattern or solid color, independently from
              the tie
(2) Tie:      this will be filled with a pattern or solid color as well, independently
              from the shirt
(3) Swatches: clipped patterns taken from photographs or made in the pattern designer


## Planned Features

- **pattern extractor**: import a picture with a pattern you like in it, then draw a
  box around the pattern to add it to your swatches
- **drag-and-drop**: drag pictures into the app to open them in the pattern extractor
- **color picker**: use a color picker widget to select solid color patterns


## Pie-in-the-Sky Features

- **pattern auto-extractor**: when selecting a pattern from a picture, simply click in
  the middle of the patterned area; the app will attempt to automatically identify the
  pattern and create a normalized swatch using image processing
- **other articles**: add support for dresses, blouses, pants, suits, vests, etc.;
  eventually you could build an entire very complicated wardrobe

