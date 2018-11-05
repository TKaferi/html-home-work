function changeAbout(id) {
    document.getElementById('about__green').style.display = 'none';
    document.getElementById('about__orange').style.display = 'none';
    document.getElementById(id).style.display = 'flex';
}