<?php

function bold(string $s): string {
    return "<b>" . $s . "</b>";
}
function paragraph(string $s): string {
    return "<p>" . $s . "</p>";
}
function unordered_list(string ...$s): string {
    $items = "";
    foreach ($s as $item) {
        $items .= "<li>" . $item . "</li>";
    }
    return "<ul>" . $items . "</ul>";
}

function pluralize(float $number, string $units): string {
    $new_string = strval($number) . " " . $units;
    if ($number > 1 || $number < 1) {
        $new_string .= "s";
    }
    return $new_string;
}

function join_list(string ...$s): string {
    return implode(", ", $s);
}

class EquipmentType {
    const ADVENTURING_GEAR = "Adventuring Gear";
    const AMMUNITION = "Ammuntion";
    const ARCANE_FOCUS = "Arcane Focus";
    const ARMOR_HEAVY = "Armor (Heavy)";
    const ARMOR_LIGHT = "Armor (Light)";
    const ARMOR_MEDIUM = "Armor (Medium)";
    const DRUIDIC_FOCUS = "Druidic Focus";
    const EQUIPMENT_PACK = "Equipment Pack";
    const GEMSTONE = "Gemstone";
    const HOLY_SYMBOL = "Holy Symbol";
    const MOUNT = "Mount";
    const POISON = "Poison";
    const POTION = "Potion";
    const SHIELD = "Shield";
    const TOOL = "Tool";
    const VEHICLE_LAND = "Vehicle (Land)";
    const VEHICLE_WATER = "Vehicle (Water)";
    const WEAPON_MELEE_MARTIAL = "Weapon (Melee, Martial)";
    const WEAPON_MELEE_SIMPLE = "Weapon (Melee, Simple)";
    const WEAPON_RANGED_MARTIAL = "Weapon (Ranged, Martial)";
    const WEAPON_RANGED_SIMPLE = "Weapon (Ranged, Simple)";
}

class EquipmentTag {
    const COMBAT = "Combat";
    const CONSUMABLE = "Consumable";
    const CONTAINER = "Container";
    const CONTROL = "Control";
    const DAMAGE = "Damage";
    const EXPLORATION = "Exploration";
    const HEALING = "Healing";
    const INSTRUMENT = "Instrument";
    const MOVEMENT = "Movement";
    const RELOADING = "Reloading";
    const UTILITY = "Utility";
}

class WeaponProperty {
    const AMMUNITION = "Ammunition";
    const FINESSE = "Finesse";
    const HEAVY = "Heavy";
    const LIGHT = "Light";
    const LOADING = "Loading";
    const REACH = "Reach";
    const SPECIAL = "Special";
    const THROWN = "Thrown";
    const TWO_HANDED = "Two-Handed";
    const VERSATILE = "Versatile";
    static function range(int $normal_range, int $long_range): string {
        return "Range " . "(" . strval($normal_range). "/" . strval($long_range) . ")";
    }
}

