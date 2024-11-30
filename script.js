const characters = {
    en: {
        genshin: [
            { 
                name: "Hu Tao", 
                from: "", 
                link: "l:hu_tao,", 
                image: "https://images-ng.pixai.art/images/orig/f0dbbd9c-2e54-427e-9093-39c27cb4b355" 
            },
            { 
                name: "Raiden Shogun", 
                from: "", 
                link: "l:raiden,", 
                image: "https://images-ng.pixai.art/images/orig/d7d1081e-b9c2-4c79-bec0-dc441ba45b59" 
            },
            { 
                name: "Yoimiya", 
                from: "", 
                link: "l:yoimiya,", 
                image: "https://images-ng.pixai.art/images/orig/80eefddd-490e-41cf-9f7b-c9df669b1b71" 
            },
            { 
                name: "Shenhe", 
                from: "", 
                link: "l:shenhe,", 
                image: "https://images-ng.pixai.art/images/orig/117c6956-cde8-4ab9-a69f-9fde224d3c05" 
            }
        ],
        sekai: [
            {
                name: "Luka Megurine", 
                from: "", 
                link: "l:megurine,", 
                image: "https://images-ng.pixai.art/images/orig/5ea467c5-ee88-44e2-8ef5-c656942f76be"             
            },
            {
                name: "Azusawa Kohane",
                from: "",
                link: "l:kohane,",
                image: "https://images-ng.pixai.art/images/orig/ec982748-9a26-41ad-a360-3198d47297de"
            },
            {
                name: "Otori Emu",
                from: "",
                link: "l:otori,",  
                image: "https://images-ng.pixai.art/images/orig/65009732-806b-4f59-8e85-f41e5d5d55f1"
            },
            {
                name: "Asahina Mafuyu",
                from: "",
                link: "l:mafuyu,",
                image: "https://images-ng.pixai.art/images/orig/b5e64d91-33ec-4c62-a6ab-0e3661969b3b"
            }
        ],
        demonSlayer: [
            { 
                name: "Mitsuri", 
                from: "", 
                link: "l:mitsuri,", 
                image: "https://images-ng.pixai.art/images/orig/4a0d99dd-4cd1-4fa3-8012-5ac7bba95015" 
            },
            { 
                name: "Shinobu", 
                from: "", 
                link: "l:shinobu,", 
                image: "https://images-ng.pixai.art/images/orig/48c664f3-77bb-423a-9bd6-c9cffaae4510" 
            },
            { 
                name: "Nezuko", 
                from: "", 
                link: "l:nezuko,", 
                image: "https://images-ng.pixai.art/images/orig/a614ed26-6863-4b39-a1e4-53ec1e33e00c" 
            },
        ],
        other: [
            { 
                name: "Senko", 
                from: "The Helpful Fox Senko-san", 
                link: "l:senko,", 
                image: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/87210b85-f215-48a0-97fa-6a93813da500/original=true,quality=90/00383-3118821110-((cafe,%20maid,%20maid%20apron)),%20best%20quality,%20masterpiece,%20ultra-detailed,%20illustration,%20(detailed%20light_1.05),%20cinematic%20lighting,.jpeg" 
            },
            { 
                name: "Yukinoshita", 
                from: "Yahari Ore no Seishun Love Come wa Machigatteiru", 
                link: "l:yukinoshita,", 
                image: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/dbae3433-8d2e-4647-8eaf-ce2ec73f54a1/original=true,quality=90/08.jpeg" 
            },
            {
                name: "Megumin",
                from: "Konosuba",
                link: "l:megumin,", 
                image: "https://images-ng.pixai.art/images/orig/91cc9943-9acb-4d98-a84e-178f49250a45"
            },
            {
                name: "Nagatoro",
                from: "Don't Toy with Me, Miss Nagatoro",
                link: "l:nagatoro,",
                image: "https://images-ng.pixai.art/images/orig/80436c8f-7936-404e-b44c-c5e268219676"
            },
            {
                name: "Makima",
                from: "Chainsaw Man",
                link: "l:makima,",
                image: "https://images-ng.pixai.art/images/orig/d5c9438a-b6ed-4e25-a7e4-c893d0d83e7a"
            },
            {
                name: "Himeno",
                from: "Chainsaw Man",
                link: "l:himeno,",
                image: "https://images-ng.pixai.art/images/orig/2e6f8839-38e3-4cf4-b49a-1001ecac7398"
            },
            {
                name: "Meru",
                from: "Meru the Succubus",
                link: "l:meru,",
                image: "https://images-ng.pixai.art/images/orig/5684ab1e-9543-4564-a611-e885234fdde5"
            },
            {
                name: "Felix",
                from: "Re: Zero",
                link: "l:felix,",
                image: "https://images-ng.pixai.art/images/orig/2304960e-ad4c-48d6-abda-2d28a1da4a55"
            },
            {
                name: "Cow",
                from: "Style",
                link: "l:cow,",
                image: "https://images-ng.pixai.art/images/orig/f59b6f01-5d54-4f58-b8bb-d49897fd9008"
            },
            {
                name: "Mimi",
                from: "",
                link: "l:mimi,",
                image: "https://images-ng.pixai.art/images/orig/f398d1b5-ef52-4098-8bf6-c98cbc150a23"
            },
            {
                name: "Zero Two",
                from: "",
                link: "l:zero_two,",
                image: "https://images-ng.pixai.art/images/orig/c3b81738-82fc-42c3-8e7f-3b7d916c298b"
            }
        ]
    },
    ru: {
        genshin: [
            { 
                name: "Ху Тао", 
                from: "", 
                link: "l:hu_tao,", 
                image: "https://images-ng.pixai.art/images/orig/f0dbbd9c-2e54-427e-9093-39c27cb4b355" 
            },
            { 
                name: "Райден Шогун", 
                from: "", 
                link: "l:raiden,", 
                image: "https://images-ng.pixai.art/images/orig/d7d1081e-b9c2-4c79-bec0-dc441ba45b59" 
            },
            { 
                name: "Ёимия", 
                from: "", 
                link: "l:yoimiya,", 
                image: "https://images-ng.pixai.art/images/orig/80eefddd-490e-41cf-9f7b-c9df669b1b71" 
            },
            { 
                name: "Шень хэ", 
                from: "", 
                link: "l:shenhe,", 
                image: "https://images-ng.pixai.art/images/orig/117c6956-cde8-4ab9-a69f-9fde224d3c05" 
            }
        ],
        demonSlayer: [
            { 
                name: "Мицури", 
                from: "", 
                link: "l:mitsuri,", 
                image: "https://images-ng.pixai.art/images/orig/4a0d99dd-4cd1-4fa3-8012-5ac7bba95015" 
            },
            { 
                name: "Шинобу", 
                from: "", 
                link: "l:shinobu,", 
                image: "https://images-ng.pixai.art/images/orig/48c664f3-77bb-423a-9bd6-c9cffaae4510" 
            },
            { 
                name: "Незуко", 
                from: "", 
                link: "l:nezuko,", 
                image: "https://images-ng.pixai.art/images/orig/a614ed26-6863-4b39-a1e4-53ec1e33e00c" 
            },
        ],
        sekai: [
            {
                name: "Мегурине Лука", 
                from: "", 
                link: "l:megurine,", 
                image: "https://images-ng.pixai.art/images/orig/5ea467c5-ee88-44e2-8ef5-c656942f76be"             
            },
            {
                name: "Азусава Кохане",
                from: "",
                link: "l:kohane,",  
                image: "https://images-ng.pixai.art/images/orig/ec982748-9a26-41ad-a360-3198d47297de"
            },
            {
                name: "Отори Эму",
                from: "",
                link: "l:otori,",  
                image: "https://images-ng.pixai.art/images/orig/65009732-806b-4f59-8e85-f41e5d5d55f1"
            },
            {
                name: "Асахина Мафую",
                from: "",
                link: "l:mafuyu,",
                image: "https://images-ng.pixai.art/images/orig/b5e64d91-33ec-4c62-a6ab-0e3661969b3b"
            }
        ],
        other: [
            { 
                name: "Сенко", 
                from: "Ласковая Лиса Сенко-сан", 
                link: "l:senko,", 
                image: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/87210b85-f215-48a0-97fa-6a93813da500/original=true,quality=90/00383-3118821110-((cafe,%20maid,%20maid%20apron)),%20best%20quality,%20masterpiece,%20ultra-detailed,%20illustration,%20(detailed%20light_1.05),%20cinematic%20lighting,.jpeg" 
            },
            { 
                name: "Юкиношита", 
                from: "Розовая пора моей школьной жизни сплошной обман", 
                link: "l:yukinoshita,", 
                image: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/dbae3433-8d2e-4647-8eaf-ce2ec73f54a1/original=true,quality=90/08.jpeg" 
            },
            {
                name: "Мегумин",
                from: "Коносуба",
                link: "l:megumin,", 
                image: "https://images-ng.pixai.art/images/orig/91cc9943-9acb-4d98-a84e-178f49250a45"
            },
            {
                name: "Нагаторо",
                from: "Не дразни меня, Нагаторо-сан!",
                link: "l:nagatoro,",
                image: "https://images-ng.pixai.art/images/orig/80436c8f-7936-404e-b44c-c5e268219676"
            },
            {
                name: "Макима",
                from: "Человек-бензопила",
                link: "l:makima,",
                image: "https://images-ng.pixai.art/images/orig/d5c9438a-b6ed-4e25-a7e4-c893d0d83e7a"
            },
            {
                name: "Химено",
                from: "Человек-бензопила",
                link: "l:himeno,",
                image: "https://images-ng.pixai.art/images/orig/2e6f8839-38e3-4cf4-b49a-1001ecac7398"
            },
            {
                name: "Меру",
                from: "Суккуб Меру",
                link: "l:meru,",
                image: "https://images-ng.pixai.art/images/orig/5684ab1e-9543-4564-a611-e885234fdde5"
            },
            {
                name: "Феликс",
                from: "Ре: зеро",
                link: "l:felix,",
                image: "https://images-ng.pixai.art/images/orig/2304960e-ad4c-48d6-abda-2d28a1da4a55"
            },
            {
                name: "Cow",
                from: "Style",
                link: "l:cow,",
                image: "https://images-ng.pixai.art/images/orig/f59b6f01-5d54-4f58-b8bb-d49897fd9008"
            },
            {
                name: "Mimi",
                from: "",
                link: "l:mimi,",
                image: "https://images-ng.pixai.art/images/orig/f398d1b5-ef52-4098-8bf6-c98cbc150a23"
            },
            {
                name: "Zero Two",
                from: "",
                link: "l:zero_two,",
                image: "https://images-ng.pixai.art/images/orig/c3b81738-82fc-42c3-8e7f-3b7d916c298b"
            }
        ]
    }
};

