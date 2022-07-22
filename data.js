import { bold, joinList, paragraph, unorderedList } from "./functions.js";

const backgroundSkillProficiency = {
    insight: "Insight",
    religion: "Religion"
};

const backgroundToolProficiency = {

};

const backgroundLanguage = {
    ofYourChoice: (number) => `${number} languages of your choice`
};

const equipmentType = {
    adventuringGear: "Adventuring Gear",
    ammunition: "Ammuntion",
    arcaneFocus: "Arcane Focus",
    armorHeavy: "Armor (Heavy)",
    armorLight: "Armor (Light)",
    armorMedium: "Armor (Medium)",
    druidicFocus: "Druidic Focus",
    equipmentPack: "Equipment Pack",
    gemstone: "Gemstone",
    holySymbol: "Holy Symbol",
    mount: "Mount",
    poison: "Poison",
    potion: "Potion",
    shield: "Shield",
    tool: "Tool",
    vehicleLand: "Vehicle (Land)",
    vehicleWater: "Vehicle (Water)",
    weaponMeleeMartial: "Weapon (Melee, Martial)",
    weaponMeleeSimple: "Weapon (Melee, Simple)",
    weaponRangedMartial: "Weapon (Ranged, Martial)",
    weaponRangedSimple: "Weapon (Ranged, Simple)"
};

const equipmentTag = {
    combat: "Combat",
    consumable: "Consumable",
    container: "Container",
    control: "Control",
    damage: "Damage",
    exploration: "Exploration",
    healing: "Healing",
    instrument: "Instrument",
    movement: "Movement",
    reloading: "Reloading",
    utility: "Utility",
    warding: "Warding"
};

const equipmentProperty = {
    ammunition: "Ammunition",
    finesse: "Finesse",
    heavy: "Heavy",
    light: "Light",
    loading: "Loading",
    reach: "Reach",
    special: "Special",
    thrown: "Thrown",
    twoHanded: "Two-Handed",
    versatile: "Versatile",
    range: (normalRange, longRange) => `Range (${normalRange}/${longRange})`
};

const monsterType = {
    beast: "Beast"
};

const monsterSize = {
    tiny: "Tiny"
};

const monsterAlignment = {
    unaligned: "Unaligned"
};

const monsterTag = {
    miscCreature: "Misc. Creature"
};

const spellLevel = {
    cantrip: "Cantrip",
    first: "1st Level",
    second: "2nd Level",
    third: "3rd Level",
    fourth: "4th Level",
    fifth: "5th Level",
    sixth: "6th Level",
    seventh: "7th Level",
    eighth: "8th Level",
    ninth: "9th Level"
};

const spellSchool = {
    abjuration: "🛡️ Abjuration",
    conjuration: "🔀 Conjuration",
    divination: "🔮 Divination",
    enchantment: "😵‍💫 Enchantment",
    evocation: "🪄 Evocation",
    illusion: "❓ Illusion",
    necromancy: "☠️ Necromancy",
    transmutation: "🔁 Transmutation"
};

const spellClass = {
    artificer: "Artificer",
    bard: "Bard",
    cleric: "Cleric",
    druid: "Druid",
    paladin: "Paladin",
    ranger: "Ranger",
    sorcerer: "Sorcerer",
    warlock: "Warlock",
    wizard: "Wizard"
};

const spellComponent = {
    verbal: "Verbal",
    somatic: "Somatic",
    material: (s) => `Material (${s})`
};

