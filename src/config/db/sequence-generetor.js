const db = require('../../db/database');

module.exports = class SequenceGeneretor {
    constructor() {
        this.sequences = [
            {_id: "task_id" , sequence_value : 0 }
        ];
    }

    generetor() {
        var Sequence = db.model('sequence', {_id: String, sequence_value: Number} );
        this.sequences.forEach(seq => {
            new Sequence(seq).save(function (err) {
                if (err) throw err;
                console.log('Sequencia criada com sucesso!');
          });
        });
    }
}