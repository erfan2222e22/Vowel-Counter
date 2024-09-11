let $ = document;

const text = $.querySelector('.text');
const btnCopy = $.querySelector('button');
const Consonants_main = $.querySelector('.Consonants-main');
const vowels_main = $.querySelector('.vowels-main');
const a_number = $.querySelector('.a-number');
const e_number = $.querySelector('.e-number');
const i_number = $.querySelector('.i-number');
const o_number = $.querySelector('.o-number');
const u_number = $.querySelector('.u-number');

function countVowelsAndConsonants() {


    let text_value = text.value
    let splits = text_value.split("")
    let conter = 0
    let vowels = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0, 'A': 0, 'E': 0, 'I': 0, 'O': 0, 'U': 0, }
    let main_vowels = 0

    for (let char of splits) {

        if (vowels.hasOwnProperty(char)) {
            vowels[char] += 1
            main_vowels += 1
        }
        else if (/[a-zA-Z]/.test(char)) {
            conter += 1
        }
    }
    a_number.textContent = vowels['a'] + vowels['A']
    e_number.textContent = vowels['e'] + vowels['E']
    i_number.textContent = vowels['i'] + vowels['I']
    o_number.textContent = vowels['o'] + vowels['O']
    u_number.textContent = vowels['u'] + vowels['U']
    Consonants_main.textContent = conter
    vowels_main.textContent = main_vowels
}

//کپی دکمه
btnCopy.addEventListener('click', function () {

    let input_Copy = text.value;
    navigator.clipboard.writeText(input_Copy)

        .then(() => {

            alert('copyed');

        })
        .catch(err => {
            console.error('erore pls enter the text ');
        })

})

text.addEventListener('keydown', countVowelsAndConsonants)




