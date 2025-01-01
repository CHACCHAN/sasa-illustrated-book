const buildImageElm = (imageList) => {
    // div要素を作成してクラスを追加
    let baseElm = document.createElement('div');
    baseElm.classList.add('col-6');
    baseElm.classList.add('col-md-2');
    baseElm.classList.add('mb-3');

    // img要素を作成して属性を設定
    let imgElm = document.createElement('img');
    imgElm.classList.add('rounded-3');
    imgElm.id = 'imageHover';
    imgElm.src = imageList; // srcを設定
    imgElm.style.aspectRatio = '3 / 4'; // 比率を設定
    imgElm.style.width = '100%'; // 横幅を100%に
    imgElm.style.height = 'auto'; // 高さを自動調整

    // imgをdivに追加
    baseElm.appendChild(imgElm);

    return baseElm;
}
const imageLists = [
    'https://media.discordapp.net/attachments/863654113404780584/1324057326323372096/IMG_20230807_141146.jpg?ex=6776c3fa&is=6775727a&hm=20ad314fefd0ae7f4593f4a8152b967c9e6089c62c61216e46fb561ebd296759&=&format=webp&width=503&height=670',
    'https://cdn.discordapp.com/attachments/863654113404780584/1324057148304654447/IMG_20240105_000826.jpg?ex=6776c3cf&is=6775724f&hm=0859ee318579e6a7622f3f19602d59a19d92f095b1cacd1292799179a074c21d&',
    'https://cdn.discordapp.com/attachments/863654113404780584/1324057108689326251/IMG_20231227_150747.jpg?ex=6776c3c6&is=67757246&hm=cf83c120e40c7eef5874eb51ce4e1c92fbd79147bd6b486c695b01e1f827cef9&',
    'https://cdn.discordapp.com/attachments/863654113404780584/1324056795148456009/1735750130726.jpg?ex=6776c37b&is=677571fb&hm=c21ea0035cdf711812524ceb1002d390d94c456f2adc0739f4a271449a1832ff&',
    'https://cdn.discordapp.com/attachments/863654113404780584/1324056433867755551/jokeCaptcha.png?ex=6776c325&is=677571a5&hm=eaed9906b67473b0ba327d76602803059396a667d610f35407229b833fdcff1c&',
    'https://cdn.discordapp.com/attachments/863654113404780584/1324055215565049897/gazou.png?ex=6776c203&is=67757083&hm=bcd98f9ee8891ccc4bc42b58da848f67938941b53e10d94f3775bb58793fc245&',
    'https://media.discordapp.net/attachments/863654113404780584/1324057538349498399/IMG_20241231_131638.jpg?ex=6776c42c&is=677572ac&hm=0c97d84cba6ea6624db4ac3663e6ffda11d1f7feaea441b9cf1c5c2e98e5aa99&=&format=webp&width=503&height=670',
    'https://media.discordapp.net/attachments/863654113404780584/1324063384399773788/b744c31c0ff45f43.png?ex=6776c99e&is=6775781e&hm=f1d3759478a1588e14e13201850227645b1bab84562e576ed0ee33acff071bd5&=&format=webp&quality=lossless&width=377&height=670',
    'https://media.discordapp.net/attachments/863654113404780584/1324053685231292461/gazou.png?ex=6776c096&is=67756f16&hm=9e8e171aceb652114e861473426fb4cca664b362240f946898bac6e55adbb23a&=&format=webp&quality=lossless&width=449&height=658',
    'https://cdn.discordapp.com/attachments/863654113404780584/1324049555540545556/image0.jpg?ex=6776bcbd&is=67756b3d&hm=e2f0c5439cb91c37bc87139c8fcca7c75ecd0bc1c6ed91b1a1248eaf01e3f01a&',
    'https://cdn.discordapp.com/attachments/863654113404780584/1324049477677486080/IMG_0771.jpg?ex=6776bcab&is=67756b2b&hm=aa9ce2dad8149eb8680fa9375c535dbb05297bfaf26aed20f312b90af3c66cb0&',
    'https://media.discordapp.net/attachments/863654113404780584/1324049423940190268/IMG_2984.jpg?ex=6776bc9e&is=67756b1e&hm=5e52893b678e942d242b05a409c844597e53cf52184c1ba4e0fb6bd57b6e5555&=&format=webp&width=443&height=670',
    'https://media.discordapp.net/attachments/863654113404780584/1324049358005731338/IMG_1108.jpg?ex=6776bc8e&is=67756b0e&hm=5d26b2ea3d472377ace538478de051961318ef24c2e219e203f303489c20d976&=&format=webp&width=503&height=670',
    'https://cdn.discordapp.com/attachments/863654113404780584/1324049355132371105/IMG_20220911_180902.jpg?ex=6776bc8d&is=67756b0d&hm=8d090f080081e33fc76945243c0578fa939dfc68580c65886f93517b38dfa4a9&',
    'https://media.discordapp.net/attachments/863654113404780584/1324048883386679376/IMG_1450.jpg?ex=6776bc1d&is=67756a9d&hm=9df4189b665931db9f95df29145115aa42cfb7ebabe38d9e6de3138e6a753463&=&format=webp&width=503&height=670',
    'https://media.discordapp.net/attachments/863654113404780584/1324048644563013692/IMG_3088.jpg?ex=6776bbe4&is=67756a64&hm=22d7d4584f895bba4b51b0c53c26b360e5ac56e902f3d873ce005a346be452df&=&format=webp&width=339&height=670',
    'https://media.discordapp.net/attachments/863654113404780584/1324048644848091178/IMG_3087.jpg?ex=6776bbe4&is=67756a64&hm=ae4cb3e17de112615c77fdbf6e3e897fb881fc16a47b05f9f16c61b34c79c701&=&format=webp&width=556&height=670',
    'https://media.discordapp.net/attachments/863654113404780584/1324047903400132650/IMG_7132.jpg?ex=6776bb33&is=677569b3&hm=89d99464408ed314b1fcaaf632d0faaed183854e0cc3d515193b8e751f4bb991&=&format=webp&width=503&height=670',
    'https://media.discordapp.net/attachments/863654113404780584/1324047776069324831/1684238091832.jpg?ex=6776bb15&is=67756995&hm=84bae16bbced1255c466598d961a47fd4362519a5abffecff107479d7051490f&=&format=webp&width=502&height=670',
    'https://media.discordapp.net/attachments/863654113404780584/1324047622528307240/16843726092172.jpg?ex=6776baf0&is=67756970&hm=c997af8cbc75673eb7ecf3ca0a7f2bc7ee13072bf99c953c0286f92eba1d6a2a&=&format=webp&width=502&height=670',
    'https://media.discordapp.net/attachments/863654113404780584/1324047404164452373/IMG_20231229_144141.jpg?ex=6776babc&is=6775693c&hm=4c7a6dd2afaf44c8bc0a99b8a9b6c5602274bdd225e0f4cdd234e3599ba29b4b&=&format=webp&width=503&height=670',
    'https://media.discordapp.net/attachments/863654113404780584/1324047101516054600/IMG_20231228_220936.jpg?ex=6776ba74&is=677568f4&hm=393c21c11fd871bc048f7e82d1538cac3ef24fdba9e3df25c91bba1699604913&=&format=webp&width=533&height=670',
    'https://media.discordapp.net/attachments/863654113404780584/1324047020864049192/IMG_20231228_214313.jpg?ex=6776ba61&is=677568e1&hm=35f45594601f2c4e82015b28577f2ea321c80160b5a9b3c349ad0007dd4d2578&=&format=webp&width=503&height=670',
    'https://media.discordapp.net/attachments/863654113404780584/1324046908439924848/IMG_1594.png?ex=6776ba46&is=677568c6&hm=c0d795bb089396ab279d79f86efd9afbc9f2c043010a52bb3aef723ef6fe6069&=&format=webp&quality=lossless&width=309&height=670',
    'https://media.discordapp.net/attachments/863654113404780584/1324046858837950587/IMG_20231228_220637.jpg?ex=6776ba3a&is=677568ba&hm=2d64dc66e7717741406a6633106aeaae5806b6b5df2d963701d6672c7c9d229b&=&format=webp&width=301&height=669',
    'https://media.discordapp.net/attachments/863654113404780584/1324046649298780210/IMG_20231228_215812.jpg?ex=6776ba08&is=67756888&hm=fc8202826df5f0d7667e47dbfa7b960c8c3a5c2dffd7a077b3d2f451a17d089d&=&format=webp&width=503&height=670',
    'https://media.discordapp.net/attachments/863654113404780584/1324046391772971058/IMG_20240105_000142.jpg?ex=6776b9cb&is=6775684b&hm=bd5aa1bfcad097701ba5bbc2c815bfda34421545c67a5a14f62508f16d812b26&=&format=webp&width=503&height=670',
];

window.addEventListener('load', (event) => {
    imageLists.forEach((imageList, index) => {
        const elm = buildImageElm(imageList);
        document.getElementById('sasa-images').appendChild(elm);
    });
});