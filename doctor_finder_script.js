// Sample doctor data with images
const doctors = [
  {
    name: "Dr. Johnson",
    specialty: "Orthopedics",
    city: "New York",
    address: "321 Maple Ave",
    email: "johnson@example.com",
    phone: "555-111-2222",
    image: "/img/doctors/1.jpg",
  },
  {
    name: "Dr. Brown",
    specialty: "Pediatrics",
    city: "Los Angeles",
    address: "654 Pine St",
    email: "brown@example.com",
    phone: "555-333-4444",
    image: "/img/doctors/2.jpg",
  },
  {
    name: "Dr. Taylor",
    specialty: "Dermatology",
    city: "Chicago",
    address: "987 Cedar Rd",
    email: "taylor@example.com",
    phone: "555-444-5555",
    image: "/img/doctors/3.jpg",
  },
  {
    name: "Dr. Wilson",
    specialty: "General Practice",
    city: "Houston",
    address: "234 Birch Blvd",
    email: "wilson@example.com",
    phone: "555-555-6666",
    image: "/img/doctors/4.jpg",
  },
  {
    name: "Dr. Lee",
    specialty: "Cardiology",
    city: "Phoenix",
    address: "456 Spruce St",
    email: "lee@example.com",
    phone: "555-666-7777",
    image: "/img/doctors/5.jpg",
  },
  {
    name: "Dr. Harris",
    specialty: "Neurology",
    city: "Philadelphia",
    address: "678 Elm St",
    email: "harris@example.com",
    phone: "555-777-8888",
    image: "/img/doctors/6.jpg",
  },
  {
    name: "Dr. Clark",
    specialty: "Psychiatry",
    city: "San Antonio",
    address: "890 Ash Dr",
    email: "clark@example.com",
    phone: "555-888-9999",
    image: "/img/doctors/7.jpg",
  },
  {
    name: "Dr. Lewis",
    specialty: "Gastroenterology",
    city: "San Diego",
    address: "135 Walnut St",
    email: "lewis@example.com",
    phone: "555-999-0000",
    image: "/img/doctors/8.jpg",
  },
  {
    name: "Dr. Robinson",
    specialty: "Endocrinology",
    city: "Dallas",
    address: "246 Cherry Ln",
    email: "robinson@example.com",
    phone: "555-000-1111",
    image: "/img/doctors/9.jpg",
  },
  {
    name: "Dr. Walker",
    specialty: "Otolaryngology",
    city: "San Jose",
    address: "357 Willow Ct",
    email: "walker@example.com",
    phone: "555-222-3333",
    image: "/img/doctors/10.jpg",
  },
  {
    name: "Dr. Hall",
    specialty: "Infectious Diseases",
    city: "Austin",
    address: "468 Hickory Dr",
    email: "hall@example.com",
    phone: "555-444-2222",
    image: "/img/doctors/11.jpg",
  },
  {
    name: "Dr. Allen",
    specialty: "Rheumatology",
    city: "Jacksonville",
    address: "579 Fir Ave",
    email: "allen@example.com",
    phone: "555-666-0000",
    image: "/img/doctors/12.jpg",
  },
  {
    name: "Dr. Young",
    specialty: "Vascular Surgery",
    city: "Fort Worth",
    address: "690 Cedar St",
    email: "young@example.com",
    phone: "555-888-2222",
    image: "/img/doctors/13.jpg",
  },
  {
    name: "Dr. King",
    specialty: "Pulmonology",
    city: "Columbus",
    address: "801 Pine Rd",
    email: "king@example.com",
    phone: "555-999-4444",
    image: "/img/doctors/14.jpg",
  },
  {
    name: "Dr. Wright",
    specialty: "Urology",
    city: "Indianapolis",
    address: "912 Maple Blvd",
    email: "wright@example.com",
    phone: "555-111-4444",
    image: "/img/doctors/15.jpg",
  },
  {
    name: "Dr. Scott",
    specialty: "Nephrology",
    city: "Charlotte",
    address: "123 Oak Ct",
    email: "scott@example.com",
    phone: "555-222-5555",
    image: "/img/doctors/16.jpg",
  },
  {
    name: "Dr. Torres",
    specialty: "Gynecology",
    city: "San Francisco",
    address: "234 Elm Blvd",
    email: "torres@example.com",
    phone: "555-333-6666",
    image: "/img/doctors/17.jpg",
  },
  {
    name: "Dr. Nguyen",
    specialty: "Ophthalmology",
    city: "Seattle",
    address: "345 Birch Rd",
    email: "nguyen@example.com",
    phone: "555-444-7777",
    image: "/img/doctors/18.jpg",
  },
  {
    name: "Dr. Hill",
    specialty: "Physical Medicine",
    city: "Denver",
    address: "456 Ash St",
    email: "hill@example.com",
    phone: "555-555-8888",
    image: "/img/doctors/19.jpg",
  },
  {
    name: "Dr. Green",
    specialty: "Allergy",
    city: "Washington",
    address: "567 Walnut Ave",
    email: "green@example.com",
    phone: "555-666-9999",
    image: "/img/doctors/20.jpg",
  },
  {
    name: "Dr. Adams",
    specialty: "Sports Medicine",
    city: "Boston",
    address: "678 Cedar Ct",
    email: "adams@example.com",
    phone: "555-777-0000",
    image: "/img/doctors/21.jpg",
  },
  {
    name: "Dr. Nelson",
    specialty: "Cardiology",
    city: "El Paso",
    address: "789 Spruce Blvd",
    email: "nelson@example.com",
    phone: "555-888-1111",
    image: "/img/doctors/22.jpg",
  },
  {
    name: "Dr. Carter",
    specialty: "Dermatology",
    city: "Detroit",
    address: "890 Oak Rd",
    email: "carter@example.com",
    phone: "555-999-2222",
    image: "/img/doctors/23.jpg",
  },
  {
    name: "Dr. Mitchell",
    specialty: "Endocrinology",
    city: "Nashville",
    address: "135 Maple St",
    email: "mitchell@example.com",
    phone: "555-111-3333",
    image: "/img/doctors/24.jpg",
  },
  {
    name: "Dr. Perez",
    specialty: "Gastroenterology",
    city: "Baltimore",
    address: "246 Elm St",
    email: "perez@example.com",
    phone: "555-222-4444",
    image: "/img/doctors/25.jpg",
  },
  {
    name: "Dr. Roberts",
    specialty: "Neurology",
    city: "Milwaukee",
    address: "357 Birch Blvd",
    email: "roberts@example.com",
    phone: "555-333-5555",
    image: "/img/doctors/26.jpg",
  },
  {
    name: "Dr. Turner",
    specialty: "Psychiatry",
    city: "Albuquerque",
    address: "468 Ash Ct",
    email: "turner@example.com",
    phone: "555-444-6666",
    image: "/img/doctors/27.jpg",
  },
  {
    name: "Dr. Phillips",
    specialty: "Pulmonology",
    city: "Tucson",
    address: "579 Walnut St",
    email: "phillips@example.com",
    phone: "555-555-7777",
    image: "/img/doctors/28.jpg",
  },
  {
    name: "Dr. Campbell",
    specialty: "Infectious Diseases",
    city: "Fresno",
    address: "690 Cedar Blvd",
    email: "campbell@example.com",
    phone: "555-666-8888",
    image: "/img/doctors/29.jpg",
  },
  {
    name: "Dr. Parker",
    specialty: "Rheumatology",
    city: "Sacramento",
    address: "801 Oak St",
    email: "parker@example.com",
    phone: "555-777-9999",
    image: "/img/doctors/30.jpg",
  },
  {
    name: "Dr. Edwards",
    specialty: "Vascular Surgery",
    city: "Long Beach",
    address: "912 Maple Rd",
    email: "edwards@example.com",
    phone: "555-888-0000",
    image: "/img/doctors/31.jpg",
  },
  {
    name: "Dr. Collins",
    specialty: "Otolaryngology",
    city: "Kansas City",
    address: "321 Elm Ct",
    email: "collins@example.com",
    phone: "555-999-1111",
    image: "/img/doctors/32.jpg",
  },
  {
    name: "Dr. Stewart",
    specialty: "Urology",
    city: "Mesa",
    address: "654 Pine Rd",
    email: "stewart@example.com",
    phone: "555-111-2222",
    image: "/img/doctors/33.jpg",
  },
  {
    name: "Dr. Sanchez",
    specialty: "Gynecology",
    city: "Virginia Beach",
    address: "987 Cedar St",
    email: "sanchez@example.com",
    phone: "555-333-4444",
    image: "/img/doctors/34.jpg",
  },
  {
    name: "Dr. Morris",
    specialty: "Ophthalmology",
    city: "Atlanta",
    address: "135 Birch St",
    email: "morris@example.com",
    phone: "555-444-5555",
    image: "/img/doctors/35.jpg",
  },
  {
    name: "Dr. Rogers",
    specialty: "Physical Medicine",
    city: "Colorado Springs",
    address: "246 Maple Blvd",
    email: "rogers@example.com",
    phone: "555-555-6666",
    image: "/img/doctors/36.jpg",
  },
  {
    name: "Dr. Reed",
    specialty: "Allergy",
    city: "Omaha",
    address: "357 Pine Rd",
    email: "reed@example.com",
    phone: "555-666-7777",
    image: "/img/doctors/37.jpg",
  },
  {
    name: "Dr. Cook",
    specialty: "Sports Medicine",
    city: "Raleigh",
    address: "468 Cedar Ct",
    email: "cook@example.com",
    phone: "555-777-8888",
    image: "/img/doctors/38.jpg",
  },
];

