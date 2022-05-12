const controller = {};

const daoLeerCliente = () => {
    return new Promise((resolve, reject) => {
        controller.list = (req, res) => {
            req.getConnection((err, conn) => {
                conn.query('SELECT * FROM cliente', (err, cliente) => {
                    if (err) {
                        res.json(err);
                    }
                    res.render('cliente', {
                        data: cliente
                    });
                });
            });
        }
    });
};

module.exports = controller;