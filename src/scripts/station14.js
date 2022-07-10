function getData() {
    // これから作ろうとしているもので、JavaScriptでフルネームを生成する必要が出てきました。
    // ただ現状持っている情報では、名前と苗字をそれぞれのみしかありません。
    // そのため、JavaScriptで連結させて生成することにしました。
    const test = [
        { id: 1, first_name: '優', family_name: '大木', affilication: 'TechTrain', is_student: false },
        { id: 2, first_name: '太郎', family_name: '山田', affilication: 'HogeHoge大学', is_student: true }
    ];
    return test.map(buildFullName)
}

function buildFullName(data) {
    //station14の解答
    //const full_name = data.family_name + " " + data.first_name
    //data["full_name"] = full_name

    //自作例（苗字＋所属）
    const profile1 = data.family_name + " 所属：" + data.affilication
    data["profile_affi"] = profile1;
    return data
}

// 出力が想定される答え
// const test = [
//     {id: 1, full_name: '大木 優', first_name: '優', family_name: '大木',affilication: 'TechTrain', is_student: false},
//     {id: 2, full_name: '山田 太郎', first_name: '太郎', family_name: '山田',affilication: 'HogeHoge大学', is_student: true}
// ];