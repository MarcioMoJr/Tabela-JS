function calcular() {
    
    var totalCompra = 0
    for (var i = 1; i <= 3; i++) {
        var quant = document.getElementById (`txtq${i}`)
        var preco = document.getElementById (`txtp${i}`)
        var t = document.getElementById (`total${i}`)

        var q = Number(quant.value)
        var p = Number(preco.value)

        var subtotal = p * q
        t.innerText = subtotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})


        totalCompra += subtotal
    }

    var tc = document.getElementById ('tCompra')
    var mp = document.getElementById ('mProduto')
    var mip = document.getElementById ('mInt')

    tc.innerText = totalCompra.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    var mediaProduto = (totalCompra / 3).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    mp.innerText = `${mediaProduto}`

    var mediaInt = Math.round(totalCompra / 3).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    mip.innerText = `${mediaInt}`
}

function limpar() {
    for (var i = 1; i <= 3; i++) {
        document.getElementById (`txtq${i}`).value = "";
        document.getElementById (`txtp${i}`).value = "";
        document.getElementById (`total${i}`).innerText = "";
        document.getElementById (`txtprod${i}`).value = "";
    }
    document.getElementById ('tCompra').innerText = "";
    document.getElementById ('mProduto').innerText = "";
    document.getElementById ('mInt').innerText = "";
}
