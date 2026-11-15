const questions = [

    // =====================================================
    // Q1 — MCQ — 1 MARK
    // =====================================================
    {
        question: "A copper wire upon loading instantaneously increases in length to l, and then continues to elongate gradually. Upon unloading, the wire retracts to length. According to the Maxwell model, which one of the options given correctly relates the total strain E, the applied stress S, the modulus G, the material’s resistance to flow η, and the elapsed time t between loading and unloading? (G-23)",
        options: [
            "E = (S/G) – (S/η)t",
            "E = (S/G) × (S/η)t",
            "E = (S/G) + (S/η)t",
            "E = (S/G) / (S/η)t"
        ],
        answer: 2,
        type: "MCQ",
        marks: 1
    },

    // =====================================================
    // Q2 — MCQ — 1 MARK
    // =====================================================
    {
        question: "A polymer specimen is subjected to a constant tensile stress. The strain increases immediately by a small amount and then continues to increase linearly with time. Which mechanical model best describes this behavior?",
        options: [
            "Hookean spring",
            "Maxwell model",
            "Kelvin–Voigt model",
            "Rigid body"
        ],
        answer: 1,
        type: "MCQ",
        marks: 1
    },

    // =====================================================
    // Q3 — NAT — 1 MARK
    // =====================================================
    {
        question: "A constant stress of 12 MPa is applied to a Maxwell material having an elastic modulus of 600 MPa and viscosity of 2400 MPa·s. Calculate the total strain after 8 s.",
        type: "NAT",
        answer: 0.06,
        marks: 1
    },

    // =====================================================
    // Q4 — MCQ — 1 MARK
    // =====================================================
    {
        question: "Three polymer samples (P, Q, and R) are subjected to the same constant tensile stress. P exhibits an immediate strain followed by a linear increase in strain with time. Q shows no immediate strain but gradually approaches a constant strain. R undergoes only instantaneous deformation with no further change. The correct correspondence is:",
        options: [
            "P–Maxwell, Q–Kelvin–Voigt, R–Hookean spring",
            "P–Kelvin–Voigt, Q–Maxwell, R–Dashpot",
            "P–Hookean spring, Q–Maxwell, R–Kelvin–Voigt",
            "P–Dashpot, Q–Hookean spring, R–Maxwell"
        ],
        answer: 0,
        type: "MCQ",
        marks: 1
    },

    // =====================================================
    // Q5 — NAT — 1 MARK
    // =====================================================
    {
        question: "A Maxwell material has E = 800 MPa and η = 4000 MPa·s. A constant stress of 16 MPa is applied. After how many seconds will the viscous strain equal the elastic strain?",
        type: "NAT",
        answer: 5,
        marks: 1
    },

    // =====================================================
    // Q6 — MCQ — 1 MARK
    // =====================================================
    {
        question: "The Maxwell model predicts complete recovery of strain after unloading.\n\nReason (R): The dashpot stores elastic energy.",
        options: [
            "Both A and R are true.",
            "A is true, R is false.",
            "A is false, R is true.",
            "Both A and R are false."
        ],
        answer: 3,
        type: "MCQ",
        marks: 1
    },

    // =====================================================
    // Q7 — MCQ — 1 MARK
    // =====================================================
    {
        question: "Two Maxwell materials have identical elastic modulus. Material A has twice the viscosity of Material B. Both are loaded under the same constant stress for the same duration. Which statement is correct? (IMP)",
        options: [
            "Both experience the same viscous strain.",
            "Material A develops twice the viscous strain.",
            "Material B develops twice the viscous strain.",
            "Elastic strain is different for the two materials."
        ],
        answer: 2,
        type: "MCQ",
        marks: 1
    },

    // =====================================================
    // Q8 — MCQ — 1 MARK
    // =====================================================
    {
        question: "A polymer specimen is subjected to a constant stress. Its strain-time curve shows immediate deformation, gradually decreasing strain rate, and finally reaching a constant strain. Which model best represents this behavior?",
        options: [
            "Maxwell",
            "Kelvin–Voigt",
            "Hookean spring",
            "Newtonian dashpot"
        ],
        answer: 1,
        type: "MCQ",
        marks: 1
    },

    // =====================================================
    // Q9 — NAT — 1 MARK
    // =====================================================
    {
        question: "A polymer is modeled as a Maxwell element. The instantaneous strain accounts for 25% of the total strain after 15 s under constant stress. If the elastic modulus is 1200 MPa, determine the viscosity of the material.",
        type: "NAT",
        answer: 6000,
        marks: 1
    },

    // =====================================================
    // Q10 — NAT — 1 MARK
    // =====================================================
    {
        question: "A polymer melt follows the power law τ = K·(γ̇)ⁿ with K = 10⁴ Pa·sⁿ and n = 0.4. The apparent viscosity (in Pa·s) at a shear rate of 100 s⁻¹ is _______.",
        type: "NAT",
        answer: 631,
        marks: 1
    },

    // =====================================================
    // Q11 — MCQ — 2 MARKS
    // =====================================================
    {
        question: "Consider the structure of a crosslinked polymer shown in the figure. From the options given, identify the monomers that are used in the synthesis of the polymer. (GATE 2023; Q112)",
        image: "q11.png",
        options: [
            "Melamine and Benzaldehyde",
            "Melamine and Acetone",
            "Melamine and Formaldehyde",
            "Melamine and Ethanol"
        ],
        answer: 2,
        type: "MCQ",
        marks: 2
    },

    // =====================================================
    // Q12 — MSQ — 2 MARKS
    // =====================================================
    {
        question: "Mechanical stress is applied on a polymer. Identify the correct match(es) between the statements (1, 2, 3, 4, 5) that describe the deformations and the regimes (P, Q, R). (G-23)\n\nP – Rubbery regime\nQ – Region around glass transition temperature (Tg)\nR – Sample under deformed state\n\n1. Stress-relaxation takes place and the excess free energy is dissipated\n2. The motions of the molecules are long range\n3. Segmental motion of the molecules is important\n4. The maximum relaxation time is strongly dependent on the molecular weight\n5. The deformations are independent of the molecular weight and primarily depend on the local structure",
        options: [
            "P-2; Q-5; R-1",
            "P-1; Q-5; R-1",
            "P-2; Q-3; R-4",
            "P-4; Q-3; R-1"
        ],
        correctAnswers: [0, 3],
        type: "MSQ",
        marks: 2
    },

    // =====================================================
    // Q13 — MATCH THE FOLLOWING — 2 MARKS
    // =====================================================
    {
        question: "Match the following.\n\n<table border='1' cellpadding='8' style='border-collapse:collapse;width:100%'><tr><th>List-I</th><th>List-II</th></tr><tr><td>P. Glassy polymer under small strain</td><td>1. Entropy-driven elasticity</td></tr><tr><td>Q. Rubbery polymer</td><td>2. Bond stretching and bond-angle distortion</td></tr><tr><td>R. Stress relaxation</td><td>3. Excess free energy is dissipated with time</td></tr><tr><td>S. Plastic deformation</td><td>4. Irreversible chain slippage</td></tr></table>",
        options: [
            "P-2, Q-1, R-3, S-4",
            "P-1, Q-2, R-3, S-4",
            "P-2, Q-4, R-1, S-3",
            "P-4, Q-1, R-2, S-3"
        ],
        answer: 0,
        type: "MCQ",
        marks: 2
    },

    // =====================================================
    // Q14 — MATCH THE FOLLOWING — 2 MARKS
    // =====================================================
    {
        question: "Match the viscoelastic model with its characteristic feature.\n\n<table border='1' cellpadding='8' style='border-collapse:collapse;width:100%'><tr><th>List-I</th><th>List-II</th></tr><tr><td>P. Maxwell model</td><td>1. Constant stress experiment</td></tr><tr><td>Q. Kelvin–Voigt model</td><td>2. Stress relaxation</td></tr><tr><td>R. Creep test</td><td>3. Constant strain experiment</td></tr><tr><td>S. Stress relaxation test</td><td>4. Delayed elastic deformation</td></tr></table>",
        options: [
            "P-2, Q-4, R-1, S-3",
            "P-4, Q-2, R-1, S-3",
            "P-2, Q-1, R-4, S-3",
            "P-3, Q-4, R-2, S-1"
        ],
        answer: 0,
        type: "MCQ",
        marks: 2
    },

    // =====================================================
    // Q15 — MATCH THE FOLLOWING — 2 MARKS
    // =====================================================
    {
        question: "Match the relaxation phenomenon with its molecular origin.\n\n<table border='1' cellpadding='8' style='border-collapse:collapse;width:100%'><tr><th>List-I</th><th>List-II</th></tr><tr><td>P. β-relaxation</td><td>1. Cooperative segmental motion</td></tr><tr><td>Q. α-relaxation</td><td>2. Side-group motion</td></tr><tr><td>R. Terminal relaxation</td><td>3. Whole-chain reptation</td></tr><tr><td>S. Glass transition</td><td>4. Sudden increase in free volume</td></tr></table>",
        options: [
            "P-2, Q-1, R-3, S-4",
            "P-1, Q-2, R-3, S-4",
            "P-2, Q-4, R-1, S-3",
            "P-3, Q-1, R-2, S-4"
        ],
        answer: 0,
        type: "MCQ",
        marks: 2
    },

    // =====================================================
    // Q16 — MATCH THE FOLLOWING — 2 MARKS
    // =====================================================
    {
        question: "Match the observation with the molecular explanation.\n\n<table border='1' cellpadding='8' style='border-collapse:collapse;width:100%'><tr><th>List-I</th><th>List-II</th></tr><tr><td>P. Stress decreases at constant strain</td><td>1. Viscoelastic relaxation</td></tr><tr><td>Q. Sharp drop in modulus near Tg</td><td>2. Increase in segmental mobility</td></tr><tr><td>R. Large elastic recovery</td><td>3. Entropic elasticity</td></tr><tr><td>S. Strain increases with time at constant stress</td><td>4. Time-dependent molecular rearrangement</td></tr></table>",
        options: [
            "P-1, Q-2, R-3, S-4",
            "P-4, Q-2, R-1, S-3",
            "P-1, Q-3, R-2, S-4",
            "P-2, Q-1, R-3, S-4"
        ],
        answer: 0,
        type: "MCQ",
        marks: 2
    },

    // =====================================================
    // Q17 — MSQ — 2 MARKS
    // =====================================================
    {
        question: "Which of the following materials can exhibit yield-stress behaviour?",
        options: [
            "Toothpaste",
            "Mayonnaise",
            "Ideal Newtonian water",
            "Certain drilling muds"
        ],
        correctAnswers: [0, 1, 3],
        type: "MSQ",
        marks: 2
    },

    // =====================================================
    // Q18 — MCQ — 2 MARKS
    // =====================================================
    {
        question: "When a constant stress is applied to a viscoelastic material, the strain:",
        options: [
            "Remains constant with time",
            "Decreases continuously",
            "Increases with time",
            "Becomes zero"
        ],
        answer: 2,
        type: "MCQ",
        marks: 2
    },

    // =====================================================
    // Q19 — NAT — 2 MARKS
    // =====================================================
    {
        question: "A fluid follows the power-law model: τ = 5(γ̇)^0.8. Calculate the percentage increase in shear stress when the shear rate is doubled from 4 s⁻¹ to 8 s⁻¹.",
        type: "NAT",
        answer: 74.11,
        marks: 2
    },

    // =====================================================
    // Q20 — MCQ — 2 MARKS
    // =====================================================
    {
        question: "The following experimental data are obtained for a fluid:\n\n<table border='1' cellpadding='8' style='border-collapse:collapse;width:100%'><tr><th>Shear Rate (s⁻¹)</th><th>Shear Stress (Pa)</th></tr><tr><td>1</td><td>10</td></tr><tr><td>2</td><td>20</td></tr><tr><td>4</td><td>40</td></tr><tr><td>8</td><td>80</td></tr></table>\n\nThe fluid is most likely:",
        options: [
            "Newtonian",
            "Pseudoplastic",
            "Dilatant",
            "Bingham Plastic"
        ],
        answer: 0,
        type: "MCQ",
        marks: 2
    },

    // =====================================================
    // Q21 — MATCH THE FOLLOWING — 2 MARKS
    // =====================================================
    {
        question: "Match the following.\n\n<table border='1' cellpadding='8' style='border-collapse:collapse;width:100%'><tr><th>Column I – Model</th><th>Column II – Characteristic</th></tr><tr><td>A. Newtonian</td><td>1. Yield stress + power-law behaviour</td></tr><tr><td>B. Pseudoplastic</td><td>2. Constant viscosity</td></tr><tr><td>C. Dilatant</td><td>3. Shear-thinning</td></tr><tr><td>D. Herschel–Bulkley</td><td>4. Shear-thickening</td></tr></table>",
        options: [
            "A-2, B-3, C-4, D-1",
            "A-3, B-2, C-1, D-4",
            "A-4, B-3, C-2, D-1",
            "A-2, B-4, C-3, D-1"
        ],
        answer: 0,
        type: "MCQ",
        marks: 2
    },

    // =====================================================
    // Q22 — MATCH THE FOLLOWING — 2 MARKS
    // =====================================================
    {
        question: "Match the following.\n\n<table border='1' cellpadding='8' style='border-collapse:collapse;width:100%'><tr><th>Column I – Material</th><th>Column II – Behaviour</th></tr><tr><td>A. Water</td><td>1. Bingham-like behaviour</td></tr><tr><td>B. Toothpaste</td><td>2. Newtonian</td></tr><tr><td>C. Cornstarch suspension</td><td>3. Pseudoplastic / yield-stress behaviour</td></tr><tr><td>D. Paint</td><td>4. Dilatant</td></tr></table>",
        options: [
            "A-2, B-1, C-4, D-3",
            "A-1, B-2, C-3, D-4",
            "A-2, B-3, C-1, D-4",
            "A-4, B-1, C-2, D-3"
        ],
        answer: 0,
        type: "MCQ",
        marks: 2
    },

    // =====================================================
    // Q23 — NAT — 2 MARKS
    // =====================================================
    {
        question: "A viscoelastic material initially experiences a stress of 200 Pa. After relaxation, the stress decreases to 50 Pa. Calculate the percentage stress relaxation.",
        type: "NAT",
        answer: 75,
        marks: 2
    },

    // =====================================================
    // Q24 — MSQ — 2 MARKS
    // =====================================================
    {
        question: "Which of the following models predict bounded creep under constant stress?",
        options: [
            "Kelvin–Voigt model",
            "Maxwell model",
            "Pure Hookean spring",
            "Pure Newtonian dashpot"
        ],
        correctAnswers: [0, 2],
        type: "MSQ",
        marks: 2
    }

];