$equipment = [
    // Adventuring Gear
    [
        // https://www.dndbeyond.com/equipment/abacus
        "name" => "Abacus",
        "type" => EquipmentType::ADVENTURING_GEAR,
        "cost" => 2,
        "weight" => 2,
        "tags" => EquipmentTag::UTILITY,

        "description" => [ paragraph("A standard tool used to make calculations.") ]
    ],
    [
        // https://www.dndbeyond.com/equipment/acid-vial
        "name" => "Acid (Vial)",
        "type" => EquipmentType::ADVENTURING_GEAR,
        "cost" => 25,
        "weight" => 1,
        "tags" => join_list(EquipmentTag::COMBAT, EquipmentTag::DAMAGE, EquipmentTag::UTILITY),

        "description" => [ paragraph("As an action, you can splash the contents of this vial onto a creature within 5 feet of you or throw the vial up to 20 feet, shattering it on impact. In either case, make a ranged attack against a creature or object, treating the acid as an improvised weapon. On a hit, the target takes 2d6 acid damage.") ]
    ],
    [
        // https://www.dndbeyond.com/equipment/alchemists-fire-flask
        "name" => "Alchemist's Fire (Flask)",
        "type" => EquipmentType::ADVENTURING_GEAR,
        "cost" => 50,
        "weight" => 1,
        "tags" => join_list(EquipmentTag::COMBAT, EquipmentTag::CONSUMABLE, EquipmentTag::DAMAGE, EquipmentTag::UTILITY),

        "description" => [ paragraph("This sticky, adhesive fluid ignites when exposed to air. As an action, you can throw this flask up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the alchemist's fire as an improvised weapon. On a hit, the target takes 1d4 fire damage at the start of each of its turns. A creature can end this damage by using its action to make a DC 10 Dexterity check to extinguish the flames.") ]
    ],
    [
        // https://www.dndbeyond.com/equipment/alms-box
        "name" => "Alms Box",
        "type" => EquipmentType::ADVENTURING_GEAR,
        "cost" => null,
        "weight" => null,
        "tags" => EquipmentTag::UTILITY,

        "description" => [ paragraph("A small box for alms, typically found in a priest's pack.") ]
    ],
    [
        // https://www.dndbeyond.com/equipment/antitoxin
        "name" => "Antitoxin",
        "type" => EquipmentType::ADVENTURING_GEAR,
        "cost" => 50,
        "weight" => null,
        "tags" => join_list(EquipmentTag::HEALING, EquipmentTag::UTILITY),

        "description" => [ paragraph("A creature that drinks this vial of liquid gains advantage on saving throws against poison for 1 hour. It confers no benefit to undead or constructs.") ]
    ],
    [
        // https://www.dndbeyond.com/equipment/backpack
        "name" => "Backpack",
        "type" => EquipmentType::ADVENTURING_GEAR,
        "cost" => 2,
        "weight" => 5,
        "tags" => EquipmentTag::CONTAINER,

        "description" => [ paragraph("A backpack is a leather pack carried on the back, typically with straps to secure it. A backpack can hold 1 cubic foot/ 30 pounds of gear."), paragraph("You can also strap items, such as a bedroll or a coil of rope, to the outside of a backpack.") ]
    ],
    [
        // https://www.dndbeyond.com/equipment/ball-bearings-bag-of-1-000
        "name" => "Ball Bearings (Bag of 1,000)",
        "type" => EquipmentType::ADVENTURING_GEAR,
        "cost" => 1,
        "weight" => 2,
        "tags" => join_list(EquipmentTag::COMBAT, EquipmentTag::CONTROL, EquipmentTag::UTILITY),

        "description" => [ paragraph("As an action, you can spill these tiny metal balls from their pouch to cover a level, square area that is 10 feet on a side. A creature moving across the covered area must succeed on a DC 10 Dexterity saving throw or fall prone. A creature moving through the area at half speed doesn't need to make the save.") ]
    ],
    [
        // https://www.dndbeyond.com/equipment/barding
        "name" => "Barding",
        "type" => EquipmentType::ADVENTURING_GEAR,
        "cost" => null,
        "weight" => null,
        "tags" => EquipmentTag::WARDING,

        "description" => null // Table
    ],
    [
        // https://www.dndbeyond.com/equipment/barrel
        "name" => "Barrel",
        "type" => EquipmentTag::ADVENTURING_GEAR,
        "cost" => 2,
        "weight" => 70,
        "tags" => EquipmentTag::CONTAINER,

        "description" => [ paragraph("A barrel can hold 40 gallons of liquid, or 4 cubic feet of solid material.") ]
    ],
    [
        // https://www.dndbeyond.com/equipment/basket
        "name" => "Basket",
        "type" => EquipmentTag::ADVENTURING_GEAR,
        "cost" => 0.4,
        "weight" => 2,
        "tags" => EquipmentTag::CONTAINER,

        "description" => [ paragraph("A basket can hold 2 cubic feet / 40 pounds of gear.") ]
    ],
    [
        // https://www.dndbeyond.com/equipment/bedroll
        "name" => "Bedroll",
        "type" => EquipmentTag::ADVENTURING_GEAR,
        "cost" => 1,
        "weight" => 7,
        "tags" => EquipmentTag::UTILITY,

        "description" => [ paragraph("You never know where you're going to sleep, and a bedroll helps you get better sleep in a hayloft or on the cold ground. A bedroll consists of bedding and a blanket thin enough to be rolled up and tied. In an emergency, it can double as a stretcher.") ]
    ],
    // Ammunitions
    [
        // https://www.dndbeyond.com/equipment/arrows
        "name" => "Arrows",
        "type" => EquipmentType::AMMUNITION,
        "cost" => 1,
        "weight" => 1,
        "tags" => join_list(EquipmentTag::COMBAT, EquipmentTag::DAMAGE),

        "description" => [ paragraph("Arrows are used with a weapon that has the ammunition property to make a ranged attack. Each time you attack with the weapon, you expend one piece of ammunition. Drawing the ammunition from a quiver, case, or other container is part of the attack (you need a free hand to load a one-handed weapon). At the end of the battle, you can recover half your expended ammunition by taking a minute to search the battlefield.") ]
    ],
    // Arcane Focuses
    [
        // https://www.dndbeyond.com/equipment/arcane-focus
        "name" => "Arcane Focus",
        "type" => EquipmentType::ARCANE_FOCUS,
        "cost" => null,
        "weight" => null,
        "tags" => EquipmentTag::UTILITY,

        "description" => [ paragraph("An arcane focus is a special item designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus, as described in the Spellcasting section.") ]
    ],
    // Gemstones
    [
        // https://www.dndbeyond.com/equipment/alexandrite
        "name" => "Alexandrite",
        "type" => EquipmentType::GEMSTONE,
        "cost" => 500,
        "weight" => 0,
        "tags" => null,

        "description" => [ paragraph("A transparent dark green gemstone worth 500 gold pieces.") ]
    ],
    [
        // https://www.dndbeyond.com/equipment/amber
        "name" => "Amber",
        "type" => EquipmentType::GEMSTONE,
        "cost" => 100,
        "weight" => null,
        "tags" => null,

        "description" => [ paragraph("A transparent watery gold to rich gold gemstone worth 100 gold pieces. ") ]
    ],
    [
        // https://www.dndbeyond.com/equipment/amethyst
        "name" => "Amethyst",
        "type" => EquipmentType::GEMSTONE,
        "cost" => 100,
        "weight" => null,
        "tags" => null,

        "description" => [ paragraph("A transparent deep purple gemstone worth 100 gold pieces.") ]
    ],
    [
        // https://www.dndbeyond.com/equipment/aquamarine
        "name" => "Aquamarine",
        "type" => EquipmentType::GEMSTONE,
        "cost" => 500,
        "weight" => null,
        "tags" => null,

        "description" => [ paragraph("A transparent pale blue-green gemstone worth 500 gold pieces.") ]
    ],
    [
        // https://www.dndbeyond.com/equipment/azurite
        "name" => "Azurite",
        "type" => EquipmentType::GEMSTONE,
        "cost" => 10,
        "weight" => null,
        "tags" => null,

        "description" => [ paragraph("An opaque mottled deep blue gemstone worth 10 gold pieces.") ]
    ],
    [
        // https://www.dndbeyond.com/equipment/banded-agate
        "name" => "Banded Agate",
        "type" => EquipmentType::GEMSTONE,
        "cost" => 10,
        "weight" => null,
        "tags" => null,

        "description" => [ paragraph("A translucent striped brown, blue, white, or red gemstone worth 10 gold pieces.") ]
    ],
    // Holy Symbols
    [
        // https://www.dndbeyond.com/equipment/amulet
        "name" => "Amulet",
        "type" => EquipmentType::HOLY_SYMBOL,
        "cost" => 5,
        "weight" => 1,
        "tags" => EquipmentTag::UTILITY,

        "description" => [ paragraph("A holy symbol is a representation of a god or pantheon. A cleric or paladin can use a holy symbol as a spellcasting focus, as described in the Spellcasting section. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield.") ]
    ],
    // Poisons
    [
        // https://www.dndbeyond.com/equipment/assassins-blood-ingested
        "name" => "Assassin's Blood (Ingested)",
        "type" => EquipmentType::POISON,
        "cost" => 150,
        "weight" => null,
        "tags" => join_list(EquipmentTag::CONSUMABLE, EquipmentTag::DAMAGE),

        "description" => [ paragraph("A creature subjected to this poison must make a DC 10 Constitution saving throw. On a failed save, it takes 6 (1d12) poison damage and is poisoned for 24 hours. On a successful save, the creature takes half damage and isn't poisoned."), paragraph(bold("Ingested:") . " A creature must swallow an entire dose of ingested poison to suffer its effects. The dose can be delivered in food or a liquid. You may decide that a partial dose has a reduced effect, such as allowing advantage on the saving throw or dealing only half damage on a failed save.") ]
    ],
    // Tools
    [
        // https://www.dndbeyond.com/equipment/alchemists-supplies
        "name" => "Alchemist's Supplies",
        "type" => EquipmentType::TOOL,
        "cost" => 50,
        "weight" => 8,
        "tags" => EquipmentTag::UTILITY,

        "description" => [ paragraph("These special tools include the items needed to pursue a craft or trade. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency.") ]
    ],
    [
        // https://www.dndbeyond.com/equipment/bagpipes
        "name" => "Bagpipes",
        "type" => EquipmentType::TOOL,
        "cost" => 30,
        "weight" => 6,
        "tags" => EquipmentTag::INSTRUMENT,

        "description" => [ paragraph("If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use bagpipes as a spellcasting focus.") ]
    ],
    // Weapons (Melee, Martial)
    [
        // https://www.dndbeyond.com/equipment/battleaxe
        "name" => "Battleaxe",
        "type" => EquipmentType::WEAPON_MARTIAL_MELEE,
        "cost" => 10,
        "weight" => 4,
        "tags" => join_list(EquipmentTag::COMBAT, EquipmentTag::DAMAGE),

        "description" => null // Table
    ]
];

