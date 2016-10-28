data:extend(
{
  {
    type = "recipe",
    name = "piercing-bullet-magazine",
    enabled = false,
    energy_required = 3,
    ingredients =
    {
      {"copper-plate", 5},
      {"steel-plate", 1}
    },
    result = "piercing-bullet-magazine"
  },
  {
    type = "recipe",
    name = "rocket",
    enabled = false,
    energy_required = 8,
    ingredients =
    {
      {"electronic-circuit", 1},
      {"explosives", 2},
      {"iron-plate", 2}
    },
    result = "rocket"
  },
  {
    type = "recipe",
    name = "explosive-rocket",
    enabled = false,
    energy_required = 8,
    ingredients =
    {
      {"rocket", 1},
      {"explosives", 5}
    },
    result = "explosive-rocket"
  },
  {
    type = "recipe",
    name = "shotgun-shell",
    enabled = false,
    energy_required = 3,
    ingredients =
    {
      {"copper-plate", 2},
      {"iron-plate", 2}
    },
    result = "shotgun-shell"
  },
  {
    type = "recipe",
    name = "piercing-shotgun-shell",
    enabled = false,
    energy_required = 8,
    ingredients =
    {
      {"copper-plate", 2},
      {"steel-plate", 2}
    },
    result = "piercing-shotgun-shell"
  },
  {
    type = "recipe",
    name = "railgun-dart",
    enabled = false,
    energy_required = 8,
    ingredients =
    {
      {"steel-plate", 5},
      {"electronic-circuit", 5}
    },
    result = "railgun-dart"
  },
  {
    type = "recipe",
    name = "cannon-shell",
    enabled = false,
    energy_required = 8,
    ingredients =
    {
      {"steel-plate", 4},
      {"plastic-bar", 2},
      {"explosives", 1},
    },
    result = "cannon-shell"
  },
  {
    type = "recipe",
    name = "explosive-cannon-shell",
    enabled = false,
    energy_required = 8,
    ingredients =
    {
      {"steel-plate", 4},
      {"plastic-bar", 2},
      {"explosives", 4},
    },
    result = "explosive-cannon-shell"
  }
}
)

