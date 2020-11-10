var result = {};

function updateData(groupIdx) {
    var selected = $("select").data('picker').selected_values();
    var members = groupToMembers[groups[groupIdx]];
    for (i = 0; i < selected.length; i++) {
        var member = members[selected[i]];
        for(j = 0; j < chars[member].length; j++) {
            var char = chars[member][j];
            var type = char;
            if(char in charsToType) {
                type = charsToType[char];
            }
            if(type in result) {
                result[type] = result[type] + 1;
            } else {
                result[type] = 1;
            }
        }
    }
}

function finalCal() {
    var items = Object.keys(result).map(function(key) {
      return [key, result[key]];
    });

    items.sort(function(first, second) {
      return second[1] - first[1];
    });

    console.log(items);
    var topSix = items.slice(0, 5);
    var drawData = [];
    if(topSix[0] == undefined) {
        alert('没有选择任何成员，请刷新');
    } else {
        var maxScore = topSix[0][1];
        drawData[0] = [];
        for(i = 0; i < topSix.length; i++) {
            drawData[0].push({"area": topSix[i][0], "value": topSix[i][1] * 100 / maxScore});
        }
        draw(drawData);
    }
}