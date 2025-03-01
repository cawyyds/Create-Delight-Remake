ServerEvents.recipes(e => {
    const {create, createmetallurgy} = e.recipes
    remove_recipes_output(e, [
        "unusual_delight:salt",
        "unusual_delight:prepared_sea_pickle",
        "unusual_delight:popice",
        "unusual_delight:salt_bag",
        "unusual_delight:sugar_bag"
    ])
    e.replaceInput({}, "unusual_delight:chunk_of_glacier", "neapolitan:ice_cubes")
    e.replaceInput({}, "unusual_delight:salt", "#forge:salt")
    e.replaceInput({}, "unusual_delight:prepared_sea_pickle", "#forge:sea_pickles")
    e.replaceInput({}, "unusual_delight:ghast_tentacle", "#mynethersdelight:ghast_meats")
    createmetallurgy.casting_in_table("unusual_delight:sugar_cube", 
        [
            Fluid.of("createcafe:melted_sugar", 250),
            "createmetallurgy:graphite_ingot_mold"
        ], 60)
    .id("unusual_delight:casting_in_table/sugar_cube")
    create.compacting(Fluid.lava(1000), "unusual_delight:ardent_coal")
    .id("unusual_delight:compacting/ardent_coal")
    cutting(e, "unusual_delight:ghast_tentacle", [
        ["mynethersdelight:ghasta", 2]
    ])
})