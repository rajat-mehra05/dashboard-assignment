const colorObj = {
  0: "hsl(13, 70%, 62%)",
  1: "hsl(13, 70%, 66%)",
  2: "hsl(13, 70%, 70%)",
  3: "hsl(13, 70%, 74%)",
  4: "hsl(13, 70%, 78%)",
  5: "hsl(13, 70%, 82%)",
  6: "hsl(13, 70%, 86%)",
  7: "hsl(13, 70%, 90%)",
  8: "hsl(13, 70%, 94%)",
  9: "hsl(13, 70%, 96%)",
  10: "hsl(272, 38%, 84%)",
  12: "hsl(272, 38%, 80%)",
  13: "hsl(272, 38%, 76%)",
  14: "hsl(272, 38%, 72%)",
  15: "hsl(272, 38%, 68%)",
  16: "hsl(272, 38%, 64%)",
  17: "hsl(272, 38%, 60%)",
  18: "hsl(272, 38%, 56%)",
  19: "hsl(272, 38%, 52%)",
};

export const getCellColor = (index, totalActiveCount) => {
  //   if (index === 0) return "#E2795B";
  //   if (index === totalActiveCount - 1) return "#8857B3";

  //   return "red";
  console.log(index);
  return colorObj[index] ?? "red";
};