data:extend(
{
  {
    type = "recipe",
    name = "poison-capsule",
    enabled = false,
    energy_required = 8,
    ingredients =
    {
      {"steel-plate", 3},
      {"electronic-circuit", 3},
      {"coal", 10},
    },
    result = "poison-capsule"
  },
  {
    type = "recipe",
    name = "slowdown-capsule",
    enabled = false,
    energy_required = 8,
    ingredients =
    {
      {"steel-plate", 2},
      {"electronic-circuit", 2},
      {"coal", 5},
    },
    result = "slowdown-capsule"
  },
  {
    type = "recipe",
    name = "basic-grenade",
    enabled = false,
    energy_required = 8,
    ingredients =
    {
      {"iron-plate", 5},
      {"coal", 10},
    },
    result = "basic-grenade"
  },
  {
    type = "recipe",
    name = "defender-capsule",
    enabled = false,
    energy_required = 8,
    ingredients =
    {
      {"piercing-bullet-magazine", 1},
      {"electronic-circuit", 2},
      {"iron-gear-wheel", 3},
    },
    result = "defender-capsule"
  },
  {
    type = "recipe",
    name = "distractor-capsule",
    enabled = false,
    energy_required = 15,
    ingredients =
    {
      {"defender-capsule", 4},
      {"advanced-circuit", 3},
    },
    result = "distractor-capsule"
  },
  {
    type = "recipe",
    name = "destroyer-capsule",
    enabled = false,
    energy_required = 15,
    ingredients =
    {
      {"distractor-capsule", 4},
      {"speed-module", 1}
    },
    result = "destroyer-capsule"
  },
  {
    type = "recipe",
    name = "basic-electric-discharge-defense-remote",
    enabled = false,
    ingredients = {{"electronic-circuit", 1}},
    result = "basic-electric-discharge-defense-remote"
  }
})
data:extend(
{
  {
    type = "recipe",
    name = "copper-plate",
    category = "smelting",
    energy_required = 3.5,
    ingredients = {{ "copper-ore", 1}},
    result = "copper-plate"
  },
  {
    type = "recipe",
    name = "iron-plate",
    category = "smelting",
    energy_required = 3.5,
    ingredients = {{"iron-ore", 1}},
    result = "iron-plate"
  },
  {
    type = "recipe",
    name = "stone-brick",
    category = "smelting",
    energy_required = 3.5,
    enabled = true,
    ingredients = {{"stone", 2}},
    result = "stone-brick"
  },
}
)
data:extend(
{
  {
    type = "recipe",
    name = "wood",
    ingredients = {{"raw-wood", 1}},
    result = "wood",
    result_count = 2
  },
  {
    type = "recipe",
    name = "wooden-chest",
    ingredients = {{"wood", 4}},
    result = "wooden-chest"
  },
  {
    type = "recipe",
    name = "iron-stick",
    ingredients = {{"iron-plate", 1}},
    result = "iron-stick",
    result_count = 2
  },
  {
    type = "recipe",
    name = "iron-axe",
    ingredients = {{"iron-stick", 2}, {"iron-plate", 3}},
    result = "iron-axe"
  },
  {
    type = "recipe",
    name = "stone-furnace",
    ingredients = {{"stone", 5}},
    result = "stone-furnace"
  },
  {
    type = "recipe",
    name = "boiler",
    ingredients = {{"stone-furnace", 1}, {"pipe", 1}},
    result = "boiler"
  },
  {
    type = "recipe",
    name = "steam-engine",
    ingredients =
    {
      {"iron-gear-wheel", 5},
      {"pipe", 5},
      {"iron-plate", 5}
    },
    result = "steam-engine"
  },
  {
    type = "recipe",
    name = "iron-gear-wheel",
    ingredients = {{"iron-plate", 2}},
    result = "iron-gear-wheel"
  },
  {
    type = "recipe",
    name = "electronic-circuit",
    ingredients =
    {
      {"iron-plate", 1},
      {"copper-cable", 3}
    },
    result = "electronic-circuit"
  },
  {
    type = "recipe",
    name = "basic-transport-belt",
    ingredients =
    {
      {"iron-plate", 1},
      {"iron-gear-wheel", 1}
    },
    result = "basic-transport-belt",
    result_count = 2
  },
  {
    type = "recipe",
    name = "basic-mining-drill",
    energy_required = 2,
    ingredients =
    {
      {"electronic-circuit", 3},
      {"iron-gear-wheel", 5},
      {"iron-plate", 10}
    },
    result = "basic-mining-drill"
  },
  {
    type = "recipe",
    name = "burner-mining-drill",
    energy_required = 2,
    ingredients =
    {
      {"iron-gear-wheel", 3},
      {"stone-furnace", 1},
      {"iron-plate", 3}
    },
    result = "burner-mining-drill"
  },
  {
    type = "recipe",
    name = "basic-inserter",
    ingredients =
    {
      {"electronic-circuit", 1},
      {"iron-gear-wheel", 1},
      {"iron-plate", 1}
    },
    result = "basic-inserter"
  },
  {
    type = "recipe",
    name = "burner-inserter",
    ingredients =
    {
      {"iron-plate", 1},
      {"iron-gear-wheel", 1}
    },
    result = "burner-inserter"
  },
  {
    type = "recipe",
    name = "pipe",
    ingredients = {{"iron-plate", 1}},
    result = "pipe"
  },
  {
    type = "recipe",
    name = "offshore-pump",
    ingredients =
    {
      {"electronic-circuit", 2},
      {"pipe", 1},
      {"iron-gear-wheel", 1}
    },
    result = "offshore-pump"
  },
  {
    type = "recipe",
    name = "copper-cable",
    ingredients = {{"copper-plate", 1}},
    result = "copper-cable",
    result_count = 2
  },
  {
    type = "recipe",
    name = "small-electric-pole",
    ingredients =
    {
      {"wood", 2},
      {"copper-cable", 2}
    },
    result = "small-electric-pole",
    result_count = 2
  },
  {
    type = "recipe",
    name = "pistol",
    energy_required = 1,
    ingredients =
    {
      {"copper-plate", 5},
      {"iron-plate", 5}
    },
    result = "pistol"
  },
  {
    type = "recipe",
    name = "submachine-gun",
    enabled = false,
    energy_required = 3,
    ingredients =
    {
      {"iron-gear-wheel", 10},
      {"copper-plate", 5},
      {"iron-plate", 10}
    },
    result = "submachine-gun"
  },
  {
    type = "recipe",
    name = "basic-bullet-magazine",
    energy_required = 2,
    ingredients = {{"iron-plate", 2}},
    result = "basic-bullet-magazine",
    result_count = 1
  },
  {
    type = "recipe",
    name = "basic-armor",
    enabled = false,
    energy_required = 3,
    ingredients = {{"iron-plate", 40}},
    result = "basic-armor"
  },
  {
    type = "recipe",
    name = "radar",
    ingredients =
    {
      {"electronic-circuit", 5},
      {"iron-gear-wheel", 5},
      {"iron-plate", 10}
    },
    result = "radar"
  },
  {
    type = "recipe",
    name = "small-lamp",
    enabled = false,
    ingredients =
    {
      {"electronic-circuit", 1},
      {"iron-stick", 3},
      {"iron-plate", 1}
    },
    result = "small-lamp"
  },
  {
    type = "recipe",
    name = "pipe-to-ground",
    ingredients =
    {
      {"pipe", 10},
      {"iron-plate", 5}
    },
    result_count = 2,
    result = "pipe-to-ground"
  },
  {
    type = "recipe",
    name = "assembling-machine-1",
    enabled = false,
    ingredients =
    {
      {"electronic-circuit", 3},
      {"iron-gear-wheel", 5},
      {"iron-plate", 9}
    },
    result = "assembling-machine-1"
  },
  {
    type = "recipe",
    name = "repair-pack",
    ingredients =
    {
      {"electronic-circuit", 1},
      {"iron-gear-wheel", 1}
    },
    result = "repair-pack"
  }
}
)
data:extend(
{
  {
    type = "recipe",
    name = "gun-turret",
    enabled = false,
    energy_required = 10,
    ingredients =
    {
      {"iron-gear-wheel", 10},
      {"copper-plate", 10},
      {"iron-plate", 20}
    },
    result = "gun-turret"
  }
}
)
data:extend(
{
  {
    type = "recipe",
    name = "night-vision-equipment",
    enabled = false,
    energy_required = 10,
    ingredients =
    {
      {"advanced-circuit", 5},
      {"steel-plate", 10}
    },
    result = "night-vision-equipment"
  },
  {
    type = "recipe",
    name = "energy-shield-equipment",
    enabled = false,
    energy_required = 10,
    ingredients =
    {
      {"advanced-circuit", 5},
      {"steel-plate", 10}
    },
    result = "energy-shield-equipment"
  },
  {
    type = "recipe",
    name = "energy-shield-mk2-equipment",
    enabled = false,
    energy_required = 10,
    ingredients =
    {
      {"energy-shield-equipment", 10},
      {"processing-unit", 10}
    },
    result = "energy-shield-mk2-equipment"
  },
  {
    type = "recipe",
    name = "battery-equipment",
    enabled = false,
    energy_required = 10,
    ingredients =
    {
      {"battery", 5},
      {"steel-plate", 10}
    },
    result = "battery-equipment"
  },
  {
    type = "recipe",
    name = "battery-mk2-equipment",
    enabled = false,
    energy_required = 10,
    ingredients =
    {
      {"battery-equipment", 10},
      {"processing-unit", 20}
    },
    result = "battery-mk2-equipment"
  },
  {
    type = "recipe",
    name = "solar-panel-equipment",
    enabled = false,
    energy_required = 10,
    ingredients =
    {
      {"solar-panel", 5},
      {"processing-unit", 1},
      {"steel-plate", 5}
    },
    result = "solar-panel-equipment"
  },
  {
    type = "recipe",
    name = "fusion-reactor-equipment",
    enabled = false,
    energy_required = 10,
    ingredients =
    {
      {"processing-unit", 100},
      {"alien-artifact", 30}
    },
    result = "fusion-reactor-equipment"
  },
  {
    type = "recipe",
    name = "basic-laser-defense-equipment",
    enabled = false,
    energy_required = 10,
    ingredients =
    {
      {"processing-unit", 1},
      {"steel-plate", 5},
      {"laser-turret", 5}
    },
    result = "basic-laser-defense-equipment"
  },
  {
    type = "recipe",
    name = "basic-electric-discharge-defense-equipment",
    enabled = false,
    energy_required = 10,
    ingredients =
    {
      {"processing-unit", 5},
      {"steel-plate", 20},
      {"laser-turret", 10}
    },
    result = "basic-electric-discharge-defense-equipment"
  },
  {
    type = "recipe",
    name = "basic-exoskeleton-equipment",
    enabled = false,
    energy_required = 10,
    ingredients =
    {
      {"processing-unit", 10},
      {"electric-engine-unit", 30},
      {"steel-plate", 20},
    },
    result = "basic-exoskeleton-equipment"
  },
  {
    type = "recipe",
    name = "personal-roboport-equipment",
    enabled = false,
    energy_required = 10,
    ingredients =
    {
      {"processing-unit", 10},
      {"iron-gear-wheel", 40},
      {"steel-plate", 20},
      {"battery", 45},
    },
    result = "personal-roboport-equipment"
  }
}
)


