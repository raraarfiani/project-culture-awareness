/* ==================================
   1. ISLAND AND PROVINCE DATA
================================== */

const islands = [
    {
        name: "Sumatra",
        icon: "🌋",
        description: "Explore the diverse cultures of western Indonesia.",
        provinces: [0,1,2,3,4,5,6,7,8,9]
    },
    {
        name: "Java",
        icon: "🏝️",
        description: "Discover the traditions of Java, from Banten to East Java.",
        provinces: [10,11,12,13,14,15]
    },
    {
        name: "Kalimantan",
        icon: "🌳",
        description: "Discover the traditions of the communities of Borneo.",
        provinces: [16,17,18,19,20]
    },
    {
        name: "Sulawesi",
        icon: "🌊",
        description: "Explore the unique traditions of Sulawesi.",
        provinces: [21,22,23,24,25,26]
    },
    {
        name: "Papua",
        icon: "🦜",
        description: "Learn about the rich cultural heritage of Papua.",
        provinces: [27,28,29,30,31,32]
    }
];

// Each province presents six cultural categories.
const makeCulture = (house, clothes, dance, food, music, language) => [
    ["Traditional House", house],
    ["Traditional Clothes", clothes],
    ["Traditional Dance", dance],
    ["Traditional Food", food],
    ["Traditional Music", music],
    ["Local Language", language]
];

