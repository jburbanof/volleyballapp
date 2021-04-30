const select = document.querySelector('#select');
const options = document.querySelector('#options');
const optionSelect = document.querySelector('#select .contenidoSelect');
const hiddenInput = document.querySelector ('#inputSelect');
const court = document.querySelector('.court')
const player = document.querySelector('.player')
const space = document.querySelectorAll('.space')
const players = document.querySelector('.players')




/*Select box config*/
document.querySelectorAll('#options > .option').forEach((option) => {
    option.addEventListener('click', (e) =>{
        e.preventDefault();
        optionSelect.innerHTML = e.currentTarget.innerHTML;
        select.classList.toggle('active');
        options.classList.toggle('active');
        hiddenInput.value = e.currentTarget.querySelector('.title').innerText;
        switch(hiddenInput.value){
            case 'W':
                console.log('W');
                document.getElementById('s1').classList.remove('m');
                document.getElementById('s3').classList.remove('m');
                document.getElementById('s5').classList.remove('m');
                document.getElementById('s7').classList.remove('m');
                document.getElementById('s9').classList.remove('m');
                document.getElementById('s1').classList.add('w');
                document.getElementById('s3').classList.add('w');
                document.getElementById('s5').classList.add('w');
                document.getElementById('s7').classList.add('w');
                document.getElementById('s9').classList.add('w');
                break;

            case 'Media Luna' :
                console.log('media luna');
                document.getElementById('s1').classList.remove('w');
                document.getElementById('s3').classList.remove('w');
                document.getElementById('s5').classList.remove('w');
                document.getElementById('s7').classList.remove('w');
                document.getElementById('s9').classList.remove('w');
                document.getElementById('s1').classList.add('m');
                document.getElementById('s5').classList.add('m');
                document.getElementById('s7').classList.add('m');
                document.getElementById('s9').classList.add('m');
                break;
            case 'Línea':
                console.log('Línea');
                document.getElementById('s1').classList.remove('w');
                document.getElementById('s3').classList.remove('w');
                document.getElementById('s5').classList.remove('w');
                document.getElementById('s7').classList.remove('w');
                document.getElementById('s9').classList.remove('w');
                document.getElementById('s1').classList.remove('m');
                document.getElementById('s3').classList.remove('m');
                document.getElementById('s5').classList.remove('m');
                document.getElementById('s7').classList.remove('m');
                document.getElementById('s9').classList.remove('m');
                break;
            };
        });
});

select.addEventListener('click', () => {
    select.classList.toggle('active');
    options.classList.toggle('active');

});
 


/*Drag and drop */
 
document.querySelectorAll('.players > .bench > .player').forEach((player) => {
    player.addEventListener('dragstart', (e) =>{
        console.log('Drag start');
        e.dataTransfer.setData('id', e.target.id);
        window.numero = e.target.id;
        console.log(numero);
    });
    player.addEventListener('drag', e => {
        console.log('Drag');
    })
    player.addEventListener('dragend', e => {
        console.log('Drag end');
    });
});

court.addEventListener('dragover', e => {
    e.preventDefault();
});
players.addEventListener('dragover', e => {
    e.preventDefault();
});


document.querySelectorAll('.space').forEach((space) => {
    space.addEventListener('drop', (e) => {
        console.log('drop'+ numero);
        space.appendChild(document.getElementById(numero));
    });
});

document.querySelectorAll('.bench').forEach((bench) => {
    bench.addEventListener('drop', (e) => {
        console.log('drop'+ numero);
        bench.appendChild(document.getElementById(numero));
    });
});
