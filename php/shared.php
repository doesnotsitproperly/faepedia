<?php

class Level {
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

class School {
    const ABJURATION = "🛡️ Abjuration";
    const CONJURATION = "🔀 Conjuration";
    const DIVINATION = "🔮 Divination";
    const ENCHANTMENT = "😵‍💫 Enchantment";
    const EVOCATION = "🪄 Evocation";
    const ILLUSION = "❓ Illusion";
    const NECROMANCY = "☠️ Necromancy";
    const TRANSMUTATION = "🔁 Transmutation";
}

class _Class {
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

// HTML
function bold(string $s): string {
    return "<b>" . $s . "</b>";
}
function paragraph(string $s): string {
    return "</p>" . $s . "</p>";
}
function unordered_list(string ...$s): string {
    $items = "";
    foreach ($s as $item) {
        $items .= "<li>" . $item . "</li>";
    }
    return "<ul>" . $items . "/ul";
}

// Formatting
function to_camel_case(string $s): string {
    $first = true;
    $new_string = "";
    foreach (str_split($s) as $char) {
        if ($first) {
            $new_string .= strtolower($char);
            $first = false;
        } elseif ($char != " ") {
            $new_string .= $char;
        }
    }
    return $new_string;
}
function to_kebab_case(string $s): string {
    $new_string = "";
    foreach (str_split($s) as $char) {
        if (ctype_upper($char)) {
            $new_string .= strtolower($char);
        } elseif ($char == " ") {
            $new_string .= "-";
        } else {
            $new_string .= $char;
        }
    }
    return $new_string;
}

$seperator = ", ";

$spells = [
    [
        // https://www.dndbeyond.com/spells/acid-splash
        "name" => "Acid Splash",
        "level" => Level::CANTRIP,
        "school" => School::CONJURATION,

        "casting_time" => "1 Action",
        "range_area" => "60 feet",
        "components" => "V, S",
        "duration" => "Instant",

        "description" => paragraph("You hurl a bubble of acid. Choose one or two creatures you can see within range. If you choose two, they must be within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.") . paragraph(bold("At higher levels:") . " This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."),

        "classes" => implode($seperator, [ _Class::ARTIFICER, _Class::SORCERER, _Class::WIZARD ])
    ],
    [
        // http://dnd5e.wikidot.com/spell:blade-ward
        "name" => "Blade Ward",
        "level" => Level::CANTRIP,
        "school" => School::ABJURATION,

        "casting_time" => "1 Action",
        "range_area" => "Self",
        "components" => "V, S",
        "duration" => "1 Round",

        "description" => paragraph("You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks."),

        "classes" => implode($seperator, [ _Class::BARD, _Class::SORCERER, _Class::WARLOCK, _Class::WIZARD ])
    ],
    [
        // http://dnd5e.wikidot.com/spell:booming-blade
        "name" => "Booming Blade",
        "level" => Level::CANTRIP,
        "school" => School::EVOCATION,

        "casting_time" => "1 Action",
        "range_area" => "Self (5 foot radius)",
        "components" => "S, M (a melee weapon worth at least 1 silver piece)",
        "duration" => "1 Round",

        "description" => paragraph("You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects and then becomes sheathed in booming energy until the start of your next turn. If the target willingly moves 5 feet or more before then, the target takes 1d8 thunder damage, and the spell ends.") . paragraph(bold("At higher levels:") . " At 5th level, the melee attack deals an extra 1d8 thunder damage to the target on a hit, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level (2d8 and 3d8) and again at 17th level (3d8 and 4d8)."),

        "classes" => implode($seperator, [ _Class::ARTIFICER, _CLASS::SORCERER, _Class::WARLOCK, _Class::WIZARD ])
    ],
    [
        // https://www.dndbeyond.com/spells/chill-touch
        "name" => "Chill Touch",
        "level" => Level::CANTRIP,
        "school" => School::NECROMANCY,

        "casting_time" => "1 Action",
        "range_area" => "120 feet",
        "components" => "V, S",
        "duration" => "1 Round",

        "description" => paragraph("You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target.") . paragraph("If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn.") . paragraph(bold("At higher levels:") . " This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."),

        "classes" => implode($seperator, [ _Class::SORCERER, _Class::WARLOCK, _Class::WIZARD ])
    ],
    [
        // http://dnd5e.wikidot.com/spell:control-flames
        "name" => "Control Flames",
        "level" => Level::CANTRIP,
        "school" => School::TRANSMUTATION,

        "casting_time" => "1 Action",
        "range_area" => "60 feet",
        "components" => "S",
        "duration" => "Instant or 1 hour",

        "description" => paragraph("You choose a nonmagical flame that you can see within range and that fits within a 5-foot cube. You affect it in one of the following ways:") . unordered_list("You instantaneously expand the flame 5 feet in one direction, provided that wood or other fuel is present in the new location.", "You instantaneously extinguish the flames within the cube.", "You double or halve the area of bright light and dim light cast by the flame, change its color, or both. The change lasts for 1 hour.", "You cause simple shapes—such as the vague form of a creature, an inanimate object, or a location—to appear within the flames and animate as you like. The shapes last for 1 hour.") . paragraph("If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."),

        "classes" => implode($seperator, [ _Class::DRUID, _Class::SORCERER, _Class::WIZARD ])
    ],
    [
        // http://dnd5e.wikidot.com/spell:create-bonfire
        "name" => "Create Bonfire",
        "level" => Level::CANTRIP,
        "school" => School::CONJURATION,

        "casting_time" => "1 Action",
        "range_area" => "60 feet",
        "components" => "V, S",
        "duration" => "Concentration, up to 1 minute",

        "description" => paragraph("You create a bonfire on ground that you can see within range. Until the spell ends, the bonfire fills a 5-foot cube. Any creature in the bonfire's space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 fire damage. A creature must also make the saving throw when it enters the bonfire's space for the first time on a turn or ends its turn there.") . paragraph(bold("At higher levels:") . " The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."),

        "classes" => implode($seperator, [ _Class::DRUID, _Class::SORCERER, _Class::WARLOCK, _Class::WIZARD ])
    ],
    [
        // https://www.dndbeyond.com/spells/dancing-lights
        "name" => "Dancing Lights",
        "level" => Level::CANTRIP,
        "school" => School::EVOCATION,

        "casting_time" => "1 Action",
        "range_area" => "120 feet",
        "components" => "V, S, M (a bit of phosphorus or wychwood, or a glowworm)",
        "duration" => "Concentration, up to 1 minute",

        "description" => paragraph("You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius.") . paragraph("As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell's range."),

        "classes" => implode($seperator, [ _Class::ARTIFICER, _Class::BARD, _Class::SORCERER, _Class::WIZARD ])
    ],
    [
        // https =>//www.dndbeyond.com/spells/DRUIDcraft
        "name" => "Druidcraft",
        "level" => Level::CANTRIP,
        "school" => School::TRANSMUTATION,

        "casting_time" => "1 Action",
        "range_area" => "30 feet",
        "components" => "V, S",
        "duration" => "Instant",

        "description" => paragraph("Whispering to the spirits of nature, you create one of the following effects within range =>") . unordered_list( "You create a tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours. The effect might manifest as a golden orb for clear skies, a cloud for rain, falling snowflakes for snow, and so on. This effect persists for 1 round.", "You instantly make a flower blossom, a seed pod open, or a leaf bud bloom.", "You create an instantaneous, harmless sensory effect, such as falling leaves, a puff of wind, the sound of a small animal, or the faint odor of skunk. The effect must fit in a 5-foot cube.", "You instantly light or snuff out a candle, a torch, or a small campfire."),

        "classes" => _Class::DRUID
    ],
    [
        // https =>//www.dndbeyond.com/spells/eldritch-blast
        "name" => "Eldritch Blast",
        "level" => Level::CANTRIP,
        "school" => School::EVOCATION,

        "casting_time" => "1 Action",
        "range_area" => "120 feet",
        "components" => "V, S",
        "duration" => "Instant",

        "description" => paragraph("A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage.") . paragraph(bold("At higher levels =>") . " The spell creates more than one beam when you reach higher levels => two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam."),

        "classes" => _Class::WARLOCK
    ],
    [
        // http =>//dnd5e.wikidot.com/spell:encode-thoughts
        "name" => "Encode Thoughts",
        "level" => Level::CANTRIP,
        "school" => School::ENCHANTMENT,

        "casting_time" => "1 Action",
        "range_area" => "Self",
        "components" => "S",
        "duration" => "8 hours",

        "description" => paragraph("You pull a memory, an idea, or a message from your mind and transform it into a tangible string of glowing energy called a thought strand, which persists for the duration or until you cast this spell again. The thought strand appears in an unoccupied space within 5 feet of you as a Tiny, weightless, semisolid object that can be held and carried like a ribbon. It is otherwise stationary.") . paragraph("If you cast this spell while concentrating on a spell or an ability that allows you to read or manipulate the thoughts of others (such as Detect Thoughts or Modify Memory), you can transform the thoughts or memories you read, rather than your own, into a thought strand.") . paragraph("Casting this spell while holding a thought strand allows you to instantly receive whatever memory, idea, or message the thought strand contains. (Casting Detect Thoughts on the strand has the same effect.)"),

        "classes" => _Class::WIZARD
    ],
    [
        // https =>//www.dndbeyond.com/spells/fire-bolt
        "name" => "Fire Bolt",
        "level" => Level::CANTRIP,
        "school" => School::EVOCATION,

        "casting_time" => "1 Action",
        "range_area" => "120 feet",
        "components" => "V, S",
        "duration" => "Instant",

        "description" => paragraph("You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried.") . paragraph(bold("At higher levels =>") . " This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."),

        "classes" => implode($seperator, [ _Class::ARTIFICER, _Class::SORCERER, _Class::WIZARD ])
    ],
    [
        // http =>//dnd5e.wikidot.com/spell:friends
        "name" => "Friends",
        "level" => Level::CANTRIP,
        "school" => School::ENCHANTMENT,

        "casting_time" => "1 Action",
        "range_area" => "Self",
        "components" => "S, M (a small amount of makeup applied to the face as this spell is cast)",
        "duration" => "Concentration, up to 1 minute",

        "description" => paragraph("For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn't hostile toward you. When the spell ends, the creature realizes that you used magic to influence its mood and becomes hostile toward you. A creature prone to violence might attack you. Another creature might seek retribution in other ways (at the DM's discretion), depending on the nature of your interaction with it."),

        "classes" => implode($seperator, [ _Class::BARD, _Class::SORCERER, _Class::WARLOCK, _Class::WIZARD ])
    ],
    [
        // http =>//dnd5e.wikidot.com/spell:frostbite
        "name" => "Frostbite",
        "level" => Level::CANTRIP,
        "school" => School::EVOCATION,

        "casting_time" => "1 Action",
        "range_area" => "60 feet",
        "components" => "V, S",
        "duration" => "Instant",

        "description" => paragraph("You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 1d6 cold damage, and it has disadvantage on the next weapon attack roll it makes before the end of its next turn.") . paragraph(bold("At higher levels =>") . " The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."),

        "classes" => implode($seperator, [ _Class::ARTIFICER, _Class::DRUID, _Class::SORCERER, _Class::WARLOCK, _Class::WIZARD ])
    ],
    [
        // http =>//dnd5e.wikidot.com/spell:green-flame-blade
        "name" => "Green-Flame Blade",
        "level" => Level::CANTRIP,
        "school" => School::EVOCATION,

        "casting_time" => "1 Action",
        "range_area" => "Self (5 foot radius)",
        "components" => "S, M (a melee weapon worth at least 1 silver piece)",
        "duration" => "Instant",

        "description" => paragraph("You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects, and you can cause green fire to leap from the target to a different creature of your choice that you can see within 5 feet of it. The second creature takes fire damage equal to your spellcasting ability modifier.") . paragraph(bold("At higher levels =>") . " At 5th level, the melee attack deals an extra 1d8 fire damage to the target on a hit, and the fire damage to the second creature increases to 1d8 . your spellcasting ability modifier. Both damage rolls increase by 1d8 at 11th level (2d8 and 2d8) and 17th level (3d8 and 3d8)."),

        "classes" => implode($seperator, [ _Class::ARTIFICER, _Class::SORCERER, _Class::WARLOCK, _Class::WIZARD ])
    ],
    [
        // https =>//www.dndbeyond.com/spells/guidance
        "name" => "Guidance",
        "level" => Level::CANTRIP,
        "school" => School::DIVINATION,

        "casting_time" => "1 Action",
        "range_area" => "Touch",
        "components" => "V, S",
        "duration" => "Concentration, up to 1 minute",

        "description" => paragraph("You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends."),

        "classes" => implode($seperator, [ _Class::ARTIFICER, _Class::CLERIC, _Class::DRUID ])
    ],
    [
        // http =>//dnd5e.wikidot.com/spell:gust
        "name" => "Gust",
        "level" => Level::CANTRIP,
        "school" => School::TRANSMUTATION,

        "casting_time" => "1 Action",
        "range_area" => "30 feet",
        "components" => "V, S",
        "duration" => "Instant",

        "description" => paragraph("You seize the air and compel it to create one of the following effects at a point you can see within range =>") . unordered_list("One Medium or smaller creature that you choose must succeed on a Strength saving throw or be pushed up to 5 feet away from you.", "You create a small blast of air capable of moving one object that is neither held nor carried and that weighs no more than 5 pounds. The object is pushed up to 10 feet away from you. It isn't pushed with enough force to cause damage.", "You create a harmless sensory affect using air, such as causing leaves to rustle, wind to slam shutters shut, or your clothing to ripple in a breeze."),

        "classes" => implode($seperator, [ _Class::DRUID, _Class::SORCERER, _Class::WIZARD ])
    ],
    [
        // http =>//dnd5e.wikidot.com/spell:infestation
        "name" => "Infestation",
        "level" => Level::CANTRIP,
        "school" => School::CONJURATION,

        "casting_time" => "1 Action",
        "range_area" => "30 feet",
        "components" => "V, S, M (a living flea)",
        "duration" => "Instant",

        "description" => paragraph("You cause a cloud of mites, fleas, and other parasites to appear momentarily on one creature you can see within range. The target must succeed on a Constitution saving throw, or it takes 1d6 poison damage and moves 5 feet in a random direction if it can move and its speed is at least 5 feet. Roll a d4 for the direction => 1, north; 2, south; 3, east; or 4, west. This movement doesn't provoke opportunity attacks, and if the direction rolled is blocked, the target doesn't move.") . paragraph(bold("At higher levels =>") . " The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."),

        "classes" => implode($seperator, [ _Class::DRUID, _Class::SORCERER, _Class::WARLOCK, _Class::WIZARD ])
    ],
    [
        // https =>//www.dndbeyond.com/spells/light
        "name" => "Light",
        "level" => Level::CANTRIP,
        "school" => School::EVOCATION,

        "casting_time" => "1 Action",
        "range_area" => "Touch",
        "components" => "V, M (a firefly or phosphorescent moss)",
        "duration" => "1 hour",

        "description" => paragraph("You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action.") . paragraph("If you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell."),

        "classes" => implode($seperator, [ _Class::ARTIFICER, _Class::BARD, _Class::CLERIC, _Class::SORCERER, _Class::WIZARD ])
    ],
    [
        // http =>//dnd5e.wikidot.com/spell:lightning-lure
        "name" => "Lightning Lure",
        "level" => Level::CANTRIP,
        "school" => School::EVOCATION,

        "casting_time" => "1 Action",
        "range_area" => "Self (15 foot radius)",
        "components" => "V",
        "duration" => "Instant",

        "description" => paragraph("You create a lash of lightning energy that strikes at one creature of your choice that you can see within 15 feet of you. The target must succeed on a Strength saving throw or be pulled up to 10 feet in a straight line toward you and then take 1d8 lightning damage if it is within 5 feet of you.") . paragraph(bold("At higher levels =>") . " This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."),

        "classes" => implode($seperator, [ _Class::ARTIFICER, _Class::SORCERER, _Class::WARLOCK, _Class::WIZARD ])
    ],
    [
        // https =>//www.dndbeyond.com/spells/mage-hand
        "name" => "Mage Hand",
        "level" => Level::CANTRIP,
        "school" => School::CONJURATION,

        "casting_time" => "1 Action",
        "range_area" => "30 feet",
        "components" => "V, S",
        "duration" => "1 minute",

        "description" => paragraph("A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.") . paragraph("You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it.") . paragraph("The hand can't attack, activate magic items, or carry more than 10 pounds."),

        "classes" => implode($seperator, [ _Class::ARTIFICER, _Class::BARD, _Class::SORCERER, _Class::WARLOCK, _Class::WIZARD ])
    ],
    [
        // http =>//dnd5e.wikidot.com/spell:magic-stone
        "name" => "Magic Stone",
        "level" => Level::CANTRIP,
        "school" => School::TRANSMUTATION,

        "casting_time" => "1 Bonus Action",
        "range_area" => "Touch",
        "components" => "V, S",
        "duration" => "1 minute",

        "description" => paragraph("You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling. If thrown, it has a range of 60 feet. If someone else attacks with the pebble, that attacker adds your spellcasting ability modifier, not the attacker's, to the attack roll. On a hit, the target takes bludgeoning damage equal to 1d6 . your spellcasting ability modifier. Hit or miss, the spell then ends on the stone.") . paragraph("If you cast this spell again, the spell ends early on any pebbles still affected by it."),

        "classes" => implode($seperator, [ _Class::ARTIFICER, _Class::DRUID, _Class::WARLOCK ])
    ],
    [
        // https =>//www.dndbeyond.com/spells/mending
        "name" => "Mending",
        "level" => Level::CANTRIP,
        "school" => School::TRANSMUTATION,

        "casting_time" => "1 minute",
        "range_area" => "Touch",
        "components" => "V, S, M (two lodestones)",
        "duration" => "Instant",

        "description" => paragraph("This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage.") . paragraph("This spell can physically repair a magic item or construct, but the spell can't restore magic to such an object."),

        "classes" => implode($seperator, [ _Class::ARTIFICER, _Class::BARD, _Class::CLERIC, _Class::DRUID, _Class::SORCERER, _Class::WIZARD ])
    ],
    [
        // https =>//www.dndbeyond.com/spells/message
        "name" => "Message",
        "level" => Level::CANTRIP,
        "school" => School::TRANSMUTATION,

        "casting_time" => "1 Action",
        "range_area" => "120 feet",
        "components" => "V, S, M (a short piece of copper wire)",
        "duration" => "1 Round",

        "description" => paragraph("You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.") . paragraph("You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn't have to follow a straight line and can travel freely around corners or through openings."),

        "classes" => implode($seperator, [ _Class::ARTIFICER, _Class::BARD, _Class::SORCERER, _Class::WIZARD ])
    ],
    [
        // http =>//dnd5e.wikidot.com/spell:mind-sliver
        "name" => "Mind Sliver",
        "level" => Level::CANTRIP,
        "school" => School::ENCHANTMENT,

        "casting_time" => "1 Action",
        "range_area" => "60 feet",
        "components" => "V",
        "duration" => "1 Round",

        "description" => paragraph("You drive a disorienting spike of psychic energy into the mind of one creature you can see within range. The target must succeed on an Intelligence saving throw or take 1d6 psychic damage and subtract 1d4 from the next saving throw it makes before the end of your next turn.") . paragraph(bold("At higher levels =>") . " This spell's damage increases by 1d6 when you reach certain levels => 5th level (2d6), 11th level (3d6), and 17th level (4d6)."),

        "classes" => implode($seperator, [ _Class::SORCERER, _Class::WARLOCK, _Class::WIZARD ])
    ],
    [
        // https =>//www.dndbeyond.com/spells/minor-illusion
        "name" => "Minor Illusion",
        "level" => Level::CANTRIP,
        "school" => School::ILLUSION,

        "casting_time" => "1 Action",
        "range_area" => "30 feet",
        "components" => "S, M (a bit of fleece)",
        "duration" => "1 minute",

        "description" => paragraph("You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.") . paragraph("If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends.") . paragraph("If you create an image of an object--such as a chair, muddy footprints, or a small chest--it must be no larger than a 5-foot cube. The image can't create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it.") . paragraph("If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature."),

        "classes" => implode($seperator, [ _Class::BARD, _Class::SORCERER, _Class::WARLOCK, _Class::WIZARD ])
    ],
    [
        // http =>//dnd5e.wikidot.com/spell:mold-earth
        "name" => "Mold Earth",
        "level" => Level::CANTRIP,
        "school" => School::TRANSMUTATION,

        "casting_time" => "1 Action",
        "range_area" => "30 feet",
        "components" => "S",
        "duration" => "Instant or 1 hour",

        "description" => paragraph("You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways =>") . unordered_list("If you target an area of loose earth, you can instantaneously excavate it, move it along the ground, and deposit it up to 5 feet away. This movement doesn't have enough force to cause damage.", "You cause shapes, colors, or both to appear on the dirt or stone, spelling out words, creating images, or shaping patterns. The changes last for 1 hour.", "If the dirt or stone you target is on the ground, you cause it to become difficult terrain. Alternatively, you can cause the ground to become normal terrain if it is already difficult terrain. This change lasts for 1 hour.") . paragraph("If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."),

        "classes" => implode($seperator, [ _Class::DRUID, _Class::SORCERER, _Class::WIZARD ])
    ],
    [
        // https =>//www.dndbeyond.com/spells/poison-spray
        "name" => "Poison Spray",
        "level" => Level::CANTRIP,
        "school" => School::CONJURATION,

        "casting_time" => "1 Action",
        "range_area" => "10 feet",
        "components" => "V, S",
        "duration" => "Instant",

        "description" => paragraph("You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage.") . paragraph(bold("At higher levels =>") . " This spell's damage increases by 1d12 when you reach 5th level (2d12), 11th level (3d12), and 17th level (4d12)."),

        "classes" => implode($seperator, [ _Class::ARTIFICER, _Class::DRUID, _Class::SORCERER, _Class::WARLOCK, _Class::WIZARD ])
    ],
    [
        // https =>//www.dndbeyond.com/spells/prestidigitation
        "name" => "Prestidigitation",
        "level" => Level::CANTRIP,
        "school" => School::TRANSMUTATION,

        "casting_time" => "1 Action",
        "range_area" => "10 feet",
        "components" => "V, S",
        "duration" => "1 hour",

        "description" => paragraph("This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range =>") . unordered_list("You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.", "You instantaneously light or snuff out a candle, a torch, or a small campfire.", "You instantaneously clean or soil an object no larger than 1 cubic foot.", "You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.", "You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.", "You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn.") . paragraph("If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."),

        "classes" => implode($seperator, [ _Class::ARTIFICER, _Class::BARD, _Class::SORCERER, _Class::WARLOCK, _Class::WIZARD ])
    ],
    [
        // http =>//dnd5e.wikidot.com/spell:primal-savagery
        "name" => "Primal Savagery",
        "level" => Level::CANTRIP,
        "school" => School::TRANSMUTATION,

        "casting_time" => "1 Action",
        "range_area" => "Self",
        "components" => "S",
        "duration" => "Instant",

        "description" => paragraph("You channel primal magic to cause your teeth or fingernails to sharpen, ready to deliver a corrosive attack. Make a melee spell attack against one creature within 5 feet of you. On a hit, the target takes 1d10 acid damage. After you make the attack, your teeth or fingernails return to normal.") . paragraph(bold("At higher levels =>") . " The spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."),

        "classes" => _Class::DRUID
    ],
    [
        // https =>//www.dndbeyond.com/spells/produce-flame
        "name" => "Produce Flame",
        "level" => Level::CANTRIP,
        "school" => School::CONJURATION,

        "casting_time" => "1 Action",
        "range_area" => "Self",
        "components" => "V, S",
        "duration" => "10 minutes",

        "description" => paragraph("A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it again.") . paragraph("You can also attack with the flame, although doing so ends the spell. When you cast this spell, or as an action on a later turn, you can hurl the flame at a creature within 30 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 fire damage.") . paragraph(bold("At higher levels =>") . " This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."),

        "classes" => _Class::DRUID
    ],
    [
        // https =>//www.dndbeyond.com/spells/ray-of-frost
        "name" => "Ray of Frost",
        "level" => Level::CANTRIP,
        "school" => School::EVOCATION,

        "casting_time" => "1 Action",
        "range_area" => "60 feet",
        "components" => "V, S",
        "duration" => "Instant",

        "description" => paragraph("A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn.") . paragraph(bold("At higher levels =>") . " The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."),

        "classes" => implode($seperator, [ _Class::ARTIFICER, _Class::SORCERER, _Class::WIZARD ])
    ],
    [
        // https =>//www.dndbeyond.com/spells/resistance
        "name" => "Resistance",
        "level" => Level::CANTRIP,
        "school" => School::ABJURATION,

        "casting_time" => "1 Action",
        "range_area" => "Touch",
        "components" => "V, S, M (a miniature cloak)",
        "duration" => "Concentration, up to 1 minute",

        "description" => paragraph("You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one saving throw of its choice. It can roll the die before or after making the saving throw. The spell then ends."),

        "classes" => implode($seperator, [ _Class::ARTIFICER, _Class::CLERIC, _Class::DRUID ])
    ],
    [
        // https =>//www.dndbeyond.com/spells/sacred-flame
        "name" => "Sacred Flame",
        "level" => Level::CANTRIP,
        "school" => School::EVOCATION,

        "casting_time" => "1 Action",
        "range_area" => "60 feet",
        "components" => "V, S",
        "duration" => "Instant",

        "description" => paragraph("Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.") . paragraph(bold("At higher levels =>") . " The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."),

        "classes" => _Class::CLERIC
    ],
    [
        // http =>//dnd5e.wikidot.com/spell:sapping-sting
        "name" => "Sapping Sting",
        "level" => Level::CANTRIP,
        "school" => School::NECROMANCY,

        "casting_time" => "1 Action",
        "range_area" => "30 feet",
        "components" => "V, S",
        "duration" => "Instant",

        "description" => paragraph("You sap the vitality of one creature you can see in range. The target must succeed on a Constitution saving throw or take 1d4 necrotic damage and fall prone.") . paragraph(bold("At higher levels =>") . " This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4)."),

        "classes" => _Class::WIZARD
    ],
    [
        // http =>//dnd5e.wikidot.com/spell:shape-water
        "name" => "Shape Water",
        "level" => Level::CANTRIP,
        "school" => School::TRANSMUTATION,

        "casting_time" => "1 Action",
        "range_area" => "30 feet",
        "components" => "S",
        "duration" => "Instant or 1 hour",

        "description" => paragraph("You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways =>") . unordered_list("You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesn't have enough force to cause damage.", "You cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour.", "You change the water's color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour.", "You freeze the water, provided that there are no creatures in it. The water unfreezes in 1 hour.") . paragraph("If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."),

        "classes" => implode($seperator, [ _Class::DRUID, _Class::SORCERER, _Class::WIZARD ])
    ],
    [
        // https =>//www.dndbeyond.com/spells/shillelagh
        "name" => "Shillelagh",
        "level" => Level::CANTRIP,
        "school" => School::TRANSMUTATION,

        "casting_time" => "1 Bonus Action",
        "range_area" => "Touch",
        "components" => "V, S, M (mistletoe, a shamrock leaf, and a club or quarterstaff)",
        "duration" => "1 minute",

        "description" => paragraph("The wood of a club or quarterstaff you are holding is imbued with nature's power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. The weapon also becomes magical, if it isn't already. The spell ends if you cast it again or if you let go of the weapon."),

        "classes" => _Class::DRUID
    ],
    [
        // https =>//www.dndbeyond.com/spells/shocking-grasp
        "name" => "Shocking Grasp",
        "level" => Level::CANTRIP,
        "school" => School::EVOCATION,

        "casting_time" => "1 Action",
        "range_area" => "Touch",
        "components" => "V, S",
        "duration" => "Instant",

        "description" => paragraph("Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 1d8 lightning damage, and it can't take reactions until the start of its next turn.") . paragraph(bold("At higher levels =>") . " The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."),

        "classes" => implode($seperator, [ _Class::ARTIFICER, _Class::SORCERER, _Class::WIZARD ])
    ],
    [
        // https =>//www.dndbeyond.com/spells/spare-the-dying
        "name" => "Spare the Dying",
        "level" => Level::CANTRIP,
        "school" => School::NECROMANCY,

        "casting_time" => "1 Action",
        "range_area" => "Touch",
        "components" => "V, S",
        "duration" => "Instant",

        "description" => paragraph("You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs."),

        "classes" => implode($seperator, [ _Class::ARTIFICER, _Class::CLERIC ])
    ],
    [
        // http =>//dnd5e.wikidot.com/spell:sword-burst
        "name" => "Sword Burst",
        "level" => Level::CANTRIP,
        "school" => School::CONJURATION,

        "casting_time" => "1 Action",
        "range_area" => "Self (5 foot radius)",
        "components" => "V",
        "duration" => "Instant",

        "description" => paragraph("You create a momentary circle of spectral blades that sweep around you. All other creatures within 5 feet of you must succeed on a Dexterity saving throw or take 1d6 force damage.") . paragraph(bold("At higher levels =>") . " This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."),

        "classes" => implode($seperator, [ _Class::ARTIFICER, _Class::SORCERER, _Class::WARLOCK, _Class::WIZARD ])
    ],
    [
        // https =>//www.dndbeyond.com/spells/thaumaturgy
        "name" => "Thaumaturgy",
        "level" => Level::CANTRIP,
        "school" => School::TRANSMUTATION,

        "casting_time" => "1 Action",
        "range_area" => "30 feet",
        "components" => "V",
        "duration" => "1 minute",

        "description" => paragraph("You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects within range =>") . unordered_list("Your voice booms up to three times as loud as normal for 1 minute.", "You cause flames to flicker, brighten, dim, or change color for 1 minute.", "You cause harmless tremors in the ground for 1 minute.", "You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.", "You instantaneously cause an unlocked door or window to fly open or slam shut.", "You alter the appearance of your eyes for 1 minute.") . paragraph("If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time, and you can dismiss such an effect as an action."),

        "classes" => _Class::CLERIC
    ],
    [
        // http =>//dnd5e.wikidot.com/spell:thorn-whip
        "name" => "Thorn Whip",
        "level" => Level::CANTRIP,
        "school" => School::TRANSMUTATION,

        "casting_time" => "1 Action",
        "range_area" => "30 feet",
        "components" => "V, S, M (the stem of a plant with thorns)",
        "duration" => "Instant",

        "description" => paragraph("You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you.") . paragraph(bold("At higher levels =>") . " This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."),

        "classes" => implode($seperator, [ _Class::ARTIFICER, _Class::DRUID ])
    ],
    [
        // http =>//dnd5e.wikidot.com/spell:thunderclap
        "name" => "Thunderclap",
        "level" => Level::CANTRIP,
        "school" => School::EVOCATION,

        "casting_time" => "1 Action",
        "range_area" => "Self (5 foot radius)",
        "components" => "S",
        "duration" => "Instant",

        "description" => paragraph("You create a burst of thunderous sound, which can be heard 100 feet away. Each creature other than you within 5 feet of you must make a Constitution saving throw. On a failed save, the creature takes 1d6 thunder damage.") . paragraph(bold("At higher levels =>") . " The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."),

        "classes" => implode($seperator, [ _Class::ARTIFICER, _Class::BARD, _Class::DRUID, _Class::SORCERER, _Class::WARLOCK, _Class::WIZARD ])
    ],
    [
        // http =>//dnd5e.wikidot.com/spell:toll-the-dead
        "name" => "Toll the Dead",
        "level" => Level::CANTRIP,
        "school" => School::NECROMANCY,

        "casting_time" => "1 Action",
        "range_area" => "60 feet",
        "components" => "V, S",
        "duration" => "Instant",

        "description" => paragraph("You point at one creature you can see within range, and the sound of a dolorous bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take 1d8 necrotic damage. If the target is missing any of its hit points, it instead takes 1d12 necrotic damage.") . paragraph(bold("At higher levels =>") . " The spell's damage increases by one die when you reach 5th level (2d8 or 2d12), 11th level (3d8 or 3d12), and 17th level (4d8 or 4d12)."),

        "classes" => implode($seperator, [ _Class::CLERIC, _Class::WARLOCK, _Class::WIZARD ])
    ],
    [
        // https =>//www.dndbeyond.com/spells/true-strike
        "name" => "True Strike",
        "level" => Level::CANTRIP,
        "school" => School::DIVINATION,

        "casting_time" => "1 Action",
        "range_area" => "30 feet",
        "components" => "S",
        "duration" => "Concentration, up to 1 Round",

        "description" => paragraph("You point a finger at a target in range. Your magic grants you a brief insight into the target's defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn't ended."),

        "classes" => implode($seperator, [ _Class::BARD, _Class::SORCERER, _Class::WARLOCK, _Class::WIZARD ])
    ],
    [
        // https =>//www.dndbeyond.com/spells/vicious-mockery
        "name" => "Vicious Mockery",
        "level" => Level::CANTRIP,
        "school" => School::ENCHANTMENT,

        "casting_time" => "1 Action",
        "range_area" => "60 feet",
        "components" => "V",
        "duration" => "Instant",

        "description" => paragraph("You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (though it need not understand you), it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.") . paragraph(bold("At higher levels =>") . " This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4)."),

        "classes" => _Class::BARD
    ],
    [
        // http =>//dnd5e.wikidot.com/spell:word-of-radiance
        "name" => "Word of Radiance",
        "level" => Level::CANTRIP,
        "school" => School::EVOCATION,

        "casting_time" => "1 Action",
        "range_area" => "5 feet",
        "components" => "V, M (a holy symbol)",
        "duration" => "Instant",

        "description" => paragraph("You utter a divine word, and burning radiance erupts from you. Each creature of your choice that you can see within range must succeed on a Constitution saving throw or take 1d6 radiant damage.") . paragraph(bold("At higher levels =>") . " The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."),

        "classes" => _Class::CLERIC
    ]
];