// Sample symptom mapping
const symptomMapping = {
  pain: "Orthopedics",
  fever: "General Practice",
  rash: "Dermatology",
  cough: "Pulmonology",
  headache: "Neurology",
  "abdominal pain": "Gastroenterology",
  fatigue: "Endocrinology",
  anxiety: "Psychiatry",
  depression: "Psychiatry",
  "joint pain": "Rheumatology",
  "skin rash": "Dermatology",
  nausea: "Gastroenterology",
  dizziness: "Neurology",
  "sore throat": "Otolaryngology",
  "shortness of breath": "Pulmonology",
  allergies: "Allergy",
  injury: "Sports Medicine",
  "weight loss": "Endocrinology",
  infection: "Infectious Diseases",
  vomiting: "Gastroenterology",
  "ear pain": "Otolaryngology",
  "back pain": "Orthopedics",
  "throat pain": "Otolaryngology",
  hives: "Dermatology",
  "high blood pressure": "Cardiology",
  "chest pain": "Cardiology",
  diabetes: "Endocrinology",
  hypertension: "Cardiology",
  constipation: "Gastroenterology",
  diarrhea: "Gastroenterology",
  insomnia: "Psychiatry",
  "sleep apnea": "Pulmonology",
  acne: "Dermatology",
  psoriasis: "Dermatology",
  eczema: "Dermatology",
  fainting: "Neurology",
  numbness: "Neurology",
  seizures: "Neurology",
  fracture: "Orthopedics",
  "muscle spasm": "Physical Medicine",
  pregnancy: "Gynecology",
  menopause: "Gynecology",
  heartburn: "Gastroenterology",
  "stomach pain": "Gastroenterology",
  "varicose veins": "Vascular Surgery",
  "sinus infection": "Otolaryngology",
  UTI: "Urology",
  "kidney stones": "Nephrology",
  "liver problems": "Gastroenterology",
  "heart disease": "Cardiology",
  cholesterol: "Cardiology",
  "thyroid problems": "Endocrinology",
  osteoporosis: "Orthopedics",
};

