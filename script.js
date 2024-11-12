const quizData = [
    {
        title: "① GISとは何か？",
        image: "gis_concept.png",
        question: "GISとは何の略称ですか？",
        answers: [
            "地理情報システム",
            "地球情報システム",
            "国際情報サービス",
            "全球位置システム"
        ],
        correct: 0,
        explanation: "GISは Geographic Information System の略で、地理的位置を手がかりに、位置に関する情報を持ったデータ（空間データ）を総合的に管理・加工し、視覚的に表示し、高度な分析や迅速な判断を可能にする技術です。"
    },
    {
        title: "② レイヤーの概念",
        image: "layers.png",
        question: "GISでのレイヤーの役割は何ですか？",
        answers: [
            "データを分類する",
            "地図を印刷する",
            "座標を計算する",
            "データベースを作成する"
        ],
        correct: 0,
        explanation: "レイヤーは、異なる種類の地理情報を重ね合わせて表示するための仕組みです。例えば、河川、道路、建物などの情報を別々のレイヤーとして管理することで、必要な情報だけを表示したり、組み合わせたりすることができます。"
    },
    {
        title: "③ ベクターデータとラスターデータ",
        image: "vector_raster.png",
        question: "河川の流路を表現するのに適しているのは次のうちどれですか？",
        answers: [
            "ベクターデータ（ライン）",
            "ラスターデータ",
            "テキストデータ",
            "音声データ"
        ],
        correct: 0,
        explanation: "ベクターデータは点、線、面で地物を表現し、河川の流路のような連続した線状の地物を表現するのに適しています。ラスターデータは格子状のピクセルで表現され、主に連続的に変化する現象（標高など）の表現に適しています。"
    },
    {
        title: "④ 座標系",
        image: "coordinate_system.png",
        question: "日本で一般的に使用される投影座標系は？",
        answers: [
            "UTM座標系",
            "平面直角座標系",
            "地理座標系",
            "メルカトル図法"
        ],
        correct: 1,
        explanation: "日本では、測量法に基づいて平面直角座標系が定められており、全国を19の座標系に分割しています。この座標系は、各地域での歪みを最小限に抑えつつ、平面上で距離や面積を正確に計算できるよう設計されています。"
    },
    {
        title: "⑤ 属性データ",
        image: "attribute_data.png",
        question: "河川GISで管理される属性データとして適切でないものは？",
        answers: [
            "河川名",
            "流量",
            "地質",
            "株価"
        ],
        correct: 3,
        explanation: "属性データは、地図上の地物に関する様々な情報を指します。河川GISでは、河川名、流量、幅、深さ、水質、周辺の地質など、河川管理に関連する情報が属性データとして管理されます。"
    },
    {
        title: "⑥ 空間解析",
        image: "spatial_analysis.png",
        question: "河川の氾濫想定区域を設定する際に用いる空間解析手法は？",
        answers: [
            "バッファ分析",
            "オーバーレイ分析",
            "ネットワーク分析",
            "地形解析"
        ],
        correct: 0,
        explanation: "バッファ分析は、ある地物から一定の距離にある範囲を抽出する手法です。河川の氾濫想定区域を設定する際、河川からの距離と標高データを組み合わせてバッファ分析を行うことで、おおよその氾濫区域を推定することができます。"
    },
    {
        title: "⑦ リモートセンシング",
        image: "remote_sensing.png",
        question: "河川管理でリモートセンシングが特に有用な用途は？",
        answers: [
            "水質調査",
            "魚類生息調査",
            "河川敷の植生把握",
            "河川流量測定"
        ],
        correct: 2,
        explanation: "リモートセンシングは、対象に触れずに情報を取得する技術です。衛星や航空機からの画像を利用することで、広範囲の河川敷の植生状況を効率的に把握することができます。これは河川環境の管理や外来種の監視などに役立ちます。"
    },
    {
        title: "⑧ GNSS（衛星測位システム）",
        image: "gnss.png",
        question: "河川管理でGNSSを活用する主な目的は？",
        answers: [
            "河川の水質測定",
            "堤防や構造物の位置情報取得",
            "魚類の遡上調査",
            "河川の温度測定"
        ],
        correct: 1,
        explanation: "GNSSは、衛星からの信号を受信して正確な位置を特定するシステムです。河川管理では、堤防、水門、観測所などの構造物の正確な位置情報を取得し、GISデータベースに登録する際にGNSSが活用されます。"
    },
    {
        title: "⑨ WebGIS",
        image: "webgis.png",
        question: "WebGISの主な利点は？",
        answers: [
            "オフラインでも使用可能",
            "データの更新が容易",
            "高度な解析が可能",
            "データ容量を気にしなくて良い"
        ],
        correct: 1,
        explanation: "WebGISは、インターネットを通じて地理情報を提供・共有するシステムです。サーバー側でデータを一元管理することで、クライアント側のデータ更新が容易になり、常に最新の情報を提供できます。また、特別なソフトウェアをインストールせずにブラウザで利用できる利点もあります。"
    },
    {
        title: "⑩ オープンデータと標準化",
        image: "open_data.png",
        question: "国土交通省が提供する地理空間情報のポータルサイトは？",
        answers: [
            "G空間情報センター",
            "地理院地図",
            "ハザードマップポータルサイト",
            "国土数値情報"
        ],
        correct: 0,
        explanation: "G空間情報センターは、国土交通省が中心となって運営する地理空間情報のポータルサイトです。様々な機関が保有する地理空間情報をオープンデータとして提供し、利用者が容易にアクセスできるようにしています。これにより、河川管理を含む様々な分野での地理空間情報の活用が促進されています。"
    }
];