data:extend(
{
  {
    type = "recipe",
    name = "basic-oil-processing",
    category = "oil-processing",
    enabled = false,
    energy_required = 5,
    ingredients =
    {
      {type="fluid", name="crude-oil", amount=10}
    },
    results=
    {
      {type="fluid", name="heavy-oil", amount=3},
      {type="fluid", name="light-oil", amount=3},
      {type="fluid", name="petroleum-gas", amount=4}
    },
    icon = "__base__/graphics/icons/fluid/basic-oil-processing.png",
    subgroup = "fluid-recipes",
    order = "a[oil-processing]-a[basic-oil-processing]"
  },

  {
    type = "recipe",
    name = "advanced-oil-processing",
    category = "oil-processing",
    enabled = false,
    energy_required = 5,
    ingredients =
    {
      {type="fluid", name="water", amount=5},
      {type="fluid", name="crude-oil", amount=10}
    },
    results=
    {
      {type="fluid", name="heavy-oil", amount=1},
      {type="fluid", name="light-oil", amount=4.5},
      {type="fluid", name="petroleum-gas", amount=5.5}
    },
    icon = "__base__/graphics/icons/fluid/advanced-oil-processing.png",
    subgroup = "fluid-recipes",
    order = "a[oil-processing]-b[advanced-oil-processing]"
  },

  {
    type = "recipe",
    name = "heavy-oil-cracking",
    category = "chemistry",
    enabled = false,
    energy_required = 5,
    ingredients =
    {
      {type="fluid", name="water", amount=3},
      {type="fluid", name="heavy-oil", amount=4}
    },
    results=
    {
      {type="fluid", name="light-oil", amount=3}
    },
    main_product= "",
    icon = "__base__/graphics/icons/fluid/heavy-oil-cracking.png",
    subgroup = "fluid-recipes",
    order = "b[fluid-chemistry]-a[heavy-oil-cracking]"
  },

  {
    type = "recipe",
    name = "light-oil-cracking",
    category = "chemistry",
    enabled = false,
    energy_required = 5,
    ingredients =
    {
      {type="fluid", name="water", amount=3},
      {type="fluid", name="light-oil", amount=3}
    },
    results=
    {
      {type="fluid", name="petroleum-gas", amount=2}
    },
    main_product= "",
    icon = "__base__/graphics/icons/fluid/light-oil-cracking.png",
    subgroup = "fluid-recipes",
    order = "b[fluid-chemistry]-b[light-oil-cracking]"
  },

  {
    type = "recipe",
    name = "sulfuric-acid",
    category = "chemistry",
    energy_required = 1,
    enabled = false,
    ingredients =
    {
      {type="item", name="sulfur", amount=5},
      {type="item", name="iron-plate", amount=1},
      {type="fluid", name="water", amount=10}
    },
    results=
    {
      {type="fluid", name="sulfuric-acid", amount=5}
    },
    subgroup = "fluid-recipes"
  },

  {
    type = "recipe",
    name = "plastic-bar",
    category = "chemistry",
    energy_required = 1,
    enabled = false,
    ingredients =
    {
      {type="fluid", name="petroleum-gas", amount=3},
      {type="item", name="coal", amount=1}
    },
    results=
    {
      {type="item", name="plastic-bar", amount=2}
    }
  },

  {
    type = "recipe",
    name = "solid-fuel-from-light-oil",
    category = "chemistry",
    energy_required = 3,
    ingredients =
    {
      {type="fluid", name="light-oil", amount=1}
    },
    results=
    {
      {type="item", name="solid-fuel", amount=1}
    },
    icon = "__base__/graphics/icons/solid-fuel-from-light-oil.png",
    subgroup = "fluid-recipes",
    enabled = false,
    order = "b[fluid-chemistry]-c[solid-fuel-from-light-oil]"
  },

  {
    type = "recipe",
    name = "solid-fuel-from-petroleum-gas",
    category = "chemistry",
    energy_required = 3,
    ingredients =
    {
      {type="fluid", name="petroleum-gas", amount=2}
    },
    results=
    {
      {type="item", name="solid-fuel", amount=1}
    },
    icon = "__base__/graphics/icons/solid-fuel-from-petroleum-gas.png",
    subgroup = "fluid-recipes",
    enabled = false,
    order = "b[fluid-chemistry]-d[solid-fuel-from-petroleum-gas]"
  },

  {
    type = "recipe",
    name = "solid-fuel-from-heavy-oil",
    category = "chemistry",
    energy_required = 3,
    ingredients =
    {
      {type="fluid", name="heavy-oil", amount=2}
    },
    results=
    {
      {type="item", name="solid-fuel", amount=1}
    },
    icon = "__base__/graphics/icons/solid-fuel-from-heavy-oil.png",
    subgroup = "fluid-recipes",
    enabled = false,
    order = "b[fluid-chemistry]-e[solid-fuel-from-heavy-oil]"
  },


  {
    type = "recipe",
    name = "sulfur",
    category = "chemistry",
    energy_required = 1,
    enabled = false,
    ingredients =
    {
      {type="fluid", name="water", amount=3},
      {type="fluid", name="petroleum-gas", amount=3}
    },
    results=
    {
      {type="item", name="sulfur", amount=2}
    }
  },

  {
    type = "recipe",
    name = "lubricant",
    category = "chemistry",
    enabled = false,
    energy_required = 1,
    ingredients =
    {
      {type="fluid", name="heavy-oil", amount=1}
    },
    results=
    {
      {type="fluid", name="lubricant", amount=1}
    },
    subgroup = "fluid-recipes"
  },

  {
    type = "recipe",
    name = "empty-barrel",
    category = "crafting",
    energy_required = 1,
    subgroup = "barrel",
    enabled = false,
    ingredients =
    {
      {type="item", name="steel-plate", amount=1},
    },
    results=
    {
      {type="item", name="empty-barrel", amount=1}
    }
  },

  {
    type = "recipe",
    name = "fill-crude-oil-barrel",
    category = "crafting-with-fluid",
    energy_required = 1,
    subgroup = "barrel",
    order = "b[fill-crude-oil-barrel]",
    enabled = false,
    icon = "__base__/graphics/icons/fluid/fill-crude-oil-barrel.png",
    ingredients =
    {
      {type="fluid", name="crude-oil", amount=25},
      {type="item", name="empty-barrel", amount=1},
    },
    results=
    {
      {type="item", name="crude-oil-barrel", amount=1}
    }
  },

  {
    type = "recipe",
    name = "empty-crude-oil-barrel",
    category = "crafting-with-fluid",
    energy_required = 1,
    subgroup = "barrel",
    order = "c[empty-crude-oil-barrel]",
    enabled = false,
    icon = "__base__/graphics/icons/fluid/empty-crude-oil-barrel.png",
    ingredients =
    {
      {type="item", name="crude-oil-barrel", amount=1}
    },
    results=
    {
      {type="fluid", name="crude-oil", amount=25},
      {type="item", name="empty-barrel", amount=1}
    }
  },

  {
    type = "recipe",
    name = "flame-thrower-ammo",
    category = "chemistry",
    enabled = false,
    energy_required = 3,
    ingredients =
    {
      {type="item", name="iron-plate", amount=5},
      {type="fluid", name="light-oil", amount=2.5},
      {type="fluid", name="heavy-oil", amount=2.5}
    },
    result = "flame-thrower-ammo"
  }
})
data:extend(
{
  {
    type = "recipe",
    name = "steel-plate",
    category = "smelting",
    enabled = false,
    energy_required = 17.5,
    ingredients = {{"iron-plate", 5}},
    result = "steel-plate"
  }
}
)
data:extend(
{
  {
    type = "recipe",
    name = "long-handed-inserter",
    enabled = false,
    ingredients =
    {
      {"iron-gear-wheel", 1},
      {"iron-plate", 1},
      {"basic-inserter", 1}
    },
    result = "long-handed-inserter"
  },
  {
    type = "recipe",
    name = "fast-inserter",
    enabled = false,
    ingredients =
    {
      {"electronic-circuit", 2},
      {"iron-plate", 2},
      {"basic-inserter", 1}
    },
    result = "fast-inserter"
  },
  {
    type = "recipe",
    name = "smart-inserter",
    enabled = false,
    ingredients =
    {
      {"fast-inserter", 1},
      {"electronic-circuit", 4}
    },
    result = "smart-inserter"
  }
}
)
data:extend(
{
  {
    type = "recipe",
    name = "speed-module",
    enabled = false,
    ingredients =
    {
      {"advanced-circuit", 5},
      {"electronic-circuit", 5}
    },
    energy_required = 15,
    result = "speed-module"
  },
  {
    type = "recipe",
    name = "speed-module-2",
    enabled = false,
    ingredients =
    {
      {"speed-module", 4},
      {"processing-unit", 5},
      {"advanced-circuit", 5}
    },
    energy_required = 30,
    result = "speed-module-2"
  },
  {
    type = "recipe",
    name = "speed-module-3",
    enabled = false,
    ingredients =
    {
      {"speed-module-2", 4},
      {"advanced-circuit", 5},
      {"processing-unit", 5},
      {"alien-artifact", 1}
    },
    energy_required = 60,
    result = "speed-module-3"
  },
  {
    type = "recipe",
    name = "productivity-module",
    enabled = false,
    ingredients =
    {
      {"advanced-circuit", 5},
      {"electronic-circuit", 5}
    },
    energy_required = 15,
    result = "productivity-module"
  },
  {
    type = "recipe",
    name = "productivity-module-2",
    enabled = false,
    ingredients =
    {
      {"productivity-module", 4},
      {"advanced-circuit", 5},
      {"processing-unit", 5}
    },
    energy_required = 30,
    result = "productivity-module-2"
  },
  {
    type = "recipe",
    name = "productivity-module-3",
    enabled = false,
    ingredients =
    {
      {"productivity-module-2", 5},
      {"advanced-circuit", 5},
      {"processing-unit", 5},
      {"alien-artifact", 1}
    },
    energy_required = 60,
    result = "productivity-module-3"
  },
  {
    type = "recipe",
    name = "effectivity-module",
    enabled = false,
    ingredients =
    {
      {"advanced-circuit", 5},
      {"electronic-circuit", 5}
    },
    energy_required = 15,
    result = "effectivity-module"
  },
  {
    type = "recipe",
    name = "effectivity-module-2",
    enabled = false,
    ingredients =
    {
      {"effectivity-module", 4},
      {"advanced-circuit", 5},
      {"processing-unit", 5}
    },
    energy_required = 30,
    result = "effectivity-module-2"
  },
  {
    type = "recipe",
    name = "effectivity-module-3",
    enabled = false,
    ingredients =
    {
      {"effectivity-module-2", 5},
      {"advanced-circuit", 5},
      {"processing-unit", 5},
      {"alien-artifact", 1}
    },
    energy_required = 60,
    result = "effectivity-module-3"
  }
}
)
data:extend(
{
  {
    type = "recipe",
    name = "player-port",
    enabled = false,
    ingredients =
    {
      {"electronic-circuit", 10},
      {"iron-gear-wheel", 5},
      {"iron-plate", 1 }
    },
    result = "player-port"
  },
  {
    type = "recipe",
    name = "fast-transport-belt",
    enabled = false,
    ingredients =
    {
      {"iron-gear-wheel", 5},
      {"basic-transport-belt", 1}
    },
    result = "fast-transport-belt"
  },
  {
    type = "recipe",
    name = "express-transport-belt",
    category = "crafting-with-fluid",
    enabled = false,
    ingredients =
    {
      {"iron-gear-wheel", 5},
      {"fast-transport-belt", 1},
      {type="fluid", name="lubricant", amount=2},
    },
    result = "express-transport-belt"
  },
  {
    type = "recipe",
    name = "solar-panel",
    energy_required = 10,
    enabled = false,
    ingredients =
    {
      {"steel-plate", 5},
      {"electronic-circuit", 15},
      {"copper-plate", 5}
    },
    result = "solar-panel"
  },
  {
    type = "recipe",
    name = "assembling-machine-2",
    enabled = false,
    ingredients =
    {
      {"iron-plate", 9},
      {"electronic-circuit", 3},
      {"iron-gear-wheel", 5},
      {"assembling-machine-1", 1}
    },
    result = "assembling-machine-2"
  },
  {
    type = "recipe",
    name = "assembling-machine-3",
    enabled = false,
    ingredients =
    {
      {"speed-module", 4},
      {"assembling-machine-2", 2}
    },
    result = "assembling-machine-3"
  },
  {
    type = "recipe",
    name = "car",
    enabled = false,
    ingredients =
    {
      {"engine-unit", 8},
      {"iron-plate", 20},
      {"steel-plate", 5}
    },
    result = "car"
  },
  {
    type = "recipe",
    name = "tank",
    enabled = false,
    ingredients =
    {
      {"engine-unit", 16},
      {"steel-plate", 50},
      {"iron-gear-wheel", 15},
      {"advanced-circuit", 5}
    },
    result = "tank"
  },
  {
    type = "recipe",
    name = "straight-rail",
    enabled = false,
    ingredients =
    {
      {"stone", 1},
      {"iron-stick", 1},
      {"steel-plate", 1}
    },
    result = "straight-rail",
    result_count = 2
  },
  {
    type = "recipe",
    name = "curved-rail",
    enabled = false,
    ingredients = {{"stone", 4}, {"iron-stick", 4}, {"steel-plate", 4}},
    result = "curved-rail",
    result_count = 2
  },
  {
    type = "recipe",
    name = "diesel-locomotive",
    enabled = false,
    ingredients =
    {
      {"engine-unit", 20},
      {"electronic-circuit", 10},
      {"steel-plate", 30}
    },
    result = "diesel-locomotive"
  },
  {
    type = "recipe",
    name = "cargo-wagon",
    enabled = false,
    ingredients =
    {
      {"iron-gear-wheel", 10},
      {"iron-plate", 20},
      {"steel-plate", 20}
    },
    result = "cargo-wagon"
  },
  {
    type = "recipe",
    name = "train-stop",
    enabled = false,
    ingredients =
    {
      {"electronic-circuit", 5},
      {"iron-plate", 10},
      {"steel-plate", 3}
    },
    result = "train-stop"
  },
  {
    type = "recipe",
    name = "rail-signal",
    enabled = false,
    ingredients =
    {
      {"electronic-circuit", 1},
      {"iron-plate", 5}
    },
    result = "rail-signal"
  },
  {
    type = "recipe",
    name = "rail-chain-signal",
    enabled = false,
    ingredients =
    {
      {"electronic-circuit", 1},
      {"iron-plate", 5}
    },
    result = "rail-chain-signal"
  },
  {
    type = "recipe",
    name = "heavy-armor",
    enabled = false,
    energy_required = 8,
    ingredients = {{ "copper-plate", 100}, {"steel-plate", 50}},
    result = "heavy-armor"
  },
  {
    type = "recipe",
    name = "basic-modular-armor",
    enabled = false,
    energy_required = 15,
    ingredients = {{ "advanced-circuit", 30}, {"processing-unit", 5}, {"steel-plate", 50}},
    result = "basic-modular-armor"
  },
  {
    type = "recipe",
    name = "power-armor",
    enabled = false,
    energy_required = 20,
    ingredients = {{ "processing-unit", 40}, {"electric-engine-unit", 20}, {"steel-plate", 40}, {"alien-artifact", 10}},
    result = "power-armor"
  },
  {
    type = "recipe",
    name = "power-armor-mk2",
    enabled = false,
    energy_required = 25,
    ingredients = {{ "effectivity-module-3", 5}, {"speed-module-3", 5}, {"processing-unit", 40}, {"steel-plate", 40}, {"alien-artifact", 50}},
    result = "power-armor-mk2"
  },
  {
    type = "recipe",
    name = "iron-chest",
    enabled = true,
    ingredients = {{"iron-plate", 8}},
    result = "iron-chest"
  },
  {
    type = "recipe",
    name = "steel-chest",
    enabled = false,
    ingredients = {{"steel-plate", 8}},
    result = "steel-chest"
  },
  {
    type = "recipe",
    name = "smart-chest",
    enabled = false,
    ingredients =
    {
      {"steel-chest", 1},
      {"electronic-circuit", 3}
    },
    result = "smart-chest"
  },
  {
    type = "recipe",
    name = "stone-wall",
    enabled = false,
    ingredients = {{"stone-brick", 5}},
    result = "stone-wall"
  },
  {
    type = "recipe",
    name = "gate",
    enabled = false,
    ingredients = {{"stone-wall", 1}, {"steel-plate", 2}, {"electronic-circuit", 2}},
    result = "gate"
  },
  {
    type = "recipe",
    name = "flame-thrower",
    enabled = false,
    energy_required = 10,
    ingredients =
    {
      {"steel-plate", 5},
      {"iron-gear-wheel", 10}
    },
    result = "flame-thrower"
  },
  {
    type = "recipe",
    name = "land-mine",
    enabled = false,
    energy_required = 5,
    ingredients =
    {
      {"steel-plate", 1},
      {"explosives", 2}
    },
    result = "land-mine",
    result_count = 4
  },
  {
    type = "recipe",
    name = "rocket-launcher",
    enabled = false,
    energy_required = 5,
    ingredients =
    {
      {"iron-plate", 5},
      {"iron-gear-wheel", 5},
      {"electronic-circuit", 5}
    },
    result = "rocket-launcher"
  },
  {
    type = "recipe",
    name = "shotgun",
    enabled = false,
    energy_required = 4,
    ingredients =
    {
      {"iron-plate", 15},
      {"iron-gear-wheel", 5},
      {"copper-plate", 10},
      {"wood", 5}
    },
    result = "shotgun"
  },
  {
    type = "recipe",
    name = "combat-shotgun",
    enabled = false,
    energy_required = 8,
    ingredients =
    {
      {"steel-plate", 15},
      {"iron-gear-wheel", 5},
      {"copper-plate", 10},
      {"wood", 10}
    },
    result = "combat-shotgun"
  },
  {
    type = "recipe",
    name = "railgun",
    enabled = false,
    energy_required = 8,
    ingredients =
    {
      {"steel-plate", 15},
      {"copper-plate", 15},
      {"electronic-circuit", 10},
      {"advanced-circuit", 5},
    },
    result = "railgun"
  },
  {
    type = "recipe",
    name = "science-pack-1",
    energy_required = 5,
    ingredients =
    {
      {"copper-plate", 1},
      {"iron-gear-wheel", 1}
    },
    result = "science-pack-1"
  },
  {
    type = "recipe",
    name = "science-pack-2",
    energy_required = 6,
    ingredients =
    {
      {"basic-inserter", 1},
      {"basic-transport-belt", 1}
    },
    result = "science-pack-2"
  },
  {
    type = "recipe",
    name = "science-pack-3",
    enabled = false,
    energy_required = 12,
    ingredients =
    {
      {"battery", 1},
      {"advanced-circuit", 1},
      {"smart-inserter", 1},
      {"steel-plate", 1},
    },
    result = "science-pack-3"
  },
  {
    type = "recipe",
    name = "alien-science-pack",
    enabled = false,
    energy_required = 12,
    ingredients = {{"alien-artifact", 1}
    },
    result = "alien-science-pack",
    result_count = 10
  },
  {
    type = "recipe",
    name = "lab",
    energy_required = 5,
    ingredients =
    {
      {"electronic-circuit", 10},
      {"iron-gear-wheel", 10},
      {"basic-transport-belt", 4}
    },
    result = "lab"
  },
  {
    type = "recipe",
    name = "red-wire",
    enabled = false,
    ingredients =
    {
      {"electronic-circuit", 1},
      {"copper-cable", 1}
    },
    result = "red-wire"
  },
  {
    type = "recipe",
    name = "green-wire",
    enabled = false,
    ingredients =
    {
      {"electronic-circuit", 1},
      {"copper-cable", 1}
    },
    result = "green-wire"
  },
  {
    type = "recipe",
    name = "basic-transport-belt-to-ground",
    enabled = false,
    energy_required = 1,
    ingredients =
    {
      {"iron-plate", 10},
      {"basic-transport-belt", 5}
    },
    result_count = 2,
    result = "basic-transport-belt-to-ground"
  },
  {
    type = "recipe",
    name = "fast-transport-belt-to-ground",
    enabled = false,
    ingredients =
    {
      {"iron-gear-wheel", 20},
      {"basic-transport-belt-to-ground", 2}
    },
    result_count = 2,
    result = "fast-transport-belt-to-ground"
  },
  {
    type = "recipe",
    name = "express-transport-belt-to-ground",
    enabled = false,
    ingredients =
    {
      {"iron-gear-wheel", 40},
      {"fast-transport-belt-to-ground", 2}
    },
    result_count = 2,
    result = "express-transport-belt-to-ground"
  },
  {
    type = "recipe",
    name = "basic-splitter",
    enabled = false,
    energy_required = 1,
    ingredients =
    {
      {"electronic-circuit", 5},
      {"iron-plate", 5},
      {"basic-transport-belt", 4}
    },
    result = "basic-splitter"
  },
  {
    type = "recipe",
    name = "fast-splitter",
    enabled = false,
    energy_required = 2,
    ingredients =
    {
      {"basic-splitter", 1},
      {"iron-gear-wheel", 10},
      {"electronic-circuit", 10}
    },
    result = "fast-splitter"
  },
  {
    type = "recipe",
    name = "express-splitter",
    category = "crafting-with-fluid",
    enabled = false,
    energy_required = 2,
    ingredients =
    {
      {"fast-splitter", 1},
      {"iron-gear-wheel", 10},
      {"advanced-circuit", 10},
      {type="fluid", name="lubricant", amount=8}
    },
    result = "express-splitter"
  },
  {
    type = "recipe",
    name = "advanced-circuit",
    enabled = false,
    energy_required = 8,
    ingredients =
    {
      {"electronic-circuit", 2},
      {"plastic-bar", 2},
      {"copper-cable", 4}
    },
    result = "advanced-circuit"
  },
  {
    type = "recipe",
    name = "processing-unit",
    category = "crafting-with-fluid",
    enabled = false,
    energy_required = 15,
    ingredients =
    {
      {"electronic-circuit", 20},
      {"advanced-circuit", 2},
      {type="fluid", name = "sulfuric-acid", amount = 0.5}
    },
    result = "processing-unit"
  },
  {
    type = "recipe",
    name = "logistic-robot",
    enabled = false,
    ingredients =
    {
      {"flying-robot-frame", 1},
      {"advanced-circuit", 2}
    },
    result = "logistic-robot"
  },
  {
    type = "recipe",
    name = "construction-robot",
    enabled = false,
    ingredients =
    {
      {"flying-robot-frame", 1},
      {"electronic-circuit", 2}
    },
    result = "construction-robot"
  },
  {
    type = "recipe",
    name = "logistic-chest-passive-provider",
    enabled = false,
    ingredients =
    {
      {"smart-chest", 1},
      {"advanced-circuit", 1}
    },
    result = "logistic-chest-passive-provider"
  },
  {
    type = "recipe",
    name = "logistic-chest-active-provider",
    enabled = false,
    ingredients =
    {
      {"smart-chest", 1},
      {"advanced-circuit", 1}
    },
    result = "logistic-chest-active-provider"
  },
  {
    type = "recipe",
    name = "logistic-chest-storage",
    enabled = false,
    ingredients =
    {
      {"smart-chest", 1},
      {"advanced-circuit", 1}
    },
    result = "logistic-chest-storage"
  },
  {
    type = "recipe",
    name = "logistic-chest-requester",
    enabled = false,
    ingredients =
    {
      {"smart-chest", 1},
      {"advanced-circuit", 1}
    },
    result = "logistic-chest-requester"
  },
  {
    type = "recipe",
    name = "rocket-silo",
    enabled = false,
    ingredients =
    {
      {"steel-plate", 1000},
      {"concrete", 1000},
      {"pipe", 100},
      {"processing-unit", 200},
      {"electric-engine-unit", 200}
    },
    energy_required = 30,
    result = "rocket-silo"
  },
  {
    type = "recipe",
    name = "roboport",
    enabled = false,
    ingredients =
    {
      {"steel-plate", 45},
      {"iron-gear-wheel", 45},
      {"advanced-circuit", 45}
    },
    result = "roboport",
    energy_required = 15
  },
  {
    type = "recipe",
    name = "steel-axe",
    enabled = false,
    ingredients =
    {
      {"steel-plate", 5},
      {"iron-stick", 2}
    },
    result = "steel-axe"
  },
  {
    type = "recipe",
    name = "big-electric-pole",
    enabled = false,
    ingredients =
    {
      {"steel-plate", 5},
      {"copper-plate", 5}
    },
    result = "big-electric-pole"
  },
  {
    type = "recipe",
    name = "substation",
    enabled = false,
    ingredients =
    {
      {"steel-plate", 10},
      {"advanced-circuit", 5},
      {"copper-plate", 5}
    },
    result = "substation"
  },
  {
    type = "recipe",
    name = "medium-electric-pole",
    enabled = false,
    ingredients =
    {
      {"steel-plate", 2},
      {"copper-plate", 2}
    },
    result = "medium-electric-pole"
  },
  {
    type = "recipe",
    name = "basic-accumulator",
    energy_required = 10,
    enabled = false,
    ingredients =
    {
      {"iron-plate", 2},
      {"battery", 5}
    },
    result = "basic-accumulator"
  },
  {
    type = "recipe",
    name = "steel-furnace",
    ingredients = {{"steel-plate", 8}, {"stone-brick", 10}},
    result = "steel-furnace",
    energy_required = 3,
    enabled = false
  },
  {
    type = "recipe",
    name = "electric-furnace",
    ingredients = {{"steel-plate", 15}, {"advanced-circuit", 5}, {"stone-brick", 10}},
    result = "electric-furnace",
    energy_required = 5,
    enabled = false
  },
  {
    type = "recipe",
    name = "basic-beacon",
    enabled = false,
    energy_required = 15,
    ingredients =
    {
      {"electronic-circuit", 20},
      {"advanced-circuit", 20},
      {"steel-plate", 10},
      {"copper-cable", 10}
    },
    result = "basic-beacon"
  },
  {
    type = "recipe",
    name = "blueprint",
    energy_required = 1,
    ingredients =
    {
      {"advanced-circuit", 1}
    },
    result = "blueprint",
    enabled = false
  },
  {
    type = "recipe",
    name = "deconstruction-planner",
    energy_required = 1,
    ingredients =
    {
      {"advanced-circuit", 1}
    },
    result = "deconstruction-planner",
    enabled = false
  },
  {
    type = "recipe",
    name = "pumpjack",
    energy_required = 20,
    ingredients =
    {
      {"steel-plate", 15},
      {"iron-gear-wheel", 10},
      {"electronic-circuit", 10},
      {"pipe", 10},
    },
    result = "pumpjack",
    enabled = false
  },
  {
    type = "recipe",
    name = "oil-refinery",
    energy_required = 20,
    ingredients =
    {
      {"steel-plate", 15},
      {"iron-gear-wheel", 10},
      {"stone-brick", 10},
      {"electronic-circuit", 10},
      {"pipe", 10}
    },
    result = "oil-refinery",
    enabled = false
  },
  {
    type = "recipe",
    name = "engine-unit",
    energy_required = 20,
    category = "advanced-crafting",
    ingredients =
    {
      {"steel-plate", 1},
      {"iron-gear-wheel", 1},
      {"pipe", 2}
    },
    result = "engine-unit",
    enabled = false
  },
  {
    type = "recipe",
    name = "electric-engine-unit",
    category = "crafting-with-fluid",
    energy_required = 20,
    ingredients =
    {
      {"engine-unit", 1},
      {type="fluid", name= "lubricant", amount = 2},
      {"electronic-circuit", 2}
    },
    result = "electric-engine-unit",
    enabled = false
  },
  {
    type = "recipe",
    name = "flying-robot-frame",
    energy_required = 20,
    ingredients =
    {
      {"electric-engine-unit", 1},
      {"battery", 2},
      {"steel-plate", 1},
      {"electronic-circuit", 3}
    },
    result = "flying-robot-frame",
    enabled = false
  },
  {
    type = "recipe",
    name = "explosives",
    energy_required = 5,
    enabled = false,
    category = "chemistry",
    ingredients =
    {
      {type="item", name="sulfur", amount=1},
      {type="item", name="coal", amount=1},
      {type="fluid", name="water", amount=1},
    },
    result= "explosives"
  },
  {
    type = "recipe",
    name = "battery",
    category = "chemistry",
    energy_required = 5,
    enabled = false,
    ingredients =
    {
      {type="fluid", name="sulfuric-acid", amount=2},
      {"iron-plate", 1},
      {"copper-plate", 1}
    },
    result= "battery"
  },
  {
    type = "recipe",
    name = "storage-tank",
    energy_required = 3,
    enabled = false,
    ingredients =
    {
      {"iron-plate", 20},
      {"steel-plate", 5}
    },
    result= "storage-tank"
  },
  {
    type = "recipe",
    name = "small-pump",
    energy_required = 2,
    enabled = false,
    ingredients =
    {
      {"electric-engine-unit", 1},
      {"steel-plate", 1},
      {"pipe", 1}
    },
    result= "small-pump"
  },
  {
    type = "recipe",
    name = "chemical-plant",
    energy_required = 10,
    enabled = false,
    ingredients =
    {
      {"steel-plate", 5},
      {"iron-gear-wheel", 5},
      {"electronic-circuit", 5},
      {"pipe", 5}
    },
    result= "chemical-plant"
  },
  {
    type = "recipe",
    name = "small-plane",
    energy_required = 30,
    enabled = false,
    category = "crafting",
    ingredients =
    {
      {"plastic-bar", 100},
      {"advanced-circuit", 200},
      {"electric-engine-unit", 20},
      {"battery", 100}
    },
    result= "small-plane"
  },
  {
    type = "recipe",
    name = "arithmetic-combinator",
    enabled = "false",
    ingredients =
    {
      {"copper-cable", 5},
      {"electronic-circuit", 5},
    },
    result = "arithmetic-combinator"
  },
  {
    type = "recipe",
    name = "decider-combinator",
    enabled = "false",
    ingredients =
    {
      {"copper-cable", 5},
      {"electronic-circuit", 5},
    },
    result = "decider-combinator"
  },
  {
    type = "recipe",
    name = "constant-combinator",
    enabled = "false",
    ingredients =
    {
      {"copper-cable", 5},
      {"electronic-circuit", 2},
    },
    result = "constant-combinator"
  },
  {
    type = "recipe",
    name = "low-density-structure",
    energy_required = 30,
    enabled = false,
    category = "crafting",
    ingredients =
    {
      {"steel-plate", 10},
      {"copper-plate", 5},
      {"plastic-bar", 5}
    },
    result= "low-density-structure"
  },
  {
    type = "recipe",
    name = "rocket-fuel",
    energy_required = 30,
    enabled = false,
    category = "crafting",
    ingredients =
    {
      {"solid-fuel", 10}
    },
    result= "rocket-fuel"
  },
  {
    type = "recipe",
    name = "rocket-control-unit",
    energy_required = 30,
    enabled = false,
    category = "crafting",
    ingredients =
    {
      {"processing-unit", 1},
      {"speed-module", 1}
    },
    result= "rocket-control-unit"
  },
  {
    type = "recipe",
    name = "rocket-part",
    energy_required = 3,
    enabled = false,
    hidden = true,
    category = "rocket-building",
    ingredients =
    {
      {"low-density-structure", 10},
      {"rocket-fuel", 10},
      {"rocket-control-unit", 10}
    },
    result= "rocket-part"
  },
  {
    type = "recipe",
    name = "satellite",
    energy_required = 3,
    enabled = false,
    category = "crafting",
    ingredients =
    {
      {"low-density-structure", 100},
      {"solar-panel", 100},
      {"basic-accumulator", 100},
      {"radar", 5},
      {"processing-unit", 100},
      {"rocket-fuel", 50}
    },
    result= "satellite"
  },
  {
    type = "recipe",
    name = "concrete",
    energy_required = 10,
    enabled = false,
    category = "crafting-with-fluid",
    ingredients =
    {
      {"stone-brick", 5},
      {"iron-ore", 1},
      {type="fluid", name="water", amount=10}
    },
    result= "concrete",
    result_count = 10
  }
}
)
data:extend(
{
  {
    type = "recipe",
    name = "laser-turret",
    enabled = false,
    energy_required = 20,
    ingredients =
    {
      {"steel-plate", 20},
      {"electronic-circuit", 20},
      {"battery", 12}
    },
    result = "laser-turret"
  }
}
)