// Populate datalist with symptom options
const symptomsDatalist = document.getElementById("symptoms");
for (const symptom in symptomMapping) {
  const option = document.createElement("option");
  option.value = symptom; // This is what the user sees
  symptomsDatalist.appendChild(option);
}

// Function to populate the cities datalist
function populateCities() {
  const citiesDatalist = document.getElementById("locations");
  const uniqueCities = new Set(doctors.map((doctor) => doctor.city)); // Get unique cities

  uniqueCities.forEach((city) => {
    const option = document.createElement("option");
    option.value = city;
    citiesDatalist.appendChild(option); // Append city option to datalist
  });
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", populateCities);

// Function to handle form submission
document
  .getElementById("symptom-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const symptomInput = document.getElementById("symptom").value.toLowerCase();
    const locationInput = document
      .getElementById("location")
      .value.toLowerCase();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    // Get specialty based on symptom input
    const specialty = Object.keys(symptomMapping).find((symptom) =>
      symptomInput.includes(symptom)
    );

    if (specialty) {
      const filteredDoctors = doctors.filter(
        (doctor) => doctor.specialty === symptomMapping[specialty]
      );

      if (filteredDoctors.length > 0) {
        filteredDoctors.forEach((doctor) => {
          const card = document.createElement("div");
          card.classList.add("card");
          card.classList.add("mb-3");
          //card.style.maxWidth = "540px";
          card.innerHTML = `
            <!--<div class="card mb-3" style="max-width: 540px;">-->
                <div class="row g-0">
                <div class="col-md-4">
                    <img src="${doctor.image}" alt="${
                        doctor.name
                    }" class="img-fluid rounded-start">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">${doctor.name}</h5>
                    <p class="card-text">Specialty: ${doctor.specialty}</p>
                    <p class="card-text">City: ${doctor.city}</p>
                    <p class="card-text">Address: <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        doctor.address
                    )}" target="_blank" rel="noopener noreferrer">${
                        doctor.address
                    }</a></p>
                    <p class="card-text">Email: <a href="mailto:${doctor.email}">${
                        doctor.email
                    }</a></p>
                    <p class="card-text">Phone: ${
                        doctor.phone
                    }</p><div class="card mb-3">
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                </div>
            </div>
                `;
          resultsDiv.appendChild(card);
        });
      } else {
        resultsDiv.innerHTML = "<p>No doctors found for this specialty.</p>";
      }
    } else {
      resultsDiv.innerHTML = "<p>Symptom not recognized. Please try again.</p>";
    }
  });
