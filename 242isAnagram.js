/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 */
var isAnagram = function(s, t) {
  lt = t.length;
  ls = s.length;

  if (ls !== lt) { return false; }
  var hash = {};
  for (var i = 0; i < lt; i += 1) {
    hash[t[i]] = hash[t[i]] || 0;
    hash[t[i]] += 1;
  }

  for (i = 0; i < ls; i+=1) {
    if (!hash[s[i]]) {
      return false;
    }
    hash[s[i]] -= 1;
  }
  var items = Object.keys(hash);
  for (i = 0; i < items.length; i += 1) {
    if (hash[items[j]]) {
      return false;
    }
  }
  return true;
};