let selectedLanguage = 'ru';

window.onload = () => {
    document.getElementById('language-modal').style.display = 'flex';
    renderCharacters(selectedLanguage);
};

function renderCharacters(language) {
    const genshinList = document.getElementById("genshin-list");
    const otherList = document.getElementById("other-list");
    const demonSlayerList = document.getElementById("demon-slayer-list");
    const sekaiList = document.getElementById("SEKAI-list");
    
    genshinList.innerHTML = "";
    otherList.innerHTML = "";
    demonSlayerList.innerHTML = "";
    sekaiList.innerHTML = "";

    characters[language].genshin.forEach(character => {
        const card = createCharacterCard(character);
        genshinList.appendChild(card);
    });

    characters[language].other.forEach(character => {
        const card = createCharacterCard(character);
        otherList.appendChild(card);
    });

    characters[language].demonSlayer.forEach(character => {
        const card = createCharacterCard(character);
        demonSlayerList.appendChild(card);
    });

    characters[language].sekai.forEach(character => {
        const card = createCharacterCard(character);
        sekaiList.appendChild(card);
    });
}

function createCharacterCard(character) {
    const card = document.createElement("div");
    card.className = "character-card";
    card.onclick = function() {
        copyToClipboard(character.link);
    };
    card.innerHTML = `
        <img src="${character.image}" alt="${character.name}" />
        <div class="character-info">
            <h3>${character.name}</h3>
            <p>${character.from}</p>
            <p style="font-size: 14px; color: #bbb;">${character.link}</p>
        </div>
    `;
    return card;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert(`"${text}" Скопирован. 
            Напишите это сообщения в боте.
            Telegram: @AnimeGenie_Hn`);
    }).catch(err => {
        console.error('Ошибка при копировании: ', err);
    });
}

function searchCharacter() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const filteredGenshin = characters[selectedLanguage].genshin.filter(character => character.name.toLowerCase().includes(query));
    const filteredOther = characters[selectedLanguage].other.filter(character => character.name.toLowerCase().includes(query));

    const genshinList = document.getElementById("genshin-list");
    const otherList = document.getElementById("other-list");

    genshinList.innerHTML = "";
    otherList.innerHTML = "";

    filteredGenshin.forEach(character => {
        const card = createCharacterCard(character);
        genshinList.appendChild(card);
    });

    filteredOther.forEach(character => {
        const card = createCharacterCard(character);
        otherList.appendChild(card);
    });
}

function toggleLanguage(language) {
    selectedLanguage = language;
    document.getElementById('language-modal').style.display = 'none';
    renderCharacters(selectedLanguage);
}
