factorio-calc
=============

For all your obsessive optimizing needs

# Contribute a data source #

Additional data sources are welcome - the calculator should work just fine with mods!

- Fork this repository
- Add a file containing the recipe dumps to the `data` folder:
    + Choose a short descriptive name without any periods (dashes are ok)
    + Concentrate all recipe files into one
    + e.g. `cat factorio/data/base/prototypes/recipe/*.lua > factorio-calc/data/core-2-0-0.lua`
- Open up `index.html` and add the data source name (in the above example `core-2-0-0`) to the `DATALIBS` array near the top.
- Send me a pull request form your branch, and that's it!


## See Also ##

[Forum Thread](http://www.factorioforums.com/forum/viewtopic.php?f=5&t=4553)