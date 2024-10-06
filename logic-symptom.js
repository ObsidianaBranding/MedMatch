document.getElementById('symptomForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const inputSymptoms = document.getElementById('symptoms').value.toLowerCase().split(',').map(symptom => symptom.trim());
    const resultDiv = document.getElementById('result');

    const diseaseMap = {
        "fever, cough, fatigue": {
            disease: "Flu",
            url: "https://dummy-article.com/flu"
        },
        "fever, headache, stiff neck": {
            disease: "Meningitis",
            url: "https://dummy-article.com/meningitis"
        },
        "fever, cough, shortness of breath": {
            disease: "COVID-19",
            url: "https://dummy-article.com/covid-19"
        },
        "headache, dizziness, nausea": {
            disease: "Migraine",
            url: "https://dummy-article.com/migraine"
        },
        "joint pain, fatigue, rash": {
            disease: "Lupus",
            url: "https://dummy-article.com/lupus"
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
            break;
        }
    }

    if (potentialDisease !== "Unknown disease") {
        resultDiv.innerHTML = `<strong>Possible Disease:</strong> ${potentialDisease}<br><a href="${diseaseURL}" target="_blank">Read more about this disease</a>`;
    } else {
        resultDiv.innerHTML = `<strong>Possible Disease:</strong> ${potentialDisease}`;
    }
});