const provinces = [

    // SUMATRA

    {
        name: "Aceh",
        description: "Aceh is known for its strong Islamic heritage, historical kingdoms, and distinctive arts.",
        culture: makeCulture(
            "Rumoh Aceh, a traditional raised wooden house.",
            "Ulee Balang attire, often decorated with beautiful patterns.",
            "Saman Dance, performed with synchronized movements and singing.",
            "Mie Aceh, a spicy noodle dish.",
            "Rapai, a traditional frame drum used in performances.",
            "Acehnese and other local languages."
        )
    },

    {
        name: "North Sumatra",
        description: "North Sumatra is home to many ethnic communities, including Batak, Malay, and Nias people.",
        culture: makeCulture(
            "Rumah Bolon, the traditional house of the Batak people.",
            "Ulos cloth, an important traditional textile worn in ceremonies.",
            "Tor-Tor Dance, an important Batak ceremonial dance.",
            "Arsik, a traditional fish dish seasoned with spices.",
            "Gondang music, played with traditional Batak instruments.",
            "Batak languages, Malay, and other local languages."
        )
    },

    {
        name: "West Sumatra",
        description: "West Sumatra is strongly associated with Minangkabau culture and its matrilineal traditions.",
        culture: makeCulture(
            "Rumah Gadang, known for its curved roof resembling buffalo horns.",
            "Bundo Kanduang and penghulu traditional attire.",
            "Tari Piring, a lively dance performed with plates.",
            "Rendang, a famous slow-cooked beef dish.",
            "Talempong, a set of small traditional gongs.",
            "Minangkabau."
        )
    },

    {
        name: "Riau",
        description: "Riau has rich Malay traditions reflected in its architecture, literature, and performing arts.",
        culture: makeCulture(
            "Rumah Selaso Jatuh Kembar, a traditional Malay house.",
            "Baju Kurung and Teluk Belanga.",
            "Zapin Dance, influenced by Malay and Middle Eastern traditions.",
            "Gulai Ikan Patin, catfish cooked in a rich gravy.",
            "Gambus and kompang are used in Malay music.",
            "Riau Malay."
        )
    },

    {
        name: "Jambi",
        description: "Jambi preserves Malay culture and traditions along the Batanghari River.",
        culture: makeCulture(
            "Rumah Kajang Leko, a traditional Jambi house.",
            "Baju Kurung Tanggung with traditional songket.",
            "Sekapur Sirih Dance, a welcoming dance.",
            "Tempoyak, fermented durian often cooked with fish.",
            "Kelintang Kayu, a traditional wooden instrument.",
            "Jambi Malay and other local languages."
        )
    },

    {
        name: "South Sumatra",
        description: "South Sumatra is known for its Palembang Malay heritage and traditional textiles.",
        culture: makeCulture(
            "Rumah Limas, a traditional house with a tiered floor.",
            "Aesan Gede, an ornate traditional Palembang costume.",
            "Gending Sriwijaya Dance, performed to welcome guests.",
            "Pempek, a fish-based dish served with cuko sauce.",
            "Gamelan Palembang and traditional gong ensembles.",
            "Palembang Malay and other local languages."
        )
    },

    {
        name: "Bengkulu",
        description: "Bengkulu has a mix of coastal and inland traditions with distinctive ceremonies and crafts.",
        culture: makeCulture(
            "Rumah Bubungan Lima, a traditional stilt house.",
            "Traditional Bengkulu attire with songket and gold details.",
            "Andun Dance, traditionally performed at celebrations.",
            "Pendap, fish cooked with spices and taro leaves.",
            "Dol, a large traditional drum used in Tabot celebrations.",
            "Bengkulu Malay and Rejang."
        )
    },

    {
        name: "Lampung",
        description: "Lampung is known for its traditional tapis weaving and Saibatin and Pepadun cultures.",
        culture: makeCulture(
            "Nuwo Sesat, a traditional meeting house.",
            "Traditional Lampung attire with tapis woven cloth.",
            "Sigeh Penguten Dance, a welcoming dance.",
            "Seruit, fish served with sambal and vegetables.",
            "Gamolan Pekhing, a traditional bamboo instrument.",
            "Lampung languages."
        )
    },

    {
        name: "Bangka Belitung Islands",
        description: "The Bangka Belitung Islands have Malay coastal traditions shaped by maritime life.",
        culture: makeCulture(
            "Rumah Panggung, a traditional raised house.",
            "Traditional Malay clothing with songket details.",
            "Campak Dance, a lively social dance.",
            "Lempah Kuning, fish cooked in yellow spicy broth.",
            "Dambus, a traditional string instrument.",
            "Bangka Malay and Belitung Malay."
        )
    },

    {
        name: "Riau Islands",
        description: "The Riau Islands preserve maritime Malay culture across many islands and coastal communities.",
        culture: makeCulture(
            "Traditional Malay stilt houses built near the coast.",
            "Baju Kurung and Teluk Belanga.",
            "Zapin Dance, popular in Malay cultural performances.",
            "Gonggong, a sea snail dish.",
            "Gendang and gambus in traditional Malay ensembles.",
            "Riau Islands Malay."
        )
    },


    // JAVA

    {
        name: "Banten",
        description: "Banten has diverse cultural traditions influenced by Sundanese, Javanese, and Baduy communities.",
        culture: makeCulture(
            "Rumah Sulah Nyanda, a traditional Baduy house made from natural materials.",
            "Pangsi, traditional clothing commonly worn by men.",
            "Rampak Bedug Dance and Cokek Dance.",
            "Sate Bandeng, Rabeg, and Angeun Lada.",
            "Angklung Buhun and Bedug.",
            "Sundanese, Javanese, and Baduy languages."
        )
    },

    {
        name: "DKI Jakarta",
        description: "Jakarta has rich Betawi cultural traditions influenced by many communities.",
        culture: makeCulture(
            "Rumah Kebaya, a traditional Betawi house with a distinctive roof.",
            "Sadariah for men and Kebaya Encim for women.",
            "Yapong Dance and Topeng Betawi Dance.",
            "Kerak Telor, Soto Betawi, and Asinan Betawi.",
            "Gambang Kromong and Tanjidor.",
            "Betawi."
        )
    },

    {
        name: "West Java",
        description: "West Java is rich in Sundanese traditions, arts, music, and cuisine.",
        culture: makeCulture(
            "Rumah Julang Ngapak, with a roof resembling a bird spreading its wings.",
            "Pangsi for men and Kebaya Sunda for women.",
            "Jaipong Dance and Merak Dance.",
            "Karedok, Seblak, and Nasi Timbel.",
            "Angklung, Kecapi, and Suling Sunda.",
            "Sundanese and Cirebonese."
        )
    },

    {
        name: "Central Java",
        description: "Central Java is known for elegant Javanese traditions and cultural performances.",
        culture: makeCulture(
            "Rumah Joglo, a traditional Javanese house with a distinctive roof.",
            "Jawi Jangkep for men and Kebaya for women.",
            "Gambyong Dance and Bedhaya Dance.",
            "Lumpia Semarang, Soto Kudus, and Garang Asem.",
            "Gamelan, Siter, and Kendang.",
            "Javanese."
        )
    },

    {
        name: "Special Region of Yogyakarta",
        description: "Yogyakarta preserves strong Javanese royal traditions through its palace, arts, and ceremonies.",
        culture: makeCulture(
            "Rumah Joglo, commonly found in traditional Javanese architecture.",
            "Surjan for men and Kebaya for women.",
            "Serimpi Dance, Bedhaya Dance, and Golek Dance.",
            "Gudeg, Bakpia, and Sate Klathak.",
            "Gamelan, Gong, and Kendang.",
            "Javanese, including the Yogyakarta dialect."
        )
    },

    {
        name: "East Java",
        description: "East Java has diverse traditions influenced by Javanese, Madurese, and Osing communities.",
        culture: makeCulture(
            "Joglo Situbondo and other regional traditional house styles.",
            "Pesa'an, traditional Madurese clothing.",
            "Remo Dance and Gandrung Dance.",
            "Rawon, Rujak Cingur, and Lontong Balap.",
            "Gamelan and Angklung Banyuwangi.",
            "Javanese, Madurese, and Osing."
        )
    },


    // KALIMANTAN

    {
        name: "West Kalimantan",
        description: "West Kalimantan is home to Dayak and Malay communities with rich river and forest traditions.",
        culture: makeCulture(
            "Rumah Radakng, a long traditional Dayak house.",
            "King Baba and King Bibinge traditional Dayak attire.",
            "Monong Dance and traditional Dayak dances.",
            "Bubur Pedas, a traditional savory porridge.",
            "Sape, a traditional Dayak string instrument.",
            "Dayak languages and Malay."
        )
    },

    {
        name: "Central Kalimantan",
        description: "Central Kalimantan is known for Dayak Ngaju culture and traditions along the rivers.",
        culture: makeCulture(
            "Rumah Betang, a long communal Dayak house.",
            "Traditional Dayak attire decorated with beads and motifs.",
            "Manasai Dance, a communal dance.",
            "Juhu Singkah, a traditional dish made with rattan shoots.",
            "Kecapi Dayak and traditional drums.",
            "Ngaju and other Dayak languages."
        )
    },

    {
        name: "South Kalimantan",
        description: "South Kalimantan has strong Banjar traditions in architecture, crafts, and cuisine.",
        culture: makeCulture(
            "Rumah Bubungan Tinggi, a traditional Banjar house.",
            "Banjar traditional attire, including Baamar Galung Pancar Matahari.",
            "Baksa Kembang Dance, a welcoming dance.",
            "Soto Banjar and Ketupat Kandangan.",
            "Panting, a traditional Banjar string instrument.",
            "Banjar."
        )
    },

    {
        name: "East Kalimantan",
        description: "East Kalimantan has diverse Dayak and Kutai cultural traditions.",
        culture: makeCulture(
            "Lamin, a long communal house of the Dayak people.",
            "Kustin attire, a traditional Kutai costume.",
            "Hudoq Dance, associated with agricultural traditions.",
            "Nasi Bekepor, a traditional Kutai rice dish.",
            "Sampe and traditional Dayak drums.",
            "Kutai and various Dayak languages."
        )
    },

    {
        name: "North Kalimantan",
        description: "North Kalimantan is home to Tidung and many Dayak communities.",
        culture: makeCulture(
            "Baloy, a traditional house of the Tidung people.",
            "Tidung traditional attire with colorful woven details.",
            "Jepen Dance, a traditional dance of the region.",
            "Nasi Subut, a traditional dish made with rice and purple tubers.",
            "Traditional gong and drum ensembles.",
            "Tidung and various Dayak languages."
        )
    },


    // SULAWESI

    {
        name: "North Sulawesi",
        description: "North Sulawesi is known for Minahasan, Sangihe, and other coastal cultural traditions.",
        culture: makeCulture(
            "Walewangko, a traditional Minahasan house.",
            "Traditional Minahasan attire, including forms of Laku Tepu.",
            "Maengket Dance, performed in groups.",
            "Tinutuan, a vegetable rice porridge.",
            "Kolintang, a wooden percussion instrument.",
            "Manado Malay and local languages such as Tombulu."
        )
    },

    {
        name: "Central Sulawesi",
        description: "Central Sulawesi has diverse traditions among Kaili, Pamona, and other communities.",
        culture: makeCulture(
            "Souraja, a traditional house of the Kaili people.",
            "Traditional Kaili attire with woven fabrics and accessories.",
            "Dero Dance, a communal circle dance.",
            "Kaledo, a traditional bone marrow soup.",
            "Traditional gongs and drums.",
            "Kaili, Pamona, and other local languages."
        )
    },

    {
        name: "South Sulawesi",
        description: "South Sulawesi is known for Bugis, Makassar, and Toraja cultural heritage.",
        culture: makeCulture(
            "Tongkonan, the traditional house of the Toraja people.",
            "Baju Bodo, a traditional Bugis-Makassar outfit.",
            "Pakarena Dance, a graceful traditional dance.",
            "Coto Makassar and Pallubasa.",
            "Gandrang drums and traditional pui-pui.",
            "Bugis, Makassarese, and Toraja languages."
        )
    },

    {
        name: "Southeast Sulawesi",
        description: "Southeast Sulawesi has rich traditions from the Tolaki, Buton, and Muna communities.",
        culture: makeCulture(
            "Banua Tada, a traditional house of the Buton people.",
            "Traditional Buton and Tolaki clothing.",
            "Lulo Dance, a communal dance.",
            "Sinonggi, a traditional sago-based dish.",
            "Gong and traditional drums.",
            "Tolaki, Wolio, Muna, and other local languages."
        )
    },

    {
        name: "Gorontalo",
        description: "Gorontalo preserves traditions shaped by local customs and Islamic heritage.",
        culture: makeCulture(
            "Dulohupa, a traditional meeting house.",
            "Biliu for women and Makuta for men.",
            "Saronde Dance, often performed at celebrations.",
            "Binte Biluhuta, a corn-based soup.",
            "Polopalo, a traditional percussion instrument.",
            "Gorontalo."
        )
    },

    {
        name: "West Sulawesi",
        description: "West Sulawesi is home to Mandar traditions, especially its maritime culture.",
        culture: makeCulture(
            "Boyang, a traditional Mandar house.",
            "Traditional Mandar attire with silk sarongs.",
            "Pattudu Dance, a traditional Mandar dance.",
            "Jepa, a traditional food made from cassava.",
            "Kecapi Mandar and traditional drums.",
            "Mandar."
        )
    },


    // PAPUA REGION

    {
        name: "Papua",
        description: "Papua has diverse indigenous cultures, languages, and traditions across its coastal and highland regions.",
        culture: makeCulture(
            "Traditional Honai-style houses are found in some highland communities.",
            "Koteka and other traditional attire, varying by community.",
            "Yospan Dance, a lively Papuan dance.",
            "Papeda, a sago-based staple food.",
            "Tifa, a traditional drum.",
            "Many local Papuan languages, alongside Indonesian."
        )
    },

    {
        name: "West Papua",
        description: "West Papua is known for coastal communities and the rich traditions of the Bird's Head region.",
        culture: makeCulture(
            "Traditional coastal houses on stilts in some communities.",
            "Traditional attire with woven materials, feathers, and natural ornaments.",
            "Traditional welcome dances from local communities.",
            "Papeda and grilled fish with regional spices.",
            "Tifa and traditional singing.",
            "Meyah, Sougb, and other local languages."
        )
    },

    {
        name: "Southwest Papua",
        description: "Southwest Papua includes Raja Ampat and the cultural traditions of several coastal communities.",
        culture: makeCulture(
            "Traditional stilt houses found in coastal settlements.",
            "Local traditional attire decorated with woven ornaments.",
            "Wor and other traditional ceremonial dances.",
            "Seafood dishes and papeda.",
            "Tifa and traditional vocal music.",
            "Ma'ya, Matbat, and other local languages."
        )
    },

    {
        name: "Central Papua",
        description: "Central Papua includes highland and coastal communities with distinct languages and customs.",
        culture: makeCulture(
            "Traditional community houses vary among the Mee, Kamoro, and other groups.",
            "Traditional attire made with natural fibers and local ornaments.",
            "Traditional ceremonial dances of local communities.",
            "Sago-based foods and fish dishes.",
            "Tifa and traditional singing.",
            "Mee, Kamoro, and other local languages."
        )
    },

    {
        name: "Highland Papua",
        description: "Highland Papua is home to many indigenous communities with strong customary traditions.",
        culture: makeCulture(
            "Honai, a round traditional house with a thatched roof.",
            "Koteka and woven accessories in some highland communities.",
            "Traditional group dances performed during ceremonies.",
            "Bakar batu, a communal stone-cooking tradition.",
            "Pikon and traditional singing.",
            "Dani, Yali, Lani, and other local languages."
        )
    },

    {
        name: "South Papua",
        description: "South Papua has rich lowland and coastal traditions, including those of the Marind and Asmat communities.",
        culture: makeCulture(
            "Traditional houses built with local materials in lowland communities.",
            "Traditional attire using natural fibers and decorative ornaments.",
            "Tifa dances and ceremonial dances of local communities.",
            "Sago and fish-based traditional dishes.",
            "Tifa, a traditional drum used in ceremonies.",
            "Marind, Asmat, and other local languages."
        )
    }

];


