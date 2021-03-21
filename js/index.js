document.querySelector('#get').addEventListener('click', run);

async function run(){
    let name = document.querySelector('input').value;
    let res = await fetch(`/api?student=${name}`);
}
