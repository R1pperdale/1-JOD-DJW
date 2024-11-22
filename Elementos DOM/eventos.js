const caixa1=document.querySelector("#caixa1")
const caixa2=document.querySelector("#caixa2")
const btn=document.querySelector("#btn_copiar")
const btn2=document.querySelector("#btn_retornar")
const btn3=document.querySelector("#btn_limpar")



// ... para usar os loops modernos adicionamos o spread e transformamos em array o HTML colection
const todosCursos=[...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const curso=evt.target
        console.log(curso)
        curso.classList.toggle("selecionado") 
    })
})
//faz a função do botão "copiar"
btn.addEventListener("click",()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })
})
//faz a função do botão "voltar"
btn2.addEventListener("click",()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})
//faz a função do botão "limpar"
btn3.addEventListener("click",()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
    el.classList.remove("selecionado")    
    })
})