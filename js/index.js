console.log('Testing');
document.querySelector('#get').addEventListener('click', run);

async function run(){
    let name = document.querySelector('input').value;
    let res = await fetch(`/api?name=${name}&age=12&gender='male`);
    let data = await res.json();
    console.log(data);
    document.querySelector('#theName').innerText = data.name;
}
