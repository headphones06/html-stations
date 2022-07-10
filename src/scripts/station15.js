async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affilication: 'TechTrain', is_student: false},
    { id: 2, first_name: '太郎', family_name: '山田', affilication: 'HogeHoge大学', is_student: true}
  ];
  console.log(userList[0])
  const result = await test(userList)
  return await result
}

function test(userlist) {
  //自作プログラム
  return new Promise((resolve) => {
    setTimeout(() => {
      const full_name = userlist.map((userlist) => {
        return userlist.family_name + " " + userlist.first_name;
      });
      console.log(full_name)
      for(let i=0;i<2;i++){
        userlist[i].full_name = full_name[i];
      }
      resolve(userlist);
      console.log(userlist[0])
    }, 3000);
    
  })
}