/* ==================================
   2. NAVIGATION AND PAGE FUNCTIONS
================================== */

function goToMap() {
    window.location.href = "map.html";
}

function goToQuiz() {
    window.location.href = "quiz.html";
}

/* TEAM POPUP */
function openMembers() {
    const modal = document.getElementById("memberModal");
    if (modal) modal.classList.add("show");
}

function closeMembers() {
    const modal = document.getElementById("memberModal");
    if (modal) modal.classList.remove("show");
}

/* SHOW THE FIVE MAIN ISLANDS ON MAP PAGE */
function renderIslands() {
    const islandList = document.getElementById("islandList");
    if (!islandList) return;

    islandList.innerHTML = islands.map((island, index) => `
        <a class="island-card" href="island.html?island=${index}">
            <span class="island-icon">${island.icon}</span>
            <span class="island-name">${island.name}</span>
            <span class="island-link">EXPLORE ISLAND →</span>
        </a>
    `).join("");
}

/* SHOW PROVINCES ON A SEPARATE ISLAND PAGE */
function renderIslandPage() {
    const title = document.getElementById("islandTitle");
    const description = document.getElementById("islandDescription");
    const provinceList = document.getElementById("provinceList");
    if (!title || !description || !provinceList) return;

    const params = new URLSearchParams(window.location.search);
    const islandParam = params.get("island");
    const islandIndex = islandParam === null ? -1 : Number(islandParam);
    const island = islands[islandIndex];

    if (!Number.isInteger(islandIndex) || !island) {
        title.textContent = "Island not found";
        description.textContent = "Please return to the island map and choose an island.";
        provinceList.innerHTML = "";
        return;
    }

    title.textContent = island.name;
    description.textContent = island.description;
    provinceList.innerHTML = island.provinces.map(provinceIndex => {
        const province = provinces[provinceIndex];
        return `
            <a class="province-link" href="culture.html?province=${provinceIndex}">
                <span>${province.name}</span>
                <span>Explore →</span>
            </a>
        `;
    }).join("");
}

