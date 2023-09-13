// isian contoh 2
let answerSatu = document.querySelectorAll(".answer-1")
    const cekSatu = document.querySelector("#cek-1")
    let benarSatu = document.querySelector("#benar-1")
    const jawabSatu = [3, 3, 1, 2, 2, 2, 4, 5, 3, 6, 8]

    cekSatu.addEventListener("click", function() {
        for(let i=0; i<jawabSatu.length; i++) {
            if(parseInt(answerSatu[i].value) != jawabSatu[i]) {
                answerSatu[i].style.border = "2px solid red"
            }
            benarSatu.innerHTML = "Jawaban Salah"
            benarSatu.style.color = "red"
        }

        if(parseInt(answerSatu[0].value) === jawabSatu[0] && parseInt(answerSatu[1].value) === jawabSatu[1] && parseInt(answerSatu[2].value) === jawabSatu[2] && parseInt(answerSatu[3].value) === jawabSatu[3] && parseInt(answerSatu[4].value) === jawabSatu[4] && parseInt(answerSatu[5].value) === jawabSatu[5] && parseInt(answerSatu[6].value) === jawabSatu[6] && parseInt(answerSatu[7].value) === jawabSatu[7] && parseInt(answerSatu[8].value) === jawabSatu[8] && parseInt(answerSatu[9].value) === jawabSatu[9] && parseInt(answerSatu[10].value) === jawabSatu[10]) {
            for(let i=0; i<jawabSatu.length; i++) {
                if(parseInt(answerSatu[i].value) === jawabSatu[i]) {
                    answerSatu[i].style.border = "2px solid green"
                }
            }
            benarSatu.innerHTML = "Jawaban Benar"
            benarSatu.style.color = "green"
        }
    })