class MonsterType {
    const BEAST = "Beast";
}

class MonsterSize {
    const TINY = "Tiny";
}

class MonsterAlignment {
    const UNALIGNED = "Unaligned";
}

class MonsterTag {
    const MISC_CREATURE = "Misc. Creature";
}

$monsters = [
    // Aberrations
    // Beasts
    [
        "name" => "Rat",
        "challenge_rating" => 0,
        "type" => MonsterType::BEAST,
        "alignment" => MonsterAlignment::UNALIGNED,
        "tags" => MonsterTag::MISC_CREATURE,

        "armor_class" => 10,
        "hit_points" => "1 (1d4 - 1)",
        "speed" => "20 feet",

        "strength" => 2,
        "dexterity" => 11,
        "constitution" => 9,
        "intelligence" => 2,
        "wisdom" => 10,
        "charisma" => 4,

        "senses" => "Darkvision (30 feet), Passive Perception (10)",
        "languages" => "None",
        "proficiency_bonus" => 2,

        "abilities" => [ bold("Keen Smell:") . " Rats have advantage on Wisdom (Perception) checks that rely on smell." ],

        "actions" => [ bold("Bite:") . " (Melee Weapon Attack) +0 to hit, 5 feet reach, one target, 1 piercing damage on hit" ]
    ]
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
];

class SpellLevel {
    const CANTRIP = "Cantrip";
    const FIRST = "1st level";
    const SECOND = "2nd level";
    const THIRD = "3rd level";
    const FOURTH = "4th level";
    const FIFTH = "5th level";
    const SIXTH = "6th level";
    const SEVENTH = "7th level";
    const EIGHTH = "8th level";
    const NINTH = "9th level";
}

class SpellSchool {
    const ABJURATION = "🛡️ Abjuration";
    const CONJURATION = "🔀 Conjuration";
    const DIVINATION = "🔮 Divination";
    const ENCHANTMENT = "😵‍💫 Enchantment";
    const EVOCATION = "🪄 Evocation";
    const ILLUSION = "❓ Illusion";
    const NECROMANCY = "☠️ Necromancy";
    const TRANSMUTATION = "🔁 Transmutation";
}

class SpellClass {
    const ARTIFICER = "Artificer";
    const BARD = "Bard";
    const CLERIC = "Cleric";
    const DRUID = "Druid";
    const PALADIN = "Paladin";
    const RANGER = "Ranger";
    const SORCERER = "Sorcerer";
    const WARLOCK = "Warlock";
    const WIZARD = "Wizard";
}

class SpellComponent {
    const VERBAL = "Verbal";
    const SOMATIC = "Somatic";
    static function material(string $s): string {
        return "Material " . "(" . $s . ")";
    }
}

