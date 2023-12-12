exports.mostrarTrabajos = (req, res) => {
    res.render('home', {
        pageName: 'devJobs',
        tagline: 'Encuentra y oferta trabajos para desarrolladores',
        barra: true,
        boton: true
    })
}