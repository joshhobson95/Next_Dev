const seasonalTasks = {
    jan: [
      'Make plans for gardens and landscape.',
      'On sunny days, do some winter pruning.',
      'Water trees, shrubs and garden.',
      'Inspect houseplants, repot if needed, mildly fertilize and clean up.',
      'Apply Bonide All Seasons spray to fruit trees, shade trees and shrubs.',
      'Prepare gardening tools for spring, clean sharpen and oil.',
      'Check our website for a list of upcoming seminars.',
      'Attend January seminars.',
      'Pledge to read all labels thoroughly on fertilizers, pesticides, and herbicides that you will use all year.',
    ],
    feb: [
      'Transplant mislocated plants.',
      'Spruce up outdoor containers with pansies, kale and dusty miller.',
      'Clean up perennial beds, carefully turn soil and add compost. Keep an eye out for bulbs.',
      'Prune fruit trees.',
      'Add compost to fruit and berry beds.',
      'Prune shade trees.',
      'Prune summer and fall blooming shrubs.',
      'Strong spray of water on evergreens and look for early aphids.',
      'Spray Bonide dormant oils on evergreens, except blue spruce.',
      'Deep water all trees and shrubs.',
      'Dethatch, aerate and water lawns.',
      'Start broccoli, cabbage, lettuce and slow growing annuals indoors.',
      'Plant flowering sweet peas.',
      'Start new compost pile.',
      'Come in and meet our friendly staff and find out what’s new for the coming year.',
      'Attend February seminars.',
      'Purchase plants for Valentines Day.',
      'Eliminate winter annual weeds, such as wild mustard.',
    ],
    mar: [
      'Plant lettuce, radishes, carrots, peas, beets and turnips.',
      'Plant cool season vegetables such as cabbage, cauliflower, Brussels sprouts and broccoli mid-month.',
      'Plant onion sets.',
      'Plant tomatoes in Early Season Plant Protectors.',
      'Plant second planting of lettuce after the 15th of March.',
      'Plant hardy annuals and perennials. Great time to divide summer and fall blooming perennials.',
      'Plant strawberries, rhubarb and asparagus.',
      'It’s a great time to plant trees and shrubs. See our planting guide for specifics.',
      'Water and feed evergreens.',
      'Water and fertilize trees and shrubs.',
      'Water and fertilize perennial gardens.',
      'Fertilize cool season lawns early in March. Use Jericho’s Sure Green.',
      'Apply Bonide pre-emergent.',
      'Re-seed cool season lawns in mid to late March.',
      'Good time to sod cool season lawns.',
      'Apply Bonide All Seasons Dormant Oil before buds open.',
      'Remove heavy winter mulches and replace with fresh mulch by late March.',
      'Prune berry and grapes in late March, except Heritage raspberries.',
    ],
    apr: [
      'Average last frost is April 17th, latest on record is May 10th; cover crops if frost predicted.',
      'Visit Jericho for all your yard and garden needs.',
      'Plant tomatoes in early season plant protectors.',
      'Plant fruit and shade trees as well as shrubs.',
      'Plant dahlia, canna, gladiolus and lily bulbs.',
      'Plant strawberries, raspberries, currant, grapes, asparagus, potatoes and hardy herbs.',
      'Plant ornamental grasses.',
      'Replace high pollen producing plants if you’re allergic to them.',
      'Fertilize spring flowering bulbs, do not remove green leaves until they turn brown.',
      'Sod or seed cool season lawns.',
      'Treat for grubs now and again in August.',
      'Apply Suregreen Grass and Weed Barrier to beds and lawns.',
      'Prune spring flowering shrubs as they finish blooming.',
      'Prune frost damage on roses and grapes.',
      'Inspect for pinion scale and early aphids.',
      'Repair drip irrigation and sprinkler systems.',
      'Revitalize garden beds with compost.',
      'New selection of Weeks Roses arrive at Jericho.',
    ],
    may: [
      'Plant warm season vegetables like tomatoes, green chiles, eggplant and squash.',
      'Plant annual flowering plants. Color, color!',
      'Plant perennial flowering plants.',
      'Plant window boxes and container planters.',
      'Plant roses and fertilize existing ones.',
      'Plant warm season natives.',
      'Seed warm season grasses.',
      'Sod cool season lawns.',
      'Fertilize existing warm season grasses.',
      'Inspect and treat for insects and weeds.',
      'Check for elm leaf beetles, spider mites and bagworms.',
      'Adjust irrigation systems to reduce water usage.',
      'Water new plantings daily; consult about requirements.',
      'Deadhead flowers for reblooming.',
      'Treat petunias, geraniums and tomatoes with BT.',
      'Fox urine deters rabbits.',
      'Remember your Mama!',
    ],
    jun: [
      'Install rain barrels for monsoon.',
      'Look into Albuquerque water rebates.',
      'Adjust watering schedule for heat.',
      'Check for clogs in drip systems.',
      'Fertilize roses for blooming.',
      'Use Bloom Max on flowering plants.',
      'Use Superthrive on vegetables.',
      'Mulch to cool soil and conserve water.',
      'Control weeds with Bonide.',
      'Apply second Bonide pre-emergent.',
      'Spray for pests and disease.',
      'Apply second BT treatment.',
      'Control fruit tree disease.',
      'Remove tree sucker growth.',
      'Heavy mulch shrubs.',
      'Deadhead as needed.',
      'Put certain houseplants outside in shade.',
      'East Mountains can plant now.',
      'Enjoy your garden!',
    ],
    jul: [
      'Adjust watering for heat, mulch, maintain irrigation.',
      'Harvest rainwater.',
      'Install ollas in dry spots.',
      'Move containers to shade.',
      'Apply BT to caterpillar-prone plants.',
      'Deep water plants twice a week.',
      'Continue mulching.',
      'Deadhead for continuous flowers.',
      'Pinch chrysanthemums by July 4th.',
      'Treat grubs in lawns.',
      'Mow cool season grass higher.',
      'Use iron instead of nitrogen fertilizers.',
      'Plant squash now to avoid bugs.',
      'Plant green beans by mid-month.',
      'Check trees and shrubs for pests.',
      'Treat tree borers with spinosad.',
      'Spray fruit trees to protect fruit.',
      'Thin or stake heavy branches.',
    ],
    aug: [
      'Give thanks for the rain.',
      'Plant cool season vegetables by mid-August.',
      'Build herb garden.',
      'Control weeds.',
      'Deep water plants.',
      'Monitor pests.',
      'Treat borers with spinosad.',
      'Control slugs and snails with Sluggo.',
      'Sod cool season lawns.',
      'Seed cool season lawns.',
      'Divide and plant iris.',
      'Clean fallen fruit and veggies.',
      'Sow wildflower seeds.',
      'Plant fall trees, shrubs and perennials.',
      'Harvest time begins.',
      'Check for plant deals at Jericho.',
    ],
     sep: [
      'Time to roast green chile.',
      'Enter your great harvest of vegetables and flowers at the State Fair.',
      'Fall is an excellent time to plant trees, shrubs and perennials.',
      'Plant mums and pansies in a sunny area for fall.',
      'Plant spring flowering bulbs, such as, crocus, daffodils, hyacinth and tulips with bulb food.',
      'Divide and plant peonies.',
      'Plant cool season vegetables in cold frames.',
      'Fertilize cool season lawns late September or early October with Jericho Sure Green Fertilizer, 16-8-8.',
      'Reseed cool season lawns.',
      'Cut back on watering as the weather cools down.',
      'Continue to monitor and treat for borers.',
      'Continue to clean debris in garden and check for insects and weeds.',
      'Bring in house plants; check and treat for any insects and repot as necessary and use Superthrive.'
    ],
    oct : [
      'Stop by Jericho after the Balloon Fiesta and pick up a fresh ristra or two for our Southwestern flare.  ',
      'Harvest your pumpkins, gourds and ornamental corn, or stop by Jericho and pick up a big one for a Jack-o-Lantern.',
      'Still time to plant spring flowering bulbs. Soil preparation and a super phosphate is a must.',
      'Plant ornamental grasses.',
      'Plant perennial seeds that need cold stratification for spring germination, like poppies or wild flower seeds.',
      'Plant pansies and kale in containers.',
      'Plant trees, shrubs and perennials. Fall sale is still going on at Jericho.',
      'Winterize cool season lawns if you have not already done so.',
      'Top dress garden beds with Back to Earth Compost or Enriched Mulch.',
      'Clean ponds and waterfalls of leaves and debris.',
      'Clean up any fruits and vegetables that may be rotting and dispose of tomato plants.',
      'Last treatment for stone fruit for peach tree borers.',
      'Winterize your irrigation systems.',
      'Clean and store all gardening equipment and tools.',
      'Clean and store containers or pots not in use.',
      'Lift begonias, cannas, dahlias and gladiolus and store if they are in an area that will freeze.',
      'Prune peonies down to 6″ and top dress with mulch.',
      'Prune pyracantha to show off berries for winter color.',
      'Deep water established trees, shrubs and flower beds monthly. New plantings will require more the first year.'
    ],
    nov : [
      'Check the previous two months for anything you might have missed.',
      'Plant up amaryllis and paper whites for Christmas blooming indoors.',
      'Set water lilies deeper in pond to prevent freezing.',
      'Use tree wrap on young trees to prevent winter injury.',
      'Special order your poinsettias and Christmas plants early.'
    ],
    dec : [
      'Select one of our Oregon grown, classic Christmas trees. They are fresh cut and kept in water so they will be the freshest tree around.',
      'Have your tree flocked for something different.',
      'Check out our live Christmas trees and we will hold one for you until shortly before Christmas. You do not want to keep them indoors for more than 5 days.',
      'Deck the halls with our fresh garland and wreaths.',
      'Get your poinsettias, Christmas cactus, amaryllis and paperwhites early in the month. We always sell out before Christmas.',
      'Check out our Christmas shop for traditional, whimsical, or southwestern ornaments and holiday fare.',
      'Deep water trees, shrubs and perennial beds.',
      'Check trees and shrubs for any broken branches due to wind or snow and selectively prune.',
      'Have a happy and safe New Year!'
    ]
  };
  export default seasonalTasks;