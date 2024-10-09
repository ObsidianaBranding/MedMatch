document.getElementById('symptomForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const inputSymptoms = document.getElementById('symptoms').value.toLowerCase().split(',').map(symptom => symptom.trim());
    const resultDiv = document.getElementById('result');

    const diseaseMap = {
        "fever, cough, fatigue": {
            disease: "Flu",
            url: "https://dummy-article.com/flu",
            dText: "Text about disease."
        },
        "fever, headache, stiff neck": {
            disease: "Meningitis",
            url: "https://dummy-article.com/meningitis",
            dText: "Text about disease."
        },
        "fever, cough, shortness of breath": {
            disease: "COVID-19",
            url: "https://dummy-article.com/covid-19",
            dText: "Text about disease."
        },
        "headache, dizziness, nausea": {
            disease: "Migraine",
            url: "https://dummy-article.com/migraine",
            dText: "Text about disease."
        },
        "joint pain, fatigue, rash": {
            disease: "Lupus",
            url: "https://dummy-article.com/lupus",
            dText: "Text about disease."
        }
        // Add more symptoms, diseases, and URLs as needed
    };

    let potentialDisease = "Unknown disease";
    let diseaseURL = "";

    for (let symptoms in diseaseMap) {
        const symptomArray = symptoms.split(',').map(symptom => symptom.trim());
        const matched = symptomArray.every(symptom => inputSymptoms.includes(symptom));

        if (matched) {
            potentialDisease = diseaseMap[symptoms].disease;
            diseaseURL = diseaseMap[symptoms].url;
            diseaseText = diseaseMap[symptoms].dText;
            break;
        }
    }

    if (potentialDisease !== "Unknown disease") {
        resultDiv.innerHTML = `
        <div class="card text-center" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${potentialDisease}</h5>
                <p class="card-text">${diseaseText}.</p>
                <a href="${diseaseURL}" class="btn btn-primary">Read more about ${potentialDisease}</a>
            </div>
        </div>
        `;
    } else {
        resultDiv.innerHTML = `<strong>Possible Disease:</strong> ${potentialDisease}`;
    }
});