$spells = [
    // Cantrips
    [
        // https://www.dndbeyond.com/spells/acid-splash
        "name" => "Acid Splash",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::CONJURATION,

        "casting_time" => "1 Action",
        "range_area" => "60 feet",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::SOMATIC),
        "duration" => "Instant",

        "description" => [ paragraph("You hurl a bubble of acid. Choose one or two creatures you can see within range. If you choose two, they must be within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage."), paragraph(bold("At higher levels:") . " This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).") ],

        "classes" => join_list(SpellClass::ARTIFICER, SpellClass::SORCERER, SpellClass::WIZARD)
    ],
    [
        // http://dnd5e.wikidot.com/spell:blade-ward
        "name" => "Blade Ward",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::ABJURATION,

        "casting_time" => "1 Action",
        "range_area" => "Self",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::SOMATIC),
        "duration" => "1 Round",

        "description" => [ paragraph("You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks.") ],

        "classes" => join_list(SpellClass::BARD, SpellClass::SORCERER, SpellClass::WARLOCK, SpellClass::WIZARD)
    ],
    [
        // http://dnd5e.wikidot.com/spell:booming-blade
        "name" => "Booming Blade",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::EVOCATION,

        "casting_time" => "1 Action",
        "range_area" => "Self (5 foot radius)",
        "components" => join_list(SpellComponent::SOMATIC, SpellComponent::material("a melee weapon worth at least 1 silver piece")),
        "duration" => "1 Round",

        "description" => [ paragraph("You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects and then becomes sheathed in booming energy until the start of your next turn. If the target willingly moves 5 feet or more before then, the target takes 1d8 thunder damage, and the spell ends."), paragraph(bold("At higher levels:") . " At 5th level, the melee attack deals an extra 1d8 thunder damage to the target on a hit, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level (2d8 and 3d8) and again at 17th level (3d8 and 4d8).") ],

        "classes" => join_list(SpellClass::ARTIFICER, SpellClass::SORCERER, SpellClass::WARLOCK, SpellClass::WIZARD)
    ],
    [
        // https://www.dndbeyond.com/spells/chill-touch
        "name" => "Chill Touch",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::NECROMANCY,

        "casting_time" => "1 Action",
        "range_area" => "120 feet",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::SOMATIC),
        "duration" => "1 Round",

        "description" => [ paragraph("You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target."), paragraph("If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn."), paragraph(bold("At higher levels:") . " This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).") ],

        "classes" => join_list(SpellClass::SORCERER, SpellClass::WARLOCK, SpellClass::WIZARD)
    ],
    [
        // http://dnd5e.wikidot.com/spell:control-flames
        "name" => "Control Flames",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::TRANSMUTATION,

        "casting_time" => "1 Action",
        "range_area" => "60 feet",
        "components" => SpellComponent::SOMATIC,
        "duration" => "Instant or 1 hour",

        "description" => [ paragraph("You choose a nonmagical flame that you can see within range and that fits within a 5-foot cube. You affect it in one of the following ways:"), unordered_list("You instantaneously expand the flame 5 feet in one direction, provided that wood or other fuel is present in the new location.", "You instantaneously extinguish the flames within the cube.", "You double or halve the area of bright light and dim light cast by the flame, change its color, or both. The change lasts for 1 hour.", "You cause simple shapes—such as the vague form of a creature, an inanimate object, or a location—to appear within the flames and animate as you like. The shapes last for 1 hour."), paragraph("If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.") ],

        "classes" => join_list(SpellClass::DRUID, SpellClass::SORCERER, SpellClass::WIZARD)
    ],
    [
        // http://dnd5e.wikidot.com/spell:create-bonfire
        "name" => "Create Bonfire",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::CONJURATION,

        "casting_time" => "1 Action",
        "range_area" => "60 feet",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::SOMATIC),
        "duration" => "Concentration, up to 1 minute",

        "description" => [ paragraph("You create a bonfire on ground that you can see within range. Until the spell ends, the bonfire fills a 5-foot cube. Any creature in the bonfire's space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 fire damage. A creature must also make the saving throw when it enters the bonfire's space for the first time on a turn or ends its turn there."), paragraph(bold("At higher levels:") . " The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).") ],

        "classes" => join_list(SpellClass::DRUID, SpellClass::SORCERER, SpellClass::WARLOCK, SpellClass::WIZARD)
    ],
    [
        // https://www.dndbeyond.com/spells/dancing-lights
        "name" => "Dancing Lights",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::EVOCATION,

        "casting_time" => "1 Action",
        "range_area" => "120 feet",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::SOMATIC, SpellComponent::material("a bit of phosphorus or wychwood, or a glowworm")),
        "duration" => "Concentration, up to 1 minute",

        "description" => [ paragraph("You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius."), paragraph("As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell's range.") ],

        "classes" => join_list(SpellClass::ARTIFICER, SpellClass::BARD, SpellClass::SORCERER, SpellClass::WIZARD)
    ],
    [
        // https://www.dndbeyond.com/spells/DRUIDcraft
        "name" => "Druidcraft",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::TRANSMUTATION,

        "casting_time" => "1 Action",
        "range_area" => "30 feet",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::SOMATIC),
        "duration" => "Instant",

        "description" => [ paragraph("Whispering to the spirits of nature, you create one of the following effects within range:"), unordered_list( "You create a tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours. The effect might manifest as a golden orb for clear skies, a cloud for rain, falling snowflakes for snow, and so on. This effect persists for 1 round.", "You instantly make a flower blossom, a seed pod open, or a leaf bud bloom.", "You create an instantaneous, harmless sensory effect, such as falling leaves, a puff of wind, the sound of a small animal, or the faint odor of skunk. The effect must fit in a 5-foot cube.", "You instantly light or snuff out a candle, a torch, or a small campfire.") ],

        "classes" => SpellClass::DRUID
    ],
    [
        // https://www.dndbeyond.com/spells/eldritch-blast
        "name" => "Eldritch Blast",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::EVOCATION,

        "casting_time" => "1 Action",
        "range_area" => "120 feet",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::SOMATIC),
        "duration" => "Instant",

        "description" => [ paragraph("A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage."), paragraph(bold("At higher levels:") . " The spell creates more than one beam when you reach higher levels: two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam.") ],

        "classes" => SpellClass::WARLOCK
    ],
    [
        // http://dnd5e.wikidot.com/spell:encode-thoughts
        "name" => "Encode Thoughts",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::ENCHANTMENT,

        "casting_time" => "1 Action",
        "range_area" => "Self",
        "components" => SpellComponent::SOMATIC,
        "duration" => "8 hours",

        "description" => [ paragraph("You pull a memory, an idea, or a message from your mind and transform it into a tangible string of glowing energy called a thought strand, which persists for the duration or until you cast this spell again. The thought strand appears in an unoccupied space within 5 feet of you as a Tiny, weightless, semisolid object that can be held and carried like a ribbon. It is otherwise stationary."), paragraph("If you cast this spell while concentrating on a spell or an ability that allows you to read or manipulate the thoughts of others (such as Detect Thoughts or Modify Memory), you can transform the thoughts or memories you read, rather than your own, into a thought strand."), paragraph("Casting this spell while holding a thought strand allows you to instantly receive whatever memory, idea, or message the thought strand contains. (Casting Detect Thoughts on the strand has the same effect.)") ],

        "classes" => SpellClass::WIZARD
    ],
    [
        // https://www.dndbeyond.com/spells/fire-bolt
        "name" => "Fire Bolt",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::EVOCATION,

        "casting_time" => "1 Action",
        "range_area" => "120 feet",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::SOMATIC),
        "duration" => "Instant",

        "description" => [ paragraph("You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried."), paragraph(bold("At higher levels:") . " This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).") ],

        "classes" => join_list(SpellClass::ARTIFICER, SpellClass::SORCERER, SpellClass::WIZARD)
    ],
    [
        // http://dnd5e.wikidot.com/spell:friends
        "name" => "Friends",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::ENCHANTMENT,

        "casting_time" => "1 Action",
        "range_area" => "Self",
        "components" => join_list(SpellComponent::SOMATIC, SpellComponent::material("a small amount of makeup applied to the face as this spell is cast")),
        "duration" => "Concentration, up to 1 minute",

        "description" => [ paragraph("For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn't hostile toward you. When the spell ends, the creature realizes that you used magic to influence its mood and becomes hostile toward you. A creature prone to violence might attack you. Another creature might seek retribution in other ways (at the DM's discretion), depending on the nature of your interaction with it.") ],

        "classes" => join_list(SpellClass::BARD, SpellClass::SORCERER, SpellClass::WARLOCK, SpellClass::WIZARD)
    ],
    [
        // http://dnd5e.wikidot.com/spell:frostbite
        "name" => "Frostbite",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::EVOCATION,

        "casting_time" => "1 Action",
        "range_area" => "60 feet",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::SOMATIC),
        "duration" => "Instant",

        "description" => [ paragraph("You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 1d6 cold damage, and it has disadvantage on the next weapon attack roll it makes before the end of its next turn."), paragraph(bold("At higher levels:") . " The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).") ],

        "classes" => join_list(SpellClass::ARTIFICER, SpellClass::DRUID, SpellClass::SORCERER, SpellClass::WARLOCK, SpellClass::WIZARD)
    ],
    [
        // http://dnd5e.wikidot.com/spell:green-flame-blade
        "name" => "Green-Flame Blade",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::EVOCATION,

        "casting_time" => "1 Action",
        "range_area" => "Self (5 foot radius)",
        "components" => join_list(SpellComponent::SOMATIC, SpellComponent::material("a melee weapon worth at least 1 silver piece")),
        "duration" => "Instant",

        "description" => [ paragraph("You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects, and you can cause green fire to leap from the target to a different creature of your choice that you can see within 5 feet of it. The second creature takes fire damage equal to your spellcasting ability modifier."), paragraph(bold("At higher levels:") . " At 5th level, the melee attack deals an extra 1d8 fire damage to the target on a hit, and the fire damage to the second creature increases to 1d8 . your spellcasting ability modifier. Both damage rolls increase by 1d8 at 11th level (2d8 and 2d8) and 17th level (3d8 and 3d8).") ],

        "classes" => join_list(SpellClass::ARTIFICER, SpellClass::SORCERER, SpellClass::WARLOCK, SpellClass::WIZARD)
    ],
    [
        // https://www.dndbeyond.com/spells/guidance
        "name" => "Guidance",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::DIVINATION,

        "casting_time" => "1 Action",
        "range_area" => "Touch",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::SOMATIC),
        "duration" => "Concentration, up to 1 minute",

        "description" => [ paragraph("You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.") ],

        "classes" => join_list(SpellClass::ARTIFICER, SpellClass::CLERIC, SpellClass::DRUID)
    ],
    [
        // http://dnd5e.wikidot.com/spell:gust
        "name" => "Gust",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::TRANSMUTATION,

        "casting_time" => "1 Action",
        "range_area" => "30 feet",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::SOMATIC),
        "duration" => "Instant",

        "description" => [ paragraph("You seize the air and compel it to create one of the following effects at a point you can see within range:"), unordered_list("One Medium or smaller creature that you choose must succeed on a Strength saving throw or be pushed up to 5 feet away from you.", "You create a small blast of air capable of moving one object that is neither held nor carried and that weighs no more than 5 pounds. The object is pushed up to 10 feet away from you. It isn't pushed with enough force to cause damage.", "You create a harmless sensory affect using air, such as causing leaves to rustle, wind to slam shutters shut, or your clothing to ripple in a breeze.") ],

        "classes" => join_list(SpellClass::DRUID, SpellClass::SORCERER, SpellClass::WIZARD)
    ],
    [
        // http://dnd5e.wikidot.com/spell:infestation
        "name" => "Infestation",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::CONJURATION,

        "casting_time" => "1 Action",
        "range_area" => "30 feet",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::SOMATIC, SpellComponent::material("a living flea")),
        "duration" => "Instant",

        "description" => [ paragraph("You cause a cloud of mites, fleas, and other parasites to appear momentarily on one creature you can see within range. The target must succeed on a Constitution saving throw, or it takes 1d6 poison damage and moves 5 feet in a random direction if it can move and its speed is at least 5 feet. Roll a d4 for the direction: 1, north; 2, south; 3, east; or 4, west. This movement doesn't provoke opportunity attacks, and if the direction rolled is blocked, the target doesn't move."), paragraph(bold("At higher levels:") . " The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).") ],

        "classes" => join_list(SpellClass::DRUID, SpellClass::SORCERER, SpellClass::WARLOCK, SpellClass::WIZARD)
    ],
    [
        // https://www.dndbeyond.com/spells/light
        "name" => "Light",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::EVOCATION,

        "casting_time" => "1 Action",
        "range_area" => "Touch",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::material("a firefly or phosphorescent moss")),
        "duration" => "1 hour",

        "description" => [ paragraph("You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action."), paragraph("If you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell.") ],

        "classes" => join_list(SpellClass::ARTIFICER, SpellClass::BARD, SpellClass::CLERIC, SpellClass::SORCERER, SpellClass::WIZARD)
    ],
    [
        // http://dnd5e.wikidot.com/spell:lightning-lure
        "name" => "Lightning Lure",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::EVOCATION,

        "casting_time" => "1 Action",
        "range_area" => "Self (15 foot radius)",
        "components" => SpellComponent::VERBAL,
        "duration" => "Instant",

        "description" => [ paragraph("You create a lash of lightning energy that strikes at one creature of your choice that you can see within 15 feet of you. The target must succeed on a Strength saving throw or be pulled up to 10 feet in a straight line toward you and then take 1d8 lightning damage if it is within 5 feet of you."), paragraph(bold("At higher levels:") . " This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).") ],

        "classes" => join_list(SpellClass::ARTIFICER, SpellClass::SORCERER, SpellClass::WARLOCK, SpellClass::WIZARD)
    ],
    [
        // https://www.dndbeyond.com/spells/mage-hand
        "name" => "Mage Hand",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::CONJURATION,

        "casting_time" => "1 Action",
        "range_area" => "30 feet",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::SOMATIC),
        "duration" => "1 minute",

        "description" => [ paragraph("A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again."), paragraph("You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it."), paragraph("The hand can't attack, activate magic items, or carry more than 10 pounds.") ],

        "classes" => join_list(SpellClass::ARTIFICER, SpellClass::BARD, SpellClass::SORCERER, SpellClass::WARLOCK, SpellClass::WIZARD)
    ],
    [
        // http://dnd5e.wikidot.com/spell:magic-stone
        "name" => "Magic Stone",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::TRANSMUTATION,

        "casting_time" => "1 Bonus Action",
        "range_area" => "Touch",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::SOMATIC),
        "duration" => "1 minute",

        "description" => [ paragraph("You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling. If thrown, it has a range of 60 feet. If someone else attacks with the pebble, that attacker adds your spellcasting ability modifier, not the attacker's, to the attack roll. On a hit, the target takes bludgeoning damage equal to 1d6 . your spellcasting ability modifier. Hit or miss, the spell then ends on the stone."), paragraph("If you cast this spell again, the spell ends early on any pebbles still affected by it.") ],

        "classes" => join_list(SpellClass::ARTIFICER, SpellClass::DRUID, SpellClass::WARLOCK)
    ],
    [
        // https://www.dndbeyond.com/spells/mending
        "name" => "Mending",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::TRANSMUTATION,

        "casting_time" => "1 minute",
        "range_area" => "Touch",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::SOMATIC, SpellComponent::material("two lodestones")),
        "duration" => "Instant",

        "description" => [ paragraph("This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage."), paragraph("This spell can physically repair a magic item or construct, but the spell can't restore magic to such an object.") ],

        "classes" => join_list(SpellClass::ARTIFICER, SpellClass::BARD, SpellClass::CLERIC, SpellClass::DRUID, SpellClass::SORCERER, SpellClass::WIZARD)
    ],
    [
        // https://www.dndbeyond.com/spells/message
        "name" => "Message",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::TRANSMUTATION,

        "casting_time" => "1 Action",
        "range_area" => "120 feet",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::SOMATIC, SpellComponent::material("a short piece of copper wire")),
        "duration" => "1 Round",

        "description" => [ paragraph("You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear."), paragraph("You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn't have to follow a straight line and can travel freely around corners or through openings.") ],

        "classes" => join_list(SpellClass::ARTIFICER, SpellClass::BARD, SpellClass::SORCERER, SpellClass::WIZARD)
    ],
    [
        // http://dnd5e.wikidot.com/spell:mind-sliver
        "name" => "Mind Sliver",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::ENCHANTMENT,

        "casting_time" => "1 Action",
        "range_area" => "60 feet",
        "components" => SpellComponent::VERBAL,
        "duration" => "1 Round",

        "description" => [ paragraph("You drive a disorienting spike of psychic energy into the mind of one creature you can see within range. The target must succeed on an Intelligence saving throw or take 1d6 psychic damage and subtract 1d4 from the next saving throw it makes before the end of your next turn."), paragraph(bold("At higher levels:") . " This spell's damage increases by 1d6 when you reach certain levels: 5th level (2d6), 11th level (3d6), and 17th level (4d6).") ],

        "classes" => join_list(SpellClass::SORCERER, SpellClass::WARLOCK, SpellClass::WIZARD)
    ],
    [
        // https://www.dndbeyond.com/spells/minor-illusion
        "name" => "Minor Illusion",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::ILLUSION,

        "casting_time" => "1 Action",
        "range_area" => "30 feet",
        "components" => join_list(SpellComponent::SOMATIC, SpellComponent::material("a bit of fleece")),
        "duration" => "1 minute",

        "description" => [ paragraph("You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again."), paragraph("If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends."), paragraph("If you create an image of an object--such as a chair, muddy footprints, or a small chest--it must be no larger than a 5-foot cube. The image can't create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it."), paragraph("If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.") ],

        "classes" => join_list(SpellClass::BARD, SpellClass::SORCERER, SpellClass::WARLOCK, SpellClass::WIZARD)
    ],
    [
        // http://dnd5e.wikidot.com/spell:mold-earth
        "name" => "Mold Earth",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::TRANSMUTATION,

        "casting_time" => "1 Action",
        "range_area" => "30 feet",
        "components" => SpellComponent::SOMATIC,
        "duration" => "Instant or 1 hour",

        "description" => [ paragraph("You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:") . unordered_list("If you target an area of loose earth, you can instantaneously excavate it, move it along the ground, and deposit it up to 5 feet away. This movement doesn't have enough force to cause damage.", "You cause shapes, colors, or both to appear on the dirt or stone, spelling out words, creating images, or shaping patterns. The changes last for 1 hour.", "If the dirt or stone you target is on the ground, you cause it to become difficult terrain. Alternatively, you can cause the ground to become normal terrain if it is already difficult terrain. This change lasts for 1 hour."), paragraph("If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.") ],

        "classes" => join_list(SpellClass::DRUID, SpellClass::SORCERER, SpellClass::WIZARD)
    ],
    [
        // https://www.dndbeyond.com/spells/poison-spray
        "name" => "Poison Spray",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::CONJURATION,

        "casting_time" => "1 Action",
        "range_area" => "10 feet",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::SOMATIC),
        "duration" => "Instant",

        "description" => [ paragraph("You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage."), paragraph(bold("At higher levels:") . " This spell's damage increases by 1d12 when you reach 5th level (2d12), 11th level (3d12), and 17th level (4d12).") ],

        "classes" => join_list(SpellClass::ARTIFICER, SpellClass::DRUID, SpellClass::SORCERER, SpellClass::WARLOCK, SpellClass::WIZARD)
    ],
    [
        // https://www.dndbeyond.com/spells/prestidigitation
        "name" => "Prestidigitation",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::TRANSMUTATION,

        "casting_time" => "1 Action",
        "range_area" => "10 feet",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::SOMATIC),
        "duration" => "1 hour",

        "description" => [ paragraph("This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range:"), unordered_list("You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.", "You instantaneously light or snuff out a candle, a torch, or a small campfire.", "You instantaneously clean or soil an object no larger than 1 cubic foot.", "You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.", "You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.", "You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn."), paragraph("If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.") ],

        "classes" => join_list(SpellClass::ARTIFICER, SpellClass::BARD, SpellClass::SORCERER, SpellClass::WARLOCK, SpellClass::WIZARD)
    ],
    [
        // http://dnd5e.wikidot.com/spell:primal-savagery
        "name" => "Primal Savagery",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::TRANSMUTATION,

        "casting_time" => "1 Action",
        "range_area" => "Self",
        "components" => SpellComponent::SOMATIC,
        "duration" => "Instant",

        "description" => [ paragraph("You channel primal magic to cause your teeth or fingernails to sharpen, ready to deliver a corrosive attack. Make a melee spell attack against one creature within 5 feet of you. On a hit, the target takes 1d10 acid damage. After you make the attack, your teeth or fingernails return to normal."), paragraph(bold("At higher levels:") . " The spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).") ],

        "classes" => SpellClass::DRUID
    ],
    [
        // https://www.dndbeyond.com/spells/produce-flame
        "name" => "Produce Flame",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::CONJURATION,

        "casting_time" => "1 Action",
        "range_area" => "Self",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::SOMATIC),
        "duration" => "10 minutes",

        "description" => [ paragraph("A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it again."), paragraph("You can also attack with the flame, although doing so ends the spell. When you cast this spell, or as an action on a later turn, you can hurl the flame at a creature within 30 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 fire damage."), paragraph(bold("At higher levels:") . " This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).") ],

        "classes" => SpellClass::DRUID
    ],
    [
        // https://www.dndbeyond.com/spells/ray-of-frost
        "name" => "Ray of Frost",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::EVOCATION,

        "casting_time" => "1 Action",
        "range_area" => "60 feet",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::SOMATIC),
        "duration" => "Instant",

        "description" => [ paragraph("A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn."), paragraph(bold("At higher levels:") . " The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).") ],

        "classes" => join_list(SpellClass::ARTIFICER, SpellClass::SORCERER, SpellClass::WIZARD)
    ],
    [
        // https://www.dndbeyond.com/spells/resistance
        "name" => "Resistance",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::ABJURATION,

        "casting_time" => "1 Action",
        "range_area" => "Touch",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::SOMATIC, SpellComponent::material("a miniature cloak")),
        "duration" => "Concentration, up to 1 minute",

        "description" => [ paragraph("You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one saving throw of its choice. It can roll the die before or after making the saving throw. The spell then ends.") ],

        "classes" => join_list(SpellClass::ARTIFICER, SpellClass::CLERIC, SpellClass::DRUID)
    ],
    [
        // https://www.dndbeyond.com/spells/sacred-flame
        "name" => "Sacred Flame",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::EVOCATION,

        "casting_time" => "1 Action",
        "range_area" => "60 feet",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::SOMATIC),
        "duration" => "Instant",

        "description" => [ paragraph("Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw."), paragraph(bold("At higher levels:") . " The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).") ],

        "classes" => SpellClass::CLERIC
    ],
    [
        // http://dnd5e.wikidot.com/spell:sapping-sting
        "name" => "Sapping Sting",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::NECROMANCY,

        "casting_time" => "1 Action",
        "range_area" => "30 feet",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::SOMATIC),
        "duration" => "Instant",

        "description" => [ paragraph("You sap the vitality of one creature you can see in range. The target must succeed on a Constitution saving throw or take 1d4 necrotic damage and fall prone."), paragraph(bold("At higher levels:") . " This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).") ],

        "classes" => SpellClass::WIZARD
    ],
    [
        // http://dnd5e.wikidot.com/spell:shape-water
        "name" => "Shape Water",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::TRANSMUTATION,

        "casting_time" => "1 Action",
        "range_area" => "30 feet",
        "components" => SpellComponent::SOMATIC,
        "duration" => "Instant or 1 hour",

        "description" => [ paragraph("You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:"), unordered_list("You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesn't have enough force to cause damage.", "You cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour.", "You change the water's color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour.", "You freeze the water, provided that there are no creatures in it. The water unfreezes in 1 hour."), paragraph("If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.") ],

        "classes" => join_list(SpellClass::DRUID, SpellClass::SORCERER, SpellClass::WIZARD)
    ],
    [
        // https://www.dndbeyond.com/spells/shillelagh
        "name" => "Shillelagh",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::TRANSMUTATION,

        "casting_time" => "1 Bonus Action",
        "range_area" => "Touch",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::SOMATIC, SpellComponent::material("mistletoe, a shamrock leaf, and a club or quarterstaff")),
        "duration" => "1 minute",

        "description" => [ paragraph("The wood of a club or quarterstaff you are holding is imbued with nature's power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. The weapon also becomes magical, if it isn't already. The spell ends if you cast it again or if you let go of the weapon.") ],

        "classes" => SpellClass::DRUID
    ],
    [
        // https://www.dndbeyond.com/spells/shocking-grasp
        "name" => "Shocking Grasp",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::EVOCATION,

        "casting_time" => "1 Action",
        "range_area" => "Touch",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::SOMATIC),
        "duration" => "Instant",

        "description" => [ paragraph("Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 1d8 lightning damage, and it can't take reactions until the start of its next turn."), paragraph(bold("At higher levels:") . " The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).") ],

        "classes" => join_list(SpellClass::ARTIFICER, SpellClass::SORCERER, SpellClass::WIZARD)
    ],
    [
        // https://www.dndbeyond.com/spells/spare-the-dying
        "name" => "Spare the Dying",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::NECROMANCY,

        "casting_time" => "1 Action",
        "range_area" => "Touch",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::SOMATIC),
        "duration" => "Instant",

        "description" => [ paragraph("You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs.") ],

        "classes" => join_list(SpellClass::ARTIFICER, SpellClass::CLERIC)
    ],
    [
        // http://dnd5e.wikidot.com/spell:sword-burst
        "name" => "Sword Burst",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::CONJURATION,

        "casting_time" => "1 Action",
        "range_area" => "Self (5 foot radius)",
        "components" => SpellComponent::VERBAL,
        "duration" => "Instant",

        "description" => [ paragraph("You create a momentary circle of spectral blades that sweep around you. All other creatures within 5 feet of you must succeed on a Dexterity saving throw or take 1d6 force damage."), paragraph(bold("At higher levels:") . " This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).") ],

        "classes" => join_list(SpellClass::ARTIFICER, SpellClass::SORCERER, SpellClass::WARLOCK, SpellClass::WIZARD)
    ],
    [
        // https://www.dndbeyond.com/spells/thaumaturgy
        "name" => "Thaumaturgy",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::TRANSMUTATION,

        "casting_time" => "1 Action",
        "range_area" => "30 feet",
        "components" => SpellComponent::VERBAL,
        "duration" => "1 minute",

        "description" => [ paragraph("You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects within range:"), unordered_list("Your voice booms up to three times as loud as normal for 1 minute.", "You cause flames to flicker, brighten, dim, or change color for 1 minute.", "You cause harmless tremors in the ground for 1 minute.", "You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.", "You instantaneously cause an unlocked door or window to fly open or slam shut.", "You alter the appearance of your eyes for 1 minute."), paragraph("If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time, and you can dismiss such an effect as an action.") ],

        "classes" => SpellClass::CLERIC
    ],
    [
        // http://dnd5e.wikidot.com/spell:thorn-whip
        "name" => "Thorn Whip",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::TRANSMUTATION,

        "casting_time" => "1 Action",
        "range_area" => "30 feet",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::SOMATIC, SpellComponent::material("the stem of a plant with thorns")),
        "duration" => "Instant",

        "description" => [ paragraph("You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you."), paragraph(bold("At higher levels:") . " This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).") ],

        "classes" => join_list(SpellClass::ARTIFICER, SpellClass::DRUID)
    ],
    [
        // http://dnd5e.wikidot.com/spell:thunderclap
        "name" => "Thunderclap",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::EVOCATION,

        "casting_time" => "1 Action",
        "range_area" => "Self (5 foot radius)",
        "components" => SpellComponent::SOMATIC,
        "duration" => "Instant",

        "description" => [ paragraph("You create a burst of thunderous sound, which can be heard 100 feet away. Each creature other than you within 5 feet of you must make a Constitution saving throw. On a failed save, the creature takes 1d6 thunder damage."), paragraph(bold("At higher levels:") . " The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).") ],

        "classes" => join_list(SpellClass::ARTIFICER, SpellClass::BARD, SpellClass::DRUID, SpellClass::SORCERER, SpellClass::WARLOCK, SpellClass::WIZARD)
    ],
    [
        // http://dnd5e.wikidot.com/spell:toll-the-dead
        "name" => "Toll the Dead",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::NECROMANCY,

        "casting_time" => "1 Action",
        "range_area" => "60 feet",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::SOMATIC),
        "duration" => "Instant",

        "description" => [ paragraph("You point at one creature you can see within range, and the sound of a dolorous bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take 1d8 necrotic damage. If the target is missing any of its hit points, it instead takes 1d12 necrotic damage."), paragraph(bold("At higher levels:") . " The spell's damage increases by one die when you reach 5th level (2d8 or 2d12), 11th level (3d8 or 3d12), and 17th level (4d8 or 4d12).") ],

        "classes" => join_list(SpellClass::CLERIC, SpellClass::WARLOCK, SpellClass::WIZARD)
    ],
    [
        // https://www.dndbeyond.com/spells/true-strike
        "name" => "True Strike",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::DIVINATION,

        "casting_time" => "1 Action",
        "range_area" => "30 feet",
        "components" => SpellComponent::SOMATIC,
        "duration" => "Concentration, up to 1 Round",

        "description" => [ paragraph("You point a finger at a target in range. Your magic grants you a brief insight into the target's defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn't ended.") ],

        "classes" => join_list(SpellClass::BARD, SpellClass::SORCERER, SpellClass::WARLOCK, SpellClass::WIZARD)
    ],
    [
        // https://www.dndbeyond.com/spells/vicious-mockery
        "name" => "Vicious Mockery",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::ENCHANTMENT,

        "casting_time" => "1 Action",
        "range_area" => "60 feet",
        "components" => SpellComponent::VERBAL,
        "duration" => "Instant",

        "description" => [ paragraph("You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (though it need not understand you), it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn."), paragraph(bold("At higher levels:") . " This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).") ],

        "classes" => SpellClass::BARD
    ],
    [
        // http://dnd5e.wikidot.com/spell:word-of-radiance
        "name" => "Word of Radiance",
        "level" => SpellLevel::CANTRIP,
        "school" => SpellSchool::EVOCATION,

        "casting_time" => "1 Action",
        "range_area" => "5 feet",
        "components" => join_list(SpellComponent::VERBAL, SpellComponent::material("a holy symbol")),
        "duration" => "Instant",

        "description" => [ paragraph("You utter a divine word, and burning radiance erupts from you. Each creature of your choice that you can see within range must succeed on a Constitution saving throw or take 1d6 radiant damage."), paragraph(bold("At higher levels:") . " The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).") ],

        "classes" => SpellClass::CLERIC
    ]
];
