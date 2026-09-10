let total = 0;
let passed = 0;

export function check(label, condition) {
    total++;

    if (condition) {
        passed++;
        console.log(`[PASS] ${label}`);
    } else {
        console.log(`[FAIL] ${label}`);
    }
}

export function summary() {
    console.log(`\n--- Resultat : ${passed}/${total} tests passes ---\n`);
    total = 0;
    passed = 0;
}
