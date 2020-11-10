updateGroup();
function updateGroup() {
    var group = groups[groupIdx];
    $("#groupName").text(group);
    $("select").empty();
    $.each(groupToMembers[group], function(idx) {
        var member = groupToMembers[group][idx];
        var $option = $('<option data-img-src="pic/' + group + '/' + member + '.jpg" value="'
            + idx + '">' + member + '</option>');
        if(group == "f(x)") {
            var $option = $('<option data-img-src="pic/' + group + '/' + member + '.gif" value="'
                + idx + '">' + member + '</option>');
        }

        $("select").append($option);
    });
    $("select").imagepicker({
        limit_reached: function(){alert('最多只能选择两名成员')},
        show_label: true
    });
}

$("#next").click(function() {
    updateData(groupIdx);
    groupIdx = groupIdx + 1;

    if(groupIdx == groups.length - 1) {
        $("#next").text("查看结果");
    }

    if(groupIdx == groups.length){
        finalCal();
    } else {
        updateGroup();
    }
})
