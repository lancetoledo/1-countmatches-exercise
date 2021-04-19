const items = [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "lenovo"],
    ["phone", "gold", "iphone"]
  ],
  ruleKey = "type",
  ruleValue = "phone";

// There is 3 values: type, color, name
var countMatches = function(items, ruleKey, ruleValue) {
  let matches = 0;
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items[i].length; j++) {
      if (ruleKey == "color" && ruleValue == items[i][j]) {
        matches += i;
      } else if (ruleKey == "type" && ruleValue == items[i][j]) {
        matches += i;
      } else if (ruleKey == "name" && ruleValue == items[i][j]) {
        matches += i;
      }
    }
  }
  return matches;
};

console.log(countMatches(items, ruleKey, ruleValue));

// You are given an array items, where each items[i] = [typei, colori, namei] describes the
// type, color, and name of the ith item. You are also given a rule represented by two strings,
// ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

// Example 1:

// Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
// Output: 1
// Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].

// Example 2:

// Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
// Output: 2
// Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"].
// Note that the item ["computer","silver","phone"] does not match.