const renderData = {
    backgrounds: [
        {
            // https://www.dndbeyond.com/backgrounds/acolyte
            name: "Acolyte",
            skillProficiencies: joinList(backgroundSkillProficiency.insight, backgroundSkillProficiency.religion),
            toolProficiencies: null,
            languages: backgroundLanguage.ofYourChoice("Two"),

            feature: {
                name: "Shelter of the Faithful",
                description: [
                    paragraph("As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle."),
                    paragraph("You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple.")
                ]
            }
        }
    ],
    equipment: [
        // Adventuring Gear
        {
            // https://www.dndbeyond.com/equipment/abacus
            name: "Abacus",
            type: equipmentType.adventuringGear,
            cost: 2,
            weight: 2,
            tags: equipmentTag.utility,

            description: [
                paragraph("A standard tool used to make calculations.")
            ]
        },
        {
            // https://www.dndbeyond.com/equipment/acid-vial
            name: "Acid (Vial)",
            type: equipmentType.adventuringGear,
            cost: 25,
            weight: 1,
            tags: joinList(equipmentTag.combat, equipmentTag.damage, equipmentTag.utility),

            description: [
                paragraph("As an action, you can splash the contents of this vial onto a creature within 5 feet of you or throw the vial up to 20 feet, shattering it on impact. In either case, make a ranged attack against a creature or object, treating the acid as an improvised weapon. On a hit, the target takes 2d6 acid damage.")
            ]
        },
        {
            // https://www.dndbeyond.com/equipment/alchemists-fire-flask
            name: "Alchemist's Fire (Flask)",
            type: equipmentType.adventuringGear,
            cost: 50,
            weight: 1,
            tags: joinList(equipmentTag.combat, equipmentTag.consumable, equipmentTag.damage, equipmentTag.utility),

            description: [
                paragraph("This sticky, adhesive fluid ignites when exposed to air. As an action, you can throw this flask up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the alchemist's fire as an improvised weapon. On a hit, the target takes 1d4 fire damage at the start of each of its turns. A creature can end this damage by using its action to make a DC 10 Dexterity check to extinguish the flames.")
            ]
        },
        {
            // https://www.dndbeyond.com/equipment/alms-box
            name: "Alms Box",
            type: equipmentType.adventuringGear,
            cost: null,
            weight: null,
            tags: equipmentTag.utility,

            description: [
                paragraph("A small box for alms, typically found in a priest's pack.")
            ]
        },
        {
            // https://www.dndbeyond.com/equipment/antitoxin
            name: "Antitoxin",
            type: equipmentType.adventuringGear,
            cost: 50,
            weight: null,
            tags: joinList(equipmentTag.healing, equipmentTag.utility),

            description: [
                paragraph("A creature that drinks this vial of liquid gains advantage on saving throws against poison for 1 hour. It confers no benefit to undead or constructs.")
            ]
        },
        {
            // https://www.dndbeyond.com/equipment/backpack
            name: "Backpack",
            type: equipmentType.adventuringGear,
            cost: 2,
            weight: 5,
            tags: equipmentTag.container,

            description: [
                paragraph("A backpack is a leather pack carried on the back, typically with straps to secure it. A backpack can hold 1 cubic foot/ 30 pounds of gear."),
                paragraph("You can also strap items, such as a bedroll or a coil of rope, to the outside of a backpack.")
            ]
        },
        {
            // https://www.dndbeyond.com/equipment/ball-bearings-bag-of-1-000
            name: "Ball Bearings (Bag of 1,000)",
            type: equipmentType.adventuringGear,
            cost: 1,
            weight: 2,
            tags: joinList(equipmentTag.combat, equipmentTag.CONTROL, equipmentTag.utility),

            description: [
                paragraph("As an action, you can spill these tiny metal balls from their pouch to cover a level, square area that is 10 feet on a side. A creature moving across the covered area must succeed on a DC 10 Dexterity saving throw or fall prone. A creature moving through the area at half speed doesn't need to make the save.")
            ]
        },
        {
            // https://www.dndbeyond.com/equipment/barding
            name: "Barding",
            type: equipmentType.adventuringGear,
            cost: null,
            weight: null,
            tags: equipmentTag.warding,

            description: null // Table
        },
        {
            // https://www.dndbeyond.com/equipment/barrel
            name: "Barrel",
            type: equipmentType.adventuringGear,
            cost: 2,
            weight: 70,
            tags: equipmentTag.container,

            description: [
                paragraph("A barrel can hold 40 gallons of liquid, or 4 cubic feet of solid material.")
            ]
        },
        {
            // https://www.dndbeyond.com/equipment/basket
            name: "Basket",
            type: equipmentType.adventuringGear,
            cost: 0.4,
            weight: 2,
            tags: equipmentTag.container,

            description: [
                paragraph("A basket can hold 2 cubic feet / 40 pounds of gear.")
            ]
        },
        {
            // https://www.dndbeyond.com/equipment/bedroll
            name: "Bedroll",
            type: equipmentType.adventuringGear,
            cost: 1,
            weight: 7,
            tags: equipmentTag.utility,

            description: [
                paragraph("You never know where you're going to sleep, and a bedroll helps you get better sleep in a hayloft or on the cold ground. A bedroll consists of bedding and a blanket thin enough to be rolled up and tied. In an emergency, it can double as a stretcher.")
            ]
        },
        // Ammunitions
        {
            // https://www.dndbeyond.com/equipment/arrows
            name: "Arrows",
            type: equipmentType.ammunition,
            cost: 1,
            weight: 1,
            tags: joinList(equipmentTag.combat, equipmentTag.damage),

            description: [
                paragraph("Arrows are used with a weapon that has the ammunition property to make a ranged attack. Each time you attack with the weapon, you expend one piece of ammunition. Drawing the ammunition from a quiver, case, or other container is part of the attack (you need a free hand to load a one-handed weapon). At the end of the battle, you can recover half your expended ammunition by taking a minute to search the battlefield.")
            ]
        },
        // Arcane Focuses
        {
            // https://www.dndbeyond.com/equipment/arcane-focus
            name: "Arcane Focus",
            type: equipmentType.arcaneFocus,
            cost: null,
            weight: null,
            tags: equipmentTag.utility,

            description: [
                paragraph("An arcane focus is a special item designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus, as described in the Spellcasting section.")
            ]
        },
        // Gemstones
        {
            // https://www.dndbeyond.com/equipment/alexandrite
            name: "Alexandrite",
            type: equipmentType.gemstone,
            cost: 500,
            weight: 0,
            tags: null,

            description: [
                paragraph("A transparent dark green gemstone worth 500 gold pieces.")
            ]
        },
        {
            // https://www.dndbeyond.com/equipment/amber
            name: "Amber",
            type: equipmentType.gemstone,
            cost: 100,
            weight: null,
            tags: null,

            description: [
                paragraph("A transparent watery gold to rich gold gemstone worth 100 gold pieces+ ")
            ]
        },
        {
            // https://www.dndbeyond.com/equipment/amethyst
            name: "Amethyst",
            type: equipmentType.gemstone,
            cost: 100,
            weight: null,
            tags: null,

            description: [
                paragraph("A transparent deep purple gemstone worth 100 gold pieces.")
            ]
        },
        {
            // https://www.dndbeyond.com/equipment/aquamarine
            name: "Aquamarine",
            type: equipmentType.gemstone,
            cost: 500,
            weight: null,
            tags: null,

            description: [
                paragraph("A transparent pale blue-green gemstone worth 500 gold pieces.")
            ]
        },
        {
            // https://www.dndbeyond.com/equipment/azurite
            name: "Azurite",
            type: equipmentType.gemstone,
            cost: 10,
            weight: null,
            tags: null,

            description: [
                paragraph("An opaque mottled deep blue gemstone worth 10 gold pieces.")
            ]
        },
        {
            // https://www.dndbeyond.com/equipment/banded-agate
            name: "Banded Agate",
            type: equipmentType.gemstone,
            cost: 10,
            weight: null,
            tags: null,

            description: [
                paragraph("A translucent striped brown, blue, white, or red gemstone worth 10 gold pieces.")
            ]
        },
        // Holy Symbols
        {
            // https://www.dndbeyond.com/equipment/amulet
            name: "Amulet",
            type: equipmentType.holySymbol,
            cost: 5,
            weight: 1,
            tags: equipmentTag.utility,

            description: [
                paragraph("A holy symbol is a representation of a god or pantheon. A cleric or paladin can use a holy symbol as a spellcasting focus, as described in the Spellcasting section. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield.")
            ]
        },
        // Poisons
        {
            // https://www.dndbeyond.com/equipment/assassins-blood-ingested
            name: "Assassin's Blood (Ingested)",
            type: equipmentType.poison,
            cost: 150,
            weight: null,
            tags: joinList(equipmentTag.consumable, equipmentTag.damage),

            description: [
                paragraph("A creature subjected to this poison must make a DC 10 Constitution saving throw. On a failed save, it takes 6 (1d12) poison damage and is poisoned for 24 hours. On a successful save, the creature takes half damage and isn't poisoned."),
                paragraph(bold("Ingested:") + " A creature must swallow an entire dose of ingested poison to suffer its effects. The dose can be delivered in food or a liquid. You may decide that a partial dose has a reduced effect, such as allowing advantage on the saving throw or dealing only half damage on a failed save.")
            ]
        },
        // Tools
        {
            // https://www.dndbeyond.com/equipment/alchemists-supplies
            name: "Alchemist's Supplies",
            type: equipmentType.tool,
            cost: 50,
            weight: 8,
            tags: equipmentTag.utility,

            description: [
                paragraph("These special tools include the items needed to pursue a craft or trade. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency.")
            ]
        },
        {
            // https://www.dndbeyond.com/equipment/bagpipes
            name: "Bagpipes",
            type: equipmentType.tool,
            cost: 30,
            weight: 6,
            tags: equipmentTag.instrument,

            description: [
                paragraph("If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use bagpipes as a spellcasting focus.")
            ]
        },
        // Weapons (Melee, Martial)
        {
            // https://www.dndbeyond.com/equipment/battleaxe
            name: "Battleaxe",
            type: equipmentType.weaponMeleeMartial,
            cost: 10,
            weight: 4,
            tags: joinList(equipmentTag.combat, equipmentTag.damage),

            description: null // Table
        }
    ],
    monsters: [
        // Aberrations
        // Beasts
        {
            name: "Rat",
            challengeRating: 0,
            type: monsterType.beast,
            alignment: monsterAlignment.unaligned,
            tags: monsterTag.miscCreature,
    
            armorClass: 10,
            hitPoints: "1 (1d4 - 1)",
            speed: "20 feet",
    
            strength: 2,
            dexterity: 11,
            constitution: 9,
            intelligence: 2,
            wisdom: 10,
            charisma: 4,
    
            senses: "Darkvision (30 feet), Passive Perception (10)",
            languages: "None",
            proficiencyBonus: 2,
    
            abilities: [
                bold("Keen Smell:") + " Rats have advantage on Wisdom (Perception) checks that rely on smell."
            ],
    
            actions: [
                bold("Bite:") + " (Melee Weapon Attack) +0 to hit, 5 feet reach, one target, 1 piercing damage on hit"
            ]
        }
        // Celestials
        // Constructs
        // Dragons
        // Elementals
        // Fey
        // Fiends
        // Giants
        // Humanoids
        // Monstrosities
        // Oozes
        // Plants
        // Undead
    ],
    spells: [
        // Cantrips
        {
            // https://www.dndbeyond.com/spells/acid-splash
            level: spellLevel.cantrip,
            name: "Acid Splash",
            school: spellSchool.conjuration,
            classes: joinList(spellClass.artificer, spellClass.sorcerer, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "60 feet",
            components: joinList(spellComponent.verbal, spellComponent.somatic),
            duration: "Instant",

            description: [
                paragraph("You hurl a bubble of acid. Choose one or two creatures you can see within range. If you choose two, they must be within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage."),
                paragraph(bold("At higher levels:") + " This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).")
            ]
        },
        {
            // http://dnd5e.wikidot.com/spell:blade-ward
            level: spellLevel.cantrip,
            name: "Blade Ward",
            school: spellSchool.abjuration,
            classes: joinList(spellClass.bard, spellClass.sorcerer, spellClass.warlock, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "Self",
            components: joinList(spellComponent.verbal, spellComponent.somatic),
            duration: "1 Round",

            description: [
                paragraph("You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks.")
            ]
        },
        {
            // http://dnd5e.wikidot.com/spell:booming-blade
            level: spellLevel.cantrip,
            name: "Booming Blade",
            school: spellSchool.evocation,
            classes: joinList(spellClass.artificer, spellClass.sorcerer, spellClass.warlock, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "Self (5 foot radius)",
            components: joinList(spellComponent.somatic, spellComponent.material("a melee weapon worth at least 1 silver piece")),
            duration: "1 Round",

            description: [
                paragraph("You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects and then becomes sheathed in booming energy until the start of your next turn. If the target willingly moves 5 feet or more before then, the target takes 1d8 thunder damage, and the spell ends."),
                paragraph(bold("At higher levels:") + " At 5th level, the melee attack deals an extra 1d8 thunder damage to the target on a hit, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level (2d8 and 3d8) and again at 17th level (3d8 and 4d8).")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/chill-touch
            level: spellLevel.cantrip,
            name: "Chill Touch",
            school: spellSchool.necromancy,
            classes: joinList(spellClass.sorcerer, spellClass.warlock, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "120 feet",
            components: joinList(spellComponent.verbal, spellComponent.somatic),
            duration: "1 Round",

            description: [
                paragraph("You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target."),
                paragraph("If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn."),
                paragraph(bold("At higher levels:") + " This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/control-flames
            level: spellLevel.cantrip,
            name: "Control Flames",
            school: spellSchool.transmutation,
            classes: joinList(spellClass.druid, spellClass.sorcerer, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "60 feet",
            components: spellComponent.somatic,
            duration: "Instant",

            description: [
                paragraph("You choose a nonmagical flame that you can see within range and that fits within a 5-foot cube. You affect it in one of the following ways:"),
                unorderedList(
                    "You instantaneously expand the flame 5 feet in one direction, provided that wood or other fuel is present in the new location.",
                    "You instantaneously extinguish the flames within the cube.",
                    "You double or halve the area of bright light and dim light cast by the flame, change its color, or both. The change lasts for 1 hour.",
                    "You cause simple shapes—such as the vague form of a creature, an inanimate object, or a location—to appear within the flames and animate as you like. The shapes last for 1 hour."
                ),
                paragraph("If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/create-bonfire
            level: spellLevel.cantrip,
            name: "Create Bonfire",
            school: spellSchool.conjuration,
            classes: joinList(spellClass.artificer, spellClass.druid, spellClass.sorcerer, spellClass.warlock, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "60 feet",
            components: joinList(spellComponent.verbal, spellComponent.somatic),
            duration: "Concentration, up to 1 minute",

            description: [
                paragraph("You create a bonfire on ground that you can see within range. Until the spell ends, the magic bonfire fills a 5-foot cube. Any creature in the bonfire's space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 fire damage. A creature must also make the saving throw when it moves into the bonfire's space for the first time on a turn or ends its turn there."),
                paragraph("The bonfire ignites flammable objects in its area that aren't being worn or carried."),
                paragraph("The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/dancing-lights
            level: spellLevel.cantrip,
            name: "Dancing Lights",
            school: spellSchool.evocation,
            classes: joinList(spellClass.artificer, spellClass.bard, spellClass.sorcerer, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "120 feet",
            components: joinList(spellComponent.verbal, spellComponent.somatic, spellComponent.material("a bit of phosphorus or wychwood, or a glowworm")),
            duration: "Concentration, up to 1 minute",

            description: [
                paragraph("You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius."),
                paragraph("As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell's range.")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/druidcraft
            level: spellLevel.cantrip,
            name: "Druidcraft",
            school: spellSchool.transmutation,
            classes: spellClass.druid,

            castingTime: "1 Action",
            rangeArea: "30 feet",
            components: joinList(spellComponent.verbal, spellComponent.somatic),
            duration: "Instant",

            description: [
                paragraph("Whispering to the spirits of nature, you create one of the following effects within range:"),
                unorderedList(
                    "You create a tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours. The effect might manifest as a golden orb for clear skies, a cloud for rain, falling snowflakes for snow, and so on. This effect persists for 1 round.",
                    "You instantly make a flower blossom, a seed pod open, or a leaf bud bloom.",
                    "You create an instantaneous, harmless sensory effect, such as falling leaves, a puff of wind, the sound of a small animal, or the faint odor of skunk. The effect must fit in a 5-foot cube.",
                    "You instantly light or snuff out a candle, a torch, or a small campfire."
                )
            ]
        },
        {
            // https://www.dndbeyond.com/spells/eldritch-blast
            level: spellLevel.cantrip,
            name: "Eldritch Blast",
            school: spellSchool.evocation,
            classes: spellClass.warlock,

            castingTime: "1 Action",
            rangeArea: "120 feet",
            components: joinList(spellComponent.verbal, spellComponent.somatic),
            duration: "Instant",

            description: [
                paragraph("A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage."),
                paragraph(bold("At higher levels:") + " The spell creates more than one beam when you reach higher levels: two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam.")
            ]
        },
        {
            // http://dnd5e.wikidot.com/spell:encode-thoughts
            level: spellLevel.cantrip,
            name: "Encode Thoughts",
            school: spellSchool.enchantment,
            classes: spellClass.wizard,

            castingTime: "1 Action",
            rangeArea: "Self",
            components: spellComponent.somatic,
            duration: "8 hours",

            description: [
                paragraph("You pull a memory, an idea, or a message from your mind and transform it into a tangible string of glowing energy called a thought strand, which persists for the duration or until you cast this spell again. The thought strand appears in an unoccupied space within 5 feet of you as a Tiny, weightless, semisolid object that can be held and carried like a ribbon. It is otherwise stationary."),
                paragraph("If you cast this spell while concentrating on a spell or an ability that allows you to read or manipulate the thoughts of others (such as Detect Thoughts or Modify Memory), you can transform the thoughts or memories you read, rather than your own, into a thought strand."),
                paragraph("Casting this spell while holding a thought strand allows you to instantly receive whatever memory, idea, or message the thought strand contains. (Casting Detect Thoughts on the strand has the same effect.)")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/fire-bolt
            level: spellLevel.cantrip,
            name: "Fire Bolt",
            school: spellSchool.evocation,
            classes: joinList(spellClass.artificer, spellClass.sorcerer, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "120 feet",
            components: joinList(spellComponent.verbal, spellComponent.somatic),
            duration: "Instant",

            description: [
                paragraph("You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried."),
                paragraph(bold("At higher levels:") + " This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).")
            ]
        },
        {
            // http://dnd5e.wikidot.com/spell:friends
            level: spellLevel.cantrip,
            name: "Friends",
            school: spellSchool.enchantment,
            classes: joinList(spellClass.bard, spellClass.sorcerer, spellClass.warlock, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "Self",
            components: joinList(spellComponent.somatic, spellComponent.material("a small amount of makeup applied to the face as this spell is cast")),
            duration: "Concentration, up to 1 minute",

            description: [
                paragraph("For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn't hostile toward you. When the spell ends, the creature realizes that you used magic to influence its mood and becomes hostile toward you. A creature prone to violence might attack you. Another creature might seek retribution in other ways (at the DM's discretion), depending on the nature of your interaction with it.")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/frostbite
            level: spellLevel.cantrip,
            name: "Frostbite",
            school: spellSchool.evocation,
            classes: joinList(spellClass.artificer, spellClass.druid, spellClass.sorcerer, spellClass.warlock, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "60 feet",
            components: joinList(spellComponent.verbal, spellComponent.somatic),
            duration: "Instant",

            description: [
                paragraph("You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 1d6 cold damage, and it has disadvantage on the next weapon attack roll it makes before the end of its next turn."),
                paragraph("The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).")
            ]
        },
        {
            // http://dnd5e.wikidot.com/spell:green-flame-blade
            level: spellLevel.cantrip,
            name: "Green-Flame Blade",
            school: spellSchool.evocation,
            classes: joinList(spellClass.artificer, spellClass.sorcerer, spellClass.warlock, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "Self (5 foot radius)",
            components: joinList(spellComponent.somatic, spellComponent.material("a melee weapon worth at least 1 silver piece")),
            duration: "Instant",

            description: [
                paragraph("You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects, and you can cause green fire to leap from the target to a different creature of your choice that you can see within 5 feet of it. The second creature takes fire damage equal to your spellcasting ability modifier."),
                paragraph(bold("At higher levels:") + " At 5th level, the melee attack deals an extra 1d8 fire damage to the target on a hit, and the fire damage to the second creature increases to 1d8 . your spellcasting ability modifier. Both damage rolls increase by 1d8 at 11th level (2d8 and 2d8) and 17th level (3d8 and 3d8).")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/guidance
            level: spellLevel.cantrip,
            name: "Guidance",
            school: spellSchool.divination,
            classes: joinList(spellClass.artificer, spellClass.cleric, spellClass.druid),

            castingTime: "1 Action",
            rangeArea: "Touch",
            components: joinList(spellComponent.verbal, spellComponent.somatic),
            duration: "Concentration, up to 1 minute",

            description: [
                paragraph("You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/gust
            level: spellLevel.cantrip,
            name: "Gust",
            school: spellSchool.transmutation,
            classes: joinList(spellClass.druid, spellClass.sorcerer, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "30 feet",
            components: joinList(spellComponent.verbal, spellComponent.somatic),
            duration: "Instant",

            description: [
                paragraph("You seize the air and compel it to create one of the following effects at a point you can see within range:"),
                unorderedList(
                    "One Medium or smaller creature that you choose must succeed on a Strength saving throw or be pushed up to 5 feet away from you.",
                    "You create a small blast of air capable of moving one object that is neither held nor carried and that weighs no more than 5 pounds. The object is pushed up to 10 feet away from you. It isn't pushed with enough force to cause damage.",
                    "You create a harmless sensory effect using air, such as causing leaves to rustle, wind to slam shutters shut, or your clothing to ripple in a breeze."
                )
            ],
        },
        {
            // http://dnd5e.wikidot.com/spell:infestation
            level: spellLevel.cantrip,
            name: "Infestation",
            school: spellSchool.conjuration,
            classes: joinList(spellClass.druid, spellClass.sorcerer, spellClass.warlock, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "30 feet",
            components: joinList(spellComponent.verbal, spellComponent.somatic, spellComponent.material("a living flea")),
            duration: "Instant",

            description: [
                paragraph("You cause a cloud of mites, fleas, and other parasites to appear momentarily on one creature you can see within range. The target must succeed on a Constitution saving throw, or it takes 1d6 poison damage and moves 5 feet in a random direction if it can move and its speed is at least 5 feet. Roll a d4 for the direction: 1, north; 2, south; 3, east; or 4, west. This movement doesn't provoke opportunity attacks, and if the direction rolled is blocked, the target doesn't move."),
                paragraph(bold("At higher levels:") + " The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/light
            level: spellLevel.cantrip,
            name: "Light",
            school: spellSchool.evocation,
            classes: joinList(spellClass.artificer, spellClass.bard, spellClass.cleric, spellClass.sorcerer, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "Touch",
            components: joinList(spellComponent.verbal, spellComponent.material("a firefly or phosphorescent moss")),
            duration: "1 hour",

            description: [
                paragraph("You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action."),
                paragraph("If you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell.")
            ]
        },
        {
            // http://dnd5e.wikidot.com/spell:lightning-lure
            level: spellLevel.cantrip,
            name: "Lightning Lure",
            school: spellSchool.evocation,
            classes: joinList(spellClass.artificer, spellClass.sorcerer, spellClass.warlock, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "Self (15 foot radius)",
            components: spellComponent.verbal,
            duration: "Instant",

            description: [
                paragraph("You create a lash of lightning energy that strikes at one creature of your choice that you can see within 15 feet of you. The target must succeed on a Strength saving throw or be pulled up to 10 feet in a straight line toward you and then take 1d8 lightning damage if it is within 5 feet of you."),
                paragraph(bold("At higher levels:") + " This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/mage-hand
            level: spellLevel.cantrip,
            name: "Mage Hand",
            school: spellSchool.conjuration,
            classes: joinList(spellClass.artificer, spellClass.bard, spellClass.sorcerer, spellClass.warlock, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "30 feet",
            components: joinList(spellComponent.verbal, spellComponent.somatic),
            duration: "1 minute",

            description: [
                paragraph("A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again."),
                paragraph("You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it."),
                paragraph("The hand can't attack, activate magic items, or carry more than 10 pounds.")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/magic-stone
            level: spellLevel.cantrip,
            name: "Magic Stone",
            school: spellSchool.transmutation,
            classes: joinList(spellClass.artificer, spellClass.druid, spellClass.warlock),

            castingTime: "1 Bonus Action",
            rangeArea: "Touch",
            components: joinList(spellComponent.verbal, spellComponent.somatic),
            duration: "1 minute",

            description: [
                paragraph("You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling. If thrown, it has a range of 60 feet. If someone else attacks with the pebble, that attacker adds your spellcasting ability modifier, not the attacker's, to the attack roll. On a hit, the target takes bludgeoning damage equal to 1d6 + your spellcasting ability modifier. Hit or miss, the spell then ends on the stone."),
                paragraph("If you cast this spell again, the spell ends early on any pebbles still affected by it.")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/mending
            level: spellLevel.cantrip,
            name: "Mending",
            school: spellSchool.transmutation,
            classes: joinList(spellClass.artificer, spellClass.bard, spellClass.cleric, spellClass.druid, spellClass.sorcerer, spellClass.wizard),

            castingTime: "1 minute",
            rangeArea: "Touch",
            components: joinList(spellComponent.verbal, spellComponent.somatic, spellComponent.material("two lodestones")),
            duration: "Instant",

            description: [
                paragraph("This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage."),
                paragraph("This spell can physically repair a magic item or construct, but the spell can't restore magic to such an object.")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/message
            level: spellLevel.cantrip,
            name: "Message",
            school: spellSchool.transmutation,
            classes: joinList(spellClass.artificer, spellClass.bard, spellClass.sorcerer, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "120 feet",
            components: joinList(spellComponent.verbal, spellComponent.somatic, spellComponent.material("a short piece of copper wire")),
            duration: "1 Round",

            description: [
                paragraph("You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear."),
                paragraph("You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn't have to follow a straight line and can travel freely around corners or through openings.")
            ]
        },
        {
            // http://dnd5e.wikidot.com/spell:mind-sliver
            level: spellLevel.cantrip,
            name: "Mind Sliver",
            school: spellSchool.enchantment,
            classes: joinList(spellClass.sorcerer, spellClass.warlock, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "60 feet",
            components: spellComponent.verbal,
            duration: "1 Round",

            description: [
                paragraph("You drive a disorienting spike of psychic energy into the mind of one creature you can see within range. The target must succeed on an Intelligence saving throw or take 1d6 psychic damage and subtract 1d4 from the next saving throw it makes before the end of your next turn."),
                paragraph(bold("At higher levels:") + " This spell's damage increases by 1d6 when you reach certain levels: 5th level (2d6), 11th level (3d6), and 17th level (4d6).")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/minor-illusion
            level: spellLevel.cantrip,
            name: "Minor Illusion",
            school: spellSchool.ILLUSION,
            classes: joinList(spellClass.bard, spellClass.sorcerer, spellClass.warlock, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "30 feet",
            components: joinList(spellComponent.somatic, spellComponent.material("a bit of fleece")),
            duration: "1 minute",

            description: [
                paragraph("You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again."),
                paragraph("If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends."),
                paragraph("If you create an image of an object--such as a chair, muddy footprints, or a small chest--it must be no larger than a 5-foot cube. The image can't create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it."),
                paragraph("If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/mold-earth
            level: spellLevel.cantrip,
            name: "Mold Earth",
            school: spellSchool.transmutation,
            classes: joinList(spellClass.druid, spellClass.sorcerer, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "30 feet",
            components: spellComponent.somatic,
            duration: "Instant",

            description: [
                paragraph("You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:"),
                unorderedList(
                    "If you target an area of loose earth, you can instantaneously excavate it, move it along the ground, and deposit it up to 5 feet away. This movement doesn't have enough force to cause damage.",
                    "You cause shapes, colors, or both to appear on the dirt or stone, spelling out words, creating images, or shaping patterns. The changes last for 1 hour.",
                    "If the dirt or stone you target is on the ground, you cause it to become difficult terrain. Alternatively, you can cause the ground to become normal terrain if it is already difficult terrain. This change lasts for 1 hour."
                ),
                paragraph("If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/poison-spray
            level: spellLevel.cantrip,
            name: "Poison Spray",
            school: spellSchool.conjuration,
            classes: joinList(spellClass.artificer, spellClass.druid, spellClass.sorcerer, spellClass.warlock, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "10 feet",
            components: joinList(spellComponent.verbal, spellComponent.somatic),
            duration: "Instant",

            description: [
                paragraph("You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage."),
                paragraph(bold("At higher levels:") + " This spell's damage increases by 1d12 when you reach 5th level (2d12), 11th level (3d12), and 17th level (4d12).")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/prestidigitation
            level: spellLevel.cantrip,
            name: "Prestidigitation",
            school: spellSchool.transmutation,
            classes: joinList(spellClass.artificer, spellClass.bard, spellClass.sorcerer, spellClass.warlock, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "10 feet",
            components: joinList(spellComponent.verbal, spellComponent.somatic),
            duration: "1 hour",

            description: [
                paragraph("This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range:"),
                unorderedList(
                    "You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.",
                    "You instantaneously light or snuff out a candle, a torch, or a small campfire.",
                    "You instantaneously clean or soil an object no larger than 1 cubic foot.",
                    "You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.",
                    "You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.",
                    "You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn."
                ),
                paragraph("If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.")
            ]
        },
        {
            // http://dnd5e.wikidot.com/spell:primal-savagery
            level: spellLevel.cantrip,
            name: "Primal Savagery",
            school: spellSchool.transmutation,
            classes: spellClass.druid,

            castingTime: "1 Action",
            rangeArea: "Self",
            components: spellComponent.somatic,
            duration: "Instant",

            description: [
                paragraph("You channel primal magic to cause your teeth or fingernails to sharpen, ready to deliver a corrosive attack. Make a melee spell attack against one creature within 5 feet of you. On a hit, the target takes 1d10 acid damage. After you make the attack, your teeth or fingernails return to normal."),
                paragraph(bold("At higher levels:") + " The spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/produce-flame
            level: spellLevel.cantrip,
            name: "Produce Flame",
            school: spellSchool.conjuration,
            classes: spellClass.druid,

            castingTime: "1 Action",
            rangeArea: "Self",
            components: joinList(spellComponent.verbal, spellComponent.somatic),
            duration: "10 minutes",

            description: [
                paragraph("A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it again."),
                paragraph("You can also attack with the flame, although doing so ends the spell. When you cast this spell, or as an action on a later turn, you can hurl the flame at a creature within 30 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 fire damage."),
                paragraph(bold("At higher levels:") + " This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/ray-of-frost
            level: spellLevel.cantrip,
            name: "Ray of Frost",
            school: spellSchool.evocation,
            classes: joinList(spellClass.artificer, spellClass.sorcerer, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "60 feet",
            components: joinList(spellComponent.verbal, spellComponent.somatic),
            duration: "Instant",

            description: [
                paragraph("A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn."),
                paragraph(bold("At higher levels:") + " The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/resistance
            level: spellLevel.cantrip,
            name: "Resistance",
            school: spellSchool.abjuration,
            classes: joinList(spellClass.artificer, spellClass.cleric, spellClass.druid),

            castingTime: "1 Action",
            rangeArea: "Touch",
            components: joinList(spellComponent.verbal, spellComponent.somatic, spellComponent.material("a miniature cloak")),
            duration: "Concentration, up to 1 minute",

            description: [
                paragraph("You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one saving throw of its choice. It can roll the die before or after making the saving throw. The spell then ends.")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/sacred-flame
            level: spellLevel.cantrip,
            name: "Sacred Flame",
            school: spellSchool.evocation,
            classes: spellClass.cleric,

            castingTime: "1 Action",
            rangeArea: "60 feet",
            components: joinList(spellComponent.verbal, spellComponent.somatic),
            duration: "Instant",

            description: [
                paragraph("Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw."),
                paragraph(bold("At higher levels:") + " The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).")
            ]
        },
        {
            // http://dnd5e.wikidot.com/spell:sapping-sting
            level: spellLevel.cantrip,
            name: "Sapping Sting",
            school: spellSchool.necromancy,
            classes: spellClass.wizard,

            castingTime: "1 Action",
            rangeArea: "30 feet",
            components: joinList(spellComponent.verbal, spellComponent.somatic),
            duration: "Instant",

            description: [
                paragraph("You sap the vitality of one creature you can see in range. The target must succeed on a Constitution saving throw or take 1d4 necrotic damage and fall prone."),
                paragraph(bold("At higher levels:") + " This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/shape-water
            level: spellLevel.cantrip,
            name: "Shape Water",
            school: spellSchool.transmutation,
            classes: joinList(spellClass.druid, spellClass.sorcerer, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "30 feet",
            components: spellComponent.somatic,
            duration: "Instant",

            description: [
                paragraph("You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:"),
                unorderedList(
                    "You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesn't have enough force to cause damage.",
                    "You cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour.",
                    "You change the water's color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour.",
                    "You freeze the water, provided that there are no creatures in it. The water unfreezes in 1 hour."
                ),
                paragraph("If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/shillelagh
            level: spellLevel.cantrip,
            name: "Shillelagh",
            school: spellSchool.transmutation,
            classes: spellClass.druid,

            castingTime: "1 Bonus Action",
            rangeArea: "Touch",
            components: joinList(spellComponent.verbal, spellComponent.somatic, spellComponent.material("mistletoe, a shamrock leaf, and a club or quarterstaff")),
            duration: "1 minute",

            description: [
                paragraph("The wood of a club or quarterstaff you are holding is imbued with nature's power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. The weapon also becomes magical, if it isn't already. The spell ends if you cast it again or if you let go of the weapon.")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/shocking-grasp
            level: spellLevel.cantrip,
            name: "Shocking Grasp",
            school: spellSchool.evocation,
            classes: joinList(spellClass.artificer, spellClass.sorcerer, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "Touch",
            components: joinList(spellComponent.verbal, spellComponent.somatic),
            duration: "Instant",

            description: [
                paragraph("Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 1d8 lightning damage, and it can't take reactions until the start of its next turn."),
                paragraph(bold("At higher levels:") + " The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/spare-the-dying
            level: spellLevel.cantrip,
            name: "Spare the Dying",
            school: spellSchool.necromancy,
            classes: joinList(spellClass.artificer, spellClass.cleric),

            castingTime: "1 Action",
            rangeArea: "Touch",
            components: joinList(spellComponent.verbal, spellComponent.somatic),
            duration: "Instant",

            description: [
                paragraph("You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs.")
            ]
        },
        {
            // http://dnd5e.wikidot.com/spell:sword-burst
            level: spellLevel.cantrip,
            name: "Sword Burst",
            school: spellSchool.conjuration,
            classes: joinList(spellClass.artificer, spellClass.sorcerer, spellClass.warlock, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "Self (5 foot radius)",
            components: spellComponent.verbal,
            duration: "Instant",

            description: [
                paragraph("You create a momentary circle of spectral blades that sweep around you. All other creatures within 5 feet of you must succeed on a Dexterity saving throw or take 1d6 force damage."),
                paragraph(bold("At higher levels:") + " This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/thaumaturgy
            level: spellLevel.cantrip,
            name: "Thaumaturgy",
            school: spellSchool.transmutation,
            classes: spellClass.cleric,

            castingTime: "1 Action",
            rangeArea: "30 feet",
            components: spellComponent.verbal,
            duration: "1 minute",

            description: [
                paragraph("You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects within range:"),
                unorderedList(
                    "Your voice booms up to three times as loud as normal for 1 minute.",
                    "You cause flames to flicker, brighten, dim, or change color for 1 minute.",
                    "You cause harmless tremors in the ground for 1 minute.",
                    "You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.",
                    "You instantaneously cause an unlocked door or window to fly open or slam shut.",
                    "You alter the appearance of your eyes for 1 minute."
                ),
                paragraph("If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time, and you can dismiss such an effect as an action.")
            ]
        },
        {
            // http://dnd5e.wikidot.com/spell:thorn-whip
            level: spellLevel.cantrip,
            name: "Thorn Whip",
            school: spellSchool.transmutation,
            classes: joinList(spellClass.artificer, spellClass.druid),

            castingTime: "1 Action",
            rangeArea: "30 feet",
            components: joinList(spellComponent.verbal, spellComponent.somatic, spellComponent.material("the stem of a plant with thorns")),
            duration: "Instant",

            description: [
                paragraph("You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you."),
                paragraph(bold("At higher levels:") + " This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/thunderclap
            level: spellLevel.cantrip,
            name: "Thunderclap",
            school: spellSchool.evocation,
            classes: joinList(spellClass.artificer, spellClass.bard, spellClass.druid, spellClass.sorcerer, spellClass.warlock, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "5 feet",
            components: spellComponent.somatic,
            duration: "Instant",

            description: [
                paragraph("You create a burst of thunderous sound that can be heard up to 100 feet away. Each creature within range, other than you, must succeed on a Constitution saving throw or take 1d6 thunder damage."),
                paragraph("The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).")
            ]
        },
        {
            // http://dnd5e.wikidot.com/spell:toll-the-dead
            level: spellLevel.cantrip,
            name: "Toll the Dead",
            school: spellSchool.necromancy,
            classes: joinList(spellClass.cleric, spellClass.warlock, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "60 feet",
            components: joinList(spellComponent.verbal, spellComponent.somatic),
            duration: "Instant",

            description: [
                paragraph("You point at one creature you can see within range, and the sound of a dolorous bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take 1d8 necrotic damage. If the target is missing any of its hit points, it instead takes 1d12 necrotic damage."),
                paragraph(bold("At higher levels:") + " The spell's damage increases by one die when you reach 5th level (2d8 or 2d12), 11th level (3d8 or 3d12), and 17th level (4d8 or 4d12).")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/true-strike
            level: spellLevel.cantrip,
            name: "True Strike",
            school: spellSchool.divination,
            classes: joinList(spellClass.bard, spellClass.sorcerer, spellClass.warlock, spellClass.wizard),

            castingTime: "1 Action",
            rangeArea: "30 feet",
            components: spellComponent.somatic,
            duration: "Concentration, up to 1 Round",

            description: [
                paragraph("You point a finger at a target in range. Your magic grants you a brief insight into the target's defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn't ended.")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/vicious-mockery
            level: spellLevel.cantrip,
            name: "Vicious Mockery",
            school: spellSchool.enchantment,
            classes: spellClass.bard,

            castingTime: "1 Action",
            rangeArea: "60 feet",
            components: spellComponent.verbal,
            duration: "Instant",

            description: [
                paragraph("You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (though it need not understand you), it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn."),
                paragraph(bold("At higher levels:") + " This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).")
            ]
        },
        {
            // http://dnd5e.wikidot.com/spell:word-of-radiance
            level: spellLevel.cantrip,
            name: "Word of Radiance",
            school: spellSchool.evocation,
            classes: spellClass.cleric,

            castingTime: "1 Action",
            rangeArea: "5 feet",
            components: joinList(spellComponent.verbal, spellComponent.material("a holy symbol")),
            duration: "Instant",

            description: [
                paragraph("You utter a divine word, and burning radiance erupts from you. Each creature of your choice that you can see within range must succeed on a Constitution saving throw or take 1d6 radiant damage."),
                paragraph(bold("At higher levels:") + " The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).")
            ]
        },
        // 1st-Level Spells
        {
            // https://www.dndbeyond.com/spells/absorb-elements
            level: spellLevel.first,
            name: "Absorb Elements",
            school: spellSchool.abjuration,
            classes: joinList(spellClass.artificer, spellClass.druid, spellClass.ranger, spellClass.sorcerer, spellClass.wizard),

            castingTime: "1 Reaction (see note)",
            rangeArea: "Self",
            components: spellComponent.somatic,
            duration: "1 Round",

            description: [
                paragraph("The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends."),
                paragraph(bold("At higher levels:") + " When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st."),
                paragraph(bold("Note:") + " which you take when you take acid, cold, fire, lightning, or thunder damage")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/alarm
            level: spellLevel.first,
            name: "Alarm",
            school: spellSchool.abjuration,
            classes: joinList(spellClass.artificer, spellClass.ranger, spellClass.wizard),

            castingTime: "1 minute (Ritual)",
            rangeArea: "30 feet",
            components: joinList(spellComponent.verbal, spellComponent.somatic, spellComponent.material("a tiny bell and a piece of fine silver wire")),
            duration: "8 hours",

            description: [
                paragraph("You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible."),
                paragraph("A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping."),
                paragraph("An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.")
            ]
        },
        {
            // https://www.dndbeyond.com/spells/animal-friendship
            level: spellLevel.first,
            name: "Animal Friendship",
            school: spellSchool.enchantment,
            classes: joinList(spellClass.bard, spellClass.druid, spellClass.ranger),

            castingTime: "1 Action",
            rangeArea: "30 feet",
            components: joinList(spellComponent.verbal, spellComponent.somatic, spellComponent.material("a morsel of food")),
            duration: "24 hours",

            description: [
                paragraph("This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell's duration. If you or one of your companions harms the target, the spell ends."),
                paragraph(bold("At higher levels:") + " When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional beast for each slot level above 1st.")
            ]
        },
        /* {
            //
            name: "Armor of Agathys"
        },
        {
            //
            name: "Arms of Hadar"
        },
        {
            // https://www.dndbeyond.com/spells/bane
            name: "Bane"
        },
        {
            // https://www.dndbeyond.com/spells/beast-bond
            name: "Beast Bond"
        },
        {
            // https://www.dndbeyond.com/spells/bless
            name: "Bless"
        },
        {
            // https://www.dndbeyond.com/spells/burning-hands
            name: "Burning Hands"
        },
        {
            // https://www.dndbeyond.com/spells/catapult
            name: "Catapult"
        },
        {
            //
            name: "Cause Fear"
        },
        {
            //
            name: "Ceremony"
        },
        {
            //
            name: "Chaos Bolt"
        },
        {
            // https://www.dndbeyond.com/spells/charm-person
            name: "Charm Person"
        },
        {
            //
            name: "Chromatic Orb"
        },
        {
            // https://www.dndbeyond.com/spells/color-spray
            name: "Color Spray"
        },
        {
            // https://www.dndbeyond.com/spells/command
            name: "Command"
        },
        {
            //
            name: "Compelled Duel"
        },
        {
            // https://www.dndbeyond.com/spells/comprehend-languages
            name: "Comprehend Languages"
        },
        {
            // https://www.dndbeyond.com/spells/create-or-destroy-water
            name: "Create or Destroy Water"
        },
        {
            // https://www.dndbeyond.com/spells/cure-wounds
            name: "Cure Wounds"
        },
        {
            // https://www.dndbeyond.com/spells/detect-evil-and-good
            name: "Detect Evil and Good"
        },
        {
            // https://www.dndbeyond.com/spells/detect-magic
            name: "Detect Magic"
        },
        {
            // https://www.dndbeyond.com/spells/detect-poison-and-disease
            name: "Detect Poison and Disease"
        },
        {
            // https://www.dndbeyond.com/spells/disguise-self
            name: "Disguise Self"
        },
        {
            //
            name: "Dissonant Whispers"
        },
        {
            //
            name: "Distort Value"
        },
        {
            // https://www.dndbeyond.com/spells/divine-favor
            name: "Divine Favor"
        },
        {
            // https://www.dndbeyond.com/spells/earth-tremor
            name: "Earth Tremor"
        },
        {
            //
            name: "Ensnaring Strike"
        },
        {
            // https://www.dndbeyond.com/spells/entangle
            name: "Entangle"
        },
        {
            // https://www.dndbeyond.com/spells/expeditious-retreat
            name: "Expeditious Retreat"
        },
        {
            // https://www.dndbeyond.com/spells/faerie-fire
            name: "Faerie Fire"
        },
        {
            // https://www.dndbeyond.com/spells/false-life
            name: "False Life"
        },
        {
            // https://www.dndbeyond.com/spells/feather-fall
            name: "Feather Fall"
        },
        {
            // https://www.dndbeyond.com/spells/find-familiar
            name: "Find Familiar"
        },
        {
            // https://www.dndbeyond.com/spells/floating-disk
            name: "Floating Disk"
        },
        {
            // https://www.dndbeyond.com/spells/fog-cloud
            name: "Fog Cloud"
        },
        {
            //
            name: "Frost Fingers"
        },
        {
            //
            name: "Gift of Alacrity"
        },
        {
            // https://www.dndbeyond.com/spells/goodberry
            name: "Goodberry"
        },
        {
            // https://www.dndbeyond.com/spells/grease
            name: "Grease"
        },
        {
            // https://www.dndbeyond.com/spells/guiding-bolt
            name: "Guiding Bolt"
        },
        {
            //
            name: "Hail of Thorns"
        },
        {
            // https://www.dndbeyond.com/spells/healing-word
            name: "Healing Word"
        },
        {
            // https://www.dndbeyond.com/spells/hellish-rebuke
            name: "Hellish Rebuke"
        },
        {
            // https://www.dndbeyond.com/spells/heroism
            name: "Heroism"
        },
        {
            //
            name: "Hex"
        },
        {
            // https://www.dndbeyond.com/spells/hideous-laughter
            name: "Hideous Laughter"
        },
        {
            // https://www.dndbeyond.com/spells/hunters-mark
            name: "Hunter's Mark"
        },
        {
            // https://www.dndbeyond.com/spells/ice-knife
            name: "Ice Knife"
        },
        {
            // https://www.dndbeyond.com/spells/identify
            name: "Identify"
        },
        {
            // https://www.dndbeyond.com/spells/illusory-script
            name: "Illusory Script"
        },
        {
            // https://www.dndbeyond.com/spells/inflict-wounds
            name: "Inflict Wounds"
        },
        {
            //
            name: "Jim's Magic Missile"
        },
        {
            // https://www.dndbeyond.com/spells/jump
            name: "Jump"
        },
        {
            // https://www.dndbeyond.com/spells/longstrider
            name: "Longstrider"
        },
        {
            // https://www.dndbeyond.com/spells/mage-armor
            name: "Mage Armor"
        },
        {
            // https://www.dndbeyond.com/spells/magic-missile
            name: "Magic Missile"
        },
        {
            //
            name: "Magnify Gravity"
        },
        {
            // https://www.dndbeyond.com/spells/protection-from-evil-and-good
            name: "Protection from Evil and Good"
        },
        {
            // https://www.dndbeyond.com/spells/purify-food-and-drink
            name: "Purify Food and Drink"
        },
        {
            //
            name: "Ray of Sickness"
        },
        {
            // https://www.dndbeyond.com/spells/sanctuary
            name: "Sanctuary"
        },
        {
            //
            name: "Searing Smite"
        },
        {
            // https://www.dndbeyond.com/spells/shield
            name: "Shield"
        },
        {
            // https://www.dndbeyond.com/spells/shield-of-faith
            name: "Shield of Faith"
        },
        {
            // https://www.dndbeyond.com/spells/silent-image
            name: "Silent Image"
        },
        {
            //
            name: "Silvery Barbs"
        },
        {
            // https://www.dndbeyond.com/spells/sleep
            name: "Sleep"
        },
        {
            //
            name: "Snare"
        },
        {
            // https://www.dndbeyond.com/spells/speak-with-animals
            name: "Speak with Animals"
        },
        {
            //
            name: "Tasha's Caustic Brew"
        },
        {
            //
            name: "Tasha's Hideous Laughter"
        },
        {
            //
            name: "Tenser's Floating Disk"
        },
        {
            //
            name: "Thunderous Smite"
        },
        {
            // https://www.dndbeyond.com/spells/thunderwave
            name: "Thunderwave"
        },
        {
            // https://www.dndbeyond.com/spells/unseen-servant
            name: "Unseen Servant"
        },
        {
            //
            name: "Witch Bolt"
        },
        {
            //
            name: "Wrathful Smite"
        },
        {
            //
            name: "Zephyr Strike"
        } */
    ]
};

export {
    renderData
};
