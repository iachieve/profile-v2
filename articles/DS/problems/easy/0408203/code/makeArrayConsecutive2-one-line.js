/* One Line Solution
  performance implications:
  1- one iteration to get max
  2- one iteration to get min
  3- subtractions and additions aren't a big deal
  the longer solution is one iteration, it is for sure better and faster
*/
function makeArrayConsecutive2(statues) {
  return Math.max(...statues) - Math.min(...statues) - statues.length + 1
}