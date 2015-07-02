var getGrid = function(labelDef, textList) {
  /*
  Build an indexable grid of text for given size
  Return array of x,y coordinates
   */
  var grid = [[0,0],],
      totalHeight = 0,
      totalWidth = 0,
      MAX_HEIGHT = 3.75, // TODO move to somewhere sensible
      MAX_WIDTH = Infinity; 
  
  for (var i = 0; i<textList.length-1; i++)  {
    // TODO determine if current row height total is still < max height 
    var nextHeight = isNaN(grid[i][1]) ? grid[i-1][1] + labelDef.height : grid[i][1] + labelDef.height,
        nextWidth = isNaN(grid[i][0]) ? grid[i-1][0] + labelDef.width : grid[i][0] + labelDef.width;
    console.log("nextHeight: " + nextHeight);
    if (nextHeight <= MAX_HEIGHT) { // add row above 
      var next = [
        grid[i][0] + labelDef.width,
        grid[i][1] + 0
      ];
    } else { // add new column
      var next = [
        grid[i][0] + labelDef.width,
        grid[i][1] + labelDef.height
      ];
    }
    grid.push(next);
    //console.log("next: " + next);
  }
  return grid; 
};
