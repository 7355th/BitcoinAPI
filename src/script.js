// referências do DOM

const h2Valor = document.getElementById('h2Valor');
const btnConsulta = document.getElementById('btnConsulta');
const btcQuant = document.getElementById('Quant');

// Lógica

const api = axios.create({
    baseURL: 'https://www.mercadobitcoin.net/api/BTC/ticker/'
});


async function consultarBTC(){
    const response = await api.get();
    console.log(response.data.ticker.buy);
    lblBTC.innerHTML = (response.data.ticker.buy) * (btcQuant.value);
   // console.log(btcQuant.value);
}

    btnConsultar.onclick = ()=>{
        consultarBTC();
    
    
};