/* SHOW CULTURAL INFORMATION FOR THE SELECTED PROVINCE */
function renderCulturePage() {
    const name = document.getElementById("provinceName");
    const description = document.getElementById("provinceDescription");
    const grid = document.getElementById("cultureGrid");
    if (!name || !description || !grid) return;

    const params = new URLSearchParams(window.location.search);
    const provinceParam = params.get("province");
    const provinceIndex = provinceParam === null ? -1 : Number(provinceParam);
    const province = provinces[provinceIndex];

    if (!Number.isInteger(provinceIndex) || !province) {
        name.textContent = "Province not found";
        description.textContent = "Please go back and choose a province.";
        grid.innerHTML = "";
        return;
    }

    name.textContent = province.name;
    description.textContent = province.description;
    grid.innerHTML = province.culture.map(([category, detail]) => `
        <article class="culture-card">
            <h3>${category}</h3>
            <p>${detail}</p>
        </article>
    `).join("");
}

/* QUIZ */
const quizQuestions = [
    { question: "Which traditional house comes from West Sumatra?", answers: ["Rumah Gadang", "Rumah Joglo", "Tongkonan", "Rumah Kebaya"], correct: 0 },
    { question: "Which traditional dance is famous in Aceh?", answers: ["Jaipong", "Saman", "Pakarena", "Remo"], correct: 1 },
    { question: "What is a famous traditional food from North Sumatra?", answers: ["Pempek", "Gudeg", "Arsik", "Rendang"], correct: 2 },
    { question: "Which traditional cloth is strongly associated with the Batak people?", answers: ["Ulos", "Tapis", "Songket Palembang", "Batik"], correct: 0 },
    { question: "Which instrument is a traditional wooden instrument from North Sulawesi?", answers: ["Kolintang", "Angklung", "Sape", "Talempong"], correct: 0 },
    { question: "What is the traditional house of the Toraja people?", answers: ["Honai", "Tongkonan", "Lamin", "Dulohupa"], correct: 1 },
    { question: "Which food is a well-known Betawi dish?", answers: ["Kerak Telor", "Papeda", "Sinonggi", "Tempoyak"], correct: 0 },
    { question: "Which traditional instrument is commonly found in Papua?", answers: ["Gambus", "Tifa", "Kecapi", "Sasando"], correct: 1 },
    { question: "What is the traditional food made from sago that is popular in Papua?", answers: ["Rawon", "Papeda", "Pempek", "Seruit"], correct: 1 },
    { question: "Which dance is associated with West Java?", answers: ["Jaipong", "Saman", "Yospan", "Saronde"], correct: 0 }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function showQuestion() {
    const questionEl = document.getElementById("questionText");
    const answersEl = document.getElementById("answerList");
    const numberEl = document.getElementById("questionNumber");
    const progress = document.getElementById("progressFill");
    const feedback = document.getElementById("feedback");
    const nextButton = document.getElementById("nextButton");

    if (!questionEl || !answersEl) return;

    const item = quizQuestions[currentQuestion];
    answered = false;
    numberEl.textContent = `QUESTION ${currentQuestion + 1} / ${quizQuestions.length}`;
    questionEl.textContent = item.question;
    progress.style.width = `${(currentQuestion / quizQuestions.length) * 100}%`;
    feedback.textContent = "";
    nextButton.disabled = true;
    nextButton.textContent = currentQuestion === quizQuestions.length - 1 ? "SEE RESULT →" : "NEXT QUESTION →";

    answersEl.innerHTML = item.answers.map((answer, index) => `
        <button class="answer-button" type="button" onclick="chooseAnswer(${index})">${answer}</button>
    `).join("");
}

function chooseAnswer(selected) {
    if (answered) return;
    answered = true;

    const item = quizQuestions[currentQuestion];
    const buttons = document.querySelectorAll(".answer-button");
    buttons.forEach((button, index) => {
        button.disabled = true;
        if (index === item.correct) button.classList.add("correct");
        if (index === selected && selected !== item.correct) button.classList.add("wrong");
    });

    const feedback = document.getElementById("feedback");
    if (selected === item.correct) {
        score++;
        feedback.textContent = "Correct! Great job.";
        feedback.style.color = "#4c8650";
    } else {
        feedback.textContent = `Not quite. The correct answer is ${item.answers[item.correct]}.`;
        feedback.style.color = "#bd574a";
    }
    document.getElementById("nextButton").disabled = false;
}

function nextQuestion() {
    if (!answered) return;
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        showQuestion();
    } else {
        showQuizResult();
    }
}

function showQuizResult() {
    document.getElementById("quizBox").hidden = true;
    const result = document.getElementById("resultBox");
    result.hidden = false;
    document.getElementById("finalScore").textContent = `${score} / ${quizQuestions.length}`;
    document.getElementById("resultMessage").textContent =
        score >= 8 ? "Excellent! You know Indonesian culture very well." :
        score >= 5 ? "Good effort! Keep exploring Indonesia's cultural diversity." :
        "Keep learning and exploring the beautiful cultures of Indonesia.";
    document.getElementById("progressFill").style.width = "100%";
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("quizBox").hidden = false;
    document.getElementById("resultBox").hidden = true;
    showQuestion();
}

/* RUN ONLY THE FUNCTION NEEDED BY THE CURRENT PAGE */
document.addEventListener("DOMContentLoaded", () => {
    renderIslands();
    renderIslandPage();
    renderCulturePage();
    showQuestion();

    const modal = document.getElementById("memberModal");
    if (modal) {
        modal.addEventListener("click", event => {
            if (event.target === modal) closeMembers();
        });
    }
});
