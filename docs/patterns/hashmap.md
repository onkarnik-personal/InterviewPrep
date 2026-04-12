# Pattern: HashMap

## When to use it
- "Find if X exists" in O(1)
- "Count frequency" of elements
- "Group elements" by some key
- "Two Sum" style — find a complement
- Any problem where you need fast lookup of something you've seen before

## Core idea
Trade space for time. Store things you've already seen in a map so you don't have to scan again.

## Complexity
- Time: O(n) — one pass through the array
- Space: O(n) — storing up to n entries in the map

---

## Problems solved

### Two Sum
**Approach:** Store `{ value: index }` as you iterate. For each number, check if `target - num` exists in map.

**Key bug:** `if (map[complement])` → WRONG when index is 0 (falsy!)
**Fix:** `if (map[complement] !== undefined)`

```ts
function twoSum(nums: number[], target: number): number[] {
  const map: Record<number, number> = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map[complement] !== undefined) return [map[complement], i];
    map[nums[i]] = i;
  }
  return [];
}
```

---

### Valid Anagram (isAnagram)
**Approach:** Count character frequencies in `s`, then decrement for each char in `t`. If any count != 0, not an anagram.

```ts
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const map: Record<string, number> = {};
  for (const c of s) map[c] = (map[c] ?? 0) + 1;
  for (const c of t) {
    if (!map[c]) return false;
    map[c]--;
  }
  return true;
}
```

---

### Group Anagrams
**Approach:** Sort each word → use sorted string as map key → group words with same key.

**Key insight:** Two anagrams always produce the same sorted string.

**Bug:** `forEach` can't `break` early. Use `for...of` when you need early exit.

```ts
function groupAnagrams(strs: string[]): string[][] {
  const map: Record<string, string[]> = {};
  for (const word of strs) {
    const key = word.split("").sort().join("");
    if (!map[key]) map[key] = [];
    map[key].push(word);
  }
  return Object.values(map);
}
```

---

## Common gotchas
1. **Falsy index:** `map[key]` returns `undefined` for missing keys — but `0` is also falsy. Always use `!== undefined` when the value could be 0.
2. **`forEach` vs `for...of`:** `forEach` doesn't support `break`/`continue`. Use `for...of` when you need control flow.
3. **Object vs Map:** `{}` works for string/number keys. Use `new Map()` when keys are objects or you need insertion order.