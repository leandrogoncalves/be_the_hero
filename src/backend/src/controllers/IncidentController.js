const connection = require('../database/connection');

module.exports = {
    async create (req, res){
        const {
            title,
            description,
            value,
        } = req.body;
    
        const ong_id = req.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });
    
        return res.json({
            "id": id
        });
    },

    async list(req, res){
        const { page = 1, perPage = 5 } = req.query;

        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(perPage)
            .offset((page -1) * perPage)
            .select(
                'incidents.*', 
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            );
            
        res.header('X-Total-Count', count['count(*)']);
        return res.json(incidents);
    },

    async delete(req, res){
        const { id } = req.params;
        const ong_id = req.headers.authorization;

        const incident = await connection('incidents')
            .select('*')
            .where('ong_id', ong_id)
            .first();

        if (! incident) {
            return res.status(404).json({
                message: 'not fownd'
            });
        }

        if (incident.ong_id != ong_id) {
            return res.status(401).json({
                message: 'Operation not permited'
            });
        }

        await connection('incidents').where('id',id).delete();
        
        return res.status(204).send();

    }
}