let currentQuestion = 0;
let correctAnswers = 0;

function loadQuestion() {
    const question = quizData[currentQuestion];
    document.getElementById("question-title").textContent = question.title;
    document.getElementById("question-image").src = question.image;
    document.getElementById("question-text").textContent = question.question;

    for (let i = 0; i < 4; i++) {
        document.getElementById(`btn${i}`).textContent = question.answers[i];
    }

    document.getElementById("result-container").style.display = "none";
    document.getElementById("next-btn").style.display = "none";

    updateProgressBar();
}

function checkAnswer(btnIndex) {
    const question = quizData[currentQuestion];
    const resultContainer = document.getElementById("result-container");
    const resultText = document.getElementById("result-text");
    const explanationText = document.getElementById("explanation-text");

    if (btnIndex === question.correct) {
        resultText.textContent = "正解！";
        resultText.style.color = "green";
        correctAnswers++;
    } else {
        resultText.textContent = "不正解。正解は " + question.answers[question.correct] + " です。";
        resultText.style.color = "red";
    }

    explanationText.textContent = question.explanation;
    resultContainer.style.display = "block";
    document.getElementById("next-btn").style.display = "block";
}

function updateProgressBar() {
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    document.getElementById("progress").style.width = `${progress}%`;
}

function showFinalResult() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `
        <h1>テスト終了！</h1>
        <p>お疲れ様でした。</p>
        <p>あなたの成績: ${correctAnswers} / ${quizData.length} 問正解</p>
        <p>GIS（地理情報システム）の本質は、空間的なデータを収集、分析、可視化することによって、場所に関連する情報を理解し、意思決定をサポートすることです。<br>
           地理的な要素を活用することで、複雑な問題を視覚的に把握し、効果的な解決策を導き出すことが可能になります。<br>
           GISを活用することで、河川管理の効率が向上し、より迅速かつ効果的な意思決定が可能になります。</p>
        <p>気候変動や災害への対応にはGISは必要不可欠です。<br>
           「ゆく河の流れは絶えずして、しかももとの水にあらず」</p>
        <button id="restart-btn">もう一度挑戦する</button>
    `;
    document.getElementById("restart-btn").addEventListener("click", restartQuiz);
}

function restartQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    location.reload(); // ページをリロードしてクイズをリスタート
}

document.querySelectorAll(".answer-btn").forEach((btn, index) => {
    btn.addEventListener("click", () => checkAnswer(index));
});

document.getElementById("next-btn").addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showFinalResult();
    }
});

loadQuestion();