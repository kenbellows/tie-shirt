# App Architecture

## Controllers

- display controller - manage the canvas and the manipulation of swatches to fill the various
  articles of clothing
- swatches controller


## Directives

- swatches bar - horizontal bar across the bottom holding saved swatches
  - search bar - search by tag, name, description, all; implement using filter(s?)
  - holds several swatch directives using an ngRepeat for swatch in scope.swatches
- swatch - visual block showing the pattern of a single swatch


## Models

- swatch - represents a single pattern or solid color
  - pattern - nxn (n yet to be determined) bitmap stored as a data string
  - name - user-provided name for the pattern
  - description - user-provided description string for the pattern; should maybe be with notes
  - notes - comments about the swatch, e.g. swatches you like with it, ideas for using it, where
    you found it, etc.
  - tags - allow tagging with arbitrary tags to organize swatches and pairings
- pairing - 2+ swatches put together in the presenter and saved by the user
  - tie - the swatch used in the tie
  - shirt - the swatch used in the shirt
  - ... - may add additional clothing articles later that can be paired
  - tags - allow tagging with arbitrary tags to organize swatches and pairings

