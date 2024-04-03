function openEtude() {
    document.getElementById('professionel').style.display = 'none';
    document.getElementById('etude').style.display = 'block';
    document.getElementById('etude').style.opacity = '100';
    document.getElementById('etude').style.transform = 'unset';
    document.getElementById('Eco-Demo').style.display = 'none';
    document.getElementById('demoMuse').style.display = 'none';

}

function openProfessionel() {
    document.getElementById('etude').style.display = 'none';
    document.getElementById('professionel').style.display = 'block';
    document.getElementById('professionel').style.opacity = '100';
    document.getElementById('professionel').style.transform = 'unset';
    document.getElementById('Eco-Demo').style.display = 'none';
    document.getElementById('demoMuse').style.display = 'none';


}

function openGaudi() {
    document.getElementById('demo-Gaodi').style.display = 'block';
    document.getElementById('demo-leFoll').style.display = 'none';
    document.getElementById('JP-Demo').style.display = 'none';
    document.getElementById('demo-siteDynamique').style.display = 'none';
    document.getElementById('etude').style.opacity = '100';
    document.getElementById('demoMuse').style.display = 'none';
    document.getElementById('etude').style.transform = 'unset';
    document.getElementById('Eco-Demo').style.display = 'none';

}

function openFoll() {
    document.getElementById('demo-Gaodi').style.display = 'none';
    document.getElementById('demo-leFoll').style.display = 'block';
    document.getElementById('JP-Demo').style.display = 'none';
    document.getElementById('demoMuse').style.display = 'none';
    document.getElementById('demo-siteDynamique').style.display = 'none';
    document.getElementById('Eco-Demo').style.display = 'none';

}

function openJP() {
    document.getElementById('demo-Gaodi').style.display = 'none';
    document.getElementById('demo-leFoll').style.display = 'none';
    document.getElementById('JP-Demo').style.display = 'block';
    document.getElementById('demoMuse').style.display = 'none';
    document.getElementById('demo-siteDynamique').style.display = 'none';
    document.getElementById('Eco-Demo').style.display = 'none';

}

function openSiteDyn() {
    document.getElementById('demo-Gaodi').style.display = 'none';
    document.getElementById('demo-leFoll').style.display = 'none';
    document.getElementById('JP-Demo').style.display = 'none';
    document.getElementById('demoMuse').style.display = 'none';
    document.getElementById('demo-siteDynamique').style.display = 'block';
    document.getElementById('Eco-Demo').style.display = 'none';

}

function openEco() {
    document.getElementById('demo-Gaodi').style.display = 'none';
    document.getElementById('demo-leFoll').style.display = 'none';
    document.getElementById('JP-Demo').style.display = 'none';
    document.getElementById('demoMuse').style.display = 'none';
    document.getElementById('demo-siteDynamique').style.display = 'none';
    document.getElementById('Eco-Demo').style.display = 'block';
}
function openMuse() {
    document.getElementById('demo-Gaodi').style.display = 'none';
    document.getElementById('demo-leFoll').style.display = 'none';
    document.getElementById('JP-Demo').style.display = 'none';
    document.getElementById('demo-siteDynamique').style.display = 'none';
    document.getElementById('Eco-Demo').style.display = 'none';
    document.getElementById('demoMuse').style.display = 'block';
}




function openASB() {
    window.open('https://association-boxing-club-brignais.fr/', '_blank');
}
document.getElementById('CLdeco-Demo').style.display = 'none';

function openCLdeco() {
    document.getElementById('CLdeco-Demo').style.display = 'block';
}