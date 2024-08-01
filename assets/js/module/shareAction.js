export default function shareAction(){
    const buttonAction = document.querySelectorAll('[data-share="share"]');

    // const imageBlob = fetch('https://jorgefsdeveloper.bucardcode.com.br/assets/img/Jorge_Nunes-dev.jpeg').then(response => response.blob());
    const data = {
            url: 'https://bucardcode.com.br/',
            text: ' Encontrei seu site na web! ',
            title: 'Bucard Code | Tecnologia com Humanidade',
            imageUrl:'https://bucardcode.com.br/assets/img/icones/shout.png'
            // files: [imageBlob],
            // date: '2024-02-23',
            // type: 'image/jpeg',
    }
    function action(event){
        event.preventDefault();
        if(navigator.canShare && navigator.canShare(data)){
            navigator.share(data)
        }else{
            alert("Não suportado")
        }
    }
    buttonAction.forEach((iten)=>{
        iten.addEventListener('click', action);
    });
}