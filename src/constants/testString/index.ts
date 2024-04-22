
const strings = [{
    str: "The cafe boasted 15 unique hot chocolate flavors, from classic dark to a surprising white chocolate lavender. Each cup, priced at $3.75, came with a complimentary mini-marshmallow for a delightful indulgence.", 
    isPunc: true, 
    isNumber: true
}, {
    str: `The train screeched to a halt, its digital display flashing "Delay: 20 minutes." Grumbling passengers shuffled in their seats, checking their phones for alternate routes on the 8:12 PM bus.`, 
    isPunc: true, 
    isNumber: true
}, {
    str: `With a flourish, the magician pulled a vibrant red scarf from behind his ear. "This," he declared, "is no ordinary scarf! It can predict tomorrow's weather with 90% accuracy!" The audience, filled with a mix of amusement and skepticism, leaned forward in anticipation.`,
    isPunc: true, 
    isNumber: true
}, {
    str: `Lost in the bustling city library, Sarah scanned the towering shelves. Her fingers brushed against a dusty leather-bound book, its spine marked "18th Century Fables." Intrigued, she pulled it out, eager to explore its forgotten stories.`,
    isPunc: true, 
    isNumber: true
}, {
    str: `The antique shop held a treasure trove of curiosities. A chipped porcelain doll with a missing eye winked at Amelia from a dusty shelf. A chipped teacup, priced at $12.99, boasted a faded floral pattern and a faint scent of lavender.`,
    isPunc: true, 
    isNumber: true
}, {
    str: `The park echoed with the delighted shrieks of children. Swings soared high, their chains creaking rhythmically. A group of friends huddled around a worn chessboard, strategizing their next move under the shade of a giant oak tree.`, 
    isPunc: true, 
    isNumber: true
}, {
    str: `The aroma of freshly baked bread filled the air as Emily entered the bakery. Golden brown loaves lined the shelves, their crusts crackling softly. A display case showcased an array of tempting pastries, each adorned with a delicate swirl of icing.`, 
    isPunc: true, 
    isNumber: true
}, {
    str: `Rain lashed against the windowpanes, a relentless drumming that lulled Sarah into a peaceful state. Curled up with a well-worn novel, she sipped her steaming hot cocoa, the warmth chasing away the chill outside.`, 
    isPunc: true, 
    isNumber: true
}, {
    str: `The bustling market buzzed with activity. Vendors hawked their wares, their voices rising above the cacophony of the crowd. Colorful fabrics draped stalls, while baskets overflowed with fresh fruits and vegetables, their vibrant hues drawing in customers.`, 
    isPunc: true, 
    isNumber: true
}, {
    str: `With a click of the mouse, Sarah booked her flight. The screen displayed her confirmation: departure on July 1st, arriving in Paris on the 2nd. A wave of excitement washed over her, the promise of adventure filling her with anticipation.`,
    isPunc: true, 
    isNumber: true
}, {
    str: "The hiker traversed the rugged terrain scaling cliffs and crossing streams determined to reach the summit before sunset With each step he felt the weight of his pack pressing against his shoulders but the promise of panoramic views kept him motivated 123 the journey was arduous but the reward would be worth it", 
    isPunc: false, 
    isNumber: true
}, {
    str: "In the sprawling metropolis skyscrapers towered over bustling streets casting long shadows as commuters hurried to their destinations Amidst the chaos a street performer entertained passersby with 456 his soulful melodies his guitar echoing against the concrete jungle The city buzzed with energy a symphony of sights and sounds", 
    isPunc: false, 
    isNumber: true
}, {
    str: "Deep in the heart of the forest a family of bears roamed freely foraging for food among the dense foliage 789 Cubs tumbled playfully their mother keeping a watchful eye as they explored their surroundings Sunlight filtered through the canopy dappling the forest floor with golden hues", 
    isPunc: false, 
    isNumber: true
}, {
    str: "Along the winding river a fisherman cast his line into the murky waters patiently waiting for a bite The tranquility of the scene was interrupted only by the occasional splash as fish leaped from the water 101112 The fisherman remained focused knowing that patience was key to a successful catch", 
    isPunc: false, 
    isNumber: true
}, {
    str: "In the quaint village time seemed to stand still with cobblestone streets winding past charming cottages adorned with flower boxes Children played in the town square their laughter mingling with the chiming of church bells 131415 Life moved at a leisurely pace a welcome respite from the hustle and bustle of the city", 
    isPunc: false, 
    isNumber: true
}, {
    str: "Beneath the starry sky campers gathered around a crackling fire sharing stories and roasting marshmallows late into the night The Milky Way stretched overhead a shimmering ribbon of light against the darkness 161718 Each camper felt a sense of awe humbled by the vastness of the universe", 
    isPunc: false, 
    isNumber: true
}, {
    str: "Across the vast plains herds of wildebeests migrated in search of greener pastures their hooves stirring up clouds of dust Lions watched from a distance patiently waiting for an opportunity to hunt 192021 The circle of life played out against the backdrop of the African savanna where survival was a constant struggle", 
    isPunc: false, 
    isNumber: true
}, {
    str: "On the sandy shores waves crashed against the rocks sending spray into the air Seagulls circled overhead their cries mingling with the sound of crashing waves 222324 The rhythmic ebb and flow of the tide lulled beachgoers into a state of relaxation as they soaked up the warmth of the sun", 
    isPunc: false, 
    isNumber: true
}, {
    str: "The hiker traversed the rugged terrain scaling cliffs and crossing streams determined to reach the summit before sunset With each step he felt the weight of his pack pressing against his shoulders but the promise of panoramic views kept him motivated The journey was arduous but the reward would be worth it", 
    isPunc: false, 
    isNumber: false
}, {
    str: "In the sprawling metropolis skyscrapers towered over bustling streets casting long shadows as commuters hurried to their destinations Amidst the chaos a street performer entertained passersby with his soulful melodies his guitar echoing against the concrete jungle The city buzzed with energy a symphony of sights and sounds", 
    isPunc: false, 
    isNumber: false
}, {
    str: "Deep in the heart of the forest a family of bears roamed freely foraging for food among the dense foliage Cubs tumbled playfully their mother keeping a watchful eye as they explored their surroundings Sunlight filtered through the canopy dappling the forest floor with golden hues", 
    isPunc: false, 
    isNumber: false
}, {
    str: "Along the winding river a fisherman cast his line into the murky waters patiently waiting for a bite The tranquility of the scene was interrupted only by the occasional splash as fish leaped from the water The fisherman remained focused knowing that patience was key to a successful catch", 
    isPunc: false, 
    isNumber: false
}, {
    str: "In the quaint village time seemed to stand still with cobblestone streets winding past charming cottages adorned with flower boxes Children played in the town square their laughter mingling with the chiming of church bells Life moved at a leisurely pace a welcome respite from the hustle and bustle of the city",
    isPunc: false, 
    isNumber: false
}, {
    str: "Beneath the starry sky campers gathered around a crackling fire sharing stories and roasting marshmallows late into the night The Milky Way stretched overhead a shimmering ribbon of light against the darkness Each camper felt a sense of awe humbled by the vastness of the universe", 
    isPunc: false, 
    isNumber: false
}, {
    str: "Across the vast plains herds of wildebeests migrated in search of greener pastures their hooves stirring up clouds of dust Lions watched from a distance patiently waiting for an opportunity to hunt The circle of life played out against the backdrop of the African savanna where survival was a constant struggle",
    isPunc: false, 
    isNumber: false
}, {
    str: "On the sandy shores waves crashed against the rocks sending spray into the air Seagulls circled overhead their cries mingling with the sound of crashing waves The rhythmic ebb and flow of the tide lulled beachgoers into a state of relaxation as they soaked up the warmth of the sun",
    isPunc: false, 
    isNumber: false
}, {
    str: "The hiker traversed the rugged terrain, scaling cliffs and crossing streams, determined to reach the summit before sunset. With each step, he felt the weight of his pack pressing against his shoulders, but the promise of panoramic views kept him motivated. The journey was arduous, but the reward would be worth it!", 
    isPunc: true, 
    isNumber: false,
}, {
    str: "In the sprawling metropolis, skyscrapers towered over bustling streets, casting long shadows as commuters hurried to their destinations. Amidst the chaos, a street performer entertained passersby with his soulful melodies, his guitar echoing against the concrete jungle. The city buzzed with energy—a symphony of sights and sounds.", 
    isPunc: true, 
    isNumber: false,
}, {
    str: "Deep in the heart of the forest, a family of bears roamed freely, foraging for food among the dense foliage. Cubs tumbled playfully, their mother keeping a watchful eye as they explored their surroundings. Sunlight filtered through the canopy, dappling the forest floor with golden hues.",
    isPunc: true, 
    isNumber: false,
}, {
    str: "Along the winding river, a fisherman cast his line into the murky waters, patiently waiting for a bite. The tranquility of the scene was interrupted only by the occasional splash as fish leaped from the water. The fisherman remained focused, knowing that patience was key to a successful catch.",
    isPunc: true, 
    isNumber: false,
}, {
    str: "In the quaint village, time seemed to stand still, with cobblestone streets winding past charming cottages adorned with flower boxes. Children played in the town square, their laughter mingling with the chiming of church bells. Life moved at a leisurely pace—a welcome respite from the hustle and bustle of the city.",
    isPunc: true, 
    isNumber: false,
}, {
    str: "Beneath the starry sky, campers gathered around a crackling fire, sharing stories and roasting marshmallows late into the night. The Milky Way stretched overhead, a shimmering ribbon of light against the darkness. Each camper felt a sense of awe, humbled by the vastness of the universe.",
    isPunc: true, 
    isNumber: false,
}, {
    str: "Across the vast plains, herds of wildebeests migrated in search of greener pastures, their hooves stirring up clouds of dust. Lions watched from a distance, patiently waiting for an opportunity to hunt. The circle of life played out against the backdrop of the African savanna, where survival was a constant struggle.",
    isPunc: true, 
    isNumber: false,
}, {
    str: "On the sandy shores, waves crashed against the rocks, sending spray into the air. Seagulls circled overhead, their cries mingling with the sound of crashing waves. The rhythmic ebb and flow of the tide lulled beachgoers into a state of relaxation as they soaked up the warmth of the sun.", 
    isPunc: true, 
    isNumber: false,
}, {
    str: "In the bustling market, vendors shouted their wares, enticing shoppers with colorful displays of fruits and vegetables. Aromas of spices and freshly baked bread filled the air, creating a sensory feast for the senses. Bargaining ensued as customers haggled for the best deals, adding to the vibrant energy of the scene.", 
    isPunc: true, 
    isNumber: false,
}, {
    str: "At the edge of the forest, a lone wolf howled at the moon, its mournful cry echoing through the night. The sound sent shivers down the spines of nearby travelers, reminding them of the untamed wilderness that lay beyond. Yet, amidst the darkness, there was a strange beauty—a reminder of the wild spirit that dwelled within us all.", 
    isPunc: true, 
    isNumber: false,
}]

export